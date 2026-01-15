import LegalPageLayout from "@/components/layout/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Child & Church Partners International - Read our terms and conditions for using our website and services.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "description", title: "Description of Services" },
  { id: "donations", title: "Donation Terms" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 15, 2026"
      sections={sections}
    >
      <section id="acceptance">
        <h2>Acceptance of Terms</h2>
        <p>
          Welcome to Child & Church Partners International. By accessing or using
          our website at childandchurchpartners.org (&quot;Website&quot;), you agree to be
          bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all
          of these Terms, please do not use our Website.
        </p>
        <p>
          These Terms apply to all visitors, users, and others who access or use
          our Website and services.
        </p>
      </section>

      <section id="description">
        <h2>Description of Services</h2>
        <p>
          Child & Church Partners International is a 501(c)(3) nonprofit
          organization dedicated to helping children and churches in the
          Philippines overcome barriers and lead change. Through our Website, we
          provide:
        </p>
        <ul>
          <li>Information about our mission, programs, and impact</li>
          <li>Opportunities to donate and support our work</li>
          <li>Child and church sponsorship programs</li>
          <li>News, updates, and resources about our ministry</li>
          <li>Contact and communication services</li>
        </ul>
      </section>

      <section id="donations">
        <h2>Donation Terms</h2>

        <h3>General Donations</h3>
        <p>
          All donations made to Child & Church Partners International are
          voluntary contributions to support our charitable mission. By making a
          donation, you acknowledge and agree to the following:
        </p>
        <ul>
          <li>
            Donations are processed securely through PayPal and are subject to
            PayPal&apos;s terms of service
          </li>
          <li>
            You are the authorized user of the payment method used for the
            donation
          </li>
          <li>
            The information you provide is accurate and complete
          </li>
        </ul>

        <h3>Tax-Deductible Status</h3>
        <p>
          Child & Church Partners International is a registered 501(c)(3)
          nonprofit organization. Donations are tax-deductible to the extent
          allowed by law. We will provide donation receipts for your records.
          Please consult with a tax professional regarding the deductibility of
          your contribution.
        </p>

        <h3>Recurring Donations</h3>
        <p>
          If you sign up for recurring donations (such as monthly child or church
          sponsorship), you authorize us to charge your payment method on a
          recurring basis until you cancel. You may cancel recurring donations at
          any time by contacting us.
        </p>

        <h3>Refund Policy</h3>
        <p>
          Due to the nature of charitable contributions, donations are generally
          non-refundable. However, if you believe a donation was made in error or
          without your authorization, please contact us immediately, and we will
          work with you to resolve the issue.
        </p>

        <h3>Use of Donations</h3>
        <p>
          We strive to use donations for their designated purposes. If a specific
          program or project is overfunded or cannot be completed, we reserve the
          right to use the funds where they are needed most within our charitable
          mission.
        </p>
      </section>

      <section id="user-responsibilities">
        <h2>User Responsibilities</h2>
        <p>When using our Website, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information</li>
          <li>Use the Website only for lawful purposes</li>
          <li>
            Not attempt to gain unauthorized access to any portion of the Website
          </li>
          <li>
            Not interfere with or disrupt the Website or servers connected to it
          </li>
          <li>
            Not use the Website to transmit harmful or malicious content
          </li>
          <li>
            Not impersonate any person or entity or misrepresent your affiliation
          </li>
        </ul>
      </section>

      <section id="intellectual-property">
        <h2>Intellectual Property</h2>
        <p>
          The content on our Website, including but not limited to text, graphics,
          logos, images, and software, is the property of Child & Church Partners
          International or our content suppliers and is protected by copyright and
          other intellectual property laws.
        </p>
        <p>
          You may view, download, and print content from our Website for personal,
          non-commercial use only. You may not modify, reproduce, distribute, or
          commercially exploit any content without our prior written permission.
        </p>
        <p>
          The Child & Church Partners name and logo are trademarks of our
          organization. You may not use these marks without our prior written
          consent.
        </p>
      </section>

      <section id="disclaimers">
        <h2>Disclaimers</h2>
        <p>
          THE WEBSITE AND ALL CONTENT, MATERIALS, AND SERVICES PROVIDED ON OR
          THROUGH THE WEBSITE ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
          WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
        </p>
        <p>
          We do not warrant that the Website will be uninterrupted, error-free, or
          free of viruses or other harmful components. We do not warrant the
          accuracy, completeness, or usefulness of any information on the Website.
        </p>
        <p>
          Any reliance you place on such information is strictly at your own risk.
        </p>
      </section>

      <section id="limitation-liability">
        <h2>Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, CHILD & CHURCH PARTNERS
          INTERNATIONAL AND ITS OFFICERS, DIRECTORS, EMPLOYEES, VOLUNTEERS, AND
          AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR
          USE OF OR INABILITY TO USE THE WEBSITE.
        </p>
        <p>
          IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID
          TO US, IF ANY, IN THE SIX (6) MONTHS PRIOR TO THE CLAIM.
        </p>
      </section>

      <section id="indemnification">
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Child & Church
          Partners International and its officers, directors, employees,
          volunteers, and agents from and against any claims, liabilities,
          damages, losses, and expenses (including reasonable attorneys&apos; fees)
          arising out of or in any way connected with your use of the Website or
          violation of these Terms.
        </p>
      </section>

      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Texas, United States, without regard to its
          conflict of law provisions.
        </p>
        <p>
          Any disputes arising under or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts located in Travis
          County, Texas.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide
          notice of material changes by posting the updated Terms on this page and
          updating the &quot;Last Updated&quot; date.
        </p>
        <p>
          Your continued use of the Website after any changes constitutes your
          acceptance of the new Terms. We encourage you to review these Terms
          periodically.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us:
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
