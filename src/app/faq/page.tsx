import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion, { FAQCategory } from "@/components/ui/FAQAccordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Child & Church Partners International, our sponsorship programs, donations, and more.",
};

const faqData = {
  general: [
    {
      question: "What is Child & Church Partners International?",
      answer:
        "Child & Church Partners International is a U.S.-based 501(c)(3) Christian nonprofit organization dedicated to helping children and churches in the Philippines overcome barriers and lead change. We work to provide education, spiritual development, and community support to vulnerable children and equip local churches to serve their communities.",
    },
    {
      question: "When was Child & Church Partners founded?",
      answer:
        "Child & Church Partners was officially founded in July 2017 by Dani and Rez Sindac in Austin, Texas. However, their ministry work in the Philippines began decades earlier through their involvement with The Valley Cathedral Philippines, a ministry founded in 1987.",
    },
    {
      question: "Are you a registered nonprofit organization?",
      answer:
        "Yes, Child & Church Partners International is a registered 501(c)(3) nonprofit organization with the IRS. This means your donations are tax-deductible to the extent allowed by law.",
    },
    {
      question: "Where do you operate?",
      answer:
        "Our work is focused in the Philippines, serving children and churches in various regions across the country. Our headquarters is in Austin, Texas, USA.",
    },
  ],
  childSponsorship: [
    {
      question: "How does child sponsorship work?",
      answer:
        "When you sponsor a child for $35 per month, your support provides educational assistance (transportation, school supplies), health and nutrition support, and connection to a vibrant church community. Your sponsorship helps break the cycle of poverty by giving children the resources they need to succeed.",
    },
    {
      question: "What does my $35 per month provide?",
      answer: (
        <div>
          <p className="mb-3">Your monthly sponsorship of $35 provides:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transportation and lunch assistance for school</li>
            <li>School supplies and project materials</li>
            <li>Health and nutrition support</li>
            <li>Connection to a supportive church community</li>
            <li>Spiritual development and mentorship</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I communicate with my sponsored child?",
      answer:
        "Yes! We encourage sponsors to connect with their sponsored children. You can send letters and messages through our organization, and we will facilitate communication. We also provide updates on your sponsored child's progress.",
    },
    {
      question: "What happens if I need to stop sponsoring?",
      answer:
        "We understand that circumstances change. If you need to cancel your sponsorship, simply contact us and we will help transition your sponsored child to another sponsor. We ask that you give us advance notice when possible so we can ensure continuity of support for the child.",
    },
    {
      question: "How are children selected for the sponsorship program?",
      answer:
        "Children are identified through our partner churches in the Philippines. We prioritize children from families experiencing financial hardship who would benefit most from educational and community support. Our local partners know their communities well and help identify children in need.",
    },
  ],
  churchSponsorship: [
    {
      question: "How does church sponsorship work?",
      answer:
        "Church sponsorship at $50 per month helps equip local churches in the Philippines to serve their communities effectively. Your support provides pastoral training, ministry resources, and helps churches conduct outreach programs.",
    },
    {
      question: "What does my $50 per month provide?",
      answer: (
        <div>
          <p className="mb-3">Your monthly church sponsorship of $50 helps provide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Outreach events and community programs</li>
            <li>Musical instruments and worship equipment</li>
            <li>Sunday school materials and curriculum</li>
            <li>Pastoral training and leadership development</li>
            <li>Support for urgent ministry needs</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How are churches selected for sponsorship?",
      answer:
        "We work with small, rural churches in the Philippines that are serving their communities but lack resources. These churches are led by dedicated pastors, many of whom have not had formal theological training. Our founders, Dani and Rez Sindac, personally know many of these pastors through decades of ministry in the Philippines.",
    },
    {
      question: "What is the 'Give to Equip' campaign?",
      answer:
        "Give to Equip is our special campaign to raise $35,000 to build an equipping center for Filipino pastors. In the Philippines, more than 35,000 pastors lead churches without formal Bible training. This center will provide pastoral education and resources to help them serve their congregations more effectively.",
    },
  ],
  donations: [
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes! Child & Church Partners International is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. We provide donation receipts for your tax records.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept donations through PayPal, which allows you to pay with credit card, debit card, or your PayPal balance. You can also send checks made payable to 'Child & Church Partners International' to our mailing address in Austin, Texas.",
    },
    {
      question: "Can I make a one-time donation instead of monthly?",
      answer:
        "Absolutely! While monthly sponsorship provides consistent support, we gratefully accept one-time donations of any amount. You can donate to general operations, specific campaigns like Back-to-School Backpacks or Feeding Outreach, or wherever the need is greatest.",
    },
    {
      question: "How is my donation used?",
      answer:
        "We are committed to using donations effectively and transparently. Your gifts support our programs directly, including child sponsorship, church sponsorship, feeding programs, and pastoral training. We strive to minimize administrative costs to maximize impact.",
    },
    {
      question: "Can I cancel my recurring donation?",
      answer:
        "Yes, you can cancel your recurring donation at any time by contacting us. We appreciate any advance notice you can provide so we can plan accordingly.",
    },
  ],
  transparency: [
    {
      question: "How do you ensure accountability?",
      answer:
        "We maintain transparency through regular updates to our donors, careful stewardship of funds, and accountability to our board of directors. Our founders, Dani and Rez Sindac, have personal relationships with our partner churches and visit the Philippines regularly to oversee our programs.",
    },
    {
      question: "Can I see financial reports?",
      answer:
        "Yes, we believe in financial transparency. As a 501(c)(3) organization, our Form 990 is publicly available. You can request additional financial information by contacting us directly.",
    },
    {
      question: "How do I know my donation is making a difference?",
      answer:
        "We provide regular updates through our newsletter, social media, and direct communication with sponsors. You can see the impact of your giving through our photo gallery, stories from the field, and our annual reports.",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our organization, programs, and how you can help."
        variant="simple"
      />

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <FAQCategory title="About Child & Church Partners">
              {faqData.general.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </FAQCategory>

            <FAQCategory title="Child Sponsorship">
              {faqData.childSponsorship.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </FAQCategory>

            <FAQCategory title="Church Sponsorship">
              {faqData.churchSponsorship.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </FAQCategory>

            <FAQCategory title="Donations">
              {faqData.donations.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </FAQCategory>

            <FAQCategory title="Transparency & Accountability">
              {faqData.transparency.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </FAQCategory>

            {/* Still have questions */}
            <div className="mt-12 p-8 bg-neutral-off-white rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re here to help! If you couldn&apos;t find the answer you&apos;re
                looking for, please don&apos;t hesitate to reach out.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Make a Difference?"
        description="Join us in helping children and churches in the Philippines overcome barriers and lead change."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/give" }}
        background="gold"
      />
    </>
  );
}
