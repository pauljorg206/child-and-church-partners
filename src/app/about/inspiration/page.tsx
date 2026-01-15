import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
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
      "We believe faith must be expressed through tangible acts of love and service. James 2:17 reminds us that faith without works is dead.",
    verse: "Faith by itself, if it does not have works, is dead.",
    reference: "James 2:17",
  },
  {
    title: "Dignity of Every Child",
    description:
      "Every child is created in God's image and deserves the opportunity to thrive. We work to ensure no child is held back by circumstances of birth.",
    verse:
      "Let the little children come to me... for the kingdom of heaven belongs to such as these.",
    reference: "Matthew 19:14",
  },
  {
    title: "Empowering the Local Church",
    description:
      "We believe the local church is God's plan for community transformation. By strengthening churches, we multiply our impact across generations.",
    verse:
      "I will build my church, and the gates of hell shall not prevail against it.",
    reference: "Matthew 16:18",
  },
  {
    title: "Lasting Transformation",
    description:
      "We seek not just to meet immediate needs, but to break cycles of poverty and create pathways to sustainable change.",
    verse:
      "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    reference: "Galatians 6:9",
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
                  business plan—it began with a calling. For decades before our
                  official founding in 2017, our founders Dani and Rez Sindac
                  served alongside Filipino pastors and communities through The
                  Valley Cathedral Philippines.
                </p>
                <p className="mb-4 text-gray-600">
                  They witnessed firsthand the challenges facing children in
                  poverty: lack of educational resources, limited opportunities,
                  and the struggle to break generational cycles. They also saw
                  something else—the incredible resilience of Filipino families
                  and the transformative power of local churches.
                </p>
                <p className="text-gray-600">
                  These experiences shaped a vision: what if we could
                  systematically connect sponsors with children and churches,
                  creating lasting partnerships that transform lives?
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/6ebd37_f3a5ad9f77714fd085d1f6ad9e6ed71f~mv2.jpeg"
                  alt="Children in the Philippines"
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

      {/* Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Vision for Transformation
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-blue/10">
                  <svg
                    className="h-10 w-10 text-primary-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Educated Children
                </h3>
                <p className="text-gray-600">
                  We envision every sponsored child completing their education
                  and gaining the skills to build a better future for themselves
                  and their communities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold/10">
                  <svg
                    className="h-10 w-10 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Thriving Churches
                </h3>
                <p className="text-gray-600">
                  We see local churches equipped with trained pastors and
                  resources to serve their communities, becoming beacons of hope
                  and transformation.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-red/10">
                  <svg
                    className="h-10 w-10 text-primary-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Transformed Communities
                </h3>
                <p className="text-gray-600">
                  We dream of communities where children grow up with
                  opportunity, churches lead positive change, and cycles of
                  poverty are broken for good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story of Hope */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                Stories That Inspire Us Daily
              </h2>
              <p className="mb-6 text-gray-600">
                Every day, we&apos;re inspired by the stories of children
                overcoming obstacles, pastors serving sacrificially, and
                communities being transformed. Like the story of a young girl
                who, through sponsorship, was able to stay in school and is now
                pursuing her dream of becoming a teacher. Or the small rural
                church that, with support from sponsors, started a feeding
                program that now serves dozens of children each week.
              </p>
              <p className="mb-6 text-gray-600">
                These aren&apos;t just success stories—they&apos;re reminders of
                why we do what we do. Each sponsored child represents a life
                full of potential. Each supported church represents a community
                being touched by God&apos;s love.
              </p>
              <p className="font-medium text-gray-700">
                This is what inspires us: the knowledge that together, we can
                help children and churches overcome barriers and lead change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Be Part of the Story
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Our inspiration comes not just from the past, but from the future
              we believe is possible. A future where every child has the chance
              to thrive, where every church is equipped to serve, and where
              communities are transformed by hope.
            </p>
            <p className="text-lg font-medium text-gray-700">
              Will you join us in making this vision a reality?
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
