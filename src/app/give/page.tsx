import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be a Dream Releaser",
  description:
    "Be a dream releaser — explore the many ways you can help children and churches in the Philippines through Child & Church Partners International.",
};

const givingOptions = [
  {
    title: "Sponsor a Child: Feeding Outreach",
    amount: "$20/month",
    description:
      "Weekly feeding program for 250 children ages 5-10 years old. Providing four nutritious meals for a child each month.",
    image: "/images/photo-gallery/feeding-program-philippines-003.jpeg",
    imageAlt: "Children eating nutritious meals",
  },
  {
    title: "Sponsor a Student",
    amount: "$25/month",
    description:
      "Your help lightens the financial burden on struggling families, making it possible for students to attend school, graduate, and pursue a better future for their families.",
    image: "/images/scholars.jpg",
    imageAlt: "Sponsored scholars studying",
  },
  {
    title: "Sponsor a Church",
    amount: "$30/month",
    description:
      "Help equip small, rural churches with tools and resources that can bring lasting hope to an entire community.",
    image: "/images/church.jpeg",
    imageAlt: "Church in the Philippines",
  },
  {
    title: "Back-to-School Backpack",
    amount: "$20/child",
    description:
      "As many as 250 Filipino children living in poverty each receive a sturdy backpack filled with school supplies at the beginning of each school year. Your support gives children from low-income families the head start they need to succeed.",
    image: "/images/photo-gallery/child-education-support-002.jpg",
    imageAlt: "Children with school supplies",
  },
  {
    title: "Give to Equip",
    amount: "Any Amount",
    description:
      "Support a pastor's need for biblical training, study materials, and a mentoring community.",
    image: "/images/pastors-training.jpeg",
    imageAlt: "Pastors receiving training",
  },
  {
    title: "Other Urgent Needs",
    amount: "Any Amount",
    description:
      "Your gift helps communities thrive even in the midst of many challenges: church repairs and construction, livelihood opportunities, vocational training, and disaster relief.",
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

      {/* All Giving Options */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Impact
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            Every gift makes a lasting difference in the Philippines.
          </p>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {givingOptions.map((option) => (
              <div
                key={option.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-44">
                  <Image
                    src={option.image}
                    alt={option.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {option.title}
                  </h3>
                  <div className="mb-3 text-2xl font-bold text-accent-gold">
                    {option.amount}
                  </div>
                  <p className="mb-5 text-sm text-gray-600">
                    {option.description}
                  </p>
                  <Link
                    href="/donate"
                    className="inline-block w-full rounded-lg bg-primary-blue px-6 py-3 text-center font-semibold text-white transition-all hover:bg-blue-700"
                  >
                    Give Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-gray-500">
            All donations are tax-deductible to the extent allowed by law.
          </p>
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

      {/* Join Us on a Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-neutral-off-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Join Us on a Mission
              </h2>
              <p className="mb-4 text-gray-600">
                Our mission trips to the Philippines are designed to immerse you
                in meaningful service. You&apos;ll meet the children, serve
                alongside local churches, and experience the heart of our
                ministry firsthand.
              </p>
              <p className="mb-4 text-gray-600">
                The full mission cost of $5,000 covers round-trip airfare,
                comfortable accommodations, meals, and in-country expenses for
                two weeks. Half of your contribution goes directly to blessing
                the ministry and communities you&apos;re serving.
              </p>
              <p className="mb-4 font-medium text-primary-blue">
                We don&apos;t want cost to be a barrier. If you feel called to
                go but the full amount is out of reach, please reach out to us.
                We&apos;re happy to work with you on flexible arrangements so
                you can be part of this experience.
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
