import Hero from "@/components/sections/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support children and churches in the Philippines through your generous donation.",
};

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
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Donation Options */}
              <div className="lg:col-span-3">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Choose Your Impact
                </h2>

                <div className="space-y-4">
                  {donationOptions.map((option) => (
                    <div
                      key={option.id}
                      className="cursor-pointer rounded-xl border border-gray-200 p-4 transition-colors hover:border-accent-gold"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {option.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {option.description}
                          </p>
                        </div>
                        <div className="text-right">
                          {option.amount ? (
                            <>
                              <div className="text-xl font-bold text-accent-gold">
                                ${option.amount}
                              </div>
                              {option.recurring && (
                                <div className="text-xs text-gray-500">
                                  /month
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="text-sm text-gray-500">
                              Any amount
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Or enter a custom amount
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-4 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold"
                      />
                    </div>
                    <select className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-accent-gold">
                      <option value="once">One-time</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* PayPal Section */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-2xl bg-neutral-off-white p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Complete Your Donation
                  </h3>

                  <div className="space-y-4">
                    {/* PayPal Button Placeholder */}
                    <div className="cursor-pointer rounded-lg bg-[#0070ba] px-6 py-4 text-center font-semibold text-white transition-colors hover:bg-[#003087]">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72c.054-.37.371-.64.745-.64h6.568c2.179 0 3.934.614 5.218 1.825 1.327 1.251 1.814 2.986 1.449 5.157l-.008.052c-.494 3.15-2.207 4.992-4.71 5.903a10.06 10.06 0 0 1-3.406.574H8.252l-1.176 4.746z" />
                        </svg>
                        Donate with PayPal
                      </div>
                    </div>

                    <div className="text-center text-sm text-gray-500">or</div>

                    {/* Card Payment Placeholder */}
                    <button className="w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-accent-gold">
                      Debit or Credit Card
                    </button>
                  </div>

                  {/* Security Note */}
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Secure donation via PayPal
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
