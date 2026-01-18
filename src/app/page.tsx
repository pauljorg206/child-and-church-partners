import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import VideoSection from "@/components/sections/VideoSection";
import CTASection from "@/components/sections/CTASection";
import ImageStrip from "@/components/sections/ImageStrip";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    number: "10.5M",
    label: "Children in Poverty",
    description: "Filipino children living below the poverty line.",
    link: { label: "Learn More", href: "/children" },
  },
  {
    number: "35K+",
    label: "Untrained Pastors",
    description: "We provide resources for formal theological education.",
    link: { label: "Learn More", href: "/churches" },
  },
  {
    number: "250+",
    label: "Fed Weekly",
    description: "Children receiving nutritious meals through our outreach.",
    link: { label: "Learn More", href: "/give" },
  },
];

const impactImages = [
  {
    src: "/images/photo-gallery/child-education-support-001.jpg",
    alt: "Children learning in the Philippines",
  },
  {
    src: "/images/photo-gallery/church-worship-philippines-001.jpg",
    alt: "Church worship in the Philippines",
  },
  {
    src: "/images/photo-gallery/feeding-program-philippines-001.jpeg",
    alt: "Feeding program for children",
  },
  {
    src: "/images/photo-gallery/community-outreach-event-007.jpg",
    alt: "Community outreach event",
  },
];

const heroImages = [
  "/images/photo-gallery/child-church-partners-ministry-001.jpg",
  "/images/photo-gallery/feeding-ministry-children-001.jpg",
  "/images/photo-gallery/children-nutrition-outreach-009.jpeg",
  "/images/photo-gallery/child-church-partners-ministry-002.jpg",
  "/images/photo-gallery/church-worship-philippines-001.jpg",
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <Hero
        title="Overcome Barriers. Lead Change."
        subtitle="Transforming Lives Through Education, Faith, and Community in the Philippines"
        primaryCta={{ label: "Make a Difference", href: "/donate" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
        variant="centered"
        backgroundImages={heroImages}
      />

      {/* Impact Image Strip */}
      <ImageStrip images={impactImages} />

      {/* Statistics Section */}
      <StatsSection
        title="The Reality"
        subtitle="Millions Need Hope. Together, We Can Reach Them"
        stats={stats}
        background="white"
      />

      {/* Programs Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Become Part of the Solution
            </h2>
            <p className="mx-auto max-w-xl text-gray-200">
              Help Children and Churches Overcome, Thrive, and Lead Change
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Child Sponsorship Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/sponsored-child-philippines-002.jpg"
                  alt="Sponsored child in the Philippines"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sponsor a Child
                  </h3>
                  <span className="text-lg font-semibold text-accent-gold">
                    $35/mo
                  </span>
                </div>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  <li>• Education & school supplies</li>
                  <li>• Health & nutrition support</li>
                  <li>• Community & spiritual growth</li>
                </ul>
                <Link
                  href="/donate"
                  className="btn btn-primary w-full text-center"
                >
                  Sponsor a Child
                </Link>
              </div>
            </div>

            {/* Church Sponsorship Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/pastor-training-philippines-001.jpg"
                  alt="Pastor training in the Philippines"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sponsor a Church
                  </h3>
                  <span className="text-lg font-semibold text-accent-gold">
                    $50/mo
                  </span>
                </div>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  <li>• Pastor training & resources</li>
                  <li>• Ministry equipment & materials</li>
                  <li>• Outreach & community impact</li>
                </ul>
                <Link
                  href="/donate"
                  className="btn btn-primary w-full text-center"
                >
                  Sponsor a Church
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection
        title="See the Impact"
        description="Watch How Generosity Transforms Lives"
        videoId="3-yo0YX7OG4"
        quote={{
          text: "Through Child & Church Partners, we've seen lives transformed and communities changed forever.",
          author: "Dani Sindac",
          title: "Co-Founder",
        }}
      />

      {/* Founders Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Born in the Philippines, Dani and Rez Sindac dedicate their
                lives to serving children and equipping pastors to raise
                next-generation leaders.
              </p>
              <Link href="/about/founders" className="btn-secondary">
                Read Our Story
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
              <Image
                src="/images/received_571220392093528.jpeg"
                alt="Dani and Rez Sindac, Founders"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Solid Blue Background */}
      <section className="bg-primary-blue py-20">
        <div className="container-site text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Change Lives?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200">
            Your Generosity Transforms Futures and Strengthens Communities
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="btn bg-accent-gold text-gray-900 hover:bg-yellow-400"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
