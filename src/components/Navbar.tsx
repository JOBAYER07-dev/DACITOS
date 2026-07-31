"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Compass,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites & web applications", href: "/#services" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android development", href: "/#services" },
  { icon: Cloud, title: "Cloud Services", desc: "AWS, Azure & cloud migration", href: "/#services" },
  { icon: Code2, title: "Custom Software", desc: "Tailored software solutions", href: "/#services" },
  { icon: Compass, title: "IT Consulting", desc: "Strategic technology guidance", href: "/#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
            scrolled
              ? "glass-card py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              : "py-2"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan to-indigo opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-display font-bold text-ink text-sm">
                D
              </span>
            </span>
            <span className="font-display font-semibold text-[1.05rem] tracking-tight text-text-primary">
              Dacitos
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors"
            >
              Portfolio
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors">
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]"
                  >
                    <div className="glass-card rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-indigo/15 shrink-0 mt-0.5">
                            <s.icon className="w-4 h-4 text-cyan-soft" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-text-primary">{s.title}</div>
                            <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/#services"
                        className="block text-center text-xs font-medium text-cyan-soft hover:text-cyan mt-1 pt-2 border-t border-border-subtle px-3 py-2"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className="text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[0.9rem] text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-text-primary text-ink px-4 py-2 text-[0.85rem] font-medium hover:bg-cyan transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-text-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-6 mt-2 glass-card rounded-2xl p-5 flex flex-col gap-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-text-primary text-ink px-4 py-2.5 text-sm font-medium"
            >
              Start a project <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
