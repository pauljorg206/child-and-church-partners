import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import ProgramCard from "@/components/cards/ProgramCard";
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
    description:
      "The majority of churches in the Philippines are small, rural congregations—often with fewer than 50 members, limited budgets, and pastors who work other jobs to support their families.",
  },
  {
    number: "35,000-40,000",
    label: "Untrained Pastors",
    description:
      "A study by the Philippine Council of Evangelical Churches found that between 35,000 to 40,000 Filipino pastors lack formal theological education, impacting the depth and accuracy of biblical teachings.",
  },
  {
    number: "85%",
    label: "Global Challenge",
    description:
      "According to Lausanne.org, approximately 85% of pastors worldwide lead churches without formal theological education. The Philippines faces this challenge acutely.",
  },
];

const testimonials = [
  {
    quote: "I want to learn more how to rightly handle the word of God.",
    name: "Pastor Jun Omboy",
    title: "Church Pastor",
  },
];

export default function WhyChurchesPage() {
  return (
    <>
      <Hero
        title="Why Churches"
        subtitle="Sponsor a church in the Philippines and help equip pastors to lead their communities."
        variant="simple"
      />

      {/* Quote Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl text-gray-700 italic mb-4">
              &ldquo;...and on this rock I will build my church, and the gates of
              hell shall not prevail against it.&rdquo;
            </blockquote>
            <cite className="text-accent-gold font-semibold">
              — Matthew 16:18
            </cite>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection
        title="THE CHALLENGE"
        subtitle="Churches in the Philippines face significant challenges in equipping their leaders."
        stats={stats}
        background="white"
      />

      {/* Hope Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              THERE IS HOPE
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              You can help struggling churches in the Philippines live out their
              calling to point people to Jesus. Your financial support will give
              pastors access to:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-accent-gold text-3xl mb-3">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Bible Training
                </h3>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-accent-gold text-3xl mb-3">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Leadership Development
                </h3>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-accent-gold text-3xl mb-3">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Books & Study Materials
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Impact
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Pastors will be equipped to preach God&apos;s Word faithfully and lead
              their congregations biblically. They teach sound doctrine with
              clarity and confidence, helping believers grow deeper in their
              relationship with Jesus.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Churches that are healthy and vibrant inspire hope and change in
              their communities. This kind of teaching leads to true
              transformation — both of the heart and the mind.
            </p>

            {/* Testimonial */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-off-white rounded-2xl p-8 text-center"
              >
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-600">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Card */}
      <section className="section-padding bg-accent-gold">
        <div className="container-site">
          <div className="max-w-md mx-auto">
            <ProgramCard
              title="Sponsor a Church"
              amount="$50/month"
              description="Your gift helps small rural churches serve their communities in tangible and lasting ways."
              bulletPoints={[
                "Outreach events and training",
                "Musical instruments and chairs",
                "Sunday school materials",
                "Urgent ministry needs",
              ]}
              ctaLabel="Sponsor a Church Today"
              ctaHref="/donate"
              variant="featured"
            />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl text-gray-700 italic">
              &ldquo;A church built on God&apos;s truth and grace has power to shine
              life into a world darkened by despair.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Support a Church?"
        description="Help church pastors and staff have access to pastoral training and leadership development."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/give/equip" }}
        background="blue"
      />
    </>
  );
}
