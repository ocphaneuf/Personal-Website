# Claude Code Project Instructions

## General Instructions
- When testing changes, always work in a git branch first
- Run `npm test` and `npm run build` before merging to main
- Keep changes minimal and focused - avoid over-engineering

## Project Overview
**Project Name:** Olivier Phaneuf Portfolio Website
**Purpose:** Static portfolio site showcasing delivery leadership experience (£40m+ portfolios) and AI tool demonstrations to hiring managers
**Target Users:** Hiring managers seeking Head of Delivery / Director-level candidates

## Tech Stack
**Language:** TypeScript (build-time), HTML/CSS/JS (runtime)
**Framework:** Astro 5.x (Static Site Generator)
**Database:** None (static content in Markdown files)
**Hosting:** GitHub Pages
**Key Libraries:**
- Astro - Static site generation with component islands
- Tailwind CSS 3.4.x - Utility-first styling
- Vitest - Component testing
- @testing-library/dom - DOM testing utilities

## Coding Standards

### Code Style
- Follow Astro component conventions
- Use TypeScript for all `.ts` files
- Use camelCase for variables and functions
- Maximum line length: 100 characters
- No JSDoc required for simple components

### File Organization
```
project-root/
├── .github/workflows/       # GitHub Actions deployment
├── public/                  # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Page sections (Hero, ProjectCard)
│   │   └── seo/             # SEO and meta components
│   ├── content/
│   │   └── projects/        # Project Markdown files
│   ├── data/                # Site configuration
│   ├── layouts/             # Page layout wrappers
│   ├── pages/               # Astro pages (routes)
│   ├── styles/              # Global CSS
│   └── __tests__/           # Component tests
├── astro.config.mjs
├── tailwind.config.mjs
└── vitest.config.ts
```

### Naming Conventions
- **Files:** kebab-case.astro, kebab-case.ts, kebab-case.md
- **Components:** PascalCase.astro (e.g., ProjectCard.astro)
- **Functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **CSS Classes:** Tailwind utilities (no custom class names unless necessary)

