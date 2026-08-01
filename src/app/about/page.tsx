import {
  Target,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'About Us | Dacitos Technologies',
  description:
    'Dacitos Technologies is a full-stack IT partner delivering web, mobile, cloud, and custom software for businesses, startups, and enterprises.',
};

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    desc: 'We reach for the right modern approach, not the familiar one, to solve real problems.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Every release goes through rigorous testing before it reaches your users.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    desc: 'We work close enough to understand what success actually looks like for you.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    desc: "Our team keeps learning so your systems don't fall behind the curve.",
  },
];

const whyUs = [
  'Proven delivery track record across industries',
  'Certified engineers with deep, current expertise',
  "Round-the-clock support once you're live",
  'Agile delivery — see progress every week',
  'Security-first engineering from day one',
];

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 grid-backdrop">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow text-cyan-soft">About Dacitos</span>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-4 leading-tight">
              A technology partner that
              <span className="gradient-text">
                {' '}
                builds like it&apos;s ours too.
              </span>
            </h1>
            <p className="mt-6 text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Dacitos Technologies Private Limited delivers software
              development, cloud infrastructure, and digital transformation for
              businesses, startups, and enterprises — with the accountability of
              a team that treats your product like its own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16 border-y border-border-subtle bg-ink-elevated/60">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 1, suffix: '+', label: 'Years of excellence' },
            { value: 5, suffix: '+', label: 'Happy clients' },
            { value: 10, suffix: '+', label: 'Projects completed' },
            { value: 1, suffix: '+', label: 'Countries served' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="font-display text-3xl font-semibold gradient-text">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              Our story
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Dacitos was founded on a simple premise: enterprise-grade
              technology shouldn&apos;t be reserved for enterprises. We&apos;ve
              grown into a trusted partner offering managed services, cloud
              infrastructure, and custom software for teams who want a serious
              build without the agency overhead.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every engagement starts the same way — by understanding what
              you&apos;re actually trying to achieve, not just what you asked us
              to build.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card rounded-3xl p-10 text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-indigo/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-cyan-soft" />
              </div>
              <h3 className="font-display text-lg font-medium">Our mission</h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                Empowering organizations with innovative, secure, and scalable
                technology that supports real growth and digital transformation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 bg-ink-elevated/60 border-y border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="eyebrow text-cyan-soft">Principles</span>
            <h2 className="font-display text-3xl font-semibold mt-3">
              Our core values
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <v.icon className="w-5 h-5 text-cyan-soft mb-4" />
                  <h3 className="font-display font-medium">{v.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Why teams choose Dacitos
            </h2>
            <ul className="mt-7 space-y-4">
              {whyUs.map(w => (
                <li
                  key={w}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan mt-0.5 shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-10 bg-gradient-to-br from-cyan/15 to-indigo/15 border border-border-subtle">
              <h3 className="font-display text-xl font-semibold text-text-primary">
                Ready to transform your business?
              </h3>
              <p className="mt-3 text-text-secondary text-sm">
                Join the teams who&apos;ve accelerated their roadmap with a
                partner that ships.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center rounded-full bg-text-primary text-ink px-5 py-3 text-sm font-medium hover:bg-cyan transition-colors"
              >
                Start your project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
