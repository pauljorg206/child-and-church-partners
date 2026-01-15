"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-12 w-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Something Went Wrong
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact us if the problem persists.
        </p>

        {/* Actions */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button onClick={() => reset()} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Go to Homepage
          </Link>
        </div>

        {/* Support Link */}
        <p className="text-sm text-gray-500">
          Need help?{" "}
          <Link
            href="/contact"
            className="font-medium text-primary-blue hover:text-blue-700"
          >
            Contact our support team
          </Link>
        </p>

        {/* Error ID for debugging */}
        {error.digest && (
          <p className="mt-4 text-xs text-gray-400">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
