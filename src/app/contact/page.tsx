"use client";

import Hero from "@/components/sections/Hero";
import { useState, useEffect, useId } from "react";

function generateMathQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mathQuestion, setMathQuestion] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const formId = useId();

  useEffect(() => {
    setMathQuestion(generateMathQuestion());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError("");
    setErrorMessage("");

    // Validate CAPTCHA
    if (parseInt(captchaAnswer, 10) !== mathQuestion.answer) {
      setCaptchaError("Incorrect answer. Please try again.");
      setMathQuestion(generateMathQuestion());
      setCaptchaAnswer("");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.message,
          from_name: "Child & Church Partners Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaAnswer("");
        setMathQuestion(generateMathQuestion());
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        variant="simple"
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>

              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-green-200 bg-green-50 p-6 text-center"
                >
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="mb-2 text-lg font-semibold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-green-700 underline hover:text-green-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {status === "error" && (
                    <div
                      role="alert"
                      className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center"
                    >
                      <p className="text-red-600">{errorMessage}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor={`${formId}-name`}
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Your Name *
                      </label>
                      <input
                        id={`${formId}-name`}
                        type="text"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-email`}
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-subject`}
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        id={`${formId}-subject`}
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-message`}
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <textarea
                        id={`${formId}-message`}
                        required
                        aria-required="true"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                        placeholder="Your message..."
                      />
                    </div>

                    {/* Math CAPTCHA */}
                    <div>
                      <label
                        htmlFor={`${formId}-captcha`}
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Security Check: What is {mathQuestion.num1} +{" "}
                        {mathQuestion.num2}? *
                      </label>
                      <input
                        id={`${formId}-captcha`}
                        type="number"
                        required
                        aria-required="true"
                        aria-describedby={
                          captchaError ? `${formId}-captcha-error` : undefined
                        }
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold ${
                          captchaError ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your answer"
                      />
                      {captchaError && (
                        <p
                          id={`${formId}-captcha-error`}
                          role="alert"
                          className="mt-1 text-sm text-red-600"
                        >
                          {captchaError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full disabled:opacity-50"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="rounded-xl bg-neutral-off-white p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Our Location
                  </h3>
                  <p className="text-gray-600">
                    Child & Church Partners International
                    <br />
                    Cedar Park, Texas, USA
                  </p>
                </div>

                <div className="rounded-xl bg-primary-blue p-6 text-white">
                  <h3 className="mb-2 font-semibold">Want to Partner?</h3>
                  <p className="mb-4 text-sm text-gray-200">
                    If you&apos;re interested in partnering with us or learning
                    more about our ministry, we&apos;d love to connect!
                  </p>
                  <a
                    href="/donate"
                    className="inline-block rounded-lg bg-accent-gold px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-accent-gold-light"
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
