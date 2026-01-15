import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Sponsorship Works",
  description:
    "Learn why child sponsorship is one of the most effective ways to create lasting change. Discover how our model transforms lives through education, community, and faith.",
};

const sponsorshipBenefits = [
  {
    title: "Consistent Support",
    description:
      "Unlike one-time donations, monthly sponsorship provides reliable, ongoing support that families can count on for their child's education and development.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
  },
  {
    title: "Personal Connection",
    description:
      "Sponsorship creates a meaningful relationship between sponsor and child, providing emotional support and encouragement that goes beyond financial help.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Holistic Development",
    description:
      "Our approach addresses the whole child—educational, physical, emotional, and spiritual needs—through the supportive environment of a local church community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    title: "Breaking Cycles",
    description:
      "Education is the key to breaking cycles of poverty. Sponsored children gain skills and opportunities that transform not just their lives, but their families for generations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
];

const comparisonData = [
  {
    aspect: "Support Duration",
    traditional: "One-time or short-term",
    sponsorship: "Long-term, consistent relationship",
  },
  {
    aspect: "Connection",
    traditional: "Anonymous giving",
    sponsorship: "Personal connection with recipient",
  },
  {
    aspect: "Accountability",
    traditional: "General fund usage",
    sponsorship: "Specific child, trackable impact",
  },
  {
    aspect: "Impact Visibility",
    traditional: "Aggregate statistics",
    sponsorship: "Individual progress updates",
  },
  {
    aspect: "Community Integration",
    traditional: "External program delivery",
    sponsorship: "Local church partnership",
  },
];

export default function SponsorshipWorksPage() {
  return (
    <>
      <Hero
        title="Why Sponsorship Works"
        subtitle="Discover why child sponsorship is one of the most effective ways to create lasting, meaningful change."
        variant="simple"
      />

      {/* The Evidence Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Evidence for Sponsorship
              </h2>
              <p className="text-lg text-gray-600">
                Research consistently shows that child sponsorship programs
                produce significant, measurable improvements in children&apos;s
                lives. Here&apos;s why our model works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sponsorshipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-neutral-off-white rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-accent-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {benefit.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Impact of Sponsorship
            </h2>
            <p className="text-xl text-blue-100">
              Studies of child sponsorship programs worldwide show remarkable
              outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-gold mb-2">
                27-40%
              </div>
              <div className="text-blue-100">
                More likely to complete secondary school
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-gold mb-2">
                50%
              </div>
              <div className="text-blue-100">
                More likely to have a white-collar job
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-gold mb-2">
                14-18%
              </div>
              <div className="text-blue-100">Higher monthly income as adults</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-gold mb-2">
                35%
              </div>
              <div className="text-blue-100">
                More likely to be community leaders
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-blue-200 text-sm">
            Based on peer-reviewed research on child sponsorship programs
          </div>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/6ebd37_1f58d1c8c00446efbeb6d65a68dcb0d7~mv2.jpeg"
                  alt="Sponsored child receiving education support"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Unique Approach
                </h2>
                <p className="text-gray-600 mb-4">
                  What sets Child & Church Partners apart is our
                  church-centered model. Every sponsored child is connected to a
                  local church community that provides more than just financial
                  support.
                </p>
                <p className="text-gray-600 mb-4">
                  Through our partner churches, children receive:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700">
                      <strong>Educational support</strong> – transportation,
                      supplies, and school project assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700">
                      <strong>Nutritional support</strong> – meals and health
                      resources
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700">
                      <strong>Spiritual guidance</strong> – mentorship and faith
                      formation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700">
                      <strong>Community belonging</strong> – a place where they
                      are known and loved
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 font-medium">
                  This holistic approach addresses the whole child, not just
                  immediate needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sponsorship vs. Traditional Giving
              </h2>
              <p className="text-lg text-gray-600">
                See why ongoing sponsorship creates deeper, more lasting impact
                than traditional one-time donations.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Aspect
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                        Traditional Giving
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary-blue">
                        Sponsorship Model
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonData.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {row.aspect}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {row.traditional}
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-accent-gold"
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
                            {row.sponsorship}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                A Child&apos;s Sponsorship Journey
              </h2>
              <p className="text-lg text-gray-600">
                From enrollment to graduation, see how sponsorship transforms a
                child&apos;s life over time.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-gold/30 hidden md:block" />

              <div className="space-y-8">
                <div className="relative flex gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-accent-gold rounded-full items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="bg-neutral-off-white rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Enrollment
                    </h3>
                    <p className="text-gray-600">
                      A child is identified by a partner church and connected
                      with a sponsor. The child receives immediate support for
                      school enrollment, supplies, and transportation.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-accent-gold rounded-full items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="bg-neutral-off-white rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Month after month, the child receives consistent help with
                      education, nutrition, and spiritual development. They
                      build relationships within their church community.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-accent-gold rounded-full items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="bg-neutral-off-white rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Growth & Development
                    </h3>
                    <p className="text-gray-600">
                      As years pass, the child gains confidence, academic
                      success, and life skills. Sponsors receive updates on
                      progress and can communicate with their sponsored child.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-accent-gold rounded-full items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div className="bg-neutral-off-white rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Graduation & Beyond
                    </h3>
                    <p className="text-gray-600">
                      The child graduates equipped for a brighter future—often
                      pursuing further education or employment. Many become
                      leaders in their churches and communities, continuing the
                      cycle of transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <svg
                className="w-12 h-12 text-accent-gold mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                &ldquo;Sponsorship changed my life. I was able to finish school
                and now I can help my family. My sponsor believed in me when I
                didn&apos;t believe in myself. I want to be a teacher so I can
                help other children the way I was helped.&rdquo;
              </blockquote>
              <div className="text-gray-900 font-medium">
                — Former Sponsored Child, Now College Student
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Sponsorship Journey Today"
        description="For just $35 a month, you can transform a child's life through education, community, and faith. Your sponsorship makes a lasting difference."
        primaryCta={{ label: "Sponsor a Child", href: "/children" }}
        secondaryCta={{ label: "Learn About Giving", href: "/give" }}
        background="gold"
      />
    </>
  );
}
