import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The core beliefs and values that guide Child & Church Partners International. Our faith foundation shapes everything we do.",
};

const coreBeliefs = [
  {
    title: "The Bible",
    belief:
      "We believe the Bible is the inspired, infallible Word of God—our ultimate authority for faith and practice. Scripture guides our mission, shapes our values, and informs how we serve.",
    verse:
      "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    reference: "2 Timothy 3:16",
  },
  {
    title: "God",
    belief:
      "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. God is the Creator of all things, sovereign over all, and perfectly loving, just, and holy.",
    verse:
      "For from him and through him and for him are all things. To him be the glory forever!",
    reference: "Romans 11:36",
  },
  {
    title: "Jesus Christ",
    belief:
      "We believe Jesus Christ is the Son of God, fully divine and fully human. He lived a sinless life, died on the cross for our sins, rose bodily from the dead, and will return again.",
    verse:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
  },
  {
    title: "The Holy Spirit",
    belief:
      "We believe the Holy Spirit indwells all believers, empowering them for godly living and service. The Spirit convicts of sin, guides into truth, and equips the church for ministry.",
    verse:
      "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses.",
    reference: "Acts 1:8",
  },
  {
    title: "Salvation",
    belief:
      "We believe salvation is a gift of God's grace, received through faith in Jesus Christ alone. No amount of good works can earn salvation—it is freely given to all who believe.",
    verse:
      "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.",
    reference: "Ephesians 2:8",
  },
  {
    title: "The Church",
    belief:
      "We believe the local church is God's plan for reaching the world. The church is the body of Christ, called to worship, fellowship, discipleship, and mission in every community.",
    verse:
      "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.",
    reference: "Matthew 16:18",
  },
];

const missionValues = [
  {
    title: "Every Child Has Dignity",
    description:
      "Every child is created in God's image and deserves the opportunity to thrive. Poverty should not determine a child's future.",
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
    title: "The Local Church Matters",
    description:
      "Strong, healthy churches transform communities. We invest in churches because they are the lasting presence of hope in their neighborhoods.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: "Faith and Works Together",
    description:
      "True faith expresses itself through action. We share the Gospel through both word and deed, meeting spiritual and physical needs together.",
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
    title: "Integrity in All Things",
    description:
      "We are accountable to God, our donors, and the communities we serve. Transparency, honesty, and faithful stewardship guide every decision.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Partnership Over Paternalism",
    description:
      "We work alongside Filipino leaders, not over them. Local churches and pastors know their communities best—we support their vision.",
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
    title: "Long-Term Commitment",
    description:
      "Lasting change takes time. We commit to long-term relationships with children, churches, and communities rather than short-term projects.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function WhatWeBelievePage() {
  return (
    <>
      <Hero
        title="What We Believe"
        subtitle="The faith foundation that shapes our mission and guides our work."
        variant="simple"
        backgroundImage="/images/photo-gallery/church-worship-philippines-001.jpg"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Rooted in Faith, Driven by Love
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Child & Church Partners International is a Christian organization.
              Our faith isn&apos;t just a label—it&apos;s the foundation of
              everything we do. We serve because we have been loved by God, and
              we want to share that love with children and communities in the
              Philippines.
            </p>
            <p className="text-lg text-gray-600">
              These beliefs shape our mission, inform our methods, and inspire
              our commitment to lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Beliefs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We hold to historic Christian faith as expressed in these
              foundational truths.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreBeliefs.map((item, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.belief}</p>
                <div className="border-l-4 border-accent-gold pl-4">
                  <p className="mb-1 text-sm italic text-gray-700">
                    &ldquo;{item.verse}&rdquo;
                  </p>
                  <p className="text-xs font-medium text-accent-gold">
                    {item.reference}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Focus */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Our Guiding Scripture
            </h2>
            <div className="rounded-2xl bg-white/10 p-8 md:p-12">
              <blockquote className="mb-6 font-serif text-2xl italic md:text-3xl">
                &ldquo;Religion that God our Father accepts as pure and
                faultless is this: to look after orphans and widows in their
                distress and to keep oneself from being polluted by the
                world.&rdquo;
              </blockquote>
              <cite className="text-xl text-accent-gold">James 1:27 (NIV)</cite>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
              This verse captures the heart of our mission. We believe caring
              for vulnerable children and supporting struggling communities
              isn&apos;t optional for followers of Jesus—it&apos;s essential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Values That Guide Our Mission
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              These principles flow from our beliefs and shape how we work.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {missionValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/10">
                  <svg
                    className="h-8 w-8 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement on Service */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                How Our Beliefs Shape Our Service
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We serve all children in need regardless of their religious
                  background. While we are a Christian organization and our
                  programs are delivered through local churches, we do not
                  require beneficiaries to adopt our beliefs to receive support.
                </p>
                <p>
                  We believe the Gospel is shared through both word and deed.
                  Meeting physical needs—education, nutrition, healthcare—is not
                  separate from our spiritual mission but integral to it. Jesus
                  fed the hungry, healed the sick, and taught the crowds. We
                  seek to follow His example.
                </p>
                <p>
                  We trust local churches and pastors to serve their communities
                  with wisdom and cultural sensitivity. Our role is to support
                  and resource their ministry, not to impose external programs
                  or agendas.
                </p>
                <p className="font-medium text-gray-700">
                  In everything, we seek to honor God, serve with excellence,
                  and demonstrate the love of Christ to children, families, and
                  communities in the Philippines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Mission"
        description="Partner with us in sharing hope with children and churches in the Philippines."
        primaryCta={{ label: "Get Involved", href: "/give" }}
        secondaryCta={{ label: "Learn More About Us", href: "/about" }}
        background="gold"
      />
    </>
  );
}
