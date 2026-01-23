import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025 Impact Report",
  description:
    "See how God is working through Child & Church Partners International - feeding children, supporting scholars, and equipping leaders in the Philippines.",
};

const impactStats = [
  {
    number: "250",
    label: "Children Fed Weekly",
    description:
      "Nourished with food and God's Word through our feeding outreach",
    color: "bg-primary-blue",
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
    number: "30",
    label: "Scholars Supported",
    description:
      "Students from grade school to college receiving educational support",
    color: "bg-accent-gold",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    number: "200",
    label: "Youth at Conference",
    description:
      "Teenagers and young adults attended our first youth camp in May",
    color: "bg-primary-red",
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
    number: "8",
    label: "Graduates in 2026",
    description:
      "4 high school and 4 college graduates ready to serve their communities",
    color: "bg-primary-blue",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
];

const programHighlights = [
  {
    title: "Feeding Outreach",
    description:
      "Every week, 250 children receive nutritious meals and hear the Word of God. This program addresses both physical hunger and spiritual needs, giving children hope and showing them the love of Christ.",
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
    title: "Back to School Program",
    description:
      "We provide backpacks filled with school supplies to children living in poverty, removing barriers to education and giving them the tools they need to succeed in school.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Scholarship Program",
    description:
      "30 students from grade school through college receive scholarships that cover tuition, supplies, and educational support. We invest in their future so they can break the cycle of poverty.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    title: "Youth Conference",
    description:
      "In May, we hosted our first youth camp with 200 teenagers and young adults gathering to worship, learn, and grow in their faith. This event is building the next generation of Christian leaders.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
];

const milestones = [
  {
    year: "2025",
    achievements: [
      "2 high school graduates enrolled in college",
      "2 college graduates now employed",
    ],
  },
  {
    year: "2026",
    achievements: [
      "4 high school students graduating",
      "4 college students graduating",
    ],
  },
];

export default function ImpactPage() {
  return (
    <>
      <Hero
        title="2025 Impact Report"
        subtitle="Celebrating what God is doing through your partnership"
        variant="simple"
      />

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Your Impact by the Numbers
              </h2>
              <p className="text-lg text-gray-600">
                Every number represents a life being transformed by the love of
                Christ through your generous support.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-neutral-off-white p-6 text-center"
                >
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${stat.color}/10`}
                  >
                    <svg
                      className={`h-8 w-8 ${stat.color === "bg-primary-blue" ? "text-primary-blue" : stat.color === "bg-accent-gold" ? "text-accent-gold" : "text-primary-red"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="mb-2 text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Program Highlights
              </h2>
              <p className="text-lg text-gray-600">
                Each program works together to address the physical,
                educational, and spiritual needs of children and communities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {programHighlights.map((program, index) => (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue/10">
                      <svg
                        className="h-6 w-6 text-primary-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {program.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-gray-900">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Celebration */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Celebrating Our Scholars
              </h2>
              <p className="text-xl text-blue-100">
                Watch as our scholarship students achieve their dreams and
                prepare to serve their communities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {milestones.map((milestone, index) => (
                <div key={index} className="rounded-2xl bg-white/10 p-6">
                  <h3 className="mb-4 text-2xl font-bold text-accent-gold">
                    {milestone.year}
                  </h3>
                  <ul className="space-y-3">
                    {milestone.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
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
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipping Center Update */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold/10">
              <svg
                className="h-10 w-10 text-accent-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Equipping Center Update
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Construction continues on our Equipping Center, which will serve
              as a training hub for pastors and youth leaders throughout the
              region. This facility will multiply our impact by equipping local
              leaders to serve their communities for generations to come.
            </p>
            <Link href="/give/equip" className="btn-secondary">
              Learn More About the Equipping Center
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        description="Join us in this life-changing work. Your support feeds children, educates scholars, and equips the next generation of Christian leaders."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        background="gold"
      />
    </>
  );
}
