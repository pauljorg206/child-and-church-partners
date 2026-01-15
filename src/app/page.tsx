import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import VideoSection from "@/components/sections/VideoSection";
import CTASection from "@/components/sections/CTASection";
import ProgramCard from "@/components/cards/ProgramCard";
import NewsletterForm from "@/components/forms/NewsletterForm";
import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    number: "10.5 MILLION",
    label: "Children in Poverty",
    description:
      "As of 2021, approximately 10.5 million children in the Philippines were living in poverty.",
    link: { label: "Learn More", href: "/children" },
  },
  {
    number: "40,000",
    label: "Pastors Without Training",
    description:
      "Between 35,000 to 40,000 Filipino pastors lack formal theological education.",
    link: { label: "Learn More", href: "/churches" },
  },
  {
    number: "250+",
    label: "Children Fed Weekly",
    description:
      "Through our feeding outreach, children receive nutritious meals every week.",
    link: { label: "Learn More", href: "/give" },
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="HELPING POOR CHILDREN AND SMALL CHURCHES IN THE PHILIPPINES OVERCOME BARRIERS AND LEAD CHANGE"
        subtitle="Join us in transforming lives through education, spiritual growth, and community support."
        primaryCta={{ label: "Make a Difference", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
        variant="centered"
      />

      {/* Statistics Section */}
      <StatsSection
        title="THE HARD TRUTH"
        subtitle="The challenges facing children and churches in the Philippines are immense, but together we can make a difference."
        stats={stats}
        background="white"
      />

      {/* Mission Cards Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Be a Dream Releaser
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              Help poor children and struggling churches in the Philippines
              overcome, thrive and inspire change in their communities.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <ProgramCard
              title="Sponsor a Child"
              amount="$35/month"
              bulletPoints={[
                "Transportation and lunch assistance",
                "School supplies and projects",
                "Health and nutrition support",
                "Vibrant church community",
              ]}
              ctaLabel="Sponsor a Child"
              ctaHref="/donate"
            />
            <ProgramCard
              title="Sponsor a Church"
              amount="$50/month"
              bulletPoints={[
                "Outreach events and training",
                "Musical instruments and chairs",
                "Sunday school materials",
                "Urgent ministry needs",
              ]}
              ctaLabel="Sponsor a Church"
              ctaHref="/donate"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection
        title="See Our Impact"
        description="Watch how your generosity is transforming lives in the Philippines."
        videoId="3-yo0YX7OG4"
        quote={{
          text: "Through Child & Church Partners, we've seen lives transformed and communities changed forever.",
          author: "Dani Sindac",
          title: "Co-Founder",
        }}
      />

      {/* Trust Indicators */}
      <section className="border-y border-gray-200 bg-white py-8">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 sm:gap-12">
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-accent-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">501(c)(3) Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-accent-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Since 2017</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-accent-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Financial Transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
              <Image
                src="/images/received_571220392093528.jpeg"
                alt="Dani and Rez Sindac, Founders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Born and raised in the Philippines, Dani and Rez Sindac have
                dedicated their lives to serving children and churches. Through
                Child & Church Partners, they continue to walk alongside pastors
                in the Philippines—encouraging, equipping, and supporting them
                as they raise next-generation leaders.
              </p>
              <Link href="/about/founders" className="btn-secondary">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Stay Connected
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Get updates on the lives you&apos;re changing and stories from the
              field.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Make a Difference?"
        description="Your generosity can transform a child's future and strengthen a church's ministry."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        background="gold"
      />
    </>
  );
}
