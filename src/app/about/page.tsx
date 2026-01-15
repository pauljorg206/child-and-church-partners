import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Child & Church Partners International - helping vulnerable children and struggling churches in the Philippines.",
};

const features = [
  {
    title: "Our Founders",
    description:
      "Meet Dani and Rez Sindac, who dedicated their lives to serving children and churches in the Philippines.",
    href: "/about/founders",
  },
  {
    title: "Our Inspiration",
    description:
      "Discover the heart behind our mission and what drives us to serve those in need.",
    href: "/about/inspiration",
  },
  {
    title: "I Believe in Sponsorship",
    description:
      "Learn why child sponsorship works and how it transforms lives.",
    href: "/about/sponsorship-works",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="We help vulnerable children and struggling churches in the Philippines fulfill their fullest potential and possibilities."
        variant="simple"
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Child & Church Partners International is a U.S.-based Christian
              nonprofit organization dedicated to helping children and churches
              in the hard places in the Philippines overcome barriers and lead
              change.
            </p>
            <p className="text-lg text-gray-600">
              Our tagline, <strong>&ldquo;Overcome Barriers. Lead Change.&rdquo;</strong>,
              reflects our commitment to empowering communities through
              education, spiritual development, and sustainable support.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Preview */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/images/received_571220392093528.jpeg"
                alt="Dani and Rez Sindac, Founders of Child & Church Partners"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founders
              </h2>
              <h3 className="text-xl text-accent-gold font-semibold mb-4">
                Dani and Rez Sindac
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Born and raised in the Philippines, Dani and Rez have served as
                church planters, pastors, and worship leaders in the
                Philippines, Arizona, and Texas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In July 2017, they registered Child & Church Partners
                International, continuing their lifelong commitment to walking
                alongside pastors and communities in the Philippines.
              </p>
              <Link href="/about/founders" className="btn-secondary">
                Read Their Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-neutral-off-white rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="text-primary-blue font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What We Believe
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe that every child deserves access to education, health
              care, and a loving community. We believe that churches, when
              properly equipped and supported, can be powerful agents of change
              in their communities. And we believe that together, we can
              overcome barriers and lead change.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-xl italic text-gray-700">
                &ldquo;A church built on God&apos;s truth and grace has power to shine
                life into a world darkened by despair.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Mission"
        description="Partner with us to help children and churches in the Philippines overcome barriers and lead change."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        background="blue"
      />
    </>
  );
}
