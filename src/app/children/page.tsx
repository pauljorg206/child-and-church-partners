import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import ProgramCard from "@/components/cards/ProgramCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Children",
  description:
    "Learn about the challenges facing children in the Philippines and how you can help through child sponsorship.",
};

const stats = [
  {
    number: "10.5 MILLION",
    label: "Children in Poverty",
    description:
      "As of 2021, approximately 10.5 million children in the Philippines were living in poverty, representing 26.4% of the child population.",
  },
  {
    number: "3.7 MILLION",
    label: "Food Poor Children",
    description:
      "Additionally, 3.7 million Filipino children were considered 'food poor,' lacking sufficient access to nutritious food.",
  },
  {
    number: "10.7 MILLION",
    label: "Out-of-School Youth",
    description:
      "Out of 42.8 million Filipinos aged 5 to 24, 10.7 million are categorized as out-of-school children and youth.",
  },
];

export default function WhyChildrenPage() {
  return (
    <>
      <Hero
        title="Why Children"
        subtitle="Sponsor a child in the Philippines and help break the cycle of poverty."
        variant="simple"
      />

      {/* Quote Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl text-gray-700 italic mb-4">
              &ldquo;The youth is the hope of our motherland.&rdquo;
            </blockquote>
            <cite className="text-accent-gold font-semibold">
              — Dr. Jose Rizal, National Hero of the Philippines
            </cite>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Challenge
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Young Filipinos – with their boldness, creativity and boundless
              energy – have a huge potential to inspire hope and change in their
              communities. But poverty creates barriers that prevent them from
              reaching their full potential.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              More than 100 years after Dr. Rizal&apos;s death, the cost of education
              in the Philippines remains painfully exorbitant for millions of
              Filipino families who try to survive on $2 a day.
            </p>
            <p className="text-lg text-gray-600">
              Although public schools don&apos;t charge tuition, out-of-pocket
              expenses such as uniforms, school supplies, transportation, and
              meals are beyond the reach of many hard-working families. Many
              students in poverty-stricken communities drop out of school and
              end up caring for younger siblings or working to support their
              families.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection
        title="THE HARD TRUTH"
        stats={stats}
        background="off-white"
      />

      {/* Vulnerability Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Vulnerability
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Despite rapid economic growth and declining poverty, the poverty
              situation remains extremely challenging for children in the
              Philippines.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Children with disabilities and children from rural and indigenous
              communities are more vulnerable to social discrimination. They are
              also likely to be more deprived of social services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              HELP SAVE A CHILD FROM GENERATIONAL POVERTY
            </h2>
            <p className="text-xl text-accent-gold font-semibold mb-4">
              BE A CHANNEL OF HOPE
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              When you sponsor a child, you help that child have access to good
              education, spiritual development, life skills training, and other
              opportunities that can improve their way of living. You also help
              the child&apos;s family become a part of a caring community.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ProgramCard
              title="Sponsor a Child"
              amount="$35/month"
              description="Your gift can positively change the life of a child today and eternally."
              bulletPoints={[
                "Transportation and lunch assistance",
                "School supplies and projects",
                "Health and nutrition support",
                "Vibrant church community",
              ]}
              ctaLabel="Sponsor a Child Today"
              ctaHref="/donate"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Make a Difference?"
        description="Your generosity can transform a child's future and break the cycle of poverty."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/give" }}
        background="gold"
      />
    </>
  );
}
