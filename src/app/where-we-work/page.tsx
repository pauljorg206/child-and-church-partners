import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ImageStrip from "@/components/sections/ImageStrip";
import Image from "next/image";
import type { Metadata } from "next";

const regionImages = [
  {
    src: "/images/photo-gallery/volunteer-ministry-philippines-003.jpg",
    alt: "Ministry in the Philippines",
  },
  {
    src: "/images/photo-gallery/church-community-outreach-004.jpg",
    alt: "Church community outreach",
  },
  {
    src: "/images/photo-gallery/community-outreach-event-005.jpeg",
    alt: "Community event",
  },
  {
    src: "/images/photo-gallery/nonprofit-ministry-philippines-003.jpg",
    alt: "Nonprofit ministry",
  },
];

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "Child & Church Partners International serves children and churches across the Philippines, focusing on communities where support is needed most.",
};

const regions = [
  {
    name: "Metro Manila",
    description:
      "The capital region where urban poverty creates significant challenges for children and families. We partner with churches serving in densely populated communities.",
    children: 45,
    churches: 8,
  },
  {
    name: "Central Luzon",
    description:
      "Agricultural communities north of Manila where many families depend on farming. Our partners here focus on rural children who often lack educational resources.",
    children: 62,
    churches: 12,
  },
  {
    name: "Calabarzon",
    description:
      "The rapidly growing region south of Manila with both urban and rural communities. Churches here serve families transitioning between agricultural and industrial work.",
    children: 38,
    churches: 6,
  },
  {
    name: "Visayas",
    description:
      "The central island region including Cebu and surrounding areas. Many communities here were affected by natural disasters and continue rebuilding.",
    children: 54,
    churches: 15,
  },
  {
    name: "Mindanao",
    description:
      "The southern region with diverse communities and unique challenges. Our partners serve in areas where peace-building and community development go hand in hand.",
    children: 41,
    churches: 9,
  },
];

const impactStats = [
  { number: "240+", label: "Children Served" },
  { number: "50+", label: "Partner Churches" },
  { number: "5", label: "Major Regions" },
  { number: "30+", label: "Years of Ministry" },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <Hero
        title="Where We Work"
        subtitle="Serving children and churches across the Philippines."
        variant="simple"
        backgroundImage="/images/photo-gallery/community-outreach-event-003.jpeg"
      />

      {/* Image Strip */}
      <ImageStrip images={regionImages} />

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
                src="/images/photo-gallery/nonprofit-ministry-philippines-001.jpg"
                alt="Philippines ministry community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-accent-gold md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
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
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
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
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Deep Personal Connection
                </h3>
                <p className="text-gray-600">
                  Our founders, Dani and Rez Sindac, have roots in the
                  Philippines spanning decades. This isn&apos;t just a mission
                  field—it&apos;s home. Their personal relationships with
                  pastors and community leaders ensure authentic, lasting
                  impact.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
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
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Strong Church Foundation
                </h3>
                <p className="text-gray-600">
                  The Philippines has a deeply rooted Christian community, but
                  many rural churches lack resources and trained leadership. By
                  partnering with local churches, we multiply our impact through
                  established, trusted community institutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
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
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Significant Need
                </h3>
                <p className="text-gray-600">
                  Despite economic growth, millions of Filipino children live in
                  poverty. Many families struggle to afford education,
                  nutrition, and healthcare. Our focused approach allows us to
                  make meaningful, measurable differences.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
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
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Strategic Location
                </h3>
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

      {/* Regions Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Regions We Serve
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our ministry spans five major regions of the Philippines, each
              with unique communities and needs.
            </p>
          </div>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="rounded-2xl bg-neutral-off-white p-6 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {region.name}
                    </h3>
                    <p className="text-gray-600">{region.description}</p>
                  </div>
                  <div className="flex gap-6 md:gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-blue">
                        {region.children}
                      </div>
                      <div className="text-sm text-gray-500">Children</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-gold">
                        {region.churches}
                      </div>
                      <div className="text-sm text-gray-500">Churches</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                    src="/images/photo-gallery/church-worship-philippines-006.jpeg"
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
                    src="/images/photo-gallery/child-sponsorship-program-004.jpeg"
                    alt="Children in need"
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
                    src="/images/photo-gallery/feeding-ministry-children-002.jpeg"
                    alt="Holistic support"
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
