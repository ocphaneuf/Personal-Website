# User Stories and Requirements

## Document Information
**Project:** Portfolio Website
**Version:** [1.0]
**Last Updated:** 30/12/25

## Product Vision
**Vision Statement:** A scalable and insightful snapshot of Olivier's professional and personal skills and product portfolio that any prospective employer can see he has the skillset to succeed.

**Target Outcome:** Personal development work, like AI-app prototypes are demo'ed on the website to compliment my CV and skills that I can link in my CV for job applications.

## User Personas

### Olivier Phaneuf - Website Owner
**Background:** Senior Delivery Leader managing £7m+ portfolios, building AI-powered delivery tools using Claude Code. Professionally experienced in project/programme management with growing technical capability through AI-assisted development. Seeking Head of Delivery or Director-level roles.
**Goals:** 
- Showcase delivery leadership experience (£40m+ at Ocado, £7m at Network Rail)
- Demonstrate technical capability through working AI tool demos
- Differentiate from CV-only applications
- Provide easy contact path for hiring managers
**Pain Points:**
- CV alone doesn't show ongoing technical development and AI tool building
- Limited feedback loop on job applications
- Need to prove both delivery leadership AND technical capability
- Low software development expertise (relies on Claude Code)
**Technical Proficiency:** Low (development) / High (delivery leadership, product management)

### Hiring Manager - Website Visitor
**Background:** Decision-maker reviewing candidates for Head of Delivery or senior programme management roles. Visits from CV/LinkedIn link, has 2-3 minutes to assess if candidate warrants further consideration.
**Goals:**  
- Quickly verify candidate has genuine delivery experience at scale
- Assess if technical capability claims are real (working demos vs. just talk)
- Understand candidate's approach to modern delivery challenges
- Determine if worth scheduling interview
**Pain Points:**
- Inundated with applications, must make rapid decisions
- CVs often exaggerate technical skills
- No time to read lengthy content or deep-dive into apps
- Need to see evidence, not just claims
**Technical Proficiency:** Medium (understands delivery/agile, may not be deeply technical)

## Epic: User Experience

### Epic Description
The user experience must provide a welcoming, easy to use, and engaging environment that captures attention within 10 seconds and guides visitors through the intended journey: Homepage → Projects → Contact.

**Business Value:** First impressions determine if hiring managers continue exploring or bounce immediately. Clear navigation and visual hierarchy ensure key information (delivery experience + technical capability) is immediately visible.
**Success Metrics:**
- Directional increase in unique and total visitor count
- 60% of visitors navigate to Projects page
- <5 second time to meaningful content
- Engagement feedback via thumbs up/down banner

## Epic: Content Relevance

### Epic Description
Content must be relevant, tangible and demonstrate both delivery leadership scale (£40m+ portfolios) and genuine technical capability (working AI tools) in a scannable format that respects hiring managers' limited time.

**Business Value:** Content is the sales pitch. Must prove delivery track record, technical capability, and modern approach to AI-augmented delivery in <3 minutes of reading time.
**Success Metrics:**
- Positive engagement feedback (thumbs up) vs negative (thumbs down)
- Contact form submissions or direct outreach
- Interview callback rate increase vs CV-only applications

---

## User Stories

### Story 1: Homepage Value Proposition

**As a** hiring manager visiting from CV/LinkedIn  
**I want to** immediately understand Olivier's unique value (delivery scale + technical capability)  
**So that** I can decide in 10 seconds if this candidate warrants further exploration

**Priority:** Must Have  
**Size Estimate:** M

#### Acceptance Criteria
- [ ] **Given** I land on homepage **When** I scan for 10 seconds **Then** I see delivery experience scale (£40m+, £7m), AI tool building, and role target (Head of Delivery)
- [ ] **Given** I'm on homepage **When** I look for navigation **Then** I see clear paths to Projects, About, CV download, and Contact
- [ ] **Given** I'm on mobile **When** I view homepage **Then** all content is readable without zooming and navigation is thumb-friendly

