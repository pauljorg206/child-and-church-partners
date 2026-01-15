# Development Guide

## Prerequisites

- Node.js 18.17.0 or later
- npm 9.x or later
- Git

## Environment Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd child-and-church-partners
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.local.example .env.local
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Development Workflow

### Code Style

- Run `npm run format` before committing to ensure consistent formatting
- Pre-commit hooks automatically lint and format staged files
- Follow the component patterns established in `src/components/`

### Testing

#### Unit Tests (Vitest)

```bash
# Watch mode (recommended during development)
npm run test

# Single run
npm run test:run

# With coverage report
npm run test:coverage

# Interactive UI (opens browser)
npm run test:ui
```

#### E2E Tests (Playwright)

```bash
# Headless (CI mode)
npm run test:e2e

# With Playwright UI
npm run test:e2e:ui

# Headed browser (see browser window)
npm run test:e2e:headed
```

### Type Checking

```bash
npx tsc --noEmit
```

### Linting

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check
```

## Common Tasks

### Adding a New Component

1. Create component file in appropriate folder under `src/components/`
2. Define TypeScript interface for props
3. Create test file alongside component (e.g., `MyComponent.test.tsx`)
4. Export from component directory if needed
5. Update COMPONENTS.md documentation

Example structure:

```
src/components/cards/
├── NewCard.tsx
└── NewCard.test.tsx
```

### Adding a New Page

1. Create folder in `src/app/` with `page.tsx`
2. Add metadata export for SEO
3. Add E2E test in `e2e/pages/`
4. Update sitemap.ts if applicable

Example:

```tsx
// src/app/new-page/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Page | Child & Church Partners",
  description: "Page description for SEO",
};

export default function NewPage() {
  return <main>{/* Page content */}</main>;
}
```

### Adding a New Section Component

1. Create in `src/components/sections/`
2. Use the `cn()` utility for conditional classes
3. Accept customization props (variant, className, etc.)
4. Write tests for different variants

### Working with Styles

- Use Tailwind CSS utility classes
- Use the `cn()` helper for conditional classes:

  ```tsx
  import { cn } from "@/lib/utils";

  <div className={cn("base-class", isActive && "active-class")} />;
  ```

- Custom colors are defined in `tailwind.config.ts`:
  - `primary-blue` - #1E40AF
  - `primary-red` - #B91C1C
  - `accent-gold` - #EFAB05

## Troubleshooting

### Next.js Cache Issues

```bash
rm -rf .next
npm run dev
```

### Node Modules Issues

```bash
rm -rf node_modules
npm install
```

### TypeScript Errors After Package Update

```bash
rm -rf node_modules .next
npm install
npx tsc --noEmit
```

### Test Snapshot Updates

```bash
npm run test:run -- -u
```

### Playwright Browser Issues

```bash
npx playwright install
```

## IDE Setup

### VS Code Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Git Workflow

1. Create feature branch from `main`
2. Make changes and write tests
3. Run `npm run lint` and `npm run test:run`
4. Commit with descriptive message
5. Push and create PR
6. CI will run automatically
7. Merge after review
