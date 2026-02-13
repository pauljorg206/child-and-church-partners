import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "Child & Church Partners International serves children and churches across the Philippines, focusing on communities where support is needed most.",
};

export default function WhereWeWorkPage() {
  return (
    <>
      <Hero
        title="Where We Work"
        subtitle="Serving children and churches across the Philippines."
        variant="simple"
        backgroundImage="/images/client/community.jpeg"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              The Philippines: Our Mission Field
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Child & Church Partners International focuses exclusively on the
              Philippines, a nation of over 7,000 islands with rich culture,
              strong faith, and communities in need of support. Our founders,
              Dani and Rez Sindac, have deep roots in the Philippines through
              decades of ministry, giving us authentic connections with local
              churches and communities.
            </p>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/client/kids-play.jpeg"
                alt="Children playing in the Philippines"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Philippines */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Why the Philippines?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                    <svg
                      className="h-6 w-6 text-accent-gold"
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
                  <h3 className="text-xl font-bold text-gray-900">
                    Deep Personal Connection
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our founders, Dani and Rez Sindac, have roots in the
                  Philippines spanning decades. This isn&apos;t just a mission
                  field—it&apos;s home. Their personal relationships with
                  pastors and community leaders ensure authentic, lasting
                  impact.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                    <svg
                      className="h-6 w-6 text-accent-gold"
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
                  <h3 className="text-xl font-bold text-gray-900">
                    Strong Church Foundation
                  </h3>
                </div>
                <p className="text-gray-600">
                  The Philippines has a deeply rooted Christian community, but
                  many rural churches lack resources and trained leadership. By
                  partnering with local churches, we multiply our impact through
                  established, trusted community institutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                    <svg
                      className="h-6 w-6 text-accent-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Significant Need
                  </h3>
                </div>
                <p className="text-gray-600">
                  Despite economic growth, millions of Filipino children live in
                  poverty. Many families struggle to afford education,
                  nutrition, and healthcare. Our focused approach allows us to
                  make meaningful, measurable differences.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                    <svg
                      className="h-6 w-6 text-accent-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Strategic Location
                  </h3>
                </div>
                <p className="text-gray-600">
                  English is widely spoken in the Philippines, making
                  communication and partnership easier. The country&apos;s
                  location and infrastructure allow us to efficiently coordinate
                  programs and maintain close relationships with our partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              How We Work Locally
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We don&apos;t work in isolation. Every program is implemented
              through partnerships with local churches who know their
              communities best.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-40">
                  <Image
                    src="/images/client/church-group.jpeg"
                    alt="Partner churches"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-2xl font-bold text-accent-gold">
                    1
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Partner with Churches
                  </h3>
                  <p className="text-sm text-gray-600">
                    We partner with local churches led by pastors who share our
                    vision.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-40">
                  <Image
                    src="/images/client/coloring.jpeg"
                    alt="Children coloring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-2xl font-bold text-accent-gold">
                    2
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Identify Children in Need
                  </h3>
                  <p className="text-sm text-gray-600">
                    Church partners identify children who would benefit from
                    sponsorship.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-40">
                  <Image
                    src="/images/client/scholar-1.jpeg"
                    alt="Sponsored scholar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-2xl font-bold text-accent-gold">
                    3
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Deliver Holistic Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    Children receive education, guidance, and community
                    belonging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Support Our Work in the Philippines"
        description="Your sponsorship directly impacts children and churches in these communities. Join us in making a difference."
        primaryCta={{ label: "Sponsor a Child", href: "/children" }}
        secondaryCta={{ label: "Support a Church", href: "/churches" }}
        background="gold"
      />
    </>
  );
}
