import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dacitos Technologies',
  description:
    "Field notes on engineering, product decisions, and what we've learned shipping real software projects.",
};

const posts = [
  {
    title: "Why most cloud migrations run over budget — and how to avoid it",
    tag: "Cloud",
    read: "6 min read",
    excerpt:
      "The three planning mistakes that quietly inflate migration costs, and the checklist we run before touching a single server.",
  },
  {
    title: "Choosing between React Native and Flutter in 2026",
    tag: "Mobile",
    read: "8 min read",
    excerpt:
      "A practical comparison based on the trade-offs we've actually hit shipping cross-platform apps for clients.",
  },
  {
    title: "What 'production-ready' actually means for custom software",
    tag: "Engineering",
    read: "5 min read",
    excerpt:
      "Beyond the demo: the checklist we hold every custom build to before calling it done.",
  },
];

export default function Blog() {
  return (
    <section className="pt-40 pb-28 px-6 grid-backdrop">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow text-cyan-soft">Notes from the team</span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-4">
            Field notes on building <span className="gradient-text">good software.</span>
          </h1>
          <p className="mt-5 text-text-secondary max-w-xl mx-auto">
            Occasional writing on engineering, product decisions, and what we've
            learned shipping real projects.
          </p>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto mt-16 space-y-5">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="glass-card rounded-2xl p-7 flex items-start justify-between gap-6 group cursor-pointer hover:translate-y-[-2px] transition-transform">
              <div>
                <span className="font-mono text-[0.68rem] text-cyan-soft">
                  {p.tag} · {p.read}
                </span>
                <h3 className="font-display text-xl font-medium text-text-primary mt-2">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xl">
                  {p.excerpt}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-cyan transition-colors shrink-0 mt-1" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
