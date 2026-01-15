import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-neutral-off-white py-12 sm:py-16">
        <div className="container-site">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="text-gray-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-site py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="mb-4 font-semibold text-gray-900">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-1 text-sm text-gray-600 transition-colors hover:text-primary-blue"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Related Links */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">
                  Related Policies
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/privacy"
                    className="block text-sm text-gray-600 transition-colors hover:text-primary-blue"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="block text-sm text-gray-600 transition-colors hover:text-primary-blue"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="block text-sm text-gray-600 transition-colors hover:text-primary-blue"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-lg prose-headings:scroll-mt-24 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary-blue prose-a:no-underline hover:prose-a:underline max-w-none">
              {children}
            </div>

            {/* Contact Section */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Questions About This Policy?
              </h2>
              <p className="mb-4 text-gray-600">
                If you have any questions or concerns about this policy, please
                don&apos;t hesitate to contact us.
              </p>
              <Link
                href="/contact"
                className="font-medium text-primary-blue transition-colors hover:text-blue-700"
              >
                Contact Us &rarr;
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