#### Technical Notes
- Must load in <2 seconds (hosting platform performance requirement)
- Hero section with: Name, Title, Value Prop (1-2 sentences), Key metrics
- Clear CTA buttons: "View Projects", "Download CV", "Contact Me"
- Mobile-first responsive design (majority of quick checks happen on mobile)

#### Test Scenarios
1. **Happy path:** Visitor lands on homepage, reads value prop, clicks "View Projects"
2. **Edge case:** Mobile visitor on slow 3G connection - content still loads and is readable
3. **Error case:** Broken navigation links - all links must work or display helpful error

#### UI/UX Notes
- Above-the-fold content: Name, tagline, key metrics, primary CTA
- Visual hierarchy: Large heading, subtext, metrics, buttons
- No scrolling required to see value proposition
- Professional but approachable design (not corporate-stuffy, not startup-casual)

#### Definition of Done
- [ ] Code implemented and reviewed
- [ ] Displays correctly on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Load time <2 seconds on standard connection
- [ ] All navigation links functional
- [ ] Content proofread and approved
- [ ] Tested on Chrome, Firefox, Safari

---

### Story 2: Projects Showcase Page

**As a** hiring manager  
**I want to** see working demonstrations of Olivier's AI tools with measurable impact  
**So that** I can verify technical capability claims are genuine (not just CV fluff)

**Priority:** Must Have  
**Size Estimate:** L

#### Acceptance Criteria
- [ ] **Given** I'm on Projects page **When** I view each project **Then** I see: Problem, Solution, Tech Stack, Measurable Impact, Live Demo link, GitHub link
- [ ] **Given** I click "Live Demo" **When** demo loads **Then** I can interact with working application (embedded or new tab)
- [ ] **Given** I'm evaluating technical capability **When** I scan projects **Then** I see 3 distinct AI tools solving real delivery problems with quantified results

#### Technical Notes
- Each project needs: Title, problem statement, solution approach, tech stack, impact metrics, demo link, GitHub link, screenshot
- Demo hosting options: Streamlit Cloud (free), embedded iframe OR external link
- Screenshots as fallback if demo is down
- Consider: Single page with 3 projects OR individual project detail pages (recommend single page for MVP)

#### Test Scenarios
1. **Happy path:** Visitor clicks demo link, interacts with tool, returns to site, clicks GitHub to see code
2. **Edge case:** Demo platform is down - screenshot + "Demo temporarily unavailable" message shows
3. **Error case:** GitHub link broken - displays helpful error message

#### UI/UX Notes
- Card-based layout for each project
- Visual separation between projects
- Tech stack displayed as tags/badges (Python, Streamlit, Claude API, etc.)
- Impact metrics highlighted visually (e.g., "83% time saved")
- Embedded demos preferred over external links (keeps visitor on site)

#### Definition of Done
- [ ] 3 projects displayed with all required information
- [ ] Live demos functional and accessible
- [ ] GitHub links working
- [ ] Screenshots present as fallback
- [ ] Mobile responsive (projects stack vertically)
- [ ] Page loads in <3 seconds
- [ ] Content proofread and technically accurate

---

### Story 3: About Page - Career Narrative

**As a** hiring manager  
**I want to** understand Olivier's delivery track record and career progression  
**So that** I can assess if experience matches role requirements

**Priority:** Must Have  
**Size Estimate:** S

#### Acceptance Criteria
- [ ] **Given** I'm on About page **When** I read content **Then** I see: Current role (Network Rail), Previous role (Ocado), Portfolio scale (£40m+, £7m), Key achievements, Credentials (CMgr MCMI Distinction)
- [ ] **Given** I'm assessing cultural fit **When** I read narrative **Then** I understand Olivier's approach to delivery leadership (data-driven, AI-augmented, outcome-focused)
- [ ] **Given** I want more info **When** I reach end of page **Then** I see Contact options (email, LinkedIn, GitHub)

