# Content Update Guide

This guide explains how to update your portfolio website content with Claude Code assistance. All updates should take less than 1 hour per month.

## Quick Reference

| Task | Time | Frequency |
|------|------|-----------|
| Add new project | 30-45 min | Monthly |
| Update existing project | 10-15 min | As needed |
| Update site info | 5 min | As needed |

> **Note:** CV is not hosted on the website for data security. It's available on request via the contact form. Direct visitors to your LinkedIn profile for professional history.

## Before You Start

### Prerequisites
1. Git is installed and configured
2. Node.js 20+ is installed
3. You have access to the GitHub repository

### Local Development Commands
```bash
npm install          # First time only
npm run dev          # Start local preview (localhost:4321)
npm run build        # Verify build works
npm test             # Run component tests
```

## Adding a New Project

### Step 1: Prepare Your Assets

Before starting, gather:
- [ ] Screenshot of your project (1600x900 or 16:9 ratio, PNG format)
- [ ] Live demo URL (if available, e.g., Streamlit Cloud)
- [ ] GitHub repository URL (if public)
- [ ] Project details:
  - Title
  - Problem it solves (1 sentence)
  - Your solution (1 sentence)
  - Technologies used
  - Impact/results metric

### Step 2: Add Screenshot

Save your screenshot to:
```
public/images/projects/your-project-name.png
```

Use kebab-case for the filename (e.g., `resource-management.png`).

### Step 3: Create Project File

Create a new file in `src/content/projects/`:
```
src/content/projects/your-project-name.md
```

Use this template:
```yaml
---
title: "Your Project Title"
order: 4
status: "in-progress"
progressPercent: 40
problem: "One sentence describing the problem this solves."
solution: "One sentence describing your solution approach."
techStack: ["Python", "Streamlit", "Claude API", "Pandas"]
impact: "Key metric (e.g., 'Targeting 60% reduction in allocation time')"
demoUrl: "https://your-app.streamlit.app"
githubUrl: "https://github.com/ocphaneuf/your-repo"
screenshot: "/images/projects/your-project-name.png"
featured: false
---

## Extended Description (Optional)

Additional details that display when the project card is expanded.
This can include:
- Detailed problem context
- Technical approach
- Lessons learned
- Future enhancements
```

### Step 4: Adjust Order Numbers

If you want your project to appear in a specific position, update the `order` field in other project files as needed. Lower numbers appear first.

### Step 5: Test and Deploy

```bash
# Create a branch
git checkout -b add-project-name

# Run tests
npm test

# Build to verify
npm run build

# Preview locally
npm run dev

# Commit changes
git add .
git commit -m "Add [Project Name] to portfolio"

# Push and merge
git push -u origin add-project-name
git checkout main
git merge add-project-name
git push origin main
```

Deployment happens automatically within 2-3 minutes.

## Using Claude Code for Updates

### Add a New Project
Tell Claude Code:
```
Add a new project to my portfolio with these details:
- Title: [name]
- Problem: [what it solves]
- Solution: [your approach]
- Tech: [list of technologies]
- Impact: [key metric]
- Demo URL: [streamlit URL]
- GitHub: [repo URL]
- Status: [live/in-progress/coming-soon]
- Progress: [percentage if in-progress]
```

### Update an Existing Project
Tell Claude Code:
```
Update the [project name] project to change:
- status from "in-progress" to "live"
- remove the progressPercent field
- update the impact to "[new metric]"
```

### Change Project to Live
Tell Claude Code:
```
Mark the [project name] project as live. Remove the progress
indicator and update the impact metric to "[actual result]".
```

## Updating Site Information

### Personal Details & Links
Edit `src/data/site-config.ts`:

```typescript
export const siteConfig = {
  name: "Olivier Phaneuf",
  title: "Senior Delivery Leader",  // Update your title
  tagline: "Delivering £40m+ portfolios with AI-powered tools",
  urls: {
    site: "https://ocphaneuf.github.io",
    linkedin: "https://linkedin.com/in/ocphaneuf",  // Primary profile link
    github: "https://github.com/ocphaneuf",         // Update GitHub
    email: "ocphaneuf@gmail.com",                   // Update email
  },
  formspree: { formId: "YOUR_FORM_ID" },  // Get from formspree.io
  analytics: { ga4Id: "G-XXXXXXXXXX" },   // Get from Google Analytics
  // Note: CV not hosted - available on request via contact form
};
```

### Metrics on Homepage
Update the `metrics` array in the same file:
```typescript
metrics: [
  { value: "40m+", label: "Portfolio at Ocado", prefix: "£" },
  { value: "7m", label: "Portfolio at Network Rail", prefix: "£" },
  { value: "CMgr MCMI", label: "Distinction", prefix: "" },
],
```

## Project Status Reference

| Status | Display | Use When |
|--------|---------|----------|
| `live` | Green "Live" badge | Demo is working and accessible |
| `in-progress` | Progress bar with % | Actively developing |
| `coming-soon` | "Coming Soon" badge | Planned but not started |

### Status Frontmatter Examples

**Live project:**
```yaml
status: "live"
# No progressPercent needed
```

**In-progress project:**
```yaml
status: "in-progress"
progressPercent: 40  # Show as 40% complete
```

**Coming soon:**
```yaml
status: "coming-soon"
# No progressPercent needed
```

## Troubleshooting

### Build Fails
```bash
# Check for errors
npm run build

# Common fixes:
# 1. Missing required frontmatter field
# 2. Invalid YAML syntax (check quotes, colons)
# 3. Image path doesn't exist
```

### Tests Fail
```bash
# Run tests with verbose output
npm test -- --reporter=verbose

# Fix issues, then re-run
npm test
```

### Site Not Updating
1. Check GitHub Actions: Go to repository > Actions tab
2. Verify the workflow completed successfully
3. Wait 2-3 minutes for CDN cache to update
4. Hard refresh browser (Ctrl+Shift+R)

## Content Checklist

Before adding a new project, verify:
- [ ] Screenshot is 16:9 ratio and < 500KB
- [ ] All required frontmatter fields are filled
- [ ] `order` number doesn't conflict with existing projects
- [ ] Demo URL works (if provided)
- [ ] `npm test` passes
- [ ] `npm run build` succeeds
- [ ] Local preview looks correct (`npm run dev`)

## Monthly Maintenance Routine

1. **Review analytics** (5 min) - Check Google Analytics for visitor patterns
2. **Update project status** (10 min) - Mark completed projects as "live"
3. **Add new project** (30 min) - If you have a new tool to showcase
4. **Verify all demos work** (5 min) - Click through demo links
5. **Check for broken links** (5 min) - Ensure all URLs are valid
6. **Update LinkedIn** (external) - Keep LinkedIn profile current as primary professional profile

Total: ~55 minutes/month (excluding LinkedIn updates)
