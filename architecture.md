# Architecture Definition Document

## Document Information
**Project:** Olivier Phaneuf Portfolio Website
**Version:** 1.0
**Last Updated:** 2025-12-31
**Author:** Olivier Phaneuf (with Claude Code assistance)

## Executive Summary

A static portfolio website built with Astro, Tailwind CSS, and deployed on GitHub Pages. The site showcases Olivier Phaneuf's delivery leadership experience (£40m+ portfolios) and AI-powered tool demonstrations to hiring managers seeking Head of Delivery candidates. The architecture prioritizes low maintenance (<1 hour/month), mobile-first design, and easy content updates via Claude Code assistance.

## System Overview

### Purpose and Scope
**What it does:**
- Displays professional value proposition and career highlights
- Showcases 3+ AI tool projects with live demo capability
- Provides contact mechanism (form + mailto) with "CV available on request"
- Links to LinkedIn profile for full professional history
- Collects visitor engagement feedback

**What it doesn't do:**
- No user authentication or accounts
- No backend/database
- No blog or CMS functionality
- No e-commerce
- No real-time chat

**Success criteria:**
- Page load < 3 seconds on mobile
- PageSpeed score > 85
- Visitor can understand value proposition in < 10 seconds
- 60%+ visitors navigate to projects page
- Projects page engagement > 5 seconds

### Key Stakeholders
- **Primary users:** Hiring managers assessing candidates for Head of Delivery roles
- **Secondary users:** Recruiters, LinkedIn connections, professional network
- **Administrators:** Olivier Phaneuf (site owner, content updates via Claude Code)

## Architecture Principles

1. **Simplicity over complexity** - Static site, no backend, minimal JavaScript
2. **Mobile-first design** - Primary access via mobile during commute/breaks
3. **Low maintenance** - Updates achievable in <1 hour/month with Claude Code
4. **Performance is paramount** - Fast load times for impatient hiring managers
5. **Content is king** - Design supports content, not the other way around

## High-Level Architecture

### Architecture Style
**Static Site Generation (SSG)** via Astro

**Rationale:**
- Zero runtime costs (static files only)
- Excellent performance (pre-rendered HTML)
- Simple deployment (push to GitHub)
- Component-based development for maintainability
- Content collections for easy project updates

### System Context Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                        EXTERNAL SERVICES                         │
├─────────────────────────────────────────────────────────────────┤
│  Streamlit Cloud    Google Analytics 4    Formspree             │
│  (Demo Hosting)     (Analytics)           (Contact Form)        │
└────────┬───────────────────┬───────────────────┬────────────────┘
         │                   │                   │
         ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB PAGES (Static Host)                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                   ASTRO STATIC SITE                        │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │  │
│  │  │ Homepage │ │ Projects │ │  About   │ │ Contact  │      │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │  Shared Components: Header, Footer, ProjectCard...   │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
         ▲
         │ HTTPS
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                           VISITORS                               │
│              Hiring Managers (mobile & desktop)                  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Overview

**Core Components:**
1. **Pages** - Astro pages (index, projects, about, contact)
2. **Layouts** - BaseLayout wrapper with SEO and analytics
3. **Section Components** - Hero, ProjectCard, ContactForm, FeedbackBanner
4. **Common Components** - Button, Card, MetricBadge, TechTag
5. **Content Collections** - Markdown files for project data

## Detailed Design

### Data Model

#### Core Entities

**Project** (stored as Markdown files in `src/content/projects/`)
```typescript
interface Project {
  title: string;              // "Resource Management Optimizer"
  order: number;              // Display order (1, 2, 3...)
  status: 'live' | 'coming-soon' | 'in-progress';
  progressPercent?: number;   // 0-100 for in-progress projects
  problem: string;            // Problem statement
  solution: string;           // Solution summary
  techStack: string[];        // ["Python", "Streamlit", "Claude API"]
  impact: string;             // "60% time reduction"
  demoUrl?: string;           // Streamlit app URL
  githubUrl?: string;         // Repository URL
  screenshot: string;         // Image path
  featured: boolean;          // Show on homepage
}
```

**SiteConfig** (stored in `src/data/site-config.ts`)
```typescript
interface SiteConfig {
  name: string;               // "Olivier Phaneuf"
  title: string;              // "Senior Delivery Leader"
  tagline: string;            // Value proposition
  urls: {
    site: string;
    linkedin: string;         // Primary profile link (replaces CV)
    github: string;
    email: string;
  };
  formspree: { formId: string };
  analytics: { ga4Id: string };
  metrics: Array<{ value: string; label: string; prefix: string }>;
}
```