#### Technical Notes
- 300-500 words max (scannable in 2 minutes)
- Structure: Current role → Previous experience → Why AI tools → Credentials → Contact
- Professional photo optional (consider adding later)
- No lengthy career history - CV download provides full details

#### Test Scenarios
1. **Happy path:** Visitor reads About, understands background, clicks Contact
2. **Edge case:** Visitor arrived directly to About (not from homepage) - navigation still clear

#### UI/UX Notes
- Single column text, readable font size (16-18px)
- Key achievements in callout boxes or highlighted text
- Contact info prominently displayed at bottom
- Link to CV download embedded in narrative

#### Definition of Done
- [ ] Content written and proofread
- [ ] Contact links functional (email, LinkedIn, GitHub)
- [ ] Mobile responsive
- [ ] Page loads quickly
- [ ] Clear navigation to other sections

---

### Story 4: CV Download

**As a** hiring manager  
**I want to** download Olivier's CV  
**So that** I can review detailed experience and share with my hiring team

**Priority:** Must Have  
**Size Estimate:** XS

#### Acceptance Criteria
- [ ] **Given** I'm on any page **When** I click "Download CV" **Then** PDF downloads immediately with clear filename (e.g., "Olivier_Phaneuf_CV.pdf")
- [ ] **Given** I open downloaded CV **When** I review content **Then** CV is current, professional, and matches website narrative
- [ ] **Given** I'm on mobile **When** I download CV **Then** file downloads or opens in mobile viewer without issues

#### Technical Notes
- Host PDF in repository (e.g., /assets/cv/Olivier_Phaneuf_CV.pdf)
- OR use external link (Google Drive, LinkedIn) if prefer
- Filename convention: FirstName_LastName_CV.pdf (easy to find in downloads)
- Update monthly or when significant changes occur

#### Test Scenarios
1. **Happy path:** Click download button, PDF downloads with correct filename
2. **Edge case:** PDF viewer doesn't support inline viewing - still downloadable
3. **Error case:** File link broken - display error message with alternative contact method

#### Definition of Done
- [ ] CV uploaded and accessible
- [ ] Download button works on all pages
- [ ] Filename is professional and clear
- [ ] PDF is current version
- [ ] Mobile download tested

---

### Story 5: Contact Form/Direct Contact

**As a** hiring manager  
**I want to** easily contact Olivier  
**So that** I can schedule interview or request additional information

**Priority:** Must Have  
**Size Estimate:** M

#### Acceptance Criteria
- [ ] **Given** I want to contact Olivier **When** I click "Contact" **Then** I see email link OR simple contact form
- [ ] **Given** I submit contact form **When** form processes **Then** I receive confirmation and Olivier receives notification
- [ ] **Given** I prefer direct email **When** I click email link **Then** my email client opens with Olivier's address pre-filled

#### Technical Notes
- Option 1: Simple mailto: link (zero maintenance, works everywhere)
- Option 2: Contact form using Formspree/Netlify Forms (free tier sufficient)
- Option 3: Contact page with email + LinkedIn + GitHub links
- Recommendation: Start with Option 1 or 3 (simplest, no backend needed)

#### Test Scenarios
1. **Happy path:** Click email link, send email, Olivier receives it
2. **Edge case:** User has no email client configured - display email address as copyable text
3. **Form option - Happy path:** Fill form, submit, receive confirmation

#### UI/UX Notes
- Contact info clearly visible on About page
- Optional: Contact button in navigation
- Display email as both clickable link AND copyable text
- LinkedIn and GitHub as alternative contact methods

#### Definition of Done
- [ ] Contact method implemented and tested
- [ ] Email link works or form submits successfully
- [ ] Confirmation feedback provided to visitor
- [ ] Olivier receives contact notifications
- [ ] Mobile friendly

