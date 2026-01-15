import { NextRequest, NextResponse } from "next/server";

// Map program types to PayPal Plan IDs
// These must be created in PayPal Dashboard first
function getPlanId(programType: string, amount: number): string | null {
  // Check for predefined plans
  if (programType === "child" && amount === 35) {
    return process.env.PAYPAL_PLAN_ID_CHILD || null;
  }
  if (programType === "church" && amount === 50) {
    return process.env.PAYPAL_PLAN_ID_CHURCH || null;
  }
  // For custom recurring amounts, you would need to create plans dynamically
  // or have a general plan configured
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

    const planId = getPlanId(programType, amount);

    if (!planId) {
      return NextResponse.json(
        {
          error:
            "Subscription plan not configured. Please contact support or use one-time donation.",
        },
        { status: 400 }
      );
    }

    // Log subscription attempt
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
