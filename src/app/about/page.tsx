import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Child & Church Partners International - helping vulnerable children and struggling churches in the Philippines.",
};

const features = [
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
        backgroundVideo="/images/children-singing-hero.mp4"
      />

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
            <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/3-yo0YX7OG4?rel=0"
                title="Child & Church Partners Thanksgiving Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
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
              <Link href="/about" className="btn-secondary">
                Learn More About Us
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
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-2xl bg-neutral-off-white p-6 transition-all hover:shadow-lg"
              >
                <div>
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

      {/* Founders Quote */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 rounded-2xl bg-white p-8 shadow-sm">
              <blockquote className="mb-4 text-xl italic text-gray-700 sm:text-2xl">
                &ldquo;When we invest in the physical and spiritual needs of
                children today, and when we equip grassroots churches, we are
                strengthening families and the future of our nation.&rdquo;
              </blockquote>
              <div className="font-semibold text-accent-gold">
                — Dani and Rez Sindac
              </div>
            </div>
            <p className="text-lg text-gray-600">
              A church built on God&apos;s truth and grace has the power to
              shine life into a world in need of hope, healing, and redemption.
            </p>
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
