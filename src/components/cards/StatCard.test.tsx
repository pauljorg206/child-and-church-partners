import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatCard from "./StatCard";

describe("StatCard", () => {
  it("renders the statistic number and label", () => {
    render(<StatCard number="10,000" label="Children Helped" />);

    expect(screen.getByText("10,000")).toBeInTheDocument();
    expect(screen.getByText("Children Helped")).toBeInTheDocument();
  });

  it("renders without description when not provided", () => {
    render(<StatCard number="50" label="Partners" />);

    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("Partners")).toBeInTheDocument();
  });

  it("renders optional description when provided", () => {
    render(
      <StatCard
        number="250+"
        label="Weekly Meals"
        description="Nutritious meals every week"
      />
    );

    expect(screen.getByText("Nutritious meals every week")).toBeInTheDocument();
  });

  it("renders link when provided", () => {
    render(
      <StatCard
        number="100"
        label="Churches"
        link={{ label: "Learn More", href: "/churches" }}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/churches");
    expect(link).toHaveTextContent("Learn More");
  });

  it("does not render link when not provided", () => {
    render(<StatCard number="50" label="Partners" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("applies animation classes when visible", () => {
    const { container } = render(<StatCard number="50" label="Partners" />);

    expect(container.firstChild).toHaveClass("opacity-100", "translate-y-0");
  });
});