#### Data Storage
- **Primary data store:** File system (Markdown + TypeScript)
- **Caching strategy:** N/A (static files, browser caching)
- **Data retention:** Indefinite (version controlled in Git)

### API Design

No server-side API. All data is static.

#### Integration Points

| External Service | Purpose | Data Exchanged |
|-----------------|---------|----------------|
| Formspree | Contact form submissions | Name, email, message |
| Google Analytics 4 | Visitor tracking | Page views, events, session data |
| Streamlit Cloud | Demo hosting | Embedded iframes |
| GitHub Pages | Static hosting | HTML, CSS, JS, images |

### User Interface

#### Key Screens/Views

1. **Homepage (index.astro)**
   - Hero section with name, title, tagline
   - Key metrics badges (£40m+, £7m, CMgr MCMI)
   - Primary CTAs: View Projects, View LinkedIn Profile
   - Navigation to all pages

2. **Projects (projects.astro)**
   - Grid of ProjectCards (3 initially, expandable)
   - Each card shows: title, problem, solution, tech stack, impact
   - Hybrid demo: screenshot default, "Load Demo" reveals iframe
   - Progress indicators for in-development projects

3. **About (about.astro)**
   - Career narrative (300-500 words)
   - Hybrid tone: story with metrics woven in
   - Current role (Network Rail), previous (Ocado)
   - Professional certifications

4. **Contact (contact.astro)**
   - Formspree contact form (name, email, message)
   - Direct mailto link alternative
   - LinkedIn and GitHub links
   - "CV available on request" messaging

#### UI Framework
**Astro + Tailwind CSS**

Rationale:
- Astro: Zero JS by default, excellent performance, component-based
- Tailwind: Utility-first CSS, consistent design system, dark mode support

### Processing Logic

#### Key Algorithms

**Demo Iframe Lazy Loading**
- **Input:** User clicks "Load Demo" button
- **Output:** Iframe replaces screenshot
- **Approach:** JavaScript event listener swaps DOM content
- **Complexity:** O(1)

**Mobile Navigation Toggle**
- **Input:** Hamburger menu click
- **Output:** Slide-out navigation panel
- **Approach:** CSS transitions + JS class toggle
- **Complexity:** O(1)

#### Business Rules

1. **LinkedIn Profile:** Linked from header/footer as primary professional profile
2. **CV Policy:** Available on request only (via contact form), not downloadable
3. **Demo Loading:** Screenshots load first, iframes on demand only
4. **Feedback:** One submission per session (localStorage check)
5. **Project Ordering:** Displayed by `order` field, lowest first

### State Management

**Minimal client-side state:**
- Mobile menu open/closed (CSS class toggle)
- Demo iframe loaded/not loaded (DOM manipulation)
- Feedback submitted (localStorage boolean)

No state management library needed for this scope.

## Security Architecture

### Authentication
- **Method:** None (public website)
- **User identification:** N/A
- **Session management:** N/A

### Authorization
- **Access control model:** None (all content public)
- **Roles:** N/A

### Data Protection
- **Sensitive data:** Contact form submissions (handled by Formspree)
- **Encryption at rest:** N/A (no server-side storage)
- **Encryption in transit:** HTTPS enforced by GitHub Pages
- **Data masking:** N/A

### Input Validation
- Form inputs validated client-side (required fields, email format)
- Formspree provides server-side validation and spam protection
- No SQL/XSS risk (no backend, static content only)

### Secrets Management
- **Formspree ID:** Stored in site-config.ts (not secret, public form endpoint)
- **GA4 ID:** Stored in site-config.ts (not secret, public tracking ID)
- **No API keys or credentials required**

### Audit Logging
- **Events logged:** Google Analytics tracks page views and custom events
- **Log retention:** Per Google Analytics retention settings
- **Access to logs:** Google Analytics dashboard only

### Compliance Requirements
- GDPR consideration: Cookie banner recommended if targeting EU
- No sensitive personal data stored server-side
- Contact form data handled by Formspree (their compliance)

## Technology Stack

### Runtime Environment
- **Language:** TypeScript (build-time), HTML/CSS/JS (runtime)
- **Platform:** GitHub Pages (static hosting)

### Frameworks and Libraries

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| Framework | Astro | 5.x | Static site generation |
| CSS | Tailwind CSS | 3.4.x | Utility-first styling |
| Testing | Vitest | 2.x | Component testing |
| Testing Utility | @testing-library/dom | 10.x | DOM testing helpers |

