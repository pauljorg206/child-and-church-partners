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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-gold mb-2">
        {number}
      </div>
      <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {label}
      </div>
      {description && (
        <p className="text-gray-600 text-sm sm:text-base max-w-xs mx-auto">
          {description}
        </p>
      )}
      {link && (
        <Link
          href={link.href}
          className="inline-block mt-4 text-primary-blue hover:text-blue-700 font-medium transition-colors"
        >
          {link.label} &rarr;
        </Link>
      )}
    </div>
  );
}
