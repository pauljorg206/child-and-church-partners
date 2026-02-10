import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials not configured");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

async function verifyWebhookSignature(
  request: NextRequest,
  body: string
): Promise<boolean> {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) {
    console.error("PAYPAL_WEBHOOK_ID not configured -- rejecting webhook");
    return false;
  }

  const accessToken = await getAccessToken();

  const verificationPayload = {
    auth_algo: request.headers.get("paypal-auth-algo"),
    cert_url: request.headers.get("paypal-cert-url"),
    transmission_id: request.headers.get("paypal-transmission-id"),
    transmission_sig: request.headers.get("paypal-transmission-sig"),
    transmission_time: request.headers.get("paypal-transmission-time"),
    webhook_id: webhookId,
    webhook_event: JSON.parse(body),
  };

  const response = await fetch(
    `${PAYPAL_API_BASE}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verificationPayload),
    }
  );

  const result = await response.json();
  return result.verification_status === "SUCCESS";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const event = JSON.parse(body);

    // Always verify webhook signature
    const isValid = await verifyWebhookSignature(request, body);
    if (!isValid) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const eventType = event.event_type;
    const resource = event.resource;

    console.log(`PayPal webhook received: ${eventType}`, {
      id: resource?.id,
      status: resource?.status,
    });

    // Handle different event types
    switch (eventType) {
      case "PAYMENT.CAPTURE.COMPLETED":
        // One-time payment completed
        console.log("Payment captured:", {
          captureId: resource.id,
          amount: resource.amount?.value,
          currency: resource.amount?.currency_code,
          customId: resource.custom_id,
        });
        // TODO: Store donation in database, send confirmation email
        break;

      case "BILLING.SUBSCRIPTION.CREATED":
        // New subscription created
        console.log("Subscription created:", {
          subscriptionId: resource.id,
          planId: resource.plan_id,
          status: resource.status,
        });
        // TODO: Store subscription in database
        break;

      case "BILLING.SUBSCRIPTION.ACTIVATED":
        // Subscription is now active
        console.log("Subscription activated:", {
          subscriptionId: resource.id,
          status: resource.status,
        });
        // TODO: Update subscription status, send welcome email
        break;

      case "BILLING.SUBSCRIPTION.CANCELLED":
        // Subscription cancelled
        console.log("Subscription cancelled:", {
          subscriptionId: resource.id,
          status: resource.status,
        });
        // TODO: Update subscription status in database
        break;

      case "PAYMENT.SALE.COMPLETED":
        // Recurring payment completed
        console.log("Recurring payment received:", {
          saleId: resource.id,
          amount: resource.amount?.total,
          billingAgreementId: resource.billing_agreement_id,
        });
        // TODO: Log payment, send receipt
        break;

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
