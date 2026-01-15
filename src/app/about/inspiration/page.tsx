import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import ImageStrip from "@/components/sections/ImageStrip";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Inspiration",
  description:
    "Discover what inspires Child & Church Partners International - our biblical foundation, vision for transformation, and the stories that drive our mission.",
};

const coreValues = [
  {
    title: "Faith in Action",
    description:
      "We believe faith must be expressed through tangible acts of love and service.",
    verse: "Faith by itself, if it does not have works, is dead.",
    reference: "James 2:17",
  },
  {
    title: "Dignity of Every Child",
    description:
      "Every child is created in God's image and deserves the opportunity to thrive.",
    verse:
      "Let the little children come to me... for the kingdom of heaven belongs to such as these.",
    reference: "Matthew 19:14",
  },
  {
    title: "Empowering the Local Church",
    description:
      "We believe the local church is God's plan for community transformation.",
    verse:
      "I will build my church, and the gates of hell shall not prevail against it.",
    reference: "Matthew 16:18",
  },
  {
    title: "Lasting Transformation",
    description:
      "We seek not just to meet immediate needs, but to break cycles of poverty.",
    verse:
      "And let us not grow weary of doing good, for in due season we will reap.",
    reference: "Galatians 6:9",
  },
];

const inspirationImages = [
  {
    src: "/images/photo-gallery/child-sponsorship-program-002.jpg",
    alt: "Sponsored children in the Philippines",
  },
  {
    src: "/images/photo-gallery/church-worship-philippines-001.jpg",
    alt: "Church worship service",
  },
  {
    src: "/images/photo-gallery/feeding-program-philippines-003.jpg",
    alt: "Feeding program",
  },
  {
    src: "/images/photo-gallery/youth-leadership-training-001.jpg",
    alt: "Youth leadership training",
  },
];

export default function InspirationPage() {
  return (
    <>
      <Hero
        title="Our Inspiration"
        subtitle="The faith, calling, and vision that drive everything we do."
        variant="simple"
        backgroundImage="/images/photo-gallery/children-learning-philippines-001.jpg"
      />

      {/* Image Strip */}
      <ImageStrip images={inspirationImages} />

      {/* Opening Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  A Calling Decades in the Making
                </h2>
                <p className="mb-4 text-gray-600">
                  Child & Church Partners International didn&apos;t begin with a
                  business plan—it began with a calling. Our founders Dani and
                  Rez Sindac served alongside Filipino pastors for decades
                  before officially founding the organization in 2017.
                </p>
                <p className="text-gray-600">
                  They witnessed the challenges facing children in poverty and
                  the transformative power of local churches. These experiences
                  shaped a vision: connect sponsors with children and churches
                  to create lasting partnerships that transform lives.
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/photo-gallery/child-education-support-001.jpg"
                  alt="Children receiving education support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Our Biblical Foundation
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Everything we do flows from Scripture and our commitment to live
              out the Gospel through practical love.
            </p>
            <div className="rounded-2xl bg-white/10 p-8 md:p-12">
              <blockquote className="mb-4 font-serif text-2xl italic md:text-3xl">
                &ldquo;Religion that God our Father accepts as pure and
                faultless is this: to look after orphans and widows in their
                distress and to keep oneself from being polluted by the
                world.&rdquo;
              </blockquote>
              <cite className="text-lg text-accent-gold">James 1:27 (NIV)</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Values That Guide Us
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              These core values shape every decision, program, and partnership.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {coreValues.map((value, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mb-4 text-gray-600">{value.description}</p>
                <div className="border-l-4 border-accent-gold pl-4">
                  <p className="mb-1 italic text-gray-700">
                    &ldquo;{value.verse}&rdquo;
                  </p>
                  <p className="text-sm font-medium text-accent-gold">
                    {value.reference}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Images */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Vision for Transformation
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-neutral-off-white">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/children-learning-philippines-004.jpg"
                  alt="Children in classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Educated Children
                </h3>
                <p className="text-sm text-gray-600">
                  Every sponsored child completing their education and building
                  a better future.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-neutral-off-white">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/pastor-training-philippines-001.jpg"
                  alt="Pastor training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Thriving Churches
                </h3>
                <p className="text-sm text-gray-600">
                  Local churches equipped with trained pastors to serve their
                  communities.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-neutral-off-white">
              <div className="relative h-48">
                <Image
                  src="/images/photo-gallery/community-outreach-event-004.jpg"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Transformed Communities
                </h3>
                <p className="text-sm text-gray-600">
                  Communities where children thrive and cycles of poverty are
                  broken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story of Hope */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/photo-gallery/child-sponsorship-program-005.jpg"
                  alt="Sponsored child success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  Stories That Inspire Us
                </h2>
                <p className="mb-4 text-gray-600">
                  Every day, we&apos;re inspired by children overcoming
                  obstacles and pastors serving sacrificially. Like the young
                  girl who, through sponsorship, stayed in school and is now
                  pursuing her dream of becoming a teacher.
                </p>
                <p className="mb-4 text-gray-600">
                  Or the small rural church that started a feeding program now
                  serving dozens of children each week.
                </p>
                <p className="font-medium text-gray-700">
                  Each sponsored child represents a life full of potential. Each
                  supported church represents a community touched by God&apos;s
                  love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of the Story - with background image */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/church-community-outreach-002.jpg"
            alt="Community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-blue/90" />
        </div>
        <div className="container-site relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Be Part of the Story
            </h2>
            <p className="mb-4 text-lg text-gray-200">
              A future where every child thrives, every church is equipped, and
              communities are transformed by hope.
            </p>
            <p className="text-xl font-medium text-accent-gold">
              Will you join us?
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Let Your Faith Become Action"
        description="Transform lives through the power of consistent, caring support. Your sponsorship creates lasting change."
        primaryCta={{ label: "Sponsor a Child", href: "/children" }}
        secondaryCta={{ label: "Learn About Our Work", href: "/about" }}
        background="blue"
      />
    </>
  );
}
