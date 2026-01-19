import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Inspiration",
  description:
    "The inspiring story of Zelma Houser, who at 63 left everything to serve children and churches in the Philippines.",
};

export default function InspirationPage() {
  return (
    <>
      <Hero
        title="Our Inspiration"
        subtitle="The life and legacy of Zelma Houser (1924-2014)"
        variant="simple"
        backgroundImage="/images/photo-gallery/church-community-outreach-002.jpg"
      />

      {/* Zelma Introduction */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Zelma Houser
              </h2>
              <p className="text-xl text-accent-gold">
                &ldquo;Mommy Zelma&rdquo; (1924-2014)
              </p>
            </div>

            <div className="prose prose-lg mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-gray-700">
                We draw inspiration from the life example of a woman named{" "}
                <strong>Zelma Houser</strong>.
              </p>

              <p className="text-gray-600">
                &ldquo;Mommy Zelma,&rdquo; as everyone came to call her, was 63
                years old when she felt led by God to leave the comforts of home
                and the fellowship of family and friends in Phoenix, Arizona, to
                live in one of the poorest towns in Cavite, Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Walk of Faith */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/photo-gallery/ministry-philippines-ccpi-002.jpg"
                  alt="Ministry in the Philippines"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  A Walk of Faith
                </h2>
                <p className="mb-4 text-gray-600">
                  Imagine moving to a new country by yourself at retirement age.
                  You had no clue about the country&apos;s culture; you could
                  never pronounce correctly a single local word; you didn&apos;t
                  have much to live comfortably; and you didn&apos;t know
                  anybody.
                </p>
                <p className="text-gray-600">
                  It does sound like Abraham&apos;s walk of faith—when God told
                  him to{" "}
                  <em>
                    &ldquo;Depart from your country and your relatives, and come
                    into the land that I will show you.&rdquo;
                  </em>
                </p>
                <p className="mt-4 font-medium text-primary-blue">
                  And, like Abraham, Mommy Zelma held on to God&apos;s call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Early Years */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              The Early Years
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600">
                The first three years saw her living in run-down houses infested
                with roaches, riding overcrowded public transportation to go
                places, and caring for babies abandoned by their parents. She
                eventually met a Filipino couple, Pete and Lita, who became her
                most trusted ministry partners and friends.
              </p>
              <p className="text-gray-600">
                Mommy Zelma&apos;s daughter, Jan, said that if Pete and Lita
                hadn&apos;t been there for her, she might have returned to
                Phoenix.
              </p>
              <p className="text-gray-600">
                Eventually, Mommy Zelma&apos;s friends and church family started
                sending her financial support. Her mother church in Phoenix
                donated funds to buy a property in Naic, Cavite. On this piece
                of land, they built an orphanage, administrative offices, and
                apartments for Mommy Zelma, Pete and Lita, and visiting
                missionaries and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bible School & Prison Ministry */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              Transforming Lives Through God&apos;s Word
            </h2>
            <p className="mb-6 text-lg text-gray-200">
              Early on, Mommy Zelma discovered that many of the abandoned
              children had fathers who were in prison. So she started a Bible
              school inside the maximum security prison in a city outside of
              Manila.
            </p>
            <p className="text-lg text-gray-200">
              Her hope was that God&apos;s Word would change the hearts and
              minds of these men and that they would become better husbands,
              fathers, and neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Hope Did Not Disappoint */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  Hope Did Not Disappoint
                </h2>
                <p className="mb-4 text-gray-600">
                  Some of the men who graduated from the Bible school and in the
                  end got released from prison started their own churches and
                  became Valley Cathedral pastors.
                </p>
                <p className="mb-4 text-gray-600">
                  Mommy Zelma came to the Philippines not knowing what God had
                  in mind for her to do. She did not plan to start an orphanage
                  or a Bible school or build churches.
                </p>
                <p className="font-medium text-primary-blue">
                  She just walked in faith one step at a time and trusted God
                  for the journey.
                </p>
              </div>
              <div className="relative order-1 aspect-square overflow-hidden rounded-2xl shadow-lg md:order-2">
                <Image
                  src="/images/photo-gallery/pastor-training-philippines-003.jpeg"
                  alt="Pastor training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Her Legacy */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="mb-8 text-2xl italic text-gray-700 md:text-3xl">
              &ldquo;She wanted her life to account for something.&rdquo;
            </blockquote>
            <div className="prose prose-lg mx-auto text-left">
              <p className="text-gray-600">
                On December 13, 2014, God was pleased to take Mommy Zelma into
                her eternal home. She was 90 years old. Per her request, she was
                buried on the property under a mango tree—to be near her people
                whom she loved dearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuing Her Legacy */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/church-community-outreach-007.jpeg"
            alt="Community outreach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-blue/90" />
        </div>
        <div className="container-site relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Continuing Her Legacy
            </h2>
            <p className="mb-4 text-lg text-gray-200">
              Today, Child & Church Partners International continues the work
              that Mommy Zelma began—caring for children, equipping pastors, and
              strengthening churches throughout the Philippines.
            </p>
            <p className="text-xl font-medium text-accent-gold">
              Her faith inspires us to step out and trust God for the journey.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Her Legacy"
        description="Join us in continuing Mommy Zelma's mission to transform lives through faith, hope, and love."
        primaryCta={{ label: "Make a Difference", href: "/donate" }}
        secondaryCta={{ label: "Learn About Our Work", href: "/about" }}
        background="gold"
      />
    </>
  );
}
