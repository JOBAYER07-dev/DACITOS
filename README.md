# Dacitos Technologies — Website Redesign

A premium, animated redesign of [dacitos.com](https://www.dacitos.com), built for the
Web Developer / UI Developer hiring assignment at Dacitos Technologies Pvt. Ltd.

**🔗 Live site:** [dacitos-tau.vercel.app](https://dacitos-tau.vercel.app/)
**📦 Repository:** [github.com/JOBAYER07-dev/DACITOS](https://github.com/JOBAYER07-dev/DACITOS)

---

## Overview

The brief was to transform Dacitos' existing corporate website into a premium,
highly interactive experience — while keeping the underlying business purpose
intact. This redesign keeps the same core pages and content (Home, About,
Portfolio, Contact) but rebuilds the experience from the ground up with a
darker, more technical visual identity, real motion design, and a component
architecture built for maintainability.

## Design Direction

- **Palette:** Deep ink navy canvas (`#090d1a`) with a cyan → indigo gradient
  accent, extending Dacitos' existing brand colors into a more premium,
  tech-forward system. A light theme is also available via the theme toggle.
- **Type:** Space Grotesk (display) + Inter (body) + JetBrains Mono
  (labels/eyebrows — a nod to the technical audience).
- **Signature element:** An interactive 3D "infrastructure stack" in the
  hero — translucent glass layers (Frontend / Backend / Cloud / Security)
  that respond to mouse movement, visually representing Dacitos as a
  full-stack IT partner.
- **Motion:** Framer Motion for scroll-triggered reveals, count-up stats,
  magnetic buttons, and micro-interactions; Lenis for smooth-scroll. All
  motion respects `prefers-reduced-motion`.

## Features

- 🌗 Light / dark theme toggle (persisted, no flash-of-wrong-theme)
- 🧭 Services mega-menu, active-route highlighting, mobile nav with
  outside-click-to-close
- 📊 Animated count-up statistics on Home, About, and Portfolio
- 🗂️ Filterable portfolio grid with individual **project detail pages**
  (challenge / solution / tech stack per project)
- 📬 Working contact form (`/api/contact`) with floating toast notifications
- 🧲 Magnetic hover effect on primary call-to-action buttons
- 📈 Scroll progress indicator + back-to-top button
- ♿ Skip-to-content link, visible focus states, reduced-motion support
- 🔍 Per-page SEO metadata, dynamic favicon, custom 404 page

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, TypeScript) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) (smooth scroll) |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | Self-hosted via [`@fontsource`](https://fontsource.org/) (Space Grotesk, Inter, JetBrains Mono) |
| Deployment | [Vercel](https://vercel.com/) |

No separate backend is used — the contact form is handled by a Next.js API
route (`src/app/api/contact/route.ts`).

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, services, process, portfolio preview, testimonial, CTA |
| `/about` | Story, mission, values, why-choose-us |
| `/portfolio` | Filterable project grid + impact metrics |
| `/portfolio/[slug]` | Individual project case study (challenge, solution, stack) |
| `/blog` | Article listing |
| `/contact` | Contact form wired to `/api/contact`, quick-contact cards |

---

## Running This Project on Another Computer

Follow these steps to get the project running locally from a fresh clone.

### 1. Prerequisites

Make sure you have installed:
- **Node.js** version 18.18 or later ([download here](https://nodejs.org/))
- **npm** (comes bundled with Node.js)
- **Git** ([download here](https://git-scm.com/))

Check your versions:
```bash
node -v
npm -v
git --version
```

### 2. Clone the repository

```bash
git clone https://github.com/JOBAYER07-dev/DACITOS.git
cd DACITOS
```

### 3. Install dependencies

```bash
npm install
```

This installs Next.js, Tailwind CSS, Framer Motion, Lenis, lucide-react, and
the self-hosted font packages listed in `package.json`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The
site supports hot-reload — any code change updates the browser instantly.

### 5. Build for production (optional)

To test a production build locally:

```bash
npm run build
npm run start
```

This runs the same optimized build that gets deployed to Vercel.

### 6. Deploying your own copy (optional)

1. Push the repo to your own GitHub account.
2. Go to [vercel.com](https://vercel.com/), sign in with GitHub.
3. Click **New Project**, import the repository.
4. Vercel auto-detects Next.js — no configuration changes needed.
5. Click **Deploy**.

---

## Project Structure

```
src/
  app/
    page.tsx                  # Home
    about/page.tsx
    portfolio/
      page.tsx                # Portfolio grid
      layout.tsx               # Portfolio page metadata
      [slug]/page.tsx           # Individual project detail page
    blog/page.tsx
    contact/
      page.tsx                 # Contact form
      layout.tsx                # Contact page metadata
    api/contact/route.ts        # Contact form handler
    icon.tsx                     # Dynamic favicon
    not-found.tsx                 # Custom 404 page
    layout.tsx                     # Root layout, fonts, theme init
    globals.css                     # Design tokens (colors, fonts, utilities)
  components/
    Navbar.tsx                       # Nav, Services dropdown, theme toggle
    Footer.tsx
    StackVisual.tsx                    # Signature hero animation
    Reveal.tsx                          # Scroll-reveal animation wrapper
    SmoothScroll.tsx                     # Lenis smooth-scroll setup
    ScrollProgress.tsx                    # Top scroll progress bar
    BackToTop.tsx
    MagneticButton.tsx
    CountUp.tsx                             # Animated number counter
    Toast.tsx                                # Form submission notifications
    ThemeToggle.tsx
  lib/
    projects.ts                               # Shared portfolio project data
```

## Notes

- The contact form currently logs submissions server-side
  (`src/app/api/contact/route.ts`); wire it up to an email service (Resend,
  SendGrid, or SMTP via Nodemailer) for real production use.
- All interactive elements have visible focus states, and animations are
  disabled for users with `prefers-reduced-motion` enabled.

## Author

**Jobayer Hosen**
Portfolio: [jobayerhosen-portfolio.vercel.app](https://jobayerhosen-portfolio.vercel.app/)
GitHub: [@JOBAYER07-dev](https://github.com/JOBAYER07-dev)
LinkedIn: [jobayer-dev](https://www.linkedin.com/in/jobayer-dev/)