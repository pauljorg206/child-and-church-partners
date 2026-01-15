import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ImageStrip from "@/components/sections/ImageStrip";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const aboutImages = [
  {
    src: "/images/photo-gallery/ministry-philippines-ccpi-003.jpg",
    alt: "Ministry in the Philippines",
  },
  {
    src: "/images/photo-gallery/church-community-outreach-006.jpeg",
    alt: "Church community outreach",
  },
  {
    src: "/images/photo-gallery/child-sponsorship-program-006.jpeg",
    alt: "Child sponsorship program",
  },
  {
    src: "/images/photo-gallery/feeding-program-philippines-002.jpeg",
    alt: "Feeding program",
  },
];

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
    image: "/images/photo-gallery/ministry-philippines-ccpi-004.jpg",
  },
  {
    title: "Our Inspiration",
    description:
      "Discover the heart behind our mission and what drives us to serve those in need.",
    href: "/about/inspiration",
    image: "/images/photo-gallery/children-learning-philippines-006.jpeg",
  },
  {
    title: "I Believe in Sponsorship",
    description:
      "Learn why child sponsorship works and how it transforms lives.",
    href: "/about/sponsorship-works",
    image: "/images/photo-gallery/sponsored-child-philippines-005.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="We help vulnerable children and struggling churches in the Philippines fulfill their fullest potential and possibilities."
        variant="simple"
        backgroundImage="/images/photo-gallery/child-church-partners-ministry-003.jpeg"
      />

      {/* Image Strip */}
      <ImageStrip images={aboutImages} />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Child & Church Partners International is a U.S.-based Christian
              nonprofit organization dedicated to helping children and churches
              in the hard places in the Philippines overcome barriers and lead
              change.
            </p>
            <p className="text-lg text-gray-600">
              Our tagline,{" "}
              <strong>&ldquo;Overcome Barriers. Lead Change.&rdquo;</strong>,
              reflects our commitment to empowering communities through
              education, spiritual development, and sustainable support.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Preview */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[450px]">
              <Image
                src="/images/received_571220392093528.jpeg"
                alt="Dani and Rez Sindac, Founders of Child & Church Partners"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Meet Our Founders
              </h2>
              <h3 className="mb-4 text-xl font-semibold text-accent-gold">
                Dani and Rez Sindac
              </h3>
              <p className="mb-4 text-lg text-gray-600">
                Born and raised in the Philippines, Dani and Rez have served as
                church planters, pastors, and worship leaders in the
                Philippines, Arizona, and Texas.
              </p>
              <p className="mb-6 text-lg text-gray-600">
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Learn More About Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group overflow-hidden rounded-2xl bg-neutral-off-white transition-all hover:shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-blue">
                    {feature.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-medium text-primary-blue transition-all group-hover:gap-2">
                    Learn More
                    <svg
                      className="h-4 w-4"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Believe
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We believe that every child deserves access to education, health
              care, and a loving community. We believe that churches, when
              properly equipped and supported, can be powerful agents of change
              in their communities. And we believe that together, we can
              overcome barriers and lead change.
            </p>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <blockquote className="text-xl italic text-gray-700">
                &ldquo;A church built on God&apos;s truth and grace has power to
                shine life into a world darkened by despair.&rdquo;
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
