import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";

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
                src="/images/photo-gallery/church-service-philippines-007.jpeg"
                alt="A girl holding a thank you sign showing the impact of sponsorship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Impact Story */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/client/filipino-children-smiling.png"
                  alt="Two smiling Filipino children"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  Every year, with your support, 30 students&mdash;from grade
                  school to college&mdash;are given the resources they need to
                  succeed in school. Your donation of $25 a month helps provide
                  for a student&apos;s:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>&#8226; transportation and lunch</li>
                  <li>&#8226; school supplies and projects</li>
                  <li>&#8226; health and nutrition support</li>
                  <li>&#8226; tuition, computers, and books</li>
                  <li>&#8226; a supportive, God-fearing community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="You Can Make a Difference"
        description="Learn how sponsorship helps children break the cycle of poverty."
        primaryCta={{ label: "See How to Help", href: "/give" }}
        background="blue"
      />
    </>
  );
}
