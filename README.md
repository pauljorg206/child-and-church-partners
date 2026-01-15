# Child & Church Partners Website

Official website for Child & Church Partners International - a U.S.-based Christian nonprofit helping children and churches in the Philippines overcome barriers and lead change.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js 14.2.20 (App Router)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Testing**: Vitest + React Testing Library (unit), Playwright (E2E)
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with Tailwind plugin

## Available Scripts

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start development server       |
| `npm run build`         | Create production build        |
| `npm run start`         | Start production server        |
| `npm run lint`          | Run ESLint                     |
| `npm run lint:fix`      | Run ESLint with auto-fix       |
| `npm run format`        | Format code with Prettier      |
| `npm run format:check`  | Check formatting               |
| `npm run test`          | Run unit tests in watch mode   |
| `npm run test:run`      | Run unit tests once            |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:e2e`      | Run Playwright E2E tests       |
| `npm run test:e2e:ui`   | Run E2E tests with UI          |

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About section pages
│   ├── children/       # Children program page
│   ├── churches/       # Churches program page
│   ├── contact/        # Contact page
│   ├── donate/         # Donation page
│   ├── faq/            # FAQ page
│   ├── gallery/        # Photo gallery
│   ├── give/           # Giving section
│   ├── privacy/        # Privacy policy
│   ├── terms/          # Terms of service
│   ├── where-we-work/  # Geographic reach
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components
│   ├── cards/          # Card components (StatCard, ProgramCard)
│   ├── forms/          # Form components (NewsletterForm)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page section components (Hero, CTASection)
│   └── ui/             # UI primitives (FAQAccordion)
└── lib/                # Utility functions
    └── utils.ts        # Helper functions (cn)
```

## Documentation

- [Development Guide](./DEVELOPMENT.md) - Local setup and workflow
- [Contributing Guidelines](./CONTRIBUTING.md) - Code standards and PR process
- [Component Documentation](./COMPONENTS.md) - Component library reference
- [Architecture Overview](./ARCHITECTURE.md) - System design and decisions

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

## Testing

### Unit Tests

```bash
# Watch mode
npm run test

# Single run with coverage
npm run test:coverage
```

### E2E Tests

```bash
# Headless
npm run test:e2e

# With UI
npm run test:e2e:ui
```

## Deployment

The site is optimized for deployment on Vercel. See [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) for deployment requirements.

## License

Copyright Child & Church Partners International. All rights reserved.
