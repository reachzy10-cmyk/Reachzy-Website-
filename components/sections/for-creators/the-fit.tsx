'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { CheckCircle2 } from 'lucide-react';

export function TheFit() {
  const { theFit } = forCreatorsContent;
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-coral)]">{theFit.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{theFit.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">We consider your channel’s content, audience context and the product before bringing an opportunity forward. The aim is to explain why the match could make sense—not to send every offer to every creator.</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{theFit.criteria.map((criterion, index) => <article key={criterion} className="rounded-xl border border-border bg-background p-5"><div className="flex items-center justify-between"><CheckCircle2 className="size-5 text-[var(--accent-coral)]"/><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><p className="mt-4 text-sm leading-relaxed text-foreground">{criterion}</p></article>)}</StaggeredReveal>
        <p className="mt-6 text-sm text-muted-foreground">The aim is simple: bring you opportunities that make sense for your content, audience and the way you want to work.</p>
      </div>
    </section>
  );
}
