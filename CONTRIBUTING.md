# Contributing Guidelines

Thank you for considering contributing to the Child & Church Partners website!

## Code of Conduct

Please be respectful and considerate of others. This project serves a nonprofit mission to help children and churches in need.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Run tests: `npm run test:run`
7. Run linting: `npm run lint`
8. Commit changes following our commit convention
9. Push to your fork: `git push origin feature/your-feature-name`
10. Open a Pull Request

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```
feat(hero): add video background option
fix(newsletter): resolve form submission error
docs(readme): update installation instructions
style(components): apply consistent formatting
refactor(utils): simplify cn function
test(statcard): add animation visibility tests
chore(deps): update dependencies
```

## Coding Standards

### TypeScript

- Use strict TypeScript (`strict: true` in tsconfig)
- Define interfaces for component props
- Avoid `any` type - use `unknown` if type is uncertain
- Use explicit return types for functions

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button onClick={onClick} className={cn("btn", `btn-${variant}`)}>
      {label}
    </button>
  );
}
```

### React Components

- Use functional components with hooks
- Mark client components with `"use client"` directive
- Use `interface` for props definition
- Destructure props in function signature
- Use default parameters for optional props

### File Naming

- Components: PascalCase (e.g., `StatCard.tsx`)
- Tests: Same name with `.test.tsx` suffix (e.g., `StatCard.test.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Pages: `page.tsx` in appropriate folder

### Styling

- Use Tailwind CSS utility classes
- Use `cn()` helper for conditional classes
- Follow mobile-first responsive design
- Use design tokens from `tailwind.config.ts`
- Avoid inline styles

```tsx
// Good
<div className={cn("px-4 py-2", isActive && "bg-blue-500")} />

// Avoid
<div style={{ padding: "8px 16px" }} />
```

### Testing

- Write unit tests for utility functions
- Write component tests for interactive components
- Write E2E tests for critical user flows
- Aim for meaningful coverage, not 100%
- Test user interactions, not implementation details

```tsx
// Good - tests behavior
it("shows success message after form submission", async () => {
  await user.click(submitButton);
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});

// Avoid - tests implementation
it("sets isSubmitted state to true", () => {
  // Testing internal state
});
```

### Imports

- Use path aliases: `@/components/...` instead of `../../../components/...`
- Group imports: React, Next.js, external libraries, internal modules
- Sort imports alphabetically within groups

```tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
```

## Pull Request Process

1. Ensure all tests pass: `npm run test:run`
2. Ensure linting passes: `npm run lint`
3. Ensure build succeeds: `npm run build`
4. Update documentation if needed
5. Fill out the PR template completely
6. Request review from maintainers
7. Address feedback promptly
8. Squash commits if requested

### PR Title Format

Follow the same convention as commit messages:

```
feat(component): add new feature
fix(page): resolve issue
```

### PR Description

Include:

- Summary of changes
- Related issue numbers
- Screenshots for UI changes
- Testing instructions
- Breaking changes (if any)

## Review Guidelines

### For Authors

- Keep PRs focused and small
- Respond to feedback within 48 hours
- Explain your reasoning when disagreeing

### For Reviewers

- Be constructive and specific
- Approve when requirements are met
- Request changes with clear explanations

## Questions?

If you have questions about contributing, please open an issue with the "question" label or reach out to the maintainers.

Thank you for helping improve this project!