---

### Story 6: Engagement Feedback Banner

**As a** website owner  
**I want to** collect visitor engagement feedback (thumbs up/down)  
**So that** I can measure site effectiveness and identify improvement areas

**Priority:** Should Have  
**Size Estimate:** M

#### Acceptance Criteria
- [ ] **Given** I'm on any page **When** I scroll **Then** I see non-intrusive feedback banner (top or bottom)
- [ ] **Given** I click thumbs up/down **When** click registers **Then** I see "Thanks for feedback!" and selection is logged
- [ ] **Given** I'm on mobile **When** I see banner **Then** thumbs buttons are easily tappable (44px+ touch targets)

#### Technical Notes
- Simple implementation: localStorage to prevent duplicate votes + external analytics (Google Analytics events) OR basic form submission
- Banner placement: Fixed bottom bar OR subtle top banner (non-modal, dismissible)
- Store: Vote type (up/down), page URL, timestamp
- Free analytics options: Google Analytics, Plausible, Simple Analytics

#### Test Scenarios
1. **Happy path:** Click thumbs up, see confirmation, vote logged in analytics
2. **Edge case:** Click multiple times - only first vote counts
3. **Mobile:** Thumbs buttons are easily tappable without misclicks

#### UI/UX Notes
- Minimal design: "Was this helpful? 👍 👎"
- Non-intrusive: doesn't block content
- Dismissible: X button to close
- Position: Bottom right OR full-width bottom bar
- Mobile: Fixed position, large touch targets

#### Definition of Done
- [ ] Banner displays on all pages
- [ ] Thumbs up/down functional
- [ ] Votes logged to analytics
- [ ] Duplicate vote prevention works
- [ ] Mobile-friendly touch targets
- [ ] Dismissible

---

### Story 7: Mobile Responsiveness

**As a** hiring manager on mobile  
**I want to** easily navigate and read content on my phone  
**So that** I can review Olivier's portfolio during commute or between meetings

**Priority:** Must Have  
**Size Estimate:** M

#### Acceptance Criteria
- [ ] **Given** I'm on mobile (375px width) **When** I view any page **Then** all content is readable without horizontal scrolling or zooming
- [ ] **Given** I'm navigating **When** I tap navigation links **Then** touch targets are ≥44px and easy to tap
- [ ] **Given** I view project demos **When** demos load **Then** they are mobile-optimized or provide "View on desktop" message

#### Technical Notes
- Test on: iPhone SE (375px), standard phone (390px), tablet (768px)
- CSS framework with mobile-first approach (Bootstrap, Tailwind, or custom)
- Touch-friendly navigation (hamburger menu if needed)
- Embedded demos may need "Best viewed on desktop" note if complex

#### Test Scenarios
1. **Happy path:** Navigate entire site on iPhone, all content readable and tappable
2. **Edge case:** Landscape orientation - content still displays correctly
3. **Demo case:** Complex demo on mobile - clear message about desktop experience

#### UI/UX Notes
- Stack content vertically on mobile
- Increase font sizes for readability
- Navigation: Sticky header with hamburger menu OR simple top links
- Images: Responsive sizing
- Forms/buttons: Large touch targets

#### Definition of Done
- [ ] All pages tested on mobile devices
- [ ] No horizontal scrolling required
- [ ] Touch targets meet accessibility standards
- [ ] Navigation functional on mobile
- [ ] Content readable without zooming
- [ ] Screenshots reviewed on actual devices

---

### Story 8: Analytics & Visitor Tracking

**As a** website owner  
**I want to** track visitor behavior (page views, navigation paths, time on site)  
**So that** I can measure effectiveness and optimize content

**Priority:** Should Have  
**Size Estimate:** S

