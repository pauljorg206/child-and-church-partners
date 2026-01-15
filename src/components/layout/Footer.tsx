import Link from "next/link";
import Image from "next/image";

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
    <footer className="bg-gray-900 text-white">
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
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              Overcome Barriers. Lead Change.
            </p>
            <p className="text-sm text-gray-400">
              U.S.-based Christian nonprofit helping children and churches in
              the Philippines fulfill their fullest potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Get Involved</h3>
            <ul className="space-y-2">
              {getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="mb-4 text-sm text-gray-400">
              <a
                href="mailto:info@childandchurchpartners.org"
                className="transition-colors hover:text-white"
              >
                info@childandchurchpartners.org
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Child & Church Partners International is a 501(c)(3) nonprofit
              organization.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Child & Church Partners
            International. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
