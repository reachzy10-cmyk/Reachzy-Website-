'use client';

import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { MessageCircle, Search, ThumbsUp } from 'lucide-react';

const steps = [
  { icon: MessageCircle, title: 'Start a conversation', body: 'Share your channel, niche and the types of sponsorships you usually consider.' },
  { icon: Search, title: 'Review a relevant opportunity', body: 'If a suitable brief comes up, review the brand, product, deliverables and commercial terms.' },
  { icon: ThumbsUp, title: 'Decide whether to proceed', body: 'Ask questions, discuss the details or decline. Nothing moves forward without your agreement.' },
];

export function GettingStarted() {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">How it starts</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">A simple process. No lengthy application.</h2><p className="mt-4 leading-relaxed text-muted-foreground">The first conversation is lightweight. More detail can follow if there is a relevant opportunity to explore.</p></ScrollReveal>
        <StaggeredReveal staggerDelay={90} direction="up" className="mt-8 grid gap-3 md:grid-cols-3">{steps.map(({ icon: Icon, title, body }, index) => <article key={title} className="rounded-xl border border-border bg-background p-5"><div className="flex items-center justify-between"><Icon className="size-5 text-[var(--accent-coral)]"/><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}</StaggeredReveal>
      </div>
    </section>
  );
}