#### Acceptance Criteria
- [ ] **Given** visitor arrives **When** they interact with site **Then** I can see: unique visitors, page views, navigation paths, time on page
- [ ] **Given** I review analytics **When** I check monthly **Then** I can identify which pages are most viewed and where visitors drop off
- [ ] **Given** I respect privacy **When** tracking visitors **Then** I use privacy-friendly analytics (no PII collected)

#### Technical Notes
- Options: Google Analytics (free, comprehensive), Plausible (privacy-focused, paid), Simple Analytics (privacy-focused, paid), Cloudflare Analytics (free with Pages)
- Recommendation: Start with Google Analytics 4 (free) OR Cloudflare Analytics if using Cloudflare Pages
- Track: Page views, session duration, bounce rate, navigation flow, device type

#### Test Scenarios
1. **Happy path:** Analytics installed, tracking visitor behavior, dashboard accessible
2. **Privacy:** No personal information collected beyond standard page analytics

#### Definition of Done
- [ ] Analytics platform selected and configured
- [ ] Tracking code installed on all pages
- [ ] Dashboard accessible to Olivier
- [ ] Privacy policy updated (if required)
- [ ] Tracking verified (test visits show in analytics)

---

### Story 9: Performance Optimization

**As a** hiring manager with limited time  
**I want to** site to load quickly  
**So that** I don't abandon due to slow loading

**Priority:** Should Have  
**Size Estimate:** S

#### Acceptance Criteria
- [ ] **Given** I visit any page **When** page loads **Then** time to interactive is <3 seconds on standard connection
- [ ] **Given** I'm on slow connection **When** page loads **Then** critical content (text, navigation) loads first, images load progressively
- [ ] **Given** I navigate between pages **When** clicking links **Then** page transitions feel immediate (<1 second)

#### Technical Notes
- Optimize images: WebP format, appropriate sizing, lazy loading
- Minimize JavaScript: Only essential scripts
- Use CDN for assets (GitHub Pages provides this)
- Consider static site generator (Jekyll, Hugo, 11ty) for fast builds
- Test with: Google PageSpeed Insights, WebPageTest

#### Test Scenarios
1. **Happy path:** All pages load in <3 seconds on 4G connection
2. **Edge case:** Slow 3G connection - critical content still loads acceptably
3. **Image heavy:** Projects page with screenshots - loads progressively

#### Definition of Done
- [ ] PageSpeed Insights score >85 (mobile and desktop)
- [ ] All images optimized
- [ ] Critical rendering path optimized
- [ ] Tested on slow connection
- [ ] No render-blocking resources

---

### Story 10: SEO Basics

**As a** website owner  
**I want to** basic SEO optimization  
**So that** site appears in search results when recruiters search for my name

**Priority:** Could Have  
**Size Estimate:** XS

#### Acceptance Criteria
- [ ] **Given** someone searches "Olivier Phaneuf" **When** they view results **Then** my portfolio site appears in first page
- [ ] **Given** search engines crawl site **When** they index pages **Then** proper titles, descriptions, and metadata are present
- [ ] **Given** I share link on LinkedIn **When** preview generates **Then** correct title, description, and image display

#### Technical Notes
- Page titles: Unique, descriptive (e.g., "Olivier Phaneuf - Senior Delivery Leader | AI-Powered Portfolio Tools")
- Meta descriptions: 150-160 characters per page
- Open Graph tags for social sharing
- robots.txt and sitemap.xml
- Semantic HTML (proper heading hierarchy)

#### Test Scenarios
1. **Happy path:** Search "Olivier Phaneuf portfolio", site appears in results
2. **Social sharing:** Share link on LinkedIn, preview looks professional

#### Definition of Done
- [ ] Page titles and meta descriptions added
- [ ] Open Graph tags configured
- [ ] Sitemap.xml generated
- [ ] Tested social media preview

---

### Story 11: Content Update Workflow

**As a** website owner  
**I want to** easily add new projects monthly  
**So that** portfolio stays current without requiring deep technical knowledge

**Priority:** Should Have  
**Size Estimate:** S

