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
        subtitle="Be a dream releaser. Help poor children and struggling churches in the Philippines overcome, thrive and inspire change in their communities."
        variant="simple"
      />

      {/* Main Sponsorship Options */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            Sponsorship Programs
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose how you want to make a lasting impact in the Philippines.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Give to Equip
            </h2>
            <p className="text-xl text-accent-gold font-semibold mb-4">
              Goal: $35,000
            </p>
            <p className="text-lg text-gray-200 mb-8">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            Campaign Giving
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Support specific initiatives that make a direct impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div
                key={campaign.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                {campaign.impact && (
                  <p className="text-sm text-primary-blue font-medium mb-4">
                    {campaign.impact}
                  </p>
                )}
                {campaign.bulletPoints && (
                  <ul className="space-y-2 mb-4">
                    {campaign.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0"
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
                  className="text-primary-blue font-medium hover:text-blue-700 transition-colors"
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
