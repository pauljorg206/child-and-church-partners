import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQAccordion, { FAQCategory } from "./FAQAccordion";

describe("FAQAccordion", () => {
  it("renders question text", () => {
    render(
      <FAQAccordion question="Test Question?" answer={<p>Test Answer</p>} />
    );

    expect(screen.getByText("Test Question?")).toBeInTheDocument();
  });

  it("hides answer by default", () => {
    render(
      <FAQAccordion question="Test Question?" answer={<p>Test Answer</p>} />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("shows answer when defaultOpen is true", () => {
    render(
      <FAQAccordion
        question="Test Question?"
        answer={<p>Test Answer</p>}
        defaultOpen={true}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles answer visibility on click", async () => {
    const user = userEvent.setup();
    render(
      <FAQAccordion question="Test Question?" answer={<p>Test Answer</p>} />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("renders complex answer content", () => {
    render(
      <FAQAccordion
        question="Complex Question?"
        answer={
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        }
        defaultOpen={true}
      />
    );

    expect(screen.getByText("Paragraph 1")).toBeInTheDocument();
    expect(screen.getByText("Paragraph 2")).toBeInTheDocument();
  });

  it("applies rotation class to icon when open", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <FAQAccordion question="Test?" answer={<p>Answer</p>} />
    );

    const icon = container.querySelector("span.flex-shrink-0");
    expect(icon).not.toHaveClass("rotate-180");

    await user.click(screen.getByRole("button"));
    expect(icon).toHaveClass("rotate-180");
  });
});

describe("FAQCategory", () => {
  it("renders category title", () => {
    render(
      <FAQCategory title="General Questions">
        <FAQAccordion question="Q1?" answer={<p>A1</p>} />
      </FAQCategory>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "General Questions" })
    ).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <FAQCategory title="Category">
        <FAQAccordion question="Question 1?" answer={<p>Answer 1</p>} />
        <FAQAccordion question="Question 2?" answer={<p>Answer 2</p>} />
      </FAQCategory>
    );

    expect(screen.getByText("Question 1?")).toBeInTheDocument();
    expect(screen.getByText("Question 2?")).toBeInTheDocument();
  });
});