#### Acceptance Criteria
- [ ] **Given** I build new AI tool **When** I want to add it to site **Then** I can add project with <1 hour of effort
- [ ] **Given** I update existing project **When** I edit content **Then** changes are live within 5 minutes
- [ ] **Given** I'm using Claude Code **When** I request changes **Then** workflow is clear and repeatable

#### Technical Notes
- Document update process: Where to add project info, how to deploy changes
- Content structure: Markdown files OR JSON data files for projects
- Deployment: Automatic via Git push (GitHub Pages, Netlify, Vercel)
- Template/pattern for adding new projects

#### Test Scenarios
1. **Happy path:** Add new project using documented workflow, live in <5 minutes
2. **Edge case:** Deployment fails - clear error message and rollback process

#### UI/UX Notes
- Projects stored in structured format (Markdown frontmatter OR separate data file)
- Adding project = create new file or add entry to data file
- Screenshots stored in organized directory structure

#### Definition of Done
- [ ] Update workflow documented
- [ ] Successfully add test project following workflow
- [ ] Deployment automatic on push
- [ ] Takes <1 hour to add new project
- [ ] Claude Code can assist with process

---

### Story 12: Accessibility Basics

**As a** hiring manager with accessibility needs  
**I want to** navigate site using keyboard or screen reader  
**So that** I can access content regardless of abilities

**Priority:** Should Have  
**Size Estimate:** S

#### Acceptance Criteria
- [ ] **Given** I use keyboard only **When** I navigate site **Then** I can access all links and interactive elements using Tab key
- [ ] **Given** I use screen reader **When** I visit site **Then** content is announced in logical order with proper labels
- [ ] **Given** I have color blindness **When** I view site **Then** information is not conveyed by color alone

#### Technical Notes
- Semantic HTML: proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation: Focus visible, logical tab order
- Color contrast: WCAG AA minimum (4.5:1 for normal text)

#### Test Scenarios
1. **Happy path:** Navigate entire site using only keyboard, all content accessible
2. **Screen reader:** Use NVDA/JAWS to navigate, content announced correctly
3. **Color contrast:** Run aXe/Lighthouse audit, no contrast issues

#### Definition of Done
- [ ] All images have alt text
- [ ] Heading hierarchy correct
- [ ] Keyboard navigation functional
- [ ] Color contrast meets WCAG AA
- [ ] Lighthouse accessibility score >90

---

## Non-Functional Requirements

### Performance
- **Response time:** Initial page load <2 seconds on standard 4G connection
- **Time to interactive:** <3 seconds for all pages
- **Image loading:** Progressive loading with lazy load for below-fold images
- **Navigation:** Page transitions feel instantaneous (<500ms)
- **Demo loading:** Embedded demos load within 5 seconds or show loading state

### Usability
- **Learning curve:** Hiring managers can find key information (experience, projects, contact) within 30 seconds
- **Navigation clarity:** Visitor can reach any page from any other page in ≤2 clicks
- **Mobile usability:** All interactive elements ≥44px touch targets, no horizontal scrolling required
- **Content scanability:** Key information (metrics, achievements, impact) highlighted and scannable in <2 minutes
- **Error recovery:** Broken links display helpful messages with alternative navigation options

### Reliability
- **Uptime:** 99.9% availability (hosting platform responsibility - select platform with strong SLA)
- **Zero maintenance:** Site functions without intervention (static site, no server-side processing)
- **Graceful degradation:** If embedded demo is down, screenshot + link still available
- **Browser compatibility:** Works on all modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)

### Security
- **No authentication required:** Public portfolio site, no login system
- **HTTPS only:** All pages served over secure connection
- **No data collection:** Contact form (if implemented) only collects submitted information, no tracking of PII
- **External links:** Open in new tabs, use rel="noopener noreferrer" for security
- **Form protection:** If using contact form, implement basic spam protection (honeypot or CAPTCHA)

