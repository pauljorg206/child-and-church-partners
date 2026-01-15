import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders title correctly", () => {
    render(<Hero title="Test Hero Title" />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Hero Title"
    );
  });

  it("renders subtitle when provided", () => {
    render(<Hero title="Title" subtitle="Subtitle text here" />);

    expect(screen.getByText("Subtitle text here")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<Hero title="Title" />);

    const subtitle = screen.queryByText(/subtitle/i);
    expect(subtitle).not.toBeInTheDocument();
  });

  it("renders primary CTA link", () => {
    render(
      <Hero
        title="Title"
        primaryCta={{ label: "Donate Now", href: "/donate" }}
      />
    );

    const link = screen.getByRole("link", { name: /donate now/i });
    expect(link).toHaveAttribute("href", "/donate");
  });

  it("renders both CTAs when provided", () => {
    render(
      <Hero
        title="Title"
        primaryCta={{ label: "Primary", href: "/primary" }}
        secondaryCta={{ label: "Secondary", href: "/secondary" }}
      />
    );

    expect(screen.getByRole("link", { name: /primary/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /secondary/i })
    ).toBeInTheDocument();
  });

  it("does not render CTAs when not provided", () => {
    render(<Hero title="Title" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders background image when provided", () => {
    render(<Hero title="Title" backgroundImage="/images/hero.jpg" />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/images/hero.jpg");
  });

  it("applies correct classes for simple variant", () => {
    const { container } = render(<Hero title="Title" variant="simple" />);

    expect(container.querySelector("section")).toHaveClass("py-16");
  });

  it("applies correct classes for default variant", () => {
    const { container } = render(<Hero title="Title" variant="default" />);

    expect(container.querySelector("section")).toHaveClass("py-24");
  });

  it("applies centered layout for centered variant", () => {
    const { container } = render(<Hero title="Title" variant="centered" />);

    expect(container.querySelector(".max-w-4xl")).toHaveClass("text-center");
  });

  it("applies custom overlay opacity", () => {
    const { container } = render(
      <Hero title="Title" backgroundImage="/hero.jpg" overlayOpacity={0.7} />
    );

    const overlay = container.querySelector(".bg-gray-900");
    expect(overlay).toHaveStyle({ opacity: "0.7" });
  });
});
