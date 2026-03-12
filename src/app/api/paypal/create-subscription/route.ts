import { NextRequest, NextResponse } from "next/server";

// Map program types to PayPal Plan IDs
function getPlanId(programType: string): string | null {
  if (programType === "child") return process.env.PAYPAL_PLAN_ID_CHILD || null;
  if (programType === "student")
    return process.env.PAYPAL_PLAN_ID_STUDENT || null;
  if (programType === "church")
    return process.env.PAYPAL_PLAN_ID_CHURCH || null;
  return process.env.PAYPAL_PLAN_ID_GENERAL || null;
}

export async function POST(request: NextRequest) {
  try {
    const { programType, amount } = await request.json();

    if (!programType) {
      return NextResponse.json(
        { error: "Program type is required" },
        { status: 400 }
      );
    }

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const planId = getPlanId(programType);

    if (!planId) {
      return NextResponse.json(
        {
          error:
            "Subscription plan not configured. Please contact support or use one-time donation.",
        },
        { status: 400 }
      );
    }

    console.log("Subscription initiated:", {
      programType,
      amount,
      planId,
    });

    return NextResponse.json({ planId });
  } catch (error) {
    console.error("Create subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
