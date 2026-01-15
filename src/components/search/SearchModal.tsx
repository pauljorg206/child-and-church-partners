"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { search, SearchResult } from "@/lib/search";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RECENT_SEARCHES_KEY = "recent-searches";
const MAX_RECENT_SEARCHES = 5;

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Save recent search
  const saveRecentSearch = useCallback(
    (searchQuery: string) => {
      const normalized = searchQuery.trim();
      if (!normalized) return;

      const updated = [
        normalized,
        ...recentSearches.filter((s) => s !== normalized),
      ].slice(0, MAX_RECENT_SEARCHES);

      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    },
    [recentSearches]
  );

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Perform search when query changes
  useEffect(() => {
    const searchResults = search(query);
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query]);

  const navigateTo = useCallback(
    (url: string) => {
      saveRecentSearch(query);
      router.push(url);
      onClose();
    },
    [query, saveRecentSearch, router, onClose]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateTo(results[selectedIndex].url);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, onClose, navigateTo]
  );

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative flex min-h-full items-start justify-center p-4 pt-20 sm:pt-32">
        <div className="relative w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center border-b px-4">
            <svg
              className="h-5 w-5 text-gray-400"
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
            <input
              ref={inputRef}
              type="text"
              placeholder="Search pages, FAQ, and more..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border-0 bg-transparent px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
              aria-label="Search"
              id="search-input"
            />
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 text-gray-400 hover:text-gray-600"
              aria-label="Close search"
            >
              <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 text-xs">
                ESC
              </kbd>
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.length > 1 && results.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                No results found for &quot;{query}&quot;
              </div>
            )}

            {results.length > 0 && (
              <ul role="listbox" aria-label="Search results" className="py-2">
                {results.map((result, index) => (
                  <li key={`${result.url}-${index}`}>
                    <button
                      type="button"
                      onClick={() => navigateTo(result.url)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={cn(
                        "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors",
                        selectedIndex === index
                          ? "bg-primary-blue/10"
                          : "hover:bg-gray-50"
                      )}
                      role="option"
                      aria-selected={selectedIndex === index}
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-medium",
                          result.category === "faq"
                            ? "bg-purple-100 text-purple-700"
                            : result.category === "program"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                        )}
                      >
                        {result.category === "faq"
                          ? "?"
                          : result.category === "program"
                            ? "P"
                            : "pg"}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900">
                          {result.title}
                        </div>
                        <div className="truncate text-sm text-gray-500">
                          {result.description}
                        </div>
                      </div>
                      <svg
                        className={cn(
                          "h-5 w-5 shrink-0 text-gray-400",
                          selectedIndex === index && "text-primary-blue"
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Recent Searches */}
            {query.length < 2 && recentSearches.length > 0 && (
              <div className="py-2">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-xs font-medium uppercase text-gray-500">
                    Recent Searches
                  </span>
                  <button
                    type="button"
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                </div>
                <ul>
                  {recentSearches.map((recentQuery) => (
                    <li key={recentQuery}>
                      <button
                        type="button"
                        onClick={() => setQuery(recentQuery)}
                        className="flex w-full items-center gap-3 px-4 py-2 text-left text-gray-600 hover:bg-gray-50"
                      >
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {recentQuery}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Links when no query */}
            {query.length < 2 && recentSearches.length === 0 && (
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-medium uppercase text-gray-500">
                  Quick Links
                </div>
                <ul>
                  {[
                    { title: "Sponsor a Child", url: "/children" },
                    { title: "Donate", url: "/donate" },
                    { title: "FAQ", url: "/faq" },
                    { title: "Contact Us", url: "/contact" },
                  ].map((link) => (
                    <li key={link.url}>
                      <button
                        type="button"
                        onClick={() => navigateTo(link.url)}
                        className="flex w-full items-center gap-3 px-4 py-2 text-left text-gray-600 hover:bg-gray-50"
                      >
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        {link.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-4 py-2 text-xs text-gray-500">
            <span className="mr-4">
              <kbd className="rounded border border-gray-300 bg-white px-1">
                ↑
              </kbd>{" "}
              <kbd className="rounded border border-gray-300 bg-white px-1">
                ↓
              </kbd>{" "}
              to navigate
            </span>
            <span className="mr-4">
              <kbd className="rounded border border-gray-300 bg-white px-1.5">
                ↵
              </kbd>{" "}
              to select
            </span>
            <span>
              <kbd className="rounded border border-gray-300 bg-white px-1">
                esc
              </kbd>{" "}
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
