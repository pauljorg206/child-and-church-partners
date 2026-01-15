# Architecture Overview

## Technology Stack

| Category          | Technology            | Version | Purpose                         |
| ----------------- | --------------------- | ------- | ------------------------------- |
| Framework         | Next.js               | 14.2.20 | React framework with App Router |
| UI Library        | React                 | 18.3.1  | Component-based UI              |
| Language          | TypeScript            | 5.7.2   | Type safety                     |
| Styling           | Tailwind CSS          | 3.4.17  | Utility-first CSS               |
| Unit Testing      | Vitest                | Latest  | Fast unit test runner           |
| Component Testing | React Testing Library | Latest  | DOM testing utilities           |
| E2E Testing       | Playwright            | Latest  | Cross-browser E2E tests         |
| Linting           | ESLint                | 8.57.1  | Code quality                    |
| Formatting        | Prettier              | Latest  | Code formatting                 |

## Design Decisions

### Next.js App Router

We use Next.js 14 with the App Router for:

- **Server Components by default** - Reduced client-side JavaScript
- **Automatic code splitting** - Optimized bundle sizes
- **Built-in SEO** - Metadata API for search optimization
- **File-based routing** - Intuitive page structure
- **Image optimization** - Automatic with next/image

### Component Architecture

```
src/
├── app/                      # Route handlers and pages
│   ├── layout.tsx           # Root layout (Header + Footer)
│   ├── page.tsx             # Home page
│   └── [route]/             # Nested routes
│       └── page.tsx
│
├── components/               # Reusable UI components
│   ├── cards/               # Data display cards
│   ├── forms/               # User input forms
│   ├── layout/              # Page structure components
│   ├── sections/            # Page section templates
│   └── ui/                  # Primitive UI elements
│
└── lib/                      # Shared utilities
    └── utils.ts             # Helper functions
```

### Server vs Client Components

**Server Components (default)**:

- All page components (`page.tsx`)
- Static section components (Hero, CTASection, VideoSection)
- Layout wrappers (LegalPageLayout)
- No client-side interactivity needed

**Client Components** (`"use client"`):

- Interactive components (Header - navigation state)
- Form components (NewsletterForm - input state)
- Animation components (StatCard - IntersectionObserver)
- Accordion components (FAQAccordion - expand/collapse)

### Styling Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Tailwind CSS                             │
├─────────────────────────────────────────────────────────────┤
│  Design Tokens (tailwind.config.ts)                        │
│  ├── Colors: primary-blue, primary-red, accent-gold        │
│  ├── Typography: Inter font family                         │
│  └── Container: Responsive padding                          │
├─────────────────────────────────────────────────────────────┤
│  Utility Classes (globals.css)                              │
│  ├── .container-site - Max-width container                 │
│  ├── .section-padding - Consistent section spacing          │
│  └── .btn, .btn-primary - Button styles                    │
├─────────────────────────────────────────────────────────────┤
│  cn() Utility (lib/utils.ts)                               │
│  └── clsx + tailwind-merge for conditional classes          │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    Page Component (Server)                    │
│                                                              │
│  ┌─────────────────┐    ┌─────────────────────────────────┐  │
│  │  Static Props   │    │     Child Components            │  │
│  │  (hardcoded)    │───►│  ┌───────────────────────────┐  │  │
│  └─────────────────┘    │  │   Server Components       │  │  │
│                         │  │   (static rendering)      │  │  │
│                         │  └───────────────────────────┘  │  │
│                         │  ┌───────────────────────────┐  │  │
│                         │  │   Client Components       │  │  │
│                         │  │   (hydration)             │  │  │
│                         │  └───────────────────────────┘  │  │
│                         └─────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Image Optimization

- **Next.js Image component** for automatic optimization
- **Remote patterns** configured for external sources:
  - `static.wixstatic.com` - External images
  - `i.ytimg.com` - YouTube thumbnails
- **Local images** stored in `/public/images/`

## SEO Strategy

1. **Metadata API** - Title, description, OpenGraph in each page
2. **Sitemap** - Auto-generated via `sitemap.ts`
3. **Robots.txt** - Configured via `robots.ts`
4. **Semantic HTML** - Proper heading hierarchy
5. **Alt text** - Required for all images

## Testing Strategy

### Unit Tests (Vitest)

- **Target**: Utility functions, component logic
- **Coverage**: 60% threshold
- **Location**: Collocated with source (`*.test.tsx`)

### Integration Tests (React Testing Library)

- **Target**: Component interactions, user flows
- **Focus**: User-facing behavior, not implementation

### E2E Tests (Playwright)

- **Target**: Critical user journeys
- **Browsers**: Chrome, Firefox, Safari, Mobile
- **Location**: `e2e/` directory

## Performance Considerations

| Strategy           | Implementation                   |
| ------------------ | -------------------------------- |
| Static Generation  | Most pages pre-rendered at build |
| Image Optimization | Next.js Image with lazy loading  |
| Font Optimization  | Google Fonts via next/font       |
| Code Splitting     | Automatic with App Router        |
| CSS Optimization   | Tailwind purges unused styles    |

## Security Measures

- **Environment variables** - Sensitive data in `.env.local`
- **Content Security Policy** - Configured in production
- **Input validation** - Form inputs validated
- **HTTPS** - Enforced in production

## Folder Structure

```
child-and-church-partners/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── .husky/
│   └── pre-commit              # Git hooks
├── e2e/
│   ├── pages/                  # Page E2E tests
│   └── accessibility/          # A11y tests
├── public/
│   └── images/                 # Static images
├── src/
│   ├── app/                    # Pages and routes
│   ├── components/             # React components
│   └── lib/                    # Utilities
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
├── next.config.mjs             # Next.js config
├── playwright.config.ts        # Playwright config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── vitest.config.ts            # Vitest config
```

## Future Considerations

- [ ] **CMS Integration** - Contentful or Sanity for content management
- [ ] **Payment Processing** - Stripe/PayPal for donations
- [ ] **Email Service** - Mailchimp integration for newsletter
- [ ] **Analytics** - Google Analytics or Plausible
- [ ] **Internationalization** - i18n support for multiple languages
- [ ] **Storybook** - Component documentation and testing

## Configuration Files Reference

| File                   | Purpose                          |
| ---------------------- | -------------------------------- |
| `next.config.mjs`      | Next.js build and runtime config |
| `tailwind.config.ts`   | Tailwind CSS customization       |
| `tsconfig.json`        | TypeScript compiler options      |
| `vitest.config.ts`     | Unit test configuration          |
| `playwright.config.ts` | E2E test configuration           |
| `.eslintrc.json`       | ESLint rules                     |
| `.prettierrc`          | Prettier formatting rules        |
| `postcss.config.mjs`   | PostCSS plugins                  |