### Maintainability
- **Monthly updates:** Adding new project requires <1 hour with Claude Code assistance
- **Content structure:** Projects stored in structured format (Markdown or JSON) for easy editing
- **Deployment:** Automatic via Git push (zero-friction deployment)
- **Documentation:** Update workflow documented for future reference and Claude Code usage
- **No dependencies:** Minimal external dependencies to reduce maintenance burden

### Compatibility
- **Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Devices:** 
  - Mobile: 375px (iPhone SE) to 430px (iPhone Pro Max)
  - Tablet: 768px to 1024px
  - Desktop: 1280px to 1920px+ (including ultrawide)
- **Operating Systems:** Platform-independent (web-based)
- **Network conditions:** Functional on 3G, optimized for 4G/5G/WiFi

## Constraints and Assumptions

### Technical Constraints
- Zero cost hosting required (free tier GitHub Pages, Netlify, Vercel, or Cloudflare Pages)
- Must work with Claude Code assistance (owner has low software development expertise)
- Static site only (no backend/database to maintain)
- Maximum 1 hour/month maintenance time available
- Must support embedded demos from external platforms (Streamlit Cloud, etc.)

### Business Constraints
- Budget: £0 (free hosting, free domain via GitHub Pages OR .github.io)
- Timeline: MVP should be achievable in 8-12 hours of development time
- Monthly updates: New projects added ~1x per month
- Content creation: All content written with Claude assistance

### Assumptions
- Hiring managers have reliable internet (4G or better)
- Visitors arrive primarily from CV or LinkedIn (direct traffic, not organic search)
- External demo platforms (Streamlit Cloud) maintain reasonable uptime
- GitHub/LinkedIn profiles remain active and up-to-date
- Visitor devices support modern web standards (ES6+, CSS Grid/Flexbox)

## Out of Scope

**Explicitly NOT included in MVP:**
- Blog/Articles section (can add later if needed)
- Dark mode toggle (single professional theme sufficient)
- Custom domain (can add later for ~£12/year if desired)
- Advanced SEO optimization (basic SEO only)
- E-commerce or payment features
- User authentication or login system
- Backend database or CMS
- Real-time chat or messaging
- Social media feed integrations
- Video hosting (link to external platforms like YouTube if needed)
- Multi-language support
- Advanced animations or interactions
- Newsletter signup
- Testimonials/recommendations section (LinkedIn handles this)

## Dependencies

### External Dependencies
- **Hosting Platform:** GitHub Pages / Netlify / Vercel / Cloudflare Pages (to be selected based on NFRs)
- **Demo Hosting:** Streamlit Cloud for AI tool demos (free tier, already in use)
- **Analytics Platform:** Google Analytics 4 OR Cloudflare Analytics (free)
- **Form Service:** Formspree OR Netlify Forms (if contact form implemented, free tier sufficient)

### Internal Dependencies
- **CV:** Current CV must be finalized and exported as PDF before Story 4
- **Project Documentation:** Each AI tool needs: description, tech stack, impact metrics, screenshots
- **GitHub Repositories:** All 3 AI tools should have public repos with README documentation
- **Personal Branding:** Consistent messaging across CV, LinkedIn, and portfolio site

