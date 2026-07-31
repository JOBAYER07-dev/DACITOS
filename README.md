# Dacitos Technologies — Website Redesign

A premium, animated redesign of dacitos.com, built as part of the Web Developer / UI
Developer hiring assignment.

## Live Demo
_Add your Vercel deployment URL here after deploying._

## Design Direction

- **Palette:** Deep ink navy canvas (`#090d1a`) with a cyan → indigo gradient accent,
  extending Dacitos' existing brand colors into a more premium, tech-forward system.
- **Type:** Space Grotesk (display) + Inter (body) + JetBrains Mono (labels/eyebrows,
  nodding to the technical/developer audience).
- **Signature element:** An interactive 3D "infrastructure stack" in the hero —
  translucent glass layers (Frontend / Backend / Cloud / Security) that respond to
  mouse movement, visually representing Dacitos as a full-stack IT partner.
- **Motion:** Framer Motion for scroll-triggered reveals and micro-interactions,
  Lenis for smooth-scroll, all motion respects `prefers-reduced-motion`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, Lenis (smooth scroll)
- **Icons:** lucide-react
- **Fonts:** Self-hosted via `@fontsource` (Space Grotesk, Inter, JetBrains Mono)

## Pages

- `/` — Home (hero, stats, services, process, portfolio preview, testimonial, CTA)
- `/about` — About, story, mission, values, why-choose-us
- `/portfolio` — Filterable project grid + impact metrics
- `/contact` — Contact page with a working form wired to `/api/contact`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
  app/
    page.tsx              # Home
    about/page.tsx
    portfolio/page.tsx
    contact/page.tsx
    api/contact/route.ts  # Contact form handler (extend with an email service)
    layout.tsx
    globals.css           # Design tokens (colors, fonts, utilities)
  components/
    Navbar.tsx
    Footer.tsx
    StackVisual.tsx        # Signature hero animation
    Reveal.tsx              # Scroll-reveal animation wrapper
    SmoothScroll.tsx         # Lenis smooth-scroll setup
```

## Notes

- The contact form currently logs submissions server-side; wire `/api/contact`
  to an email service (Resend, SendGrid, or SMTP via Nodemailer) for production use.
- All interactive elements have visible focus states and animations are disabled
  for users with `prefers-reduced-motion` enabled.
