import LegalPageLayout from "@/components/layout/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Child & Church Partners International - Learn how we collect, use, and protect your personal information.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-collected", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 15, 2026"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          Child & Church Partners International (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website at childandchurchpartners.org and use our services.
        </p>
        <p>
          We are a 501(c)(3) nonprofit organization registered in Texas, United
          States. By using our website, you consent to the data practices
          described in this policy.
        </p>
      </section>

      <section id="information-collected">
        <h2>Information We Collect</h2>

        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul>
          <li>Name and contact information (email address, phone number)</li>
          <li>Mailing address (for donation receipts)</li>
          <li>Payment information (processed securely through PayPal)</li>
          <li>Communication preferences</li>
          <li>Messages you send through our contact form</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain
          information about your device and usage, including:
        </p>
        <ul>
          <li>IP address and browser type</li>
          <li>Operating system</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
          <li>Device identifiers</li>
        </ul>
      </section>

      <section id="how-we-use">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process donations and provide tax receipts</li>
          <li>Send updates about our programs and impact (with your consent)</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Send administrative information (changes to terms, policies)</li>
        </ul>
      </section>

      <section id="information-sharing">
        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> With trusted third parties who
            assist us in operating our website and processing donations (such as
            PayPal for payment processing)
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law or to
            protect our rights, property, or safety
          </li>
          <li>
            <strong>Consent:</strong> With your explicit consent for specific
            purposes
          </li>
        </ul>
      </section>

      <section id="data-security">
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures
          to protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the Internet is 100% secure, and we cannot guarantee
          absolute security.
        </p>
        <p>
          Payment information is processed securely through PayPal and is never
          stored on our servers.
        </p>
      </section>

      <section id="your-rights">
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          provided at the end of this policy.
        </p>

        <h3>California Residents</h3>
        <p>
          If you are a California resident, you may have additional rights under
          the California Consumer Privacy Act (CCPA). Please contact us for more
          information about exercising these rights.
        </p>

        <h3>European Union Residents</h3>
        <p>
          If you are located in the European Union, you have rights under the
          General Data Protection Regulation (GDPR), including the right to
          access, rectify, port, and erase your data. Please contact us to
          exercise these rights.
        </p>
      </section>

      <section id="childrens-privacy">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for children under 13 years of age. We do
          not knowingly collect personal information from children under 13. If
          you believe we have collected information from a child under 13, please
          contact us immediately.
        </p>
        <p>
          Note: While our organization serves children in the Philippines through
          our sponsorship programs, the personal information of sponsored
          children is handled separately with appropriate safeguards and parental
          consent as required by local laws.
        </p>
      </section>

      <section id="third-party">
        <h2>Third-Party Services</h2>
        <p>Our website may contain links to third-party websites or use third-party services:</p>
        <ul>
          <li>
            <strong>PayPal:</strong> For secure payment processing. PayPal&apos;s
            privacy policy governs their handling of your payment information.
          </li>
          <li>
            <strong>YouTube:</strong> For embedded video content. Google&apos;s
            privacy policy applies when you interact with YouTube videos.
          </li>
          <li>
            <strong>Analytics:</strong> We may use analytics services to
            understand how visitors use our website.
          </li>
        </ul>
        <p>
          We encourage you to review the privacy policies of any third-party
          services you interact with.
        </p>
      </section>

      <section id="updates">
        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes by posting the new
          policy on this page and updating the &quot;Last Updated&quot; date.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically for any
          changes.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Information</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or our
          privacy practices, please contact us:
        </p>
        <p>
          <strong>Child & Church Partners International</strong>
          <br />
          Austin, Texas, USA
          <br />
          Email: info@childandchurchpartners.org
        </p>
      </section>
    </LegalPageLayout>
  );
}
