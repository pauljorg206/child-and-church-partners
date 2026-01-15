import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-accent-gold opacity-20">
            404
          </div>
          <div className="relative -mt-16">
            <svg
              className="w-32 h-32 mx-auto text-primary-blue"
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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been moved or doesn&apos;t exist.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/about"
              className="text-primary-blue hover:text-blue-700 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/children"
              className="text-primary-blue hover:text-blue-700 font-medium"
            >
              Why Children
            </Link>
            <Link
              href="/churches"
              className="text-primary-blue hover:text-blue-700 font-medium"
            >
              Why Churches
            </Link>
            <Link
              href="/donate"
              className="text-primary-blue hover:text-blue-700 font-medium"
            >
              Donate
            </Link>
            <Link
              href="/faq"
              className="text-primary-blue hover:text-blue-700 font-medium"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
