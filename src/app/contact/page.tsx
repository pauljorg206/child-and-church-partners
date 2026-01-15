"use client";

import Hero from "@/components/sections/Hero";
import { useState } from "react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with form backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
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
                <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
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
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
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
                    Austin, Texas, USA
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-off-white p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:info@childandchurchpartners.org"
                    className="text-primary-blue transition-colors hover:text-blue-700"
                  >
                    info@childandchurchpartners.org
                  </a>
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
