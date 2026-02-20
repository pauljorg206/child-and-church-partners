"use client";

import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

interface DonationOption {
  id: string;
  title: string;
  amount: number | null;
  description: string;
  recurring: boolean;
}

interface DonationFormProps {
  options: DonationOption[];
}

type Frequency = "once" | "monthly";

// Wrapper component that safely uses the PayPal hook
function PayPalButtonsWrapper({
  isValid,
  recurring,
  createOrder,
  onApprove,
  createSubscription,
  onSubscriptionApprove,
  onError,
}: {
  isValid: boolean;
  recurring: boolean;
  createOrder: () => Promise<string>;
  onApprove: (data: { orderID: string }) => Promise<void>;
  createSubscription: (
    data: Record<string, unknown>,
    actions: {
      subscription: {
        create: (options: { plan_id: string }) => Promise<string>;
      };
    }
  ) => Promise<string>;
  onSubscriptionApprove: (data: {
    subscriptionID?: string | null;
  }) => Promise<void>;
  onError: (err: Record<string, unknown>) => void;
}) {
  const [{ isPending, isResolved }] = usePayPalScriptReducer();

  if (isPending) {
    return (
      <div className="flex h-12 items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-primary-blue" />
      </div>
    );
  }

  if (!isResolved) {
    return (
      <div className="rounded-lg bg-yellow-50 p-4 text-center text-sm text-yellow-700">
        PayPal is temporarily unavailable. Please{" "}
        <a href="/contact" className="underline">
          contact us
        </a>{" "}
        for alternative donation methods.
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="rounded-lg bg-gray-100 p-4 text-center text-sm text-gray-500">
        Select a donation option or enter an amount to continue
      </div>
    );
  }

  if (recurring) {
    return (
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "subscribe",
        }}
        createSubscription={createSubscription}
        onApprove={onSubscriptionApprove}
        onError={onError}
      />
    );
  }

  return (
    <PayPalButtons
      style={{
        layout: "vertical",
        color: "blue",
        shape: "rect",
        label: "donate",
      }}
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
    />
  );
}

export default function DonationForm({ options }: DonationFormProps) {
  const router = useRouter();
  const isPayPalConfigured = !!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(
    null
  );
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [error, setError] = useState<string | null>(null);

  const getAmount = (): number => {
    if (customAmount) {
      return parseFloat(customAmount);
    }
    return selectedOption?.amount || 0;
  };

  const isRecurring = (): boolean => {
    if (customAmount) {
      return frequency === "monthly";
    }
    return selectedOption?.recurring || false;
  };

  const getProgramType = (): string => {
    return selectedOption?.id || "general";
  };

  const amount = getAmount();
  const recurring = isRecurring();
  const isValid = amount >= 1;

  const handleOptionSelect = (option: DonationOption) => {
    setSelectedOption(option);
    setCustomAmount("");
    setError(null);
    if (option.recurring) {
      setFrequency("monthly");
    } else {
      setFrequency("once");
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedOption(null);
    setError(null);
  };

  const createOrder = async () => {
    const response = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        programType: getProgramType(),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to create order");
    }
    return data.id;
  };

  const onApprove = async (data: { orderID: string }) => {
    const response = await fetch("/api/paypal/capture-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID: data.orderID }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Failed to capture payment");
    }

    sessionStorage.setItem(
      "donationResult",
      JSON.stringify({ type: "one-time", amount, program: getProgramType() })
    );
    router.push("/donate/thank-you");
  };

  const createSubscription = async (
    _data: Record<string, unknown>,
    actions: {
      subscription: {
        create: (options: { plan_id: string }) => Promise<string>;
      };
    }
  ) => {
    const response = await fetch("/api/paypal/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        programType: getProgramType(),
        amount,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Failed to get subscription plan");
    }

    return actions.subscription.create({
      plan_id: result.planId,
    });
  };

  const onSubscriptionApprove = async (data: {
    subscriptionID?: string | null;
  }) => {
    if (!data.subscriptionID) {
      setError("Subscription was not created. Please try again.");
      return;
    }
    sessionStorage.setItem(
      "donationResult",
      JSON.stringify({ type: "subscription", program: getProgramType() })
    );
    router.push("/donate/thank-you");
  };

  const onError = (err: Record<string, unknown>) => {
    console.error("PayPal error:", err);
    setError("Something went wrong with the payment. Please try again.");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Donation Options */}
      <div className="lg:col-span-3">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Choose Your Impact
        </h2>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleOptionSelect(option)}
              aria-pressed={selectedOption?.id === option.id}
              className={`w-full cursor-pointer rounded-xl border p-4 text-left transition-colors ${
                selectedOption?.id === option.id
                  ? "border-accent-gold bg-yellow-50"
                  : "border-gray-200 hover:border-accent-gold"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {option.description}
                  </p>
                </div>
                <div className="text-right">
                  {option.amount ? (
                    <>
                      <div className="text-xl font-bold text-accent-gold-dark">
                        ${option.amount}
                      </div>
                      {option.recurring && (
                        <div className="text-xs text-gray-500">/month</div>
                      )}
                    </>
                  ) : (
                    <div className="text-sm text-gray-500">Any amount</div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mt-6">
          <label
            htmlFor="custom-amount"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Or enter a custom amount
          </label>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-hidden="true"
              >
                $
              </span>
              <input
                id="custom-amount"
                type="number"
                min="1"
                step="0.01"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="0.00"
                aria-label="Custom donation amount in dollars"
                className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
              />
            </div>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Frequency)}
              disabled={selectedOption?.recurring}
              aria-label="Donation frequency"
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold disabled:bg-gray-100"
            >
              <option value="once">One-time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl bg-neutral-off-white p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            Complete Your Donation
          </h3>

          {/* Summary */}
          {isValid && (
            <div className="mb-4 rounded-lg bg-white p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold">${amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Frequency:</span>
                <span className="font-semibold">
                  {recurring ? "Monthly" : "One-time"}
                </span>
              </div>
              {selectedOption && (
                <div className="mt-2 border-t pt-2 text-sm text-gray-600">
                  {selectedOption.title}
                </div>
              )}
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {/* PayPal Buttons */}
          <div className="space-y-4">
            {isPayPalConfigured ? (
              <PayPalButtonsWrapper
                isValid={isValid}
                recurring={recurring}
                createOrder={createOrder}
                onApprove={onApprove}
                createSubscription={createSubscription}
                onSubscriptionApprove={onSubscriptionApprove}
                onError={onError}
              />
            ) : (
              <div className="rounded-lg bg-yellow-50 p-4 text-center text-sm text-yellow-700">
                Online donations are temporarily unavailable. Please{" "}
                <a href="/contact" className="underline">
                  contact us
                </a>{" "}
                for alternative donation methods.
              </div>
            )}
          </div>

          {/* Security Note */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg
                className="h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secure donation via PayPal
            </div>
          </div>

          {/* CFC Info */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold text-gray-900">
                About Child & Church Partners
              </h4>
              <p className="mb-3 text-sm text-gray-600">
                We help Filipino children, churches, and communities grow in
                faith, lead effectively, and serve faithfully. We are a
                501(c)(3) nonprofit organization. Your donations are
                tax-deductible to the extent allowed by law.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  501(c)(3) nonprofit. All donations are tax-deductible.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
