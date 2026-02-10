import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/forms/NewsletterForm";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Why Children", href: "/children" },
  { name: "Why Churches", href: "/churches" },
  { name: "Photo Gallery", href: "/gallery" },
];

const getInvolved = [
  { name: "Donate", href: "/donate" },
  { name: "Sponsor a Child", href: "/donate" },
  { name: "Sponsor a Church", href: "/donate" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Tagline */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/Child & Church Partners LOGO TRANSPARENT.png"
                alt="Child & Church Partners"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-4 text-sm text-gray-300">
              Overcome Barriers. Lead Change.
            </p>
            <p className="text-sm text-gray-300">
              We walk alongside Filipino children in poverty and small churches
              serving struggling communities in the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-label="Get involved">
            <h3 className="mb-4 text-lg font-semibold">Get Involved</h3>
            <ul className="space-y-2">
              {getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="mb-4 text-sm text-gray-300">
              <a
                href="mailto:info@childandchurchpartners.org"
                className="transition-colors hover:text-white"
              >
                info@childandchurchpartners.org
              </a>
            </p>
            <p className="mb-4 text-sm text-gray-300">
              We are a 501(c)(3) nonprofit organization. Your donations are
              tax-deductible to the extent allowed by law.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ilovechildandchurchpartners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-2 text-lg font-semibold">Stay Connected</h3>
            <p className="mb-4 text-sm text-gray-300">
              Get Stories From the Field and Updates on Lives Changed
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Child & Church Partners
              International. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made by{" "}
              <a
                href="https://www.naloseed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Nalo Seed
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