## Risks and Mitigations

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| External demo platforms go down during hiring manager visit | High | Low | Include screenshots as fallback; add "View Demo" links that open in new tab; note "Demo temporarily unavailable" if down |
| Limited web development expertise causes slow progress | Medium | High | Use Claude Code for all development; select static site generator with strong documentation; choose pre-built themes to minimize custom styling |
| Site looks outdated or unprofessional | High | Medium | Use modern, professional theme (not custom design); test on multiple devices; get feedback before sharing widely |
| Embedded demos don't work on mobile | Medium | Medium | Add "Best viewed on desktop" note for complex demos; ensure project descriptions and screenshots are visible on mobile even if demo isn't functional |
| Hosting platform changes pricing or terms | Medium | Low | Use platform with strong free tier history (GitHub Pages); keep site portable (standard HTML/CSS/JS, no platform-specific features) |
| Content becomes stale and outdated | Medium | Medium | Set calendar reminder for monthly updates; keep update workflow simple (<1 hour); use structured content format for easy editing |
| Analytics show zero visitors | Low | Low | Ensure URL is in CV and LinkedIn; test links work; consider sharing on LinkedIn post to drive initial traffic |
| Hiring managers expect more polished/complex site | Medium | Low | Focus on content over flashy design; professional doesn't mean complex; working demos are more valuable than visual flair |

## Validation Approach

### User Acceptance Testing
- **Participants:** 2-3 trusted colleagues in delivery leadership roles (similar to target hiring managers)
- **Success criteria:** 
  - Can find key information (experience scale, projects, contact) in <1 minute
  - Navigate site without confusion
  - Understand value proposition immediately
  - All links functional on mobile and desktop
  - Professional appearance meets expectations for senior role
- **Timeline:** 1-2 days before sharing widely (quick feedback cycle)
- **Method:** Send link via private message, ask for 10-minute review, collect feedback via conversation or simple survey

### Beta Testing (if applicable)
- **Scope:** Soft launch with 5-10 contacts before adding to CV/LinkedIn
- **Participants:** Mix of delivery leaders, technical colleagues, and potentially recruiters if available
- **Duration:** 1 week
- **Feedback method:** 
  - Thumbs up/down banner for quick feedback
  - Optional: Brief Google Form with 3-4 questions (clarity, professionalism, likelihood to contact)
- **Success threshold:** >70% positive feedback, no critical usability issues identified

## Release Planning

### MVP (Minimum Viable Product)
**Must-have stories for initial release:**
- Story 1: Homepage Value Proposition
- Story 2: Projects Showcase Page
- Story 3: About Page - Career Narrative
- Story 4: CV Download
- Story 5: Contact Form/Direct Contact
- Story 7: Mobile Responsiveness

**Optional for MVP (implement if time allows):**
- Story 6: Engagement Feedback Banner
- Story 8: Analytics & Visitor Tracking

**Target delivery:** Within 8-12 hours of development time (can split across multiple sessions)

### Version 1.1 (Post-MVP Enhancements)
**Timeline:** Within 1-2 months after MVP launch
**Focus:** Optimization and feedback-driven improvements

- Story 9: Performance Optimization (if PageSpeed scores <85)
- Story 12: Accessibility Basics (keyboard navigation, screen reader support)
- Story 6: Engagement Feedback Banner (if not in MVP)
- Story 8: Analytics & Visitor Tracking (if not in MVP)
- Content refinement based on UAT feedback

### Version 2.0 (Long-term Enhancements)
**Timeline:** 3-6 months after MVP launch
**Focus:** Advanced features based on usage data

- Story 10: SEO Basics (if organic search traffic becomes relevant)
- Story 11: Content Update Workflow documentation and tooling improvements
- Custom domain (if professional presence warrants cost)
- Individual project detail pages (if needed for deeper explanations)
- Testimonials section (if collected relevant endorsements)
- Blog/articles (if content creation becomes priority)

**Potential future stories (backlog):**
- Dark mode toggle
- Video demos of tools
- Case study deep-dives
- Speaking engagements/publications section
- Advanced analytics (conversion tracking, funnel analysis)

## Appendix: Story Template

### Story [#]: [Story Title]

**As a** [user type]  
**I want to** [action]  
**So that** [benefit]

**Priority:** [MoSCoW]  
**Size:** [Estimate]

#### Acceptance Criteria
- [ ] **Given** [context] **When** [action] **Then** [outcome]

#### Technical Notes
[Details]

#### Test Scenarios
1. [Scenario]

#### Definition of Done
- [ ] [Items]