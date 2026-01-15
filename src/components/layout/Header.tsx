"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
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
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Handle keyboard navigation for dropdowns
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, itemName: string, hasChildren: boolean) => {
      if (!hasChildren) return;

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          setOpenDropdown(openDropdown === itemName ? null : itemName);
          break;
        case "Escape":
          e.preventDefault();
          setOpenDropdown(null);
          break;
        case "ArrowDown":
          if (openDropdown === itemName) {
            e.preventDefault();
            const dropdown = dropdownRefs.current.get(itemName);
            const firstLink = dropdown?.querySelector("a");
            firstLink?.focus();
          }
          break;
      }
    },
    [openDropdown]
  );

  // Handle keyboard navigation within dropdown
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent, itemName: string) => {
      const dropdown = dropdownRefs.current.get(itemName);
      if (!dropdown) return;

      const links = Array.from(dropdown.querySelectorAll("a"));
      const currentIndex = links.findIndex(
        (link) => link === document.activeElement
      );

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setOpenDropdown(null);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (currentIndex < links.length - 1) {
            links[currentIndex + 1].focus();
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (currentIndex > 0) {
            links[currentIndex - 1].focus();
          }
          break;
      }
    },
    []
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown) {
        const dropdown = dropdownRefs.current.get(openDropdown);
        if (dropdown && !dropdown.contains(e.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="focus:ring-primary-gold sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary-blue focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container-site" aria-label="Main navigation">
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
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                  ref={(el) => {
                    if (el && item.children) {
                      dropdownRefs.current.set(item.name, el);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-medium text-gray-700 transition-colors hover:text-primary-blue"
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openDropdown === item.name : undefined
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, item.name, !!item.children)
                    }
                  >
                    {item.name}
                    {item.children && (
                      <svg
                        className={cn(
                          "ml-1 inline-block h-4 w-4 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
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
                    <div
                      className="absolute left-0 top-full pt-2"
                      role="menu"
                      aria-label={`${item.name} submenu`}
                      onKeyDown={(e) => handleDropdownKeyDown(e, item.name)}
                    >
                      <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-blue focus:bg-gray-50 focus:outline-none"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
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
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                    aria-hidden="true"
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
            id="mobile-menu"
            className={cn(
              "overflow-hidden transition-all duration-300 lg:hidden",
              mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            )}
            aria-hidden={!mobileMenuOpen}
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
    </>
  );
}
