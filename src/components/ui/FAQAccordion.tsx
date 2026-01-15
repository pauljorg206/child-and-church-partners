"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

export default function FAQAccordion({
  question,
  answer,
  defaultOpen = false,
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 w-6 h-6 text-accent-gold transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <div className="text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

// Category wrapper component
interface FAQCategoryProps {
  title: string;
  children: React.ReactNode;
}

export function FAQCategory({ title, children }: FAQCategoryProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
