import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Users2,
  Target,
  Lightbulb,
} from 'lucide-react';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { projects, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found | Dacitos Technologies' };
  return {
    title: `${project.name} | Dacitos Technologies Portfolio`,
    description: project.desc,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter(p => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="pt-40 pb-16 px-6 grid-backdrop">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Link
              href="/portfolio"
              className="flex w-fit items-center gap-1.5 text-sm text-text-secondary hover:text-cyan transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to portfolio
            </Link>
            <span className="eyebrow text-cyan-soft">{project.cat}</span>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-4 leading-tight">
              {project.name}
            </h1>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-2xl">
              {project.desc}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-soft" /> {project.days}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users2 className="w-4 h-4 text-cyan-soft" /> {project.devs}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-xs">
                Client: {project.client}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-ink-surface to-ink-elevated glass-card flex items-center justify-center">
              <span className="font-display text-4xl text-text-primary/10">
                {project.name}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-indigo/15 mb-5">
                <Target className="w-4.5 h-4.5 text-cyan-soft" />
              </div>
              <h2 className="font-display text-lg font-medium text-text-primary">
                The challenge
              </h2>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-indigo/15 mb-5">
                <Lightbulb className="w-4.5 h-4.5 text-cyan-soft" />
              </div>
              <h2 className="font-display text-lg font-medium text-text-primary">
                Our solution
              </h2>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="eyebrow text-text-muted mb-3">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => (
                <span
                  key={s}
                  className="font-mono text-xs text-cyan-soft border border-border-subtle rounded-full px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-24 bg-ink-elevated/60 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">
              Have a project like this in mind?
            </h2>
            <p className="mt-3 text-text-secondary text-sm max-w-md mx-auto">
              Let&apos;s talk about what you&apos;re building and how we can
              help.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan text-ink px-6 py-3 text-sm font-medium hover:bg-cyan-soft transition-colors"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <span className="eyebrow text-cyan-soft">More work</span>
              <h2 className="font-display text-2xl font-semibold mt-3">
                Other projects
              </h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="glass-card rounded-2xl p-6 flex items-center justify-between gap-4 group hover:translate-y-[-2px] transition-transform"
                  >
                    <div>
                      <span className="font-mono text-[0.68rem] text-cyan-soft">
                        {p.cat}
                      </span>
                      <h3 className="font-display font-medium text-text-primary mt-1">
                        {p.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cyan transition-colors shrink-0" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
