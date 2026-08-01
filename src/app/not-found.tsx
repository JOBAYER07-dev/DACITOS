import Link from 'next/link';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 grid-backdrop">
      <div className="text-center max-w-md">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-indigo/20 flex items-center justify-center mb-6">
          <Compass className="w-6 h-6 text-cyan-soft" />
        </div>
        <div className="font-display text-6xl font-semibold gradient-text">
          404
        </div>
        <h1 className="font-display text-xl font-medium text-text-primary mt-4">
          This page wandered off the roadmap.
        </h1>
        <p className="mt-3 text-text-secondary text-sm leading-relaxed">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan text-ink px-6 py-3 text-sm font-medium hover:bg-cyan-soft transition-colors"
        >
          Back to home
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
