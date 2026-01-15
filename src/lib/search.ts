import { searchData, SearchItem } from "./search-data";

export interface SearchResult extends SearchItem {
  score: number;
  matches: {
    field: string;
    indices: [number, number][];
  }[];
}

function normalizeString(str: string): string {
  return str.toLowerCase().trim();
}

function getMatchIndices(text: string, query: string): [number, number][] {
  const indices: [number, number][] = [];
  const normalizedText = normalizeString(text);
  const normalizedQuery = normalizeString(query);

  let startIndex = 0;
  while (true) {
    const index = normalizedText.indexOf(normalizedQuery, startIndex);
    if (index === -1) break;
    indices.push([index, index + normalizedQuery.length]);
    startIndex = index + 1;
  }

  return indices;
}

function scoreMatch(item: SearchItem, query: string): SearchResult | null {
  const normalizedQuery = normalizeString(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  if (queryWords.length === 0) return null;

  let totalScore = 0;
  const matches: SearchResult["matches"] = [];

  // Title matching (highest weight)
  const titleMatches = getMatchIndices(item.title, query);
  if (titleMatches.length > 0) {
    totalScore += 100;
    matches.push({ field: "title", indices: titleMatches });
  }

  // Check for word matches in title
  for (const word of queryWords) {
    if (normalizeString(item.title).includes(word)) {
      totalScore += 50;
    }
  }

  // Description matching (medium weight)
  const descMatches = getMatchIndices(item.description, query);
  if (descMatches.length > 0) {
    totalScore += 30;
    matches.push({ field: "description", indices: descMatches });
  }

  // Check for word matches in description
  for (const word of queryWords) {
    if (normalizeString(item.description).includes(word)) {
      totalScore += 10;
    }
  }

  // Keyword matching (medium-high weight)
  if (item.keywords) {
    for (const keyword of item.keywords) {
      if (normalizedQuery.includes(normalizeString(keyword))) {
        totalScore += 40;
      }
      for (const word of queryWords) {
        if (normalizeString(keyword).includes(word)) {
          totalScore += 20;
        }
      }
    }
  }

  // Category boost for FAQ items when query contains question words
  const questionWords = [
    "how",
    "what",
    "why",
    "when",
    "where",
    "can",
    "do",
    "is",
  ];
  if (
    item.category === "faq" &&
    questionWords.some((w) => normalizedQuery.includes(w))
  ) {
    totalScore += 15;
  }

  if (totalScore === 0) return null;

  return {
    ...item,
    score: totalScore,
    matches,
  };
}

export function search(query: string, limit: number = 10): SearchResult[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const item of searchData) {
    const result = scoreMatch(item, query);
    if (result) {
      results.push(result);
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  // Return top results
  return results.slice(0, limit);
}

export function highlightText(text: string, query: string): string {
  if (!query) return text;

  const regex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  );
  return text.replace(regex, "<mark>$1</mark>");
}
