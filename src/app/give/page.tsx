import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ProgramCard from "@/components/cards/ProgramCard";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be a Dream Releaser",
  description:
    "Be a dream releaser — explore the many ways you can help children and churches in the Philippines through Child & Church Partners International.",
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
    image: "/images/photo-gallery/child-education-support-002.jpg",
    imageAlt: "Children with school supplies",
  },
  {
    title: "Feeding Outreach",
    description:
      "Once a week, 200 to 250 children eat a nutritious meal at our local churches.",
    impact:
      "This weekly children's feeding program is an opportunity for churches to reach out to children and their families with the love and hope found in Jesus.",
    image: "/images/photo-gallery/feeding-program-philippines-003.jpeg",
    imageAlt: "Children eating nutritious meals",
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
    image: "/images/photo-gallery/church-community-service-005.jpg",
    imageAlt: "Church community service",
  },
];

export default function GivePage() {
  return (
    <>
      <Hero
        title="Be a Dream Releaser"
        subtitle="Help children and churches overcome and thrive."
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
              Goal: $40,000
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
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-40">
                  <Image
                    src={campaign.image}
                    alt={campaign.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {campaign.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {campaign.description}
                  </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us on a Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-neutral-off-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Join Us on a Mission
              </h2>
              <p className="mb-4 text-xl font-semibold text-accent-gold">
                Cost: $5,000
              </p>
              <p className="mb-4 text-gray-600">
                Our missions in the Philippines last two weeks and are designed
                to immerse you in meaningful service. The mission cost covers
                your round-trip airfare, housing, meals, and accommodations for
                the full two weeks. Nearly half of the mission cost goes
                directly to supporting the children we serve.
              </p>
              <p className="mb-4 text-gray-600">
                During your time with us, you&apos;ll have the opportunity to
                meet the children, serve alongside the community, and live out
                the Lord&apos;s calling to be His hands and feet.
              </p>
              <p className="mb-6 text-sm text-gray-500">
                Mission costs do not include personal spending money or any
                food, lodging, or expenses incurred in the city before or after
                the mission dates.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us About Upcoming Missions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CFC Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Federal Employees: Give Through the CFC
            </h2>
            <p className="mb-6 text-gray-200">
              Support our mission through the Combined Federal Campaign (CFC),
              the official workplace giving program. Give through easy,
              recurring payroll deductions or make a one-time gift using{" "}
              <strong className="text-accent-gold">CFC #53160</strong>.
            </p>
            <a
              href="https://cfcgiving.opm.gov/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-accent-gold text-gray-900 hover:bg-yellow-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Tax Deductible Notice */}
      <section className="bg-neutral-off-white py-8">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <svg
                className="h-6 w-6 text-accent-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm">
                Child & Church Partners International is a 501(c)(3) nonprofit
                organization. All donations are tax-deductible to the extent
                allowed by law.
              </p>
              <p className="text-sm font-medium">EIN: 82-2285185</p>
            </div>
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
