import LegalPageLayout from "@/components/layout/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Child & Church Partners International - Learn about how we use cookies on our website.",
};

const sections = [
  { id: "what-are-cookies", title: "What Are Cookies" },
  { id: "cookies-we-use", title: "Cookies We Use" },
  { id: "third-party", title: "Third-Party Cookies" },
  { id: "managing-cookies", title: "Managing Cookies" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="January 15, 2026"
      sections={sections}
    >
      <section id="what-are-cookies">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your device when you
          visit a website. They are widely used to make websites work more
          efficiently and provide useful information to website owners.
        </p>
        <p>
          Cookies can be &quot;persistent&quot; (remaining on your device for a
          set period) or &quot;session&quot; cookies (deleted when you close
          your browser).
        </p>
      </section>

      <section id="cookies-we-use">
        <h2>Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They
          enable basic features like page navigation and access to secure areas.
          The website cannot function properly without these cookies.
        </p>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 pr-4">Cookie</th>
              <th className="py-2 pr-4">Purpose</th>
              <th className="py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">Session</td>
              <td className="py-2 pr-4">Maintains user session state</td>
              <td className="py-2">Session</td>
            </tr>
          </tbody>
        </table>

        <h3>Analytics Cookies</h3>
        <p>
          We may use analytics cookies to understand how visitors interact with
          our website. This helps us improve the user experience and optimize
          our content.
        </p>
        <p>
          If we use analytics services, they collect information anonymously and
          report website trends without identifying individual visitors.
        </p>
      </section>

      <section id="third-party">
        <h2>Third-Party Cookies</h2>
        <p>
          Our website may include content from third-party services that may set
          their own cookies:
        </p>

        <h3>PayPal</h3>
        <p>
          When you make a donation through PayPal, PayPal may set cookies to
          process your payment securely. These cookies are governed by
          PayPal&apos;s privacy and cookie policies.
        </p>

        <h3>YouTube</h3>
        <p>
          We embed YouTube videos on our website. When you view these videos,
          YouTube may set cookies. These cookies are subject to Google&apos;s
          privacy and cookie policies.
        </p>
        <p>
          We use YouTube&apos;s privacy-enhanced mode where possible to minimize
          tracking until you interact with a video.
        </p>

        <h3>Social Media</h3>
        <p>
          If you share our content on social media platforms, those platforms
          may set cookies on your device. Please refer to the respective
          platform&apos;s cookie policies for more information.
        </p>
      </section>

      <section id="managing-cookies">
        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies in various ways. Please note that
          removing or blocking cookies may impact your user experience and some
          functionality may no longer be available.
        </p>

        <h3>Browser Settings</h3>
        <p>
          Most browsers allow you to refuse cookies or delete cookies that have
          already been set. The methods for doing so vary from browser to
          browser. You can typically find these settings in the
          &quot;Options&quot; or &quot;Preferences&quot; menu of your browser.
        </p>
        <ul>
          <li>
            <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
          </li>
          <li>
            <strong>Firefox:</strong> Options → Privacy & Security → Cookies
          </li>
          <li>
            <strong>Safari:</strong> Preferences → Privacy → Cookies
          </li>
          <li>
            <strong>Edge:</strong> Settings → Privacy & Services → Cookies
          </li>
        </ul>

        <h3>Opt-Out Links</h3>
        <p>
          For third-party advertising and analytics cookies, you may be able to
          opt out through:
        </p>
        <ul>
          <li>
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
          </li>
          <li>
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Advertising Alliance (DAA)
            </a>
          </li>
          <li>
            <a
              href="https://www.youronlinechoices.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your Online Choices (EU)
            </a>
          </li>
        </ul>
      </section>

      <section id="updates">
        <h2>Policy Updates</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons.
        </p>
        <p>
          We encourage you to check this page periodically for any changes. The
          &quot;Last Updated&quot; date at the top of this policy indicates when
          it was last revised.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie
          Policy, please contact us:
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
