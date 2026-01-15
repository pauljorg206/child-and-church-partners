import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Transparency",
  description:
    "Child & Church Partners International is committed to financial transparency and accountability. Learn how we steward your donations.",
};

const fundAllocation = [
  {
    category: "Program Services",
    percentage: 85,
    description:
      "Direct support to children and churches, including sponsorship programs, feeding outreach, educational support, and pastor training.",
    color: "bg-primary-blue",
  },
  {
    category: "Administrative",
    percentage: 10,
    description:
      "Essential operations including accounting, compliance, donor management, and organizational infrastructure.",
    color: "bg-accent-gold",
  },
  {
    category: "Fundraising",
    percentage: 5,
    description:
      "Communications, outreach, and donor engagement to sustain and grow our mission impact.",
    color: "bg-primary-red",
  },
];

const accountabilityPractices = [
  {
    title: "501(c)(3) Status",
    description:
      "We are a registered 501(c)(3) nonprofit organization with the IRS. All donations are tax-deductible to the extent allowed by law.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Annual Reporting",
    description:
      "We file Form 990 annually with the IRS, which is publicly available. This provides detailed information about our finances and operations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "Board Oversight",
    description:
      "Our board of directors provides governance and oversight, ensuring financial decisions align with our mission and donor expectations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "Direct Relationships",
    description:
      "Our founders personally know many partner pastors and visit the Philippines regularly, providing direct oversight of how funds are used.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
];

const donorCommitments = [
  "We will use your donation for the purpose you designate",
  "We will provide receipts for all tax-deductible contributions",
  "We will communicate honestly about our work and impact",
  "We will answer your questions about how funds are used",
  "We will never sell or share your personal information",
  "We will honor your wishes regarding communication preferences",
];

export default function FinancialTransparencyPage() {
  return (
    <>
      <Hero
        title="Financial Transparency"
        subtitle="We believe you deserve to know exactly how your donations are used."
        variant="simple"
      />

      {/* Our Commitment */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Commitment to You
              </h2>
              <p className="text-lg text-gray-600">
                When you give to Child & Church Partners, you&apos;re trusting
                us to be faithful stewards of your generosity. We take that
                responsibility seriously. Transparency isn&apos;t just a
                policy—it&apos;s a core value that reflects our commitment to
                integrity and accountability.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-neutral-off-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue/10">
                  <svg
                    className="h-8 w-8 text-primary-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">
                  501(c)(3) Registered
                </h3>
                <p className="text-sm text-gray-600">
                  Officially recognized nonprofit status with the IRS
                </p>
              </div>

              <div className="rounded-2xl bg-neutral-off-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/10">
                  <svg
                    className="h-8 w-8 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Since 2017</h3>
                <p className="text-sm text-gray-600">
                  Years of faithful service and proven track record
                </p>
              </div>

              <div className="rounded-2xl bg-neutral-off-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-red/10">
                  <svg
                    className="h-8 w-8 text-primary-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">Donor Focused</h3>
                <p className="text-sm text-gray-600">
                  Your gifts go directly to those who need it most
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                How Your Donations Are Used
              </h2>
              <p className="text-lg text-gray-600">
                We work hard to ensure the maximum amount of every dollar goes
                directly to serving children and churches.
              </p>
            </div>

            {/* Visual Bar */}
            <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-8 overflow-hidden rounded-full">
                {fundAllocation.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} flex items-center justify-center text-sm font-medium text-white`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    {item.percentage}%
                  </div>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {fundAllocation.map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-center gap-2">
                      <div className={`h-4 w-4 rounded ${item.color}`} />
                      <span className="font-bold text-gray-900">
                        {item.category}
                      </span>
                      <span className="text-gray-500">
                        ({item.percentage}%)
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm text-gray-500">
              * Allocation percentages are targets based on our operational
              goals. Actual percentages may vary slightly year to year.
            </p>
          </div>
        </div>
      </section>

      {/* Accountability Practices */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Accountability Practices
              </h2>
              <p className="text-lg text-gray-600">
                Multiple layers of oversight ensure your donations are used
                responsibly.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {accountabilityPractices.map((practice, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-neutral-off-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue/10">
                      <svg
                        className="h-6 w-6 text-primary-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {practice.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-gray-900">
                        {practice.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donor Bill of Rights */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Our Commitments to Donors
              </h2>
              <p className="text-xl text-blue-100">
                As a donor, you have the right to expect these things from us.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {donorCommitments.map((commitment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
                >
                  <svg
                    className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Information */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Request More Information
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We believe in full transparency. If you have questions about our
              finances, operations, or how your donations are used, we&apos;re
              happy to provide more details.
            </p>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-bold text-gray-900">
                Available Upon Request:
              </h3>
              <ul className="mb-6 space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Form 990</strong> - Our annual IRS filing with
                    detailed financial information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Annual Report</strong> - Summary of programs,
                    impact, and financials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Articles of Incorporation</strong> - Our founding
                    documents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>IRS Determination Letter</strong> - Confirmation of
                    our 501(c)(3) status
                  </span>
                </li>
              </ul>

              <Link href="/contact" className="btn-primary">
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Give With Confidence"
        description="Your generous donations are handled with integrity and used to make a real difference in the lives of children and churches."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "See Our Impact", href: "/about" }}
        background="gold"
      />
    </>
  );
}
