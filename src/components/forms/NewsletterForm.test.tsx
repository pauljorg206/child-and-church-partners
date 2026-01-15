import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterForm from "./NewsletterForm";

describe("NewsletterForm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

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

  it("shows loading state on submit", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm />);

    await user.type(screen.getByPlaceholderText("Your Name"), "John");
    await user.type(
      screen.getByPlaceholderText("Your Email"),
      "john@example.com"
    );
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("shows success message after submission", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm />);

    await user.type(screen.getByPlaceholderText("Your Name"), "John");
    await user.type(
      screen.getByPlaceholderText("Your Email"),
      "john@example.com"
    );
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
    });
  });

  it("clears form inputs after successful submission", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm />);

    await user.type(screen.getByPlaceholderText("Your Name"), "John");
    await user.type(
      screen.getByPlaceholderText("Your Email"),
      "john@example.com"
    );
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
    });
  });

  it("disables button during loading", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm />);

    await user.type(screen.getByPlaceholderText("Your Name"), "John");
    await user.type(
      screen.getByPlaceholderText("Your Email"),
      "john@example.com"
    );
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows different button text for stacked variant during loading", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<NewsletterForm variant="stacked" />);

    await user.type(screen.getByPlaceholderText("Your Name"), "John");
    await user.type(
      screen.getByPlaceholderText("Your Email"),
      "john@example.com"
    );
    await user.click(
      screen.getByRole("button", { name: /subscribe for updates/i })
    );

    expect(screen.getByText("Subscribing...")).toBeInTheDocument();
  });
});
