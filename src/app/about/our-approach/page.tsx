import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Learn how Child & Church Partners International works alongside local churches in the Philippines to create lasting change through education, faith, and community.",
};

const approachPillars = [
  {
    number: "01",
    title: "Church-Centered Partnership",
    description:
      "We don't work in isolation. Every program flows through local churches who know their communities best. This ensures cultural relevance, builds trust, and creates sustainable impact that continues long after initial support.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    number: "02",
    title: "Holistic Child Development",
    description:
      "We address the whole child—not just educational needs, but physical health, emotional wellbeing, and spiritual growth. Children thrive when all aspects of their development are nurtured in a caring community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    number: "03",
    title: "Relational Investment",
    description:
      "Transformation happens through relationships, not transactions. Our founders personally know many of the pastors we partner with. Sponsors connect directly with children. This relational approach creates accountability and lasting bonds.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    number: "04",
    title: "Long-Term Commitment",
    description:
      "We're not interested in quick fixes. Breaking cycles of poverty takes years of consistent support. Our sponsorship model provides ongoing, reliable assistance that allows children and churches to plan for the future.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

const processSteps = [
  {
    step: 1,
    title: "Identify Partners",
    description:
      "We partner with churches led by pastors who share our vision and have established trust in their communities. Many of these relationships span decades.",
  },
  {
    step: 2,
    title: "Assess Needs",
    description:
      "Local church leaders identify children and families in their communities who would benefit most from support. They understand local needs better than anyone.",
  },
  {
    step: 3,
    title: "Connect Sponsors",
    description:
      "We match sponsors with children and churches, creating personal connections that go beyond financial support. Sponsors receive updates and can communicate with those they support.",
  },
  {
    step: 4,
    title: "Deliver Support",
    description:
      "Funds flow through our established systems to partner churches, who distribute resources directly to children and families. This builds local capacity and ensures accountability.",
  },
  {
    step: 5,
    title: "Monitor Progress",
    description:
      "We track outcomes, celebrate successes, and adjust as needed. Regular communication with partners and visits to the Philippines ensure our approach remains effective.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <Hero
        title="Our Approach"
        subtitle="How we work alongside local churches to create lasting change in the Philippines."
        variant="simple"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Partnership, Not Paternalism
                </h2>
                <p className="text-gray-600 mb-4">
                  At Child & Church Partners, we believe lasting change comes
                  from within communities, not from outside organizations
                  imposing solutions. That&apos;s why we work alongside local
                  churches rather than around them.
                </p>
                <p className="text-gray-600 mb-4">
                  Our approach recognizes that Filipino pastors and community
                  leaders understand their context better than we ever could.
                  They know who needs help, what resources will make a
                  difference, and how to deliver support in culturally
                  appropriate ways.
                </p>
                <p className="text-gray-600">
                  We provide resources, training, and connections. They provide
                  wisdom, relationships, and on-the-ground implementation.
                  Together, we see lives transformed.
                </p>
              </div>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/6ebd37_f3a5ad9f77714fd085d1f6ad9e6ed71f~mv2.jpeg"
                  alt="Partnership with local churches in the Philippines"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every program we
              implement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approachPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold text-accent-gold/30">
                    {pillar.number}
                  </div>
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Process Works
              </h2>
              <p className="text-lg text-gray-600">
                From partnership to impact—here&apos;s how we turn your support
                into real change.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-gold/30 hidden md:block" />

              <div className="space-y-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="hidden md:flex w-16 h-16 bg-accent-gold rounded-full items-center justify-center flex-shrink-0 z-10">
                      <span className="text-white font-bold text-xl">
                        {item.step}
                      </span>
                    </div>
                    <div className="bg-neutral-off-white rounded-2xl p-6 flex-1">
                      <div className="md:hidden text-accent-gold font-bold mb-2">
                        Step {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Makes Our Approach Different
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Focused Geography</h3>
                <p className="text-blue-100">
                  We work exclusively in the Philippines, allowing us to develop
                  deep expertise and relationships in one context rather than
                  spreading thin across many countries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personal Connections</h3>
                <p className="text-blue-100">
                  Our founders personally know many of the pastors we work with.
                  This isn&apos;t institutional charity—it&apos;s friends
                  helping friends build stronger communities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-gold"
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
                <h3 className="text-xl font-bold mb-2">Dual Focus</h3>
                <p className="text-blue-100">
                  We support both children AND churches because they&apos;re
                  interconnected. Strong churches create strong communities
                  where children can thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-accent-gold mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-6">
              &ldquo;We don&apos;t just send money. We walk alongside pastors
              and communities, sharing in their struggles and celebrating their
              victories. That&apos;s what partnership means.&rdquo;
            </blockquote>
            <cite className="text-gray-900 font-medium">
              — Dani Sindac, Co-Founder
            </cite>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        description="Join our approach to lasting change. Your sponsorship connects you directly with children and churches making a difference."
        primaryCta={{ label: "Sponsor a Child", href: "/children" }}
        secondaryCta={{ label: "Sponsor a Church", href: "/churches" }}
        background="gold"
      />
    </>
  );
}
