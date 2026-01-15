import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Founders",
  description:
    "Meet Dani and Rez Sindac, the founders of Child & Church Partners International.",
};

const timeline = [
  {
    year: "1987",
    title: "Valley Cathedral Philippines Founded",
    description:
      "The Valley Cathedral Philippines was founded by Zelma Houser, laying the groundwork for future ministry.",
  },
  {
    year: "1990",
    title: "Ministry Begins",
    description:
      "Dani and Rez became involved with The Valley Cathedral Philippines, beginning their journey of service.",
  },
  {
    year: "1993",
    title: "Seminary Training",
    description:
      "The Valley Cathedral Phoenix recognized Dani and Rez's calling and sent them to study at a theological seminary in Cleveland, Tennessee.",
  },
  {
    year: "2000",
    title: "Coming to America",
    description:
      "Dani came to America with one suitcase, $500 in his pocket, and a dream — to start a Filipino church in Arizona. Rez followed with their four young children.",
  },
  {
    year: "2009",
    title: "Church Plant in Texas",
    description:
      "After nine years in Arizona, Dani and Rez moved to Austin, Texas, where they planted another church.",
  },
  {
    year: "2017",
    title: "Child & Church Partners Founded",
    description:
      "Dani and Rez registered Child & Church Partners International with the Office of the Secretary of State in Austin, Texas.",
  },
  {
    year: "Today",
    title: "Continuing the Mission",
    description:
      "Through Child & Church Partners, Dani and Rez continue to walk alongside pastors in the Philippines—encouraging, equipping, and supporting them.",
  },
];

export default function FoundersPage() {
  return (
    <>
      <Hero
        title="Our Founders"
        subtitle="The story of Child & Church Partners began long before it was officially founded."
        variant="simple"
      />

      {/* Founders Introduction */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/received_571220392093528.jpeg"
                alt="Dani and Rez Sindac, Founders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Dani and Rez Sindac
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Born and raised in the Philippines, Dani and Rez Sindac have
                dedicated their lives to serving children and churches. They
                have served as church planters, pastors, and worship leaders in
                the Philippines, Arizona, and Texas.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Their journey has taken them from the villages of the
                Philippines to the cities of America, but their heart has always
                remained with the people they left behind.
              </p>
              <p className="text-lg text-gray-600">
                Through Child & Church Partners, they continue to walk alongside
                pastors in the Philippines—encouraging, equipping, and
                supporting them as they raise next-generation leaders, share
                Christ&apos;s love with children and families, and transform lives
                for God&apos;s glory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-gold transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-8 md:mb-12 ${
                    index % 2 === 0
                      ? "md:pr-1/2 md:text-right"
                      : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-accent-gold font-bold text-lg mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-accent-gold rounded-full transform -translate-x-1/2 ring-4 ring-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-primary-blue">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl text-white italic mb-6">
              &ldquo;We believe that when we invest in children and churches, we
              invest in the future of the Philippines. Every child we sponsor,
              every pastor we equip, every church we support—it all contributes
              to a brighter tomorrow.&rdquo;
            </blockquote>
            <div className="text-accent-gold font-semibold">
              — Dani and Rez Sindac
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Us in Making a Difference"
        description="Partner with Dani and Rez in their mission to help children and churches in the Philippines."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/give" }}
        background="gold"
      />
    </>
  );
}