### Development Tools
- **Version control:** Git + GitHub
- **Package manager:** npm
- **Testing:** Vitest + @testing-library/dom
- **Type checking:** TypeScript
- **Build tool:** Astro (uses Vite internally)

### Infrastructure
- **Hosting:** GitHub Pages (free tier)
- **CDN:** GitHub's global CDN
- **Deployment:** GitHub Actions (automatic on push to main)
- **Monitoring:** Google Analytics 4

## Data Flow

### Primary User Flow
```
1. Visitor lands on homepage
2. Scans hero section (< 10 seconds)
3. Clicks "View Projects" CTA
4. Reviews project cards
5. Clicks "Load Demo" on project of interest
6. Iframe loads Streamlit app
7. Visits LinkedIn profile and/or submits contact form (CV on request)
```

### Feedback Flow
```
1. User views page content
2. FeedbackBanner appears (non-intrusive position)
3. User clicks thumbs up/down
4. localStorage records submission (prevents duplicates)
5. GA4 event fires with page path
6. Banner dismisses
```

### Contact Form Flow
```
1. User fills form (name, email, message)
2. Client-side validation runs
3. Form submits to Formspree endpoint
4. Formspree sends email notification
5. User sees success message
```

## Performance Considerations

### Expected Load
- **Users:** Low volume (< 100 daily visitors expected)
- **Data volume:** N/A (no dynamic data)
- **Response time targets:**
  - First Contentful Paint: < 1.5s
  - Largest Contentful Paint: < 2.0s
  - Time to Interactive: < 3.0s

### Scalability Strategy
Static files on CDN = essentially infinite scalability. No database or server-side processing.

### Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| Image optimization | Astro's built-in image service (WebP, lazy loading) |
| CSS optimization | Tailwind purges unused styles at build |
| Font loading | `display=swap` for non-blocking fonts |
| Demo iframes | Loaded on-demand only |
| Code splitting | Automatic via Astro (page-level) |

### Performance Constraints
- External Streamlit iframes may load slowly (external dependency)
- Google Fonts may add latency (mitigated with preconnect)

## Error Handling and Resilience

### Error Categories

1. **Form validation errors:** Client-side messages, inline error display
2. **Formspree failures:** Fallback mailto link prominently displayed
3. **Demo iframe failures:** Screenshot remains visible, graceful degradation
4. **Analytics failures:** Silent failure, doesn't affect user experience

### Retry Logic
N/A for static site. Contact form has no automatic retry (user can resubmit).

### Failure Modes

| Component | Failure Impact | Mitigation |
|-----------|---------------|------------|
| Streamlit demo | Demo unavailable | Screenshot always visible, "Demo unavailable" message |
| Formspree | Form submission fails | mailto link as fallback |
| Google Analytics | Tracking stops | No user impact, silent failure |
| GitHub Pages | Site unavailable | GitHub's 99.9% uptime SLA |

## Testing Strategy

### Test Framework
- **Framework:** Vitest
- **Utilities:** @testing-library/dom
- **Execution:** Manual (`npm test` before merging branches)

### Test Coverage

| Component | Test Type | Coverage |
|-----------|-----------|----------|
| Button.astro | Unit | Renders all variants, handles props |
| Card.astro | Unit | Renders with/without hover state |
| ProjectCard.astro | Unit | Renders all statuses, handles missing optional props |
| ContactForm.astro | Unit | Form structure, required field attributes |
| MetricBadge.astro | Unit | Displays value, label, prefix correctly |

### Testing Workflow
1. Create feature branch
2. Make changes
3. Run `npm test`
4. Run `npm run build`
5. Merge to main if both pass

## Deployment Architecture

