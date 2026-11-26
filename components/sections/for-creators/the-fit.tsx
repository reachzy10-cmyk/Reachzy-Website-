'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { CheckCircle2 } from 'lucide-react';

export function TheFit() {
  const { theFit } = forCreatorsContent;
  return (
    <section className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-creator)]">{theFit.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{theFit.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{theFit.intro}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{theFit.dimensions.map((dimension, index) => <article key={dimension.title} className="rounded-xl border border-border bg-background p-5"><div className="flex items-center justify-between"><CheckCircle2 className="size-5 text-[var(--accent-creator)]"/><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><p className="mt-4 text-sm leading-relaxed text-foreground">{dimension.title}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{dimension.body}</p></article>)}</StaggeredReveal>
        <p className="mt-6 text-sm text-muted-foreground">{theFit.closingLine}</p>
      </div>
    </section>
  );
}
