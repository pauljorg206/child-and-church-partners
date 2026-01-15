"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  link?: {
    label: string;
    href: string;
  };
}

export default function StatCard({
  number,
  label,
  description,
  link,
}: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`text-center transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-2 text-4xl font-bold text-accent-gold sm:text-5xl lg:text-6xl">
        {number}
      </div>
      <div className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
        {label}
      </div>
      {description && (
        <p className="mx-auto max-w-xs text-sm text-gray-600 sm:text-base">
          {description}
        </p>
      )}
      {link && (
        <Link
          href={link.href}
          className="mt-4 inline-block font-medium text-primary-blue transition-colors hover:text-blue-700"
        >
          {link.label} &rarr;
        </Link>
      )}
    </div>
  );
}
