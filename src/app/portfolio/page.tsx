"use client";

import { useState } from "react";
import { Calendar, Users2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from '@/components/CountUp';

const categories = ["All", "Web Development", "Mobile Apps", "Cloud Solutions", "Custom Software"];

const projects = [
  {
    name: "Sion Semiconductors",
    cat: "Web Development",
    desc: "Corporate platform showcasing expertise in AI, IoT, and semiconductor design.",
    stack: ["Angular", "Node.js", "MongoDB"],
    days: "34 days",
    devs: "05 developers",
  },
  {
    name: "Acmegrade",
    cat: "Web Development",
    desc: "Modern education and skill-development platform built for scale.",
    stack: ["Next.js", "Node.js", "Express.js"],
    days: "30 days",
    devs: "03 developers",
  },
  {
    name: "Infinitix Technologies",
    cat: "Web Development",
    desc: "Digital experience platform for an IT, cloud, and GIS solutions provider.",
    stack: ["Next.js", "Node.js", "Express.js"],
    days: "14 days",
    devs: "07 developers",
  },
  {
    name: "CloudDBTech",
    cat: "Cloud Solutions",
    desc: "Enterprise site for a cloud consulting and data platform company.",
    stack: ["Angular", "Node.js", "MongoDB"],
    days: "20 days",
    devs: "03 developers",
  },
];

const impact = [
  { value: 250, suffix: '%', label: 'Average ROI increase' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'System uptime' },
  { value: 100, suffix: '%', label: 'Security compliance' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <section className="pt-40 pb-16 px-6 grid-backdrop text-center">
        <Reveal>
          <span className="eyebrow text-cyan-soft">Our portfolio</span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-4">
            Work we&apos;re proud to{' '}
            <span className="gradient-text">put our name on.</span>
          </h1>
          <p className="mt-5 text-text-secondary max-w-xl mx-auto">
            A look at how we&apos;ve helped businesses across industries reach
            their digital transformation goals.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                active === c
                  ? 'bg-cyan text-ink border-cyan font-medium'
                  : 'border-border-subtle text-text-secondary hover:border-border-strong'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                <div className="h-44 bg-gradient-to-br from-ink-surface to-ink-elevated relative flex items-center justify-center">
                  <span className="font-display text-3xl text-text-primary/10 group-hover:text-cyan/20 transition-colors">
                    {p.name}
                  </span>
                  <span className="absolute top-4 right-4 font-mono text-[0.65rem] bg-ink/80 border border-border-subtle rounded-full px-2.5 py-1 text-cyan-soft">
                    {p.cat}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map(s => (
                      <span
                        key={s}
                        className="font-mono text-[0.68rem] text-text-muted border border-border-subtle rounded-full px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-5 text-xs text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {p.days}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users2 className="w-3.5 h-3.5" /> {p.devs}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-ink-elevated/60 border-y border-border-subtle">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow text-cyan-soft">Portfolio impact</span>
            <h2 className="font-display text-3xl font-semibold mt-3">
              Measurable results, not just deliverables.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {impact.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="glass-card rounded-2xl py-8">
                  <div className="font-display text-3xl font-semibold gradient-text">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </div>
                  <div className="text-xs text-text-muted mt-2">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
