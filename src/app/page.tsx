import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Compass,
  CheckCircle2,
  Star,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import StackVisual from "@/components/StackVisual";
import CountUp from '@/components/CountUp';
import MagneticButton from '@/components/MagneticButton';

const stats = [
  { value: 25, suffix: '+', label: 'Projects delivered' },
  { value: 23, suffix: '+', label: 'Clients served' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'System uptime' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom sites and web apps built with React, Next.js, and modern tooling — fast by default.",
    tags: ["Responsive", "SEO-ready", "Secure"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform apps for iOS and Android with interfaces people actually enjoy.",
    tags: ["iOS & Android", "React Native", "App Store ready"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Migration, infrastructure, and monitoring on AWS, Azure, and GCP that scales as you grow.",
    tags: ["DevOps", "Auto-scaling", "24/7 monitoring"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored systems designed around how your team actually works, not the other way around.",
    tags: ["API integration", "Database design", "Modernization"],
  },
  {
    icon: Compass,
    title: "IT Consulting",
    desc: "Strategic guidance to help you make the right technology bets, backed by hands-on delivery.",
    tags: ["Tech roadmap", "Process design", "Training"],
  },
];

const process = [
  { n: "01", title: "Discovery", desc: "We map your goals, constraints, and users before writing a line of code." },
  { n: "02", title: "Design & Plan", desc: "Architecture and interface decisions get made deliberately, not by default." },
  { n: "03", title: "Build", desc: "Agile delivery with visible progress — you see the product take shape weekly." },
  { n: "04", title: "Ship & Support", desc: "Launch, then ongoing monitoring and iteration as your business evolves." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 grid-backdrop overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full bg-gradient-to-br from-cyan/20 via-indigo/10 to-transparent blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2 text-cyan-soft mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                IT services & software partner
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display font-semibold text-[2.75rem] sm:text-[3.6rem] leading-[1.04] tracking-tight text-text-primary">
                We build the systems
                <br />
                your business runs <span className="gradient-text">on.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed">
                Dacitos is a full-stack technology partner — web, mobile, cloud,
                and custom software, delivered by a team that treats your
                product like its own.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan text-ink px-6 py-3.5 font-medium hover:bg-cyan-soft transition-colors"
                  >
                    Start your project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 font-medium text-text-primary hover:border-cyan hover:text-cyan transition-colors"
                >
                  View our work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <StackVisual />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border-subtle bg-ink-elevated/60">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="mt-1 text-sm text-text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-28 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="eyebrow text-cyan-soft">What we do</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-xl">
              Comprehensive IT solutions, under one roof.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-indigo/15 mb-5">
                    <s.icon className="w-5 h-5 text-cyan-soft" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-text-secondary leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[0.68rem] text-text-muted border border-border-subtle rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 bg-ink-elevated/60 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="eyebrow text-cyan-soft">How we work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-xl">
              A process built for transparency at every stage.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative pl-0">
                  <span className="font-display text-4xl font-semibold text-text-primary/10">
                    {p.n}
                  </span>
                  <h3 className="font-display text-lg font-medium mt-2 text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow text-cyan-soft">Recent work</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
                Products we&apos;ve shipped.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-cyan-soft hover:text-cyan transition-colors"
              >
                View full portfolio <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'Sion Semiconductors',
                cat: 'Web Development',
                stack: 'Angular · Node.js · MongoDB',
              },
              {
                name: 'Acmegrade',
                cat: 'Web Development',
                stack: 'Next.js · Node.js · Express.js',
              },
              {
                name: 'Infinitix Technologies',
                cat: 'Web Development',
                stack: 'Next.js · Node.js · Express.js',
              },
            ].map((proj, i) => (
              <Reveal key={proj.name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="h-40 bg-gradient-to-br from-ink-surface to-ink-elevated relative flex items-center justify-center">
                    <span className="font-display text-2xl text-text-primary/15 group-hover:text-cyan/20 transition-colors">
                      {proj.name}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[0.68rem] text-cyan-soft">
                      {proj.cat}
                    </span>
                    <h3 className="font-display text-lg font-medium mt-1.5 text-text-primary">
                      {proj.name}
                    </h3>
                    <p className="mt-2 text-xs text-text-muted font-mono">
                      {proj.stack}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
              ))}
            </div>
            <p className="font-display text-2xl sm:text-3xl font-medium leading-snug text-text-primary">
              &ldquo;Working with Dacitos was a genuine step-change for our
              operations — their platform gave us delivery tracking across every
              city we run in.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan to-indigo flex items-center justify-center font-display text-sm text-ink font-semibold">
                R
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-text-primary">
                  Rahul Sharma
                </div>
                <div className="text-xs text-text-muted">
                  Founder, Sharma Logistics Pvt. Ltd.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl glass-card px-8 py-16 sm:px-16 text-center overflow-hidden">
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gradient-to-br from-cyan/25 to-indigo/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text-primary max-w-xl mx-auto">
                  Ready to build something that lasts?
                </h2>
                <p className="mt-4 text-text-secondary max-w-md mx-auto">
                  Free 30-minute consultation. No obligation, no generic pitch —
                  just a real conversation about your product.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan text-ink px-6 py-3.5 font-medium hover:bg-cyan-soft transition-colors"
                    >
                      Book a free consultation{' '}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-text-muted">
                  {[
                    'Free consultation',
                    'Custom solutions',
                    'Ongoing support',
                  ].map(t => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
