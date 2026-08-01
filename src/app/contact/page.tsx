'use client';

import { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Send,
  ShieldCheck,
  Clock,
  Zap,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Toast, { ToastState } from '@/components/Toast';

const quickCards = [
  {
    icon: Phone,
    title: 'Call us',
    desc: 'Speak directly with our team',
    value: '+91 85408 68767',
  },
  {
    icon: Mail,
    title: 'Email us',
    desc: 'Send a detailed message',
    value: 'contact@dacitos.com',
  },
  {
    icon: MessageCircle,
    title: 'Live chat',
    desc: 'Instant support, available 24/7',
    value: 'Start a chat',
  },
  {
    icon: Calendar,
    title: 'Book a meeting',
    desc: 'Free 30-minute consultation',
    value: 'Schedule now',
  },
];

const whyChoose = [
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support and assistance.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Security',
    desc: 'Enterprise-grade security across every project.',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    desc: 'Quick turnaround and efficient delivery, every time.',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setToast({
        type: 'success',
        message: "Message sent — we'll be in touch within 24 hours.",
      });
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
      setToast({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    }
  }

  return (
    <>
      <section className="pt-40 pb-16 px-6 grid-backdrop text-center">
        <Reveal>
          <span className="eyebrow text-cyan-soft">Get in touch</span>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mt-4">
            Let&apos;s build something{' '}
            <span className="gradient-text">amazing.</span>
          </h1>
          <p className="mt-5 text-text-secondary max-w-xl mx-auto">
            Ready to transform your business with cutting-edge technology? Our
            team is here to help, every step of the way.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <c.icon className="w-5 h-5 text-cyan-soft mb-4" />
                <h3 className="font-display font-medium text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs text-text-muted">{c.desc}</p>
                <p className="mt-3 text-sm text-cyan-soft font-medium">
                  {c.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <Reveal>
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-text-primary">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-text-secondary">
                Tell us about your project and we&apos;ll get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono text-text-muted">
                      Full name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl bg-ink-surface border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-text-muted">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl bg-ink-surface border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-text-muted">
                    Company name
                  </label>
                  <input
                    value={form.company}
                    onChange={e =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Your company name"
                    className="mt-2 w-full rounded-xl bg-ink-surface border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-text-muted">
                    Project details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    className="mt-2 w-full rounded-xl bg-ink-surface border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan text-ink px-6 py-3.5 font-medium hover:bg-cyan-soft transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Why choose Dacitos?
                </h3>
                <div className="mt-6 space-y-5">
                  {whyChoose.map(w => (
                    <div key={w.title} className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-indigo/15 shrink-0">
                        <w.icon className="w-4 h-4 text-cyan-soft" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-primary">
                          {w.title}
                        </div>
                        <div className="text-xs text-text-muted mt-0.5">
                          {w.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl p-8 bg-gradient-to-br from-cyan/15 to-indigo/15 border border-border-subtle">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Need immediate assistance?
                </h3>
                <div className="mt-5 space-y-3 text-sm text-text-secondary">
                  <div>+91 85408 68767 / +91 91143 90257</div>
                  <div>contact@dacitos.com</div>
                  <div>Patna, Bihar, India — 801102</div>
                  <div>Mon–Fri: 9:00 AM – 7:00 PM IST</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
