"use client";

import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import { useState } from "react";

export default function GiveToEquipPage() {
  const raised = 18000;
  const goal = 40000;
  const percentage = Math.round((raised / goal) * 100);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Training Leaders. Strengthening Faith.",
      text: "Help us build an Equipping Center for pastors in the Philippines!",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error
        console.log("Share cancelled");
      }
    } else {
      setShareMenuOpen(!shareMenuOpen);
    }
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Help build an Equipping Center for pastors in the Philippines! #ChildAndChurchPartners"
    );
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  return (
    <>
      <Hero
        title="Training Leaders. Strengthening Faith."
        subtitle="We are building an equipping center to help grassroots pastors faithfully preach God's Word, shepherd His people, and build healthy churches."
        variant="simple"
        backgroundImage="/images/photo-gallery/pastor-training-philippines-008.jpeg"
      />

      {/* Campaign Overview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Training Pastors to Transform Lives
              </h2>
              <p className="text-lg text-gray-600">
                Funding for the Equipping Center will provide pastors and youth
                leaders with a space to learn to teach and preach faithfully and
                effectively. Through proper theological training, we equip them
                to lead their communities, strengthen the church, and bring
                people closer to God—grounded in sound, truthful teaching.
              </p>
            </div>

            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/equipping-center-groundbreaking.jpeg"
                alt="Equipping Center groundbreaking ceremony"
                fill
                className="object-cover"
              />
            </div>

            {/* Progress Bar */}
            <div className="mb-12 rounded-2xl bg-neutral-off-white p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">
                Help Us Raise Funding for an Equipping Center!
              </h3>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-accent-gold">
                    $18K
                  </div>
                  <div className="text-gray-600">raised of $40K goal</div>
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
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Meet the Pastors
            </h2>

            <div className="space-y-8">
              {/* Pastor Ed - Image Left */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="grid md:grid-cols-5">
                  <div className="relative h-64 md:col-span-2 md:h-auto">
                    <Image
                      src="/images/pastor-ed-studying.jpeg"
                      alt="Pastor Ed Genotiva"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:col-span-3">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Pastor Ed Genotiva
                    </h3>
                    <p className="mb-4 font-medium text-accent-gold">
                      Polillo Island, Quezon, Philippines
                    </p>
                    <p className="mb-4 text-gray-900">
                      Pastor Ed leads a small church on remote Polillo Island, a
                      place where reaching the mainland requires a long boat
                      ride across often rough waters. There are no seminaries
                      here. No Christian bookstores. No theological libraries.
                    </p>
                    <p className="text-gray-900">
                      Like many Filipino pastors, Pastor Ed never had the
                      opportunity for formal Bible training. Your support can
                      help equip Pastor Ed—and hundreds of pastors like him—to
                      preach God&apos;s Word with clarity and confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastor Jun - Image Right */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="grid md:grid-cols-5">
                  <div className="p-8 md:col-span-3">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      Pastor Jun Omboy
                    </h3>
                    <p className="mb-4 font-medium text-accent-gold">
                      Church Pastor, Philippines
                    </p>
                    <p className="mb-4 text-gray-900">
                      Pastor Jun represents thousands of Filipino pastors who
                      are hungry to grow in their understanding of Scripture.
                      They serve faithfully with what they have, but they long
                      for the training that will help them serve even better.
                    </p>
                    <blockquote className="border-l-4 border-accent-gold pl-4 text-xl italic text-gray-700">
                      &ldquo;I want to learn more how to rightly handle the word
                      of God.&rdquo;
                    </blockquote>
                  </div>
                  <div className="relative h-64 md:order-last md:col-span-2 md:h-auto">
                    <Image
                      src="/images/pastor-jun-preaching.jpeg"
                      alt="Pastor Jun Omboy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
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
              Your gift of any amount helps us reach our goal of $40,000 to
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
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Share CTA Section */}
      <section className="section-padding bg-accent-gold">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Help Spread the Word
            </h2>
            <p className="mb-8 text-lg text-gray-800">
              Every dollar brings us closer to equipping pastors to faithfully
              preach God&apos;s Word.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/donate"
                className="btn bg-primary-blue text-white hover:bg-blue-700"
              >
                Donate Now
              </a>
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="btn border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  Share This Campaign
                </button>
                {shareMenuOpen && (
                  <div className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded-lg bg-white py-2 shadow-lg">
                    <button
                      onClick={shareToFacebook}
                      className="block w-full px-6 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={shareToTwitter}
                      className="block w-full px-6 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      X (Twitter)
                    </button>
                    <button
                      onClick={shareToLinkedIn}
                      className="block w-full px-6 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      LinkedIn
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
