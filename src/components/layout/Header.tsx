"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about" },
      { name: "Our Founders", href: "/about/founders" },
      { name: "Our Inspiration", href: "/about/inspiration" },
    ],
  },
  {
    name: "Our Work",
    href: "/children",
    children: [
      { name: "Why Children", href: "/children" },
      { name: "Why Churches", href: "/churches" },
      { name: "Where We Work", href: "/where-we-work" },
    ],
  },
  {
    name: "Get Involved",
    href: "/give",
    children: [
      { name: "Make a Difference", href: "/give" },
      { name: "Give to Equip", href: "/give/equip" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-site">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Child & Church Partners LOGO TRANSPARENT.png"
              alt="Child & Church Partners"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className="hidden text-lg font-bold text-primary-blue sm:block">
              Child & Church Partners
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 transition-colors hover:text-primary-blue"
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="ml-1 inline-block h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-blue"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              className="btn-primary px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
            >
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 text-gray-700 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="space-y-2 pt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="space-y-1 pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