### Error Handling
- Use graceful degradation for external dependencies (demos, forms)
- Always provide fallbacks (mailto for form, screenshot for iframe)
- Silent failures for analytics (don't block user experience)

### Comments and Documentation
- Comment only complex logic or non-obvious decisions
- Component props should be self-documenting via TypeScript interfaces
- Update CONTENT-UPDATE-GUIDE.md when changing content workflow

## Additional Documentation

| Topic | File |
|-------|------|
| Technical architecture | `architecture.md` |
| Content update process | `CONTENT-UPDATE-GUIDE.md` |
| User requirements | `user-stories.md` |

## Site Configuration

All site-wide configuration is in `src/data/site-config.ts`:

```typescript
export const siteConfig = {
  name: "Olivier Phaneuf",
  title: "Senior Delivery Leader",
  tagline: "Delivering £40m+ portfolios with AI-powered tools",
  urls: {
    site: "https://ocphaneuf.github.io",
    linkedin: "https://linkedin.com/in/ocphaneuf",  // Primary profile link
    github: "https://github.com/ocphaneuf",
    email: "ocphaneuf@gmail.com",
  },
  formspree: { formId: "TO_BE_CONFIGURED" },
  analytics: { ga4Id: "TO_BE_CONFIGURED" },
  // Note: CV not hosted on site - available on request via contact form
};
```

## Design System

### Color Palette (Dark Theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `dark-900` | #0f172a | Page background |
| `dark-800` | #1e293b | Card backgrounds |
| `dark-700` | #334155 | Borders |
| `dark-300` | #cbd5e1 | Body text |
| `primary-500` | #10B981 | Primary accent (Emerald) |
| `primary-400` | #34d399 | Hover states |

### Component Variants
- **Buttons:** primary, secondary, ghost
- **Cards:** with/without hover effect
- **Project status:** live, in-progress, coming-soon

## Content Collections

### Adding/Editing Projects
Projects are stored as Markdown in `src/content/projects/`. Each file requires:

```yaml
---
title: "Project Title"
order: 1
status: "in-progress"  # or "live" | "coming-soon"
progressPercent: 40    # only for in-progress
problem: "One sentence problem statement"
solution: "One sentence solution"
techStack: ["Python", "Streamlit", "Claude API"]
impact: "Key metric (e.g., '60% time reduction')"
demoUrl: "https://app.streamlit.app"
githubUrl: "https://github.com/..."
screenshot: "/images/projects/project-name.png"
featured: true
---
```

## Dependencies and Constraints

### Must Use
- Astro for static site generation
- Tailwind CSS for styling
- GitHub Pages for hosting (free tier)
- Formspree for contact form (free tier)

### Must Not Use
- Server-side rendering or APIs
- Backend databases
- Paid hosting services
- Heavy JavaScript frameworks (React, Vue) except where Astro islands require

### Version Constraints
- Node.js 20+
- Astro 5.x
- Tailwind CSS 3.4.x

## Testing Expectations
- Run `npm test` before merging any branch
- Test coverage for key components: Button, Card, ProjectCard, ContactForm, MetricBadge
- Test framework: Vitest + @testing-library/dom
- Build verification: `npm run build` must succeed

## Development Workflow

### Making Changes
1. Create feature branch: `git checkout -b feature/description`
2. Make changes
3. Run tests: `npm test`
4. Verify build: `npm run build`
5. Commit and push
6. Merge to main (deployment is automatic)

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run component tests
```

## AI Coding Preferences
- Prefer functional components over complex abstractions
- Optimize for readability and maintainability
- When uncertain, ask for clarification rather than guessing
- Generate minimal comments (code should be self-explanatory)
- Avoid over-engineering - this is a simple static site

## Common Patterns

### Astro Component with Props
```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class={`base-class ${variant === 'primary' ? 'bg-primary-500' : 'bg-dark-700'}`}>
  {title}
</div>
```

### Content Collection Query
```astro
---
import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const sortedProjects = projects.sort((a, b) => a.data.order - b.data.order);
---
```

### Tailwind Dark Theme Classes
```html
<!-- Always dark theme, no toggle -->
<div class="bg-dark-900 text-dark-300">
  <h1 class="text-white">Heading</h1>
  <p class="text-dark-400">Muted text</p>
  <a class="text-primary-400 hover:text-primary-300">Link</a>
</div>
```

## GitHub Pages Deployment (CRITICAL)

This site deploys to GitHub Pages as a **project site** at `https://ocphaneuf.github.io/Personal-Website/`. This requires special configuration:

### Base Path Configuration
1. **`astro.config.mjs`** must include:
   ```javascript
   base: '/Personal-Website',  // Must match repository name exactly
   ```

2. **All internal links must be hardcoded** with the base path in `site-config.ts`:
   ```typescript
   navigation: [
     { label: "Projects", href: "/Personal-Website/projects" },
     { label: "About", href: "/Personal-Website/about" },
     { label: "Contact", href: "/Personal-Website/contact" },
   ],
   ```

   **WARNING:** Do NOT use `import.meta.env.BASE_URL` for navigation links - it doesn't render reliably in production builds.

3. **Other hardcoded paths:**
   - Logo link: `href="/Personal-Website/"`
   - Favicon: `href="/Personal-Website/favicon.svg"`
   - Any internal buttons/links in page content

### GitHub Actions Workflow
The workflow at `.github/workflows/deploy.yml` must include `actions/configure-pages@v4`:

```yaml
- name: Setup Pages
  uses: actions/configure-pages@v4  # CRITICAL - without this, site returns 404
```

### Troubleshooting 404 Errors
If the site deploys but returns 404:
1. Check GitHub Pages Source is set to "GitHub Actions" (Settings → Pages)
2. Verify `actions/configure-pages@v4` is in the workflow
3. Confirm all navigation links include `/Personal-Website/` prefix
4. Test locally with `npm run preview` - visit `localhost:4321/Personal-Website/`
5. Try re-running the GitHub Actions workflow

## Project-Specific Notes
- **No light mode** - dark theme only (Modern Tech aesthetic)
- **Mobile-first** - test on 375px width as primary breakpoint
- **Performance critical** - target PageSpeed >85, load <3s
- **Demo iframes** - always show screenshot first, load iframe on user action
- **Touch targets** - minimum 44px for all interactive elements
- **Accessibility** - maintain WCAG AA color contrast ratios
- **No CV download** - CV available on request only; link to LinkedIn profile instead
- **Contact page** - include "CV available on request" messaging
