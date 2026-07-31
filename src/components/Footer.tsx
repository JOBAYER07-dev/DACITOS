"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  "Web Development",
  "Mobile Apps",
  "Cloud Services",
  "Custom Software",
  "IT Consulting",
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "in", href: "#" },
  { label: "tw", href: "#" },
  { label: "fb", href: "#" },
  { label: "ig", href: "#" },
  { label: "gh", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-ink-elevated">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan to-indigo" />
              <span className="relative font-display font-bold text-ink text-sm">D</span>
            </span>
            <span className="font-display font-semibold text-text-primary">Dacitos</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Providing IT services, software development, cloud solutions, and digital
            infrastructure for businesses across industries.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-text-secondary">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
              <span>1st floor, Raj Bhavan, opposite the Jio Tower, Dulhin Bazar, Bihar — 801102</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cyan shrink-0" />
              <span>+91 85408 68767</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan shrink-0" />
              <span>contact@dacitos.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-text-muted mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-text-muted mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-text-muted mb-4">Stay Updated</h4>
          <p className="text-sm text-text-secondary mb-3">
            Product notes and case studies, occasionally.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-lg bg-ink-surface border border-border-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan"
            />
            <button className="shrink-0 rounded-lg bg-cyan text-ink px-3 py-2 text-sm font-medium hover:bg-cyan-soft transition-colors">
              Join
            </button>
          </form>
          <div className="flex gap-3 mt-6">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle font-mono text-[0.65rem] text-text-secondary hover:text-cyan hover:border-cyan transition-colors"
                aria-label="social link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>&copy; 2026 Dacitos Technologies Private Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-text-secondary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-text-secondary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