### Environments
- **Local development:** `npm run dev` (localhost:4321)
- **Production:** GitHub Pages (https://ocphaneuf.github.io)
- **No staging environment** (low risk, static content)

### Deployment Workflow

```yaml
# .github/workflows/deploy.yml
trigger: push to main
steps:
  1. Checkout repository
  2. Setup Node.js 20
  3. Install dependencies (npm ci)
  4. Build site (npm run build)
  5. Upload to GitHub Pages
  6. Deploy
```

### Configuration Management
- Environment-specific config: None needed (static site)
- Secrets: None (all config values are public-safe)

## Dependencies and Constraints

### External Dependencies

| Service | Purpose | Fallback |
|---------|---------|----------|
| GitHub Pages | Hosting | None (core infrastructure) |
| Formspree | Contact form | mailto link |
| Streamlit Cloud | Demo hosting | Screenshot + external link |
| Google Analytics | Tracking | Site works without it |
| Google Fonts | Typography | System font fallback |

### Technical Constraints
- Must work without JavaScript (core content)
- Must be fully static (no server-side processing)
- Must be free to host (no paid services)
- Must deploy via git push (owner's skill level)

### Assumptions
1. Owner has basic Git knowledge (add, commit, push)
2. Claude Code available for complex updates
3. Project screenshots will be provided by owner
4. Formspree free tier sufficient (50 submissions/month)
5. CV shared privately via email upon request (not hosted on site)

## Future Considerations

### Known Limitations
- No dark/light mode toggle (dark only)
- No blog functionality
- No custom domain (using github.io)
- Limited to 3 initially featured projects

### Evolution Path
- **Phase 2:** Add custom domain when budget allows
- **Phase 3:** Add blog section if content strategy develops
- **Phase 4:** Consider Netlify CMS if update frequency increases

### Alternative Approaches Considered

**Plain HTML/CSS/JS**
- Pros: Simplest possible, no build step
- Cons: More manual work for updates, no component reuse
- Why not chosen: Astro provides better DX with minimal complexity

**Next.js**
- Pros: React ecosystem, excellent DX
- Cons: Overkill for static content, larger bundle size
- Why not chosen: Astro is lighter weight and purpose-built for content sites

## Component Specifications

### Layout Components

#### BaseLayout.astro
```typescript
interface Props {
  title: string;        // Page title for SEO
  description: string;  // Meta description
  ogImage?: string;     // Open Graph image URL
}
```
**Contains:** SEOHead, Header, main slot, Footer, FeedbackBanner

#### Header.astro
- Sticky positioning on scroll
- Logo/name linking to homepage
- Desktop navigation: Projects, About, Contact, LinkedIn
- Mobile hamburger trigger (reveals MobileNav)

#### MobileNav.astro
- Full-screen overlay
- 48px+ touch targets
- Animated slide-in
- Close on link click or X button

#### Footer.astro
- Copyright notice
- Social links (LinkedIn, GitHub, Email)
- Secondary navigation

### Common Components

#### Button.astro
```typescript
interface Props {
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  download?: boolean;
}
```

#### Card.astro
```typescript
interface Props {
  hover?: boolean;
  class?: string;
}
```

#### MetricBadge.astro
```typescript
interface Props {
  value: string;    // "40m+"
  label: string;    // "Portfolio Value"
  prefix?: string;  // "£"
}
```

#### TechTag.astro
```typescript
interface Props {
  tech: string;     // "Python"
  icon?: string;    // Optional icon identifier
}
```

### Section Components

#### Hero.astro
- Name, title, tagline
- MetricBadges for key achievements
- Primary CTA: View Projects
- Secondary CTA: View LinkedIn Profile

#### ProjectCard.astro
```typescript
interface Props {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
  screenshot: string;
  status: 'live' | 'coming-soon' | 'in-progress';
  progressPercent?: number;
}
```

#### ContactForm.astro
```typescript
interface Props {
  formspreeId: string;
}
```
Fields: name (required), email (required), message (required)
Note: Includes "CV available on request" messaging above form

#### FeedbackBanner.astro
- Fixed bottom position
- Thumbs up/down (44px+ touch targets)
- localStorage duplicate prevention
- GA4 event tracking
- Dismissible

## Appendices

### Glossary
- **Astro:** Static site generator with component islands architecture
- **Content Collections:** Astro's type-safe content management system
- **Formspree:** Third-party form handling service
- **GA4:** Google Analytics 4

### References
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Formspree Documentation](https://formspree.io/docs)

### Decision Log

| Date | Decision | Rationale | Alternatives |
|------|----------|-----------|--------------|
| 2025-12-31 | Astro over Next.js | Lighter weight, content-focused | Next.js, Hugo, Jekyll |
| 2025-12-31 | Tailwind over Bootstrap | More control, smaller output | Bootstrap, vanilla CSS |
| 2025-12-31 | GitHub Pages over Netlify | Git-integrated, familiar workflow | Netlify, Vercel, Cloudflare |
| 2025-12-31 | Dark theme only | Modern tech aesthetic, simpler | Light theme, toggle |
| 2025-12-31 | Formspree over custom | Zero backend maintenance | Netlify Forms, custom API |
| 2025-12-31 | Vitest for testing | Fast, modern, works with Astro | Jest, Playwright |
