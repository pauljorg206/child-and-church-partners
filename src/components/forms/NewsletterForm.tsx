"use client";

import { useState, useId } from "react";

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
  const formId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
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
    </form>
  );
}
