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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                In the Philippines, more than 35,000 pastors lead churches
                without formal Bible training.
              </h2>
              <p className="text-lg text-gray-600">
                They love Jesus. They work hard. But many were never trained to
                preach or teach the Bible properly.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-neutral-off-white rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-accent-gold">
                    ${raised.toLocaleString()}
                  </div>
                  <div className="text-gray-600">raised of ${goal.toLocaleString()} goal</div>
                </div>
                <div className="text-4xl font-bold text-primary-blue">
                  {percentage}%
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-accent-gold h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            {/* The Challenge */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                Some have only finished high school. Many juggle ministry and
                daily labor. And yet, they keep going. Because they are called.
              </p>
              <p className="text-gray-600 mb-4">
                They are shepherds trying their best to feed God&apos;s people but
                often lacking in training and support. They serve in places
                where seminaries, libraries, and Bible resources simply don&apos;t
                exist.
              </p>
              <p className="text-xl font-semibold text-primary-blue mb-8">
                BUT WE CAN HELP CHANGE THIS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Stories */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Meet the Pastors
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pastor Ed Genotiva
                </h3>
                <p className="text-accent-gold font-medium mb-4">
                  Polillo Island, Quezon, Philippines
                </p>
                <p className="text-gray-600 mb-4">
                  Pastor Ed leads a small church on remote Polillo Island, a
                  place where reaching the mainland requires a long boat ride
                  across often rough waters. There are no seminaries here. No
                  Christian bookstores. No theological libraries.
                </p>
                <p className="text-gray-600 mb-4">
                  Like many Filipino pastors, Pastor Ed never had the
                  opportunity for formal Bible training. He works hard during
                  the week to provide for his family, then faithfully shepherds
                  his congregation on Sundays. He loves Jesus deeply and pours
                  himself into his community.
                </p>
                <p className="text-gray-600">
                  But he knows there&apos;s more to learn. He wants to understand
                  Scripture more deeply so he can teach it more faithfully. Your
                  support can help equip Pastor Ed—and hundreds of pastors like
                  him—to preach God&apos;s Word with clarity, confidence, and
                  integrity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  &ldquo;I want to learn more how to rightly handle the word of
                  God.&rdquo;
                </blockquote>
                <div className="font-semibold text-gray-900">
                  — Pastor Jun Omboy
                </div>
                <p className="text-gray-600 mt-4 text-sm">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">The Impact</h2>
            <p className="text-lg text-gray-200 mb-4">
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
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Movement
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your gift of any amount helps us reach our goal of $35,000 to
              build an equipping center for Filipino pastors.
            </p>

            {/* Suggested Amounts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[50, 100, 250, 500].map((amount) => (
                <button
                  key={amount}
                  className="py-4 px-6 border-2 border-gray-200 rounded-xl font-bold text-gray-900 hover:border-accent-gold hover:bg-accent-gold/10 transition-all"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <a href="/donate" className="btn-primary text-lg w-full sm:w-auto">
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
