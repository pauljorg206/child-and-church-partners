export interface SearchItem {
  title: string;
  description: string;
  url: string;
  category: "page" | "faq" | "program";
  keywords?: string[];
}

export const searchData: SearchItem[] = [
  // Main Pages
  {
    title: "Home",
    description:
      "Child & Church Partners - Helping children and churches in the Philippines overcome barriers and lead change.",
    url: "/",
    category: "page",
    keywords: ["home", "main", "welcome"],
  },
  {
    title: "About Us",
    description:
      "Learn about Child & Church Partners, our mission, vision, and the work we do in the Philippines.",
    url: "/about",
    category: "page",
    keywords: ["about", "mission", "vision", "story"],
  },
  {
    title: "Our Founders",
    description:
      "Meet the founders of Child & Church Partners and learn about their journey.",
    url: "/about/founders",
    category: "page",
    keywords: ["founders", "leadership", "team"],
  },
  {
    title: "Our Inspiration",
    description:
      "Discover the inspiration behind Child & Church Partners and why we do what we do.",
    url: "/about/inspiration",
    category: "page",
    keywords: ["inspiration", "motivation", "why"],
  },
  {
    title: "What We Believe",
    description: "Our statement of faith and the beliefs that guide our work.",
    url: "/about/what-we-believe",
    category: "page",
    keywords: ["faith", "beliefs", "christian", "values"],
  },
  {
    title: "Financial Transparency",
    description:
      "How we use donations and our commitment to financial accountability.",
    url: "/about/financial-transparency",
    category: "page",
    keywords: ["finances", "transparency", "accountability", "donations"],
  },

  // Programs
  {
    title: "Why Children",
    description:
      "Learn about our child sponsorship program and how you can help children in the Philippines.",
    url: "/children",
    category: "program",
    keywords: ["children", "kids", "sponsorship", "sponsor a child"],
  },
  {
    title: "Why Churches",
    description:
      "Support small churches in the Philippines through our church partnership program.",
    url: "/churches",
    category: "program",
    keywords: ["churches", "church partnership", "ministry", "support"],
  },
  {
    title: "Where We Work",
    description:
      "Explore the regions in the Philippines where Child & Church Partners operates.",
    url: "/where-we-work",
    category: "page",
    keywords: ["location", "philippines", "regions", "communities"],
  },
  {
    title: "How Sponsorship Works",
    description:
      "Understanding how child and church sponsorship works at Child & Church Partners.",
    url: "/about/sponsorship-works",
    category: "page",
    keywords: ["sponsorship", "how it works", "process"],
  },

  // Get Involved
  {
    title: "Make a Difference",
    description:
      "Ways you can get involved and make a difference with Child & Church Partners.",
    url: "/give",
    category: "page",
    keywords: ["give", "donate", "help", "involvement"],
  },
  {
    title: "Give to Equip",
    description:
      "Support our equipping programs that train and resource local leaders.",
    url: "/give/equip",
    category: "page",
    keywords: ["equip", "training", "resources", "leaders"],
  },
  {
    title: "Donate",
    description:
      "Make a donation to support children and churches in the Philippines.",
    url: "/donate",
    category: "page",
    keywords: ["donate", "give", "contribution", "support", "money"],
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with Child & Church Partners. We'd love to hear from you.",
    url: "/contact",
    category: "page",
    keywords: ["contact", "email", "phone", "reach us", "message"],
  },

  // Other Pages
  {
    title: "Gallery",
    description:
      "Photos and images from our work with children and churches in the Philippines.",
    url: "/gallery",
    category: "page",
    keywords: ["photos", "images", "pictures", "gallery"],
  },
  {
    title: "FAQ",
    description:
      "Frequently asked questions about Child & Church Partners and our programs.",
    url: "/faq",
    category: "page",
    keywords: ["faq", "questions", "help", "answers"],
  },
  {
    title: "Privacy Policy",
    description:
      "Our privacy policy and how we handle your personal information.",
    url: "/privacy",
    category: "page",
    keywords: ["privacy", "policy", "data"],
  },
  {
    title: "Terms of Service",
    description:
      "Terms of service for using the Child & Church Partners website.",
    url: "/terms",
    category: "page",
    keywords: ["terms", "service", "legal"],
  },

  // FAQ Items
  {
    title: "How do I sponsor a child?",
    description:
      "Visit our donation page to start sponsoring a child for $35 per month. You can choose to sponsor a specific child or let us match you with a child in need.",
    url: "/faq",
    category: "faq",
    keywords: ["sponsor", "child", "how to", "start"],
  },
  {
    title: "How much does sponsorship cost?",
    description:
      "Child sponsorship is $35 per month. Church partnership is $50 per month. You can also make one-time donations of any amount.",
    url: "/faq",
    category: "faq",
    keywords: ["cost", "price", "amount", "sponsorship"],
  },
  {
    title: "Is my donation tax-deductible?",
    description:
      "Yes, Child & Church Partners is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.",
    url: "/faq",
    category: "faq",
    keywords: ["tax", "deductible", "501c3", "nonprofit"],
  },
  {
    title: "Can I visit the children or churches?",
    description:
      "Yes, we welcome sponsor visits! Contact us to plan a trip to meet your sponsored child or partner church in the Philippines.",
    url: "/faq",
    category: "faq",
    keywords: ["visit", "trip", "travel", "meet"],
  },
  {
    title: "How do I cancel my sponsorship?",
    description:
      "You can cancel your recurring sponsorship at any time by contacting us via email or phone. We understand circumstances change.",
    url: "/faq",
    category: "faq",
    keywords: ["cancel", "stop", "end", "sponsorship"],
  },
];
