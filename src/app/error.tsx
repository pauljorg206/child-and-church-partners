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
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-600"
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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact us if the problem persists.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            className="text-primary-blue hover:text-blue-700 font-medium"
          >
            Contact our support team
          </Link>
        </p>

        {/* Error ID for debugging */}
        {error.digest && (
          <p className="mt-4 text-xs text-gray-400">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
