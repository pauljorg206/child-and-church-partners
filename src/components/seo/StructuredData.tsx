export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://childandchurchpartners.org/#organization",
    name: "Child & Church Partners International",
    alternateName: "CCPI",
    url: "https://childandchurchpartners.org",
    logo: "https://childandchurchpartners.org/images/Child%20%26%20Church%20Partners%20LOGO%20TRANSPARENT.png",
    description:
      "U.S.-based Christian nonprofit organization helping children and churches in the Philippines fulfill their fullest potential and possibilities.",
    foundingDate: "2017",
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    email: "info@childandchurchpartners.org",
    nonprofitStatus: "Nonprofit501c3",
    taxID: "82-2285185",
    sameAs: [],
    slogan: "Overcome Barriers. Lead Change.",
    knowsAbout: [
      "Child sponsorship",
      "Church planting",
      "Pastor training",
      "Youth ministry",
      "Feeding programs",
      "Philippines missions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://childandchurchpartners.org/#website",
    url: "https://childandchurchpartners.org",
    name: "Child & Church Partners",
    description:
      "Helping poor children and small churches in the Philippines overcome barriers and lead change.",
    publisher: {
      "@id": "https://childandchurchpartners.org/#organization",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function DonateActionSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "@id": "https://childandchurchpartners.org/donate#action",
    name: "Donate to Child & Church Partners",
    description:
      "Support children and churches in the Philippines through your generous donation.",
    recipient: {
      "@id": "https://childandchurchpartners.org/#organization",
    },
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://childandchurchpartners.org/donate",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
