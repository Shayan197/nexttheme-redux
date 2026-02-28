# Next Theme + Redux Architecture

A Modern, scalable and production-ready **Next.js 16 theme architecture** designed for rapid development with enterprise-grade architecture and best practices.

Built with:

- TypeScript (Strict Mode)
- Tailwind CSS v4 (Design Token Architecture)
- Redux Toolkit (Scalable State Orchestration)
- next-themes
- ESLint + Prettier (Strict Rules)
- Husky + Commitlint

---

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Linting & Code Quality](#linting--code-quality)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Introduction

This project demonstrates how to build a scalable and predictable theme system using:

- `next-themes` for DOM-level theme control
- Redux Toolkit for global state orchestration

It is designed for applications where theme is not just visual state, but part of application logic.

This architecture is suitable for:

- SaaS dashboards
- Multi-module applications
- Theme-driven UI logic
- Applications requiring predictable global state flow

---

## Tech Stack

| Technology      | Purpose                         |
| --------------- | ------------------------------- |
| Next.js 16      | App Router architecture         |
| TypeScript      | Static type safety              |
| Tailwind CSS v4 | Utility-first styling system    |
| Redux Toolkit   | Centralized state management    |
| next-themes     | Hydration-safe theme switching  |
| ESLint          | Code linting                    |
| Prettier        | Code formatting                 |
| Husky           | Git hooks automation            |
| Commitlint      | Conventional commit enforcement |

---

## Project Structure

```
src/
 ├── app/
 ├── components/
 ├── store/
 │    ├── slices/
 │    └── index.ts
 ├── hooks/
 ├── utils/
 ├── types/
 └── assets/
```

---

## Architecture Overview

### 1️⃣ Design Token System

Global CSS defines semantic tokens:

```css
--color-background
--color-foreground-primary
--text-heading-lg
```

Mapped inside Tailwind via:

```css
@theme inline;
```

Usage example:

```tsx
<h1 className="text-foreground-primary text-heading-lg">
```

This ensures scalability and consistent theming.

---

### 2️⃣ Theme Control Strategy

Theme architecture follows a dual-layer pattern:

- next-themes → Controls the DOM (`data-theme`)
- Redux → Mirrors theme in global application state

ThemeProvider setup:

```tsx
<ThemeProvider attribute="data-theme">
```

Theme attribute:

```
data-theme="dark"
data-theme="light"
```

Flow:

1. next-themes updates the DOM safely
2. Redux syncs the resolved theme
3. Application slices react consistently

Redux does not manipulate the DOM directly.  
It coordinates application-level behavior based on theme.

---

### 3️⃣ Why Combine next-themes + Redux?

For small apps, next-themes alone is sufficient.

Redux becomes useful when theme affects:

- Layout configuration
- Feature flags
- API request behavior
- Business logic decisions
- Cross-module synchronization

This pattern ensures:

- Predictable state management
- Centralized debugging
- Scalable architecture
- Clean separation of responsibilities

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

### Fix CRLF Issues (If Appears After Pull)

If you encounter CRLF warnings after pulling the repository, run:

```bash
npx prettier --write .
```

This will normalize line endings and resolve formatting issues.

---

## Linting & Code Quality

Run lint:

```bash
npm run lint
```

Pre-commit hooks enforce:

- ESLint
- Prettier
- Commitlint

Example conventional commits:

```
feat: add theme slice
fix: resolve hydration mismatch
chore: update dependencies
```

---

## Environment Variables

Copy:

```
.env.example
```

To:

```
.env
```

Then configure environment-specific values.

---

## Author

Muhammad Shayan Bukhari  
Frontend Developer

---

## License

MIT
