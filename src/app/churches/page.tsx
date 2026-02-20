import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Churches",
  description:
    "Learn about the challenges facing churches in the Philippines and how you can help equip pastors through church sponsorship.",
};

const stats = [
  {
    number: "60%",
    label: "Small Churches",
    description: "Rural congregations with limited resources.",
  },
  {
    number: "35K",
    label: "Untrained Pastors",
    description: "Leaders without formal theological education.",
  },
  {
    number: "85%",
    label: "Global Challenge",
    description: "Pastors worldwide lack training.",
  },
];

export default function WhyChurchesPage() {
  return (
    <>
      <Hero
        title="Why Churches"
        subtitle="Equip pastors to lead their communities with truth and grace."
        variant="simple"
        backgroundImage="/images/client/group-lunch.jpeg"
      />

      {/* Image + Quote Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[400px]">
              <Image
                src="/images/church.jpeg"
                alt="Church service in the Philippines"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <blockquote className="mb-6 border-l-4 border-accent-gold pl-4 text-xl italic text-gray-700">
                &ldquo;...on this rock I will build my church, and the gates of
                hell shall not prevail against it.&rdquo;
                <footer className="mt-2 text-base font-semibold not-italic text-accent-gold">
                  — Matthew 16:18
                </footer>
              </blockquote>
              <p className="text-lg text-gray-600">
                Most Filipino churches are small, rural congregations with very
                limited resources. Many pastors take on odd jobs to support
                their families while faithfully serving their communities. Your
                support helps provide the tools and resources they need to
                preach, disciple, and serve more effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection
        title="The Challenge"
        stats={stats}
        background="off-white"
      />

      {/* Hope Section with Photos */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              There Is Hope
            </h2>
            <p className="mb-12 text-lg text-gray-200">
              Your support gives pastors access to training, resources, and
              community.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="relative h-40">
                  <Image
                    src="/images/pastors-training.jpeg"
                    alt="Pastors receiving training certificates"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    Bible Training
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sound doctrine & teaching
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="relative h-40">
                  <Image
                    src="/images/client/youth.avif"
                    alt="Youth leadership"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Leadership</h3>
                  <p className="text-sm text-gray-600">
                    Growing next-gen leaders
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="relative h-40">
                  <Image
                    src="/images/client/bible-11.jpg"
                    alt="Bible study resources"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Resources</h3>
                  <p className="text-sm text-gray-600">
                    Books & study materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Support a Church?"
        description="Help pastors access training and lead their communities with truth."
        primaryCta={{ label: "See How to Help", href: "/give" }}
        secondaryCta={{ label: "Give to Equip", href: "/give/equip" }}
        background="blue"
      />
    </>
  );
}
