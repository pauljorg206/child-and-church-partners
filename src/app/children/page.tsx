import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import ImageGrid from "@/components/sections/ImageGrid";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Children",
  description:
    "Learn about the challenges facing children in the Philippines and how you can help through child sponsorship.",
};

const stats = [
  {
    number: "10.5M",
    label: "In Poverty",
    description: "Filipino children living below the poverty line.",
  },
  {
    number: "3.7M",
    label: "Food Insecure",
    description: "Children lacking access to nutritious food.",
  },
  {
    number: "10.7M",
    label: "Out of School",
    description: "Youth unable to access education.",
  },
];

const childImages = [
  {
    src: "/images/photo-gallery/feeding-ministry-children-005.jpg",
    alt: "Feeding ministry",
  },
  {
    src: "/images/photo-gallery/church-worship-philippines-004.jpg",
    alt: "Church worship",
  },
  {
    src: "/images/photo-gallery/child-education-support-005.jpg",
    alt: "School supplies",
  },
];

export default function WhyChildrenPage() {
  return (
    <>
      <Hero
        title="Why Children"
        subtitle="Break the cycle of poverty through education and hope."
        variant="simple"
        backgroundImage="/images/photo-gallery/filipino-children-ministry-001.jpg"
      />

      {/* Image + Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[400px]">
              <Image
                src="/images/photo-gallery/children-nutrition-outreach-001.jpeg"
                alt="Children in the Philippines"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <blockquote className="mb-6 border-l-4 border-accent-gold pl-4 text-xl italic text-gray-700">
                &ldquo;The youth is the hope of our motherland.&rdquo;
                <footer className="mt-2 text-base font-semibold not-italic text-accent-gold">
                  — Dr. Jose Rizal
                </footer>
              </blockquote>
              <p className="text-lg text-gray-600">
                Young Filipinos have boundless potential to inspire change. But
                poverty creates barriers—many families survive on $2 a day,
                making school supplies, transportation, and meals unaffordable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection
        title="The Hard Truth"
        stats={stats}
        background="off-white"
      />

      {/* Image Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Lives Waiting for Hope
          </h2>
          <ImageGrid images={childImages} columns={3} />
        </div>
      </section>

      {/* Impact Story */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/photo-gallery/sponsored-child-philippines-003.jpg"
                  alt="Sponsored child story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent-gold">
                  Impact Story
                </span>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Every Child Has a Dream
                </h3>
                <p className="mb-4 text-gray-600">
                  With sponsorship, children receive education, nutrition, and
                  community— giving them the tools to break free from
                  generational poverty.
                </p>
                <p className="text-gray-600">
                  Your $35/month provides school supplies, meals, healthcare
                  support, and a caring church family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/child-church-partners-ministry-002.jpg"
            alt="Children ministry"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-blue/90" />
        </div>
        <div className="container-site relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Be a Channel of Hope
            </h2>
            <p className="mb-8 text-lg text-gray-200">
              When you sponsor a child, you open doors to education, health, and
              a brighter future.
            </p>
            <div className="inline-block rounded-2xl bg-white p-8 text-left shadow-xl">
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  Sponsor a Child
                </h3>
                <span className="text-2xl font-bold text-accent-gold">
                  $35/mo
                </span>
              </div>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Education & school supplies
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Health & nutrition support
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Church community & mentorship
                </li>
              </ul>
              <Link
                href="/donate"
                className="btn btn-primary w-full text-center"
              >
                Sponsor a Child Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Change a Life?"
        description="Your generosity transforms futures and breaks the cycle of poverty."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        background="gold"
      />
    </>
  );
}
