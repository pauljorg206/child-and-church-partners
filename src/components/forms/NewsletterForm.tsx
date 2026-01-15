"use client";

import { useState } from "react";

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
      <div className="py-4 text-center">
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
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe for Updates"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
