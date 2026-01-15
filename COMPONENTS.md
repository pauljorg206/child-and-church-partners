# Component Library Documentation

This document describes the reusable components available in this project.

## Table of Contents

- [Layout Components](#layout-components)
- [Section Components](#section-components)
- [Card Components](#card-components)
- [Form Components](#form-components)
- [UI Components](#ui-components)
- [Utility Functions](#utility-functions)

---

## Layout Components

### Header

**Location**: `src/components/layout/Header.tsx`

Sticky navigation header with desktop/mobile responsive behavior.

```tsx
import Header from "@/components/layout/Header";

// Used in layout.tsx - no props required
<Header />;
```

**Features**:

- Sticky positioning on scroll
- Desktop dropdown navigation
- Mobile hamburger menu
- Animated mobile menu transition
- Active state for current page

**Client Component**: Yes (`"use client"`)

---

### Footer

**Location**: `src/components/layout/Footer.tsx`

Site footer with navigation links, social media, and newsletter signup.

```tsx
import Footer from "@/components/layout/Footer";

<Footer />;
```

**Sections**:

- Logo and tagline
- Quick Links navigation
- Get Involved links
- Connect (social media)
- Newsletter signup form
- Copyright and legal links

---

### LegalPageLayout

**Location**: `src/components/layout/LegalPageLayout.tsx`

Layout wrapper for legal pages (Privacy, Terms, Cookies).

```tsx
import LegalPageLayout from "@/components/layout/LegalPageLayout";

<LegalPageLayout
  title="Privacy Policy"
  lastUpdated="January 15, 2025"
  sections={[
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data Collection" },
  ]}
>
  <section id="introduction">
    <h2>Introduction</h2>
    <p>Content...</p>
  </section>
</LegalPageLayout>;
```

**Props**:
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Page title |
| `lastUpdated` | `string` | Yes | Last update date |
| `sections` | `Array<{id, title}>` | Yes | Table of contents |
| `children` | `ReactNode` | Yes | Page content |

---

## Section Components

### Hero

**Location**: `src/components/sections/Hero.tsx`

Full-width hero section with optional background image.

```tsx
import Hero from "@/components/sections/Hero";

<Hero
  title="Page Title"
  subtitle="Supporting description text"
  backgroundImage="/images/hero.jpg"
  primaryCta={{ label: "Primary Action", href: "/action" }}
  secondaryCta={{ label: "Learn More", href: "/learn" }}
  variant="centered"
  overlayOpacity={0.5}
/>;
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Main heading (required) |
| `subtitle` | `string` | - | Supporting text |
| `backgroundImage` | `string` | - | Image URL |
| `primaryCta` | `{label, href}` | - | Primary button |
| `secondaryCta` | `{label, href}` | - | Secondary button |
| `variant` | `"default" \| "simple" \| "centered"` | `"default"` | Layout variant |
| `overlayOpacity` | `number` | `0.5` | Background overlay opacity |

**Variants**:

- `default`: Large padding, left-aligned
- `simple`: Smaller padding, left-aligned
- `centered`: Large padding, centered content

---

### StatsSection

**Location**: `src/components/sections/StatsSection.tsx`

Grid of statistics with animated entry.

```tsx
import StatsSection from "@/components/sections/StatsSection";

<StatsSection
  title="Our Impact"
  subtitle="Making a difference every day"
  stats={[
    { number: "10,000+", label: "Children Helped" },
    { number: "50", label: "Partner Churches" },
    { number: "5", label: "Countries" },
  ]}
  background="white"
/>;
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `subtitle` | `string` | - | Section subtitle |
| `stats` | `Stat[]` | - | Array of statistics (required) |
| `background` | `"white" \| "off-white" \| "dark"` | `"white"` | Background color |

---

### VideoSection

**Location**: `src/components/sections/VideoSection.tsx`

YouTube video embed with optional quote.

```tsx
import VideoSection from "@/components/sections/VideoSection";

<VideoSection
  title="See Our Work"
  description="Watch how we're making an impact"
  videoId="dQw4w9WgXcQ"
  quote={{
    text: "This program changed my life.",
    author: "Maria",
    title: "Scholarship Recipient",
  }}
/>;
```

**Props**:
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Section title |
| `description` | `string` | No | Section description |
| `videoId` | `string` | Yes | YouTube video ID |
| `quote` | `{text, author, title?}` | No | Testimonial quote |

---

### CTASection

**Location**: `src/components/sections/CTASection.tsx`

Call-to-action banner section.

```tsx
import CTASection from "@/components/sections/CTASection";

<CTASection
  title="Ready to Make a Difference?"
  description="Join us in helping children reach their potential."
  primaryCta={{ label: "Donate Now", href: "/donate" }}
  secondaryCta={{ label: "Learn More", href: "/about" }}
  background="blue"
/>;
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Section title (required) |
| `description` | `string` | - | Supporting text |
| `primaryCta` | `{label, href}` | - | Primary button (required) |
| `secondaryCta` | `{label, href}` | - | Secondary button |
| `background` | `"blue" \| "gold" \| "dark"` | `"blue"` | Background color |

---

## Card Components

### StatCard

**Location**: `src/components/cards/StatCard.tsx`

Individual statistic card with intersection observer animation.

```tsx
import StatCard from "@/components/cards/StatCard";

<StatCard
  number="10,000+"
  label="Children Helped"
  description="Through our sponsorship programs"
  link={{ label: "Learn More", href: "/children" }}
/>;
```

**Props**:
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `number` | `string` | Yes | Statistic value |
| `label` | `string` | Yes | Statistic label |
| `description` | `string` | No | Additional description |
| `link` | `{label, href}` | No | Optional link |

**Client Component**: Yes (`"use client"`)

**Features**:

- Fade-in animation when scrolled into view
- Uses IntersectionObserver

---

### ProgramCard

**Location**: `src/components/cards/ProgramCard.tsx`

Program/sponsorship information card.

```tsx
import ProgramCard from "@/components/cards/ProgramCard";

<ProgramCard
  title="Child Sponsorship"
  description="Support a child's education and wellbeing"
  amount="$35/month"
  bulletPoints={["Education support", "Nutritious meals", "Healthcare access"]}
  image="/images/child.jpg"
  ctaLabel="Sponsor a Child"
  ctaHref="/sponsor"
  variant="featured"
/>;
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title (required) |
| `description` | `string` | - | Card description |
| `amount` | `string` | - | Price/amount display |
| `bulletPoints` | `string[]` | - | List of features |
| `image` | `string` | - | Card image URL |
| `ctaLabel` | `string` | - | Button text (required) |
| `ctaHref` | `string` | - | Button link (required) |
| `variant` | `"default" \| "featured"` | `"default"` | Card style |

---

## Form Components

### NewsletterForm

**Location**: `src/components/forms/NewsletterForm.tsx`

Email newsletter subscription form.

```tsx
import NewsletterForm from "@/components/forms/NewsletterForm";

<NewsletterForm variant="inline" />
<NewsletterForm variant="stacked" />
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"inline" \| "stacked"` | `"inline"` | Form layout |

**States**: `idle` | `loading` | `success` | `error`

**Client Component**: Yes (`"use client"`)

---

## UI Components

### FAQAccordion

**Location**: `src/components/ui/FAQAccordion.tsx`

Expandable FAQ item with animation.

```tsx
import FAQAccordion from "@/components/ui/FAQAccordion";

<FAQAccordion
  question="How does sponsorship work?"
  answer={<p>Sponsorship provides monthly support...</p>}
  defaultOpen={false}
/>;
```

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `question` | `string` | - | Question text (required) |
| `answer` | `ReactNode` | - | Answer content (required) |
| `defaultOpen` | `boolean` | `false` | Initial open state |

**Client Component**: Yes (`"use client"`)

**Accessibility**:

- Uses `aria-expanded` attribute
- Keyboard accessible (Enter/Space to toggle)

---

### FAQCategory

**Location**: `src/components/ui/FAQAccordion.tsx`

Category wrapper for grouping FAQ items.

```tsx
import { FAQCategory } from "@/components/ui/FAQAccordion";

<FAQCategory title="General Questions">
  <FAQAccordion question="..." answer="..." />
  <FAQAccordion question="..." answer="..." />
</FAQCategory>;
```

**Props**:
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Category heading |
| `children` | `ReactNode` | Yes | FAQ items |

---

## Utility Functions

### cn()

**Location**: `src/lib/utils.ts`

Combines `clsx` and `tailwind-merge` for conditional class names with Tailwind conflict resolution.

```tsx
import { cn } from "@/lib/utils";

// Basic usage
<div className={cn("px-4", "py-2")} />
// Output: "px-4 py-2"

// Conditional classes
<div className={cn("base", isActive && "active")} />
// Output: "base active" or "base"

// Tailwind conflict resolution
<div className={cn("px-4", "px-8")} />
// Output: "px-8" (later class wins)

// Arrays and objects
<div className={cn(["flex", "items-center"], { "hidden": !visible })} />
```

**Features**:

- Handles undefined, null, false values
- Resolves Tailwind class conflicts
- Supports conditional classes
- Accepts arrays and objects
