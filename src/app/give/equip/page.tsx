import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give to Equip",
  description:
    "Help build an equipping center for Filipino pastors. Support pastor training and theological education.",
};

export default function GiveToEquipPage() {
  const raised = 22000;
  const goal = 35000;
  const percentage = Math.round((raised / goal) * 100);

  return (
    <>
      <Hero
        title="Give to Equip"
        subtitle="Building an equipping center for Filipino pastors serving the poor in the Philippines."
        variant="simple"
      />

      {/* Campaign Overview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                In the Philippines, more than 35,000 pastors lead churches
                without formal Bible training.
              </h2>
              <p className="text-lg text-gray-600">
                They love Jesus. They work hard. But many were never trained to
                preach or teach the Bible properly.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12 rounded-2xl bg-neutral-off-white p-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-accent-gold">
                    ${raised.toLocaleString()}
                  </div>
                  <div className="text-gray-600">
                    raised of ${goal.toLocaleString()} goal
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary-blue">
                  {percentage}%
                </div>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div
                  className="h-4 rounded-full bg-accent-gold transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* The Challenge */}
            <div className="prose prose-lg max-w-none">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                The Challenge
              </h3>
              <p className="mb-4 text-gray-600">
                Some have only finished high school. Many juggle ministry and
                daily labor. And yet, they keep going. Because they are called.
              </p>
              <p className="mb-4 text-gray-600">
                They are shepherds trying their best to feed God&apos;s people
                but often lacking in training and support. They serve in places
                where seminaries, libraries, and Bible resources simply
                don&apos;t exist.
              </p>
              <p className="mb-8 text-xl font-semibold text-primary-blue">
                BUT WE CAN HELP CHANGE THIS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Stories */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Meet the Pastors
            </h2>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Pastor Ed Genotiva
                </h3>
                <p className="mb-4 font-medium text-accent-gold">
                  Polillo Island, Quezon, Philippines
                </p>
                <p className="mb-4 text-gray-600">
                  Pastor Ed leads a small church on remote Polillo Island, a
                  place where reaching the mainland requires a long boat ride
                  across often rough waters. There are no seminaries here. No
                  Christian bookstores. No theological libraries.
                </p>
                <p className="mb-4 text-gray-600">
                  Like many Filipino pastors, Pastor Ed never had the
                  opportunity for formal Bible training. He works hard during
                  the week to provide for his family, then faithfully shepherds
                  his congregation on Sundays. He loves Jesus deeply and pours
                  himself into his community.
                </p>
                <p className="text-gray-600">
                  But he knows there&apos;s more to learn. He wants to
                  understand Scripture more deeply so he can teach it more
                  faithfully. Your support can help equip Pastor Ed—and hundreds
                  of pastors like him—to preach God&apos;s Word with clarity,
                  confidence, and integrity.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8">
                <blockquote className="mb-4 text-xl italic text-gray-700">
                  &ldquo;I want to learn more how to rightly handle the word of
                  God.&rdquo;
                </blockquote>
                <div className="font-semibold text-gray-900">
                  — Pastor Jun Omboy
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Pastor Jun represents thousands of Filipino pastors who are
                  hungry to grow in their understanding of Scripture. They serve
                  faithfully with what they have, but they long for the training
                  that will help them serve even better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">The Impact</h2>
            <p className="mb-4 text-lg text-gray-200">
              Pastors who are equipped to preach God&apos;s Word do so with
              responsibility, care and integrity. They teach sound doctrine with
              clarity and confidence, helping believers grow deeper in their
              relationship with Jesus.
            </p>
            <p className="text-lg text-gray-200">
              This kind of teaching leads to true transformation — both of the
              heart and the mind.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Join the Movement
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Your gift of any amount helps us reach our goal of $35,000 to
              build an equipping center for Filipino pastors.
            </p>

            {/* Suggested Amounts */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[50, 100, 250, 500].map((amount) => (
                <button
                  key={amount}
                  className="rounded-xl border-2 border-gray-200 px-6 py-4 font-bold text-gray-900 transition-all hover:border-accent-gold hover:bg-accent-gold/10"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <a href="/donate" className="btn-primary w-full text-lg sm:w-auto">
              Give Now
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Help Us Reach Our Goal"
        description="Every dollar brings us closer to equipping pastors to faithfully preach God's Word."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Share This Campaign", href: "#" }}
        background="gold"
      />
    </>
  );
}
