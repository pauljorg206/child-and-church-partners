import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ProgramCard from "@/components/cards/ProgramCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Difference",
  description:
    "Explore the many ways you can help children and churches in the Philippines through Child & Church Partners.",
};

const programs = [
  {
    title: "Sponsor a Child",
    amount: "$35/month",
    description:
      "Your gift can positively change the life of a child today and eternally.",
    bulletPoints: [
      "Transportation and lunch assistance",
      "Provision for school supplies and projects",
      "Health and nutrition support",
      "A vibrant and supportive church community",
    ],
    ctaLabel: "Sponsor a Child",
    ctaHref: "/donate",
  },
  {
    title: "Sponsor a Church",
    amount: "$50/month",
    description:
      "Your gift helps small rural churches serve their communities in tangible and lasting ways.",
    bulletPoints: [
      "Host outreach events and training",
      "Purchase musical instruments and chairs",
      "Sunday school materials",
      "Many other urgent needs",
    ],
    ctaLabel: "Sponsor a Church",
    ctaHref: "/donate",
  },
];

const campaigns = [
  {
    title: "Back-to-School Backpack Campaign",
    description:
      "As many as 250 Filipino children living in poverty each receive a sturdy backpack filled with school supplies at the beginning of each school year.",
    impact:
      "Your support gives children from low-income families the head start they need to succeed.",
  },
  {
    title: "Feeding Outreach",
    description:
      "Once a week, 200 to 250 children eat a nutritious meal at our local churches.",
    impact:
      "This weekly children's feeding program is an opportunity for churches to reach out to children and their families with the love and hope found in Jesus.",
  },
  {
    title: "Other Urgent Needs",
    description:
      "Your gift helps communities thrive even in the midst of many challenges.",
    bulletPoints: [
      "Church repairs and construction",
      "Livelihood opportunities for families",
      "Vocational training for youth",
      "Disaster relief for affected families",
    ],
  },
];

export default function GivePage() {
  return (
    <>
      <Hero
        title="Make a Difference"
        subtitle="Be a dream releaser. Help children and churches overcome and thrive."
        variant="simple"
        backgroundImage="/images/photo-gallery/ministry-philippines-ccpi-001.jpg"
      />

      {/* Main Sponsorship Options */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Sponsorship Programs
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Choose how you want to make a lasting impact in the Philippines.
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                amount={program.amount}
                description={program.description}
                bulletPoints={program.bulletPoints}
                ctaLabel={program.ctaLabel}
                ctaHref={program.ctaHref}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Give to Equip Banner */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Give to Equip
            </h2>
            <p className="mb-4 text-xl font-semibold text-accent-gold">
              Goal: $35,000
            </p>
            <p className="mb-8 text-lg text-gray-200">
              Help build an equipping center for Filipino pastors. In the
              Philippines, more than 35,000 pastors lead churches without formal
              Bible training. Your gift can change that.
            </p>
            <Link href="/give/equip" className="btn-primary text-lg">
              Learn More About This Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Campaign Giving */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Campaign Giving
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Support specific initiatives that make a direct impact.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {campaign.title}
                </h3>
                <p className="mb-4 text-gray-600">{campaign.description}</p>
                {campaign.impact && (
                  <p className="mb-4 text-sm font-medium text-primary-blue">
                    {campaign.impact}
                  </p>
                )}
                {campaign.bulletPoints && (
                  <ul className="mb-4 space-y-2">
                    {campaign.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/donate"
                  className="font-medium text-primary-blue transition-colors hover:text-blue-700"
                >
                  Give Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Every Gift Makes a Difference"
        description="Your generosity transforms lives and communities in the Philippines."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        background="gold"
      />
    </>
  );
}
