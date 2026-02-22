import HeroCarousel from "@/components/sections/HeroCarousel";
import StatsSection from "@/components/sections/StatsSection";
import VideoSection from "@/components/sections/VideoSection";
import CTASection from "@/components/sections/CTASection";
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
];

const heroImages = [
  "/images/photo-gallery/filipino-children-ministry-006.jpg",
  "/images/photo-gallery/feeding-ministry-children-001.jpg",
  "/images/photo-gallery/children-nutrition-outreach-009.jpeg",
  "/images/photo-gallery/child-church-partners-ministry-002.jpg",
  "/images/photo-gallery/church-worship-philippines-001.jpg",
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <HeroCarousel
        title="Overcome Barriers. Lead Change."
        subtitle="Child & Church Partners International is Transforming Lives Through Faith, Education, and Community in the Philippines"
        primaryCta={{ label: "Make a Difference", href: "/donate" }}
        secondaryCta={{ label: "Our Story", href: "/about" }}
        variant="centered"
        backgroundImages={heroImages}
      />

      {/* Statistics Section */}
      <StatsSection
        title="The Reality"
        subtitle="Millions Need Hope and Help. Together, We Can Make A Difference."
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

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Feeding Outreach Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/feeding-program-philippines-003.jpg"
                  alt="Children at a feeding outreach"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sponsor a Child
                  </h3>
                  <span className="text-lg font-semibold text-accent-gold">
                    $20/mo
                  </span>
                </div>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  <li>• Weekly nutritious meals</li>
                  <li>• Biblical teaching & friends</li>
                  <li>• 250 children ages 5-10</li>
                </ul>
                <Link
                  href="/donate"
                  className="btn btn-primary w-full text-center"
                >
                  Sponsor a Child
                </Link>
              </div>
            </div>

            {/* Student Sponsorship Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/scholars.jpg"
                  alt="Sponsored scholars"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sponsor a Student
                  </h3>
                  <span className="text-lg font-semibold text-accent-gold">
                    $25/mo
                  </span>
                </div>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  <li>• Tuition, computers & books</li>
                  <li>• Health & nutrition support</li>
                  <li>• 30 scholars, grade school to college</li>
                </ul>
                <Link
                  href="/donate"
                  className="btn btn-primary w-full text-center"
                >
                  Sponsor a Student
                </Link>
              </div>
            </div>

            {/* Church Sponsorship Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/church.jpeg"
                  alt="Church in the Philippines"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Sponsor a Church
                  </h3>
                  <span className="text-lg font-semibold text-accent-gold">
                    $30/mo
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
          text: "Children are both a blessing and a responsibility. Our desire is to see them grow physically and spiritually, prepared to lead and serve with reverence for God. When we shepherd our children with truth and grace, we are strengthening the future of families and nations.",
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
                sizes="(max-width: 1024px) 100vw, 50vw"
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
