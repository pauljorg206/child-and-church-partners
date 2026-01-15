import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You for Your Donation",
  description:
    "Thank you for supporting children and churches in the Philippines.",
};

interface ThankYouPageProps {
  searchParams: Promise<{
    type?: string;
    amount?: string;
    program?: string;
    subscriptionId?: string;
  }>;
}

const programLabels: Record<string, string> = {
  child: "Child Sponsorship",
  church: "Church Sponsorship",
  backpack: "Back-to-School Backpack",
  feeding: "Feeding Program",
  equip: "Give to Equip",
  general: "Where Most Needed",
};

export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const params = await searchParams;
  const isSubscription = params.type === "subscription";
  const amount = params.amount;
  const program = params.program || "general";
  const programLabel = programLabels[program] || "Donation";

  return (
    <div className="min-h-screen bg-neutral-off-white">
      <div className="container-site section-padding">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Thank You for Your Generosity!
          </h1>

          <p className="mb-8 text-xl text-gray-600">
            {isSubscription
              ? "Your monthly support will make a lasting impact on lives in the Philippines."
              : "Your donation is making a real difference in the lives of children and communities in the Philippines."}
          </p>

          {/* Donation Details */}
          <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Donation Summary
            </h2>
            <div className="space-y-2 text-left">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Program:</span>
                <span className="font-medium">{programLabel}</span>
              </div>
              {amount && (
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium">
                    ${parseFloat(amount).toFixed(2)}
                    {isSubscription && "/month"}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">
                  {isSubscription ? "Monthly Recurring" : "One-time"}
                </span>
              </div>
            </div>
          </div>

          {/* Tax Information */}
          <div className="mb-8 rounded-lg bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-left text-sm text-gray-700">
                <p className="font-medium">Tax-Deductible Donation</p>
                <p className="mt-1">
                  Child & Church Partners International is a 501(c)(3) nonprofit
                  organization. A receipt for your tax-deductible donation will
                  be sent to your email.
                </p>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-8 text-left">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              What Happens Next?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold text-sm font-medium text-white">
                  1
                </span>
                <span>
                  You&apos;ll receive a confirmation email with your donation
                  receipt.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold text-sm font-medium text-white">
                  2
                </span>
                <span>
                  {isSubscription
                    ? "Your sponsorship will be matched with a child or church in need."
                    : "Your donation will be directed to the program you selected."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold text-sm font-medium text-white">
                  3
                </span>
                <span>
                  We&apos;ll keep you updated on the impact of your generosity.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link href="/donate" className="btn btn-outline">
              Make Another Donation
            </Link>
          </div>

          {/* Share */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="mb-4 text-sm text-gray-600">
              Spread the word and inspire others to give:
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://childandchurchpartners.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=I%20just%20donated%20to%20Child%20%26%20Church%20Partners%20to%20help%20children%20and%20churches%20in%20the%20Philippines.%20Join%20me!&url=https://childandchurchpartners.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:?subject=Support%20Children%20and%20Churches%20in%20the%20Philippines&body=I%20just%20donated%20to%20Child%20%26%20Church%20Partners.%20Check%20them%20out%3A%20https%3A%2F%2Fchildandchurchpartners.org%2Fdonate"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
