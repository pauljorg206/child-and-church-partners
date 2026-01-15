// Google Analytics event tracking utilities

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Check if gtag is available
function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(...args);
  }
}

// Generic event tracking
export function trackEvent({ action, category, label, value }: GTagEvent) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Donation tracking
export function trackDonation(params: {
  amount: number;
  currency?: string;
  programType: string;
  isRecurring: boolean;
}) {
  const { amount, currency = "USD", programType, isRecurring } = params;

  // Track as purchase/donation event
  gtag("event", "purchase", {
    transaction_id: `donation_${Date.now()}`,
    value: amount,
    currency: currency,
    items: [
      {
        item_id: programType,
        item_name: programType.replace(/-/g, " "),
        item_category: isRecurring ? "recurring_donation" : "one_time_donation",
        price: amount,
        quantity: 1,
      },
    ],
  });

  // Also track custom donation event for more granular reporting
  gtag("event", "donation", {
    event_category: "Donations",
    event_label: programType,
    value: amount,
    donation_type: isRecurring ? "recurring" : "one_time",
  });
}

// Newsletter signup tracking
export function trackNewsletterSignup(source?: string) {
  gtag("event", "sign_up", {
    method: "newsletter",
    event_category: "Newsletter",
    event_label: source || "footer",
  });
}

// Contact form submission tracking
export function trackContactSubmission(subject?: string) {
  gtag("event", "generate_lead", {
    event_category: "Contact",
    event_label: subject || "general",
  });
}

// Page view tracking (automatic with GoogleAnalytics component, but useful for SPAs)
export function trackPageView(url: string, title?: string) {
  gtag("event", "page_view", {
    page_path: url,
    page_title: title,
  });
}

// CTA button click tracking
export function trackCtaClick(ctaName: string, location: string) {
  gtag("event", "select_content", {
    content_type: "cta",
    event_category: "CTA",
    event_label: ctaName,
    cta_location: location,
  });
}

// Outbound link tracking
export function trackOutboundLink(url: string) {
  gtag("event", "click", {
    event_category: "Outbound",
    event_label: url,
    transport_type: "beacon",
  });
}
