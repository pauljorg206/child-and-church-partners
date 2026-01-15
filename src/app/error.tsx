"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [hasRetried, setHasRetried] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  const handleRetry = () => {
    setHasRetried(true);
    reset();
  };

  const startAutoRetry = () => {
    setCountdown(5);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setHasRetried(true);
      reset();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, reset]);

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
              aria-hidden="true"
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
        <p className="mb-6 text-lg text-gray-600">
          We apologize for the inconvenience. An unexpected error has occurred.
          {hasRetried &&
            " The error persists - please try again later or contact support."}
        </p>

        {/* Suggestions */}
        <div className="mb-8 rounded-lg bg-gray-50 p-4 text-left">
          <p className="mb-2 font-medium text-gray-700">Things you can try:</p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Refresh the page or try again
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Check your internet connection
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Clear your browser cache
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          {countdown !== null ? (
            <button
              className="btn-primary opacity-75"
              disabled
              aria-live="polite"
            >
              Retrying in {countdown}s...
            </button>
          ) : (
            <button onClick={handleRetry} className="btn-primary">
              Try Again
            </button>
          )}
          {countdown === null && !hasRetried && (
            <button onClick={startAutoRetry} className="btn-outline">
              Auto-retry in 5s
            </button>
          )}
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
