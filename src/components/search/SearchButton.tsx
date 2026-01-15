"use client";

import { cn } from "@/lib/utils";

interface SearchButtonProps {
  onClick: () => void;
  className?: string;
}

export default function SearchButton({
  onClick,
  className,
}: SearchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700",
        className
      )}
      aria-label="Open search"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden rounded border border-gray-300 bg-white px-1.5 py-0.5 text-xs text-gray-400 md:inline">
        <span className="mr-0.5">⌘</span>K
      </kbd>
    </button>
  );
}
