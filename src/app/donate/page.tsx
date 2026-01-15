"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const DonationForm = dynamic(() => import("@/components/forms/DonationForm"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-primary-blue" />
    </div>
  ),
});

const donationOptions = [
  {
    id: "child",
    title: "Sponsor a Child",
    amount: 35,
    description:
      "Education, health support, and community for a child in need.",
    recurring: true,
  },
  {
    id: "church",
    title: "Sponsor a Church",
    amount: 50,
    description: "Training, resources, and support for a local church.",
    recurring: true,
  },
  {
    id: "backpack",
    title: "Back-to-School Backpack",
    amount: 25,
    description: "Provide school supplies for a child.",
    recurring: false,
  },
  {
    id: "feeding",
    title: "Feeding Program",
    amount: 15,
    description: "Feed a child for a month.",
    recurring: false,
  },
  {
    id: "equip",
    title: "Give to Equip",
    amount: null,
    description: "Support pastor training and education.",
    recurring: false,
  },
  {
    id: "general",
    title: "Where Most Needed",
    amount: null,
    description: "Support urgent needs and general operations.",
    recurring: false,
  },
];

export default function DonatePage() {
  return (
    <>
      <Hero
        title="Donate"
        subtitle="Your generosity transforms lives and communities in the Philippines."
        variant="simple"
      />

      {/* Donation Form Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <DonationForm options={donationOptions} />
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-padding bg-neutral-off-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Other Ways to Give
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Send a Check
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Make checks payable to &quot;Child & Church Partners
                  International&quot; and mail to:
                </p>
                <address className="mb-4 text-sm not-italic text-gray-600">
                  Child & Church Partners International
                  <br />
                  Austin, TX 78750
                  <br />
                  USA
                </address>
                <p className="text-xs text-gray-500">
                  <a
                    href="/contact"
                    className="text-primary-blue transition-colors hover:text-blue-700"
                  >
                    Contact us
                  </a>{" "}
                  for our complete mailing address.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Bank Transfer
                </h3>
                <p className="text-sm text-gray-600">
                  For wire transfers or bank-to-bank transfers, please contact
                  us directly for banking information.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-block text-sm font-medium text-primary-blue transition-colors hover:text-blue-700"
                >
                  Contact Us &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Deductible Notice */}
      <section className="bg-white py-8">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-gray-600">
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
              <p className="text-sm">
                Child & Church Partners International is a 501(c)(3) nonprofit
                organization. All donations are tax-deductible to the extent
                allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
