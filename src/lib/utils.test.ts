import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes with true condition", () => {
    const isActive = true;
    expect(cn("base", isActive && "active")).toBe("base active");
  });

  it("handles conditional classes with false condition", () => {
    const isActive = false;
    expect(cn("base", isActive && "active")).toBe("base");
  });

  it("merges Tailwind classes correctly (tailwind-merge)", () => {
    expect(cn("px-4", "px-8")).toBe("px-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles arrays of classes", () => {
    expect(cn(["px-4", "py-2"], "mx-auto")).toBe("px-4 py-2 mx-auto");
  });

  it("handles undefined and null values", () => {
    expect(cn("base", undefined, null, "extra")).toBe("base extra");
  });

  it("handles empty strings", () => {
    expect(cn("base", "", "extra")).toBe("base extra");
  });
});
