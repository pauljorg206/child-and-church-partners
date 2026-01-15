import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import ImageGrid from "@/components/sections/ImageGrid";
import Image from "next/image";
import Link from "next/link";
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
    number: "40,000",
    label: "Untrained Pastors",
    description: "Leaders without formal theological education.",
  },
  {
    number: "85%",
    label: "Global Challenge",
    description: "Pastors worldwide lack training.",
  },
];

const churchImages = [
  {
    src: "/images/photo-gallery/church-worship-philippines-001.jpg",
    alt: "Church worship",
  },
  {
    src: "/images/photo-gallery/bible-study-fellowship-001.jpeg",
    alt: "Bible study",
  },
  {
    src: "/images/photo-gallery/pastor-training-philippines-002.jpg",
    alt: "Pastor training",
  },
];

export default function WhyChurchesPage() {
  return (
    <>
      <Hero
        title="Why Churches"
        subtitle="Equip pastors to lead their communities with truth and grace."
        variant="simple"
        backgroundImage="/images/photo-gallery/church-service-philippines-001.jpg"
      />

      {/* Image + Quote Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[400px]">
              <Image
                src="/images/photo-gallery/church-community-service-001.jpg"
                alt="Church community in the Philippines"
                fill
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
                Most Filipino churches are small, rural congregations with
                limited budgets. Pastors often work other jobs to support their
                families while serving their communities faithfully.
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

      {/* Image Grid */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Churches Making a Difference
          </h2>
          <ImageGrid images={churchImages} columns={3} />
        </div>
      </section>

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
                    src="/images/photo-gallery/bible-study-fellowship-002.jpeg"
                    alt="Bible training"
                    fill
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
                    src="/images/photo-gallery/youth-leadership-training-001.jpg"
                    alt="Leadership development"
                    fill
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
                    src="/images/photo-gallery/church-community-outreach-001.jpg"
                    alt="Community outreach"
                    fill
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

      {/* Pastor Testimonial */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/photo-gallery/pastor-training-philippines-001.jpg"
                  alt="Pastor Jun Omboy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent-gold">
                  Pastor Story
                </span>
                <blockquote className="mb-4 text-xl italic text-gray-700">
                  &ldquo;I want to learn more how to rightly handle the word of
                  God.&rdquo;
                </blockquote>
                <div className="font-semibold text-gray-900">
                  Pastor Jun Omboy
                </div>
                <div className="text-gray-600">Church Pastor, Philippines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/church-worship-philippines-002.jpg"
            alt="Church worship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent-gold/95" />
        </div>
        <div className="container-site relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Equip a Pastor Today
            </h2>
            <p className="mb-8 text-lg text-gray-800">
              Help small rural churches serve their communities in lasting ways.
            </p>
            <div className="inline-block rounded-2xl bg-white p-8 text-left shadow-xl">
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  Sponsor a Church
                </h3>
                <span className="text-2xl font-bold text-accent-gold">
                  $50/mo
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
                  Pastor training & resources
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
                  Ministry equipment & materials
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
                  Outreach & community impact
                </li>
              </ul>
              <Link
                href="/donate"
                className="btn btn-primary w-full text-center"
              >
                Sponsor a Church Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Support a Church?"
        description="Help pastors access training and lead their communities with truth."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Give to Equip", href: "/give/equip" }}
        background="blue"
      />
    </>
  );
}
