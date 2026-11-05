'use client';

import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Check } from 'lucide-react';

export function FitPhilosophy() {
  const { fitPhilosophy } = forBrandsContent;
  return (
    <section id="creator-fit" className="border-b border-border bg-card/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{fitPhilosophy.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{fitPhilosophy.headline}</h2><p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{fitPhilosophy.body}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fitPhilosophy.criteria.map((criterion, index) => <article key={criterion} className="rounded-xl border border-border bg-background p-5"><div className="flex items-center justify-between"><Check className="size-5 text-primary"/><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><p className="mt-5 text-sm leading-relaxed text-foreground">{criterion}</p></article>)}
        </StaggeredReveal>
      </div>
    </section>
  );
}
