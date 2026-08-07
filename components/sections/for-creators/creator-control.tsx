'use client';

import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Check, MessageCircle, X } from 'lucide-react';

const options = [
  { icon: Check, label: 'Interested?', action: 'Continue the conversation and clarify the details.' },
  { icon: MessageCircle, label: 'Need more information?', action: 'Ask questions before deciding.' },
  { icon: X, label: 'Not a fit?', action: 'Decline the opportunity.' },
];

export function CreatorControl() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">Your channel. Your decision.</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">You decide what happens next.</h2><p className="mt-4 leading-relaxed text-muted-foreground">You decide whether the opportunity moves forward, what you are comfortable agreeing to and how the content should work for your audience.</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 md:grid-cols-3">{options.map(({ icon: Icon, label, action }) => <article key={label} className="rounded-xl border border-border bg-card p-5"><Icon className="size-5 text-[var(--accent-coral)]"/><h3 className="mt-4 font-serif text-lg text-foreground">{label}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{action}</p></article>)}</StaggeredReveal>
        <p className="mt-5 text-sm text-muted-foreground">Nothing moves forward without your agreement to the opportunity and its terms.</p>
      </div>
    </section>
  );
}
