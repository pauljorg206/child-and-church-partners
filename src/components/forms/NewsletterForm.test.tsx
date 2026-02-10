import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm", () => {
  it("renders inline form by default", () => {
    render(<NewsletterForm />);

    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe/i })
    ).toBeInTheDocument();
  });

  it("renders stacked form when variant is stacked", () => {
    render(<NewsletterForm variant="stacked" />);

    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe for updates/i })
    ).toBeInTheDocument();
  });

  it("allows user to type in form fields", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("Your Email");

    await user.type(nameInput, "John");
    await user.type(emailInput, "john@example.com");

    expect(nameInput).toHaveValue("John");
    expect(emailInput).toHaveValue("john@example.com");
  });

  it("shows success message after form submission", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm />);

    // Advance past the 3s spam protection window
    vi.advanceTimersByTime(3100);

    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("Your Email");
    const button = screen.getByRole("button", { name: /subscribe/i });

    await user.type(nameInput, "John");
    await user.type(emailInput, "john@example.com");
    await user.click(button);

    // Advance past the simulated 1s network delay
    vi.advanceTimersByTime(1100);

    await waitFor(() => {
      expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
    });

    vi.useRealTimers();
  });

  it("renders correct button text for stacked variant", () => {
    render(<NewsletterForm variant="stacked" />);

    expect(
      screen.getByRole("button", { name: /subscribe for updates/i })
    ).toBeInTheDocument();
  });

  it("requires name and email fields", () => {
    render(<NewsletterForm />);

    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("Your Email");

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
  });
});
