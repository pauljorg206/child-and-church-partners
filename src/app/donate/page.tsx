import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const DonationFormWithPayPal = dynamic(() => import("./DonationFormWrapper"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center" role="status">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-primary-blue"
        aria-hidden="true"
      />
      <span className="sr-only">Loading donation form</span>
    </div>
  ),
});

const donationOptions = [
  {
    id: "child",
    title: "Sponsor a Child: Feeding Outreach",
    amount: 20,
    description:
      "Each week, your support provides a healthy meal for a child in need, along with biblical teaching and opportunities to make friends.",
    recurring: true,
  },
  {
    id: "student",
    title: "Sponsor a Student",
    amount: 25,
    description:
      "You can help a family break the cycle of poverty by supporting a student in completing their education.",
    recurring: true,
  },
  {
    id: "church",
    title: "Sponsor a Church",
    amount: 30,
    description:
      "Your generosity equips pastors of small rural churches with biblical training and practical resources to shepherd their congregations more effectively.",
    recurring: true,
  },
  {
    id: "backpack",
    title: "Back-to-School Blessing",
    amount: 20,
    description:
      "Your once-a-year sponsorship provides a child in need with a backpack filled with essential school supplies to help them get a head start in class.",
    recurring: false,
  },
  {
    id: "equip",
    title: "Give to Equip",
    amount: null,
    description:
      "Your financial support helps build our Equipping Center\u2014a place where pastors and emerging leaders grow in biblical knowledge, leadership, and the daily application of God\u2019s Word.",
    recurring: false,
  },
  {
    id: "general",
    title: "Other Urgent Needs",
    amount: null,
    description:
      "Help a small congregation build or repair their church. Bring hope and support to a community affected by storms and disasters.",
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
            <DonationFormWithPayPal options={donationOptions} />
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
                  International&quot;.
                </p>
                <a
                  href="/contact"
                  className="text-lg font-semibold text-primary-blue transition-colors hover:text-blue-700"
                >
                  Contact Us
                </a>{" "}
                <span className="text-sm text-gray-500">
                  for our mailing address.
                </span>
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

      {/* CFC Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-primary-blue p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Set Up Monthly Donations Through the CFC
              </h2>
              <p className="mb-6 text-gray-200">
                If you&apos;re a federal employee, you can support our mission
                through the Combined Federal Campaign (CFC), the official
                workplace giving program. CFC allows donors to give through
                easy, recurring payroll deductions or make a one-time gift.
                Simply search our name or use{" "}
                <strong className="text-accent-gold">CFC #53160</strong> when
                making your donation. Your support helps us create lasting
                impact.
              </p>
              <a
                href="https://cfcgiving.opm.gov/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-gold text-gray-900 hover:bg-yellow-400"
              >
                Learn More
              </a>
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
                aria-hidden="true"
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
