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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-site py-12 sm:py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-primary-blue transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Related Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                  Related Policies
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/privacy"
                    className="block text-sm text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="block text-sm text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="block text-sm text-gray-600 hover:text-primary-blue transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary-blue prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Questions About This Policy?
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about this policy, please
                don&apos;t hesitate to contact us.
              </p>
              <Link
                href="/contact"
                className="text-primary-blue font-medium hover:text-blue-700 transition-colors"
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
