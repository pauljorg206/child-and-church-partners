import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-accent-gold opacity-20">
            404
          </div>
          <div className="relative -mt-16">
            <svg
              className="mx-auto h-32 w-32 text-primary-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or doesn&apos;t exist.
        </p>

        {/* Quick Links */}
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="mb-4 text-sm text-gray-500">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/about"
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              About Us
            </Link>
            <Link
              href="/children"
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              Why Children
            </Link>
            <Link
              href="/churches"
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              Why Churches
            </Link>
            <Link
              href="/donate"
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              Donate
            </Link>
            <Link
              href="/faq"
              className="font-medium text-primary-blue hover:text-blue-700"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
