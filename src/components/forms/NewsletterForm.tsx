"use client";

import { useState, useId, useEffect, useCallback } from "react";
import { generateCaptcha, type CaptchaProblem } from "@/lib/captcha";

interface NewsletterFormProps {
  variant?: "inline" | "stacked";
}

export default function NewsletterForm({
  variant = "inline",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formId = useId();

  // Spam prevention
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime] = useState(() => Date.now());
  const [captcha, setCaptcha] = useState<CaptchaProblem | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Honeypot check - bots fill hidden fields
    if (honeypot) {
      setStatus("success");
      return;
    }

    // Timing check - bots submit too fast
    if (Date.now() - formLoadTime < 3000) {
      setErrorMessage("Please wait a moment before submitting.");
      return;
    }

    // Captcha validation (only for stacked variant)
    if (
      variant === "stacked" &&
      (!captcha || parseInt(captchaAnswer, 10) !== captcha.answer)
    ) {
      setErrorMessage("Incorrect answer. Please try again.");
      refreshCaptcha();
      return;
    }

    setStatus("loading");

    // TODO: Integrate with Mailchimp or form backend
    // For now, simulate success
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
    setName("");
  };

  if (status === "success") {
    return (
      <div className="py-4 text-center" role="status" aria-live="polite">
        <div className="mb-2 font-semibold text-green-600">
          Thanks for subscribing!
        </div>
        <p className="text-sm text-gray-600">
          You&apos;ll receive updates on the lives you&apos;re changing.
        </p>
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Honeypot field - hidden from users, bots fill it */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-name`} className="sr-only">
            Your Name
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="sr-only">
            Your Email
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
          />
        </div>

        {/* Math Captcha */}
        {captcha && (
          <div className="flex items-center gap-3">
            <label
              htmlFor={`${formId}-captcha`}
              className="whitespace-nowrap text-sm font-medium text-gray-700"
            >
              {captcha.question}
            </label>
            <input
              type="number"
              id={`${formId}-captcha`}
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
              placeholder="?"
              className="h-10 w-20 rounded-lg border border-gray-300 text-center outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
            />
            <button
              type="button"
              onClick={refreshCaptcha}
              className="p-2 text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Get a new math question"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        )}

        {errorMessage && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full disabled:opacity-50"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe for Updates"}
        </button>
      </form>
    );
  }

  // Inline variant - honeypot + timing only (no captcha UI due to space constraints)
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      {/* Honeypot field - hidden from users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex-1">
        <label htmlFor={`${formId}-name-inline`} className="sr-only">
          Your Name
        </label>
        <input
          id={`${formId}-name-inline`}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
        />
      </div>
      <div className="flex-1">
        <label htmlFor={`${formId}-email-inline`} className="sr-only">
          Your Email
        </label>
        <input
          id={`${formId}-email-inline`}
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {errorMessage && (
        <p role="alert" className="w-full text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
