'use client';

import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Clapperboard, Layers3, PlayCircle, Presentation } from 'lucide-react';

const icons = [PlayCircle, Presentation, Clapperboard, Layers3];
export function Formats() {
  const { formats } = forBrandsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{formats.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{formats.headline}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{formats.body}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={90} direction="up" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {formats.cards.map((card, index) => { const Icon = icons[index]; return <article key={card.name} className="rounded-xl border border-border bg-card p-5"><span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></span><h3 className="mt-5 font-serif text-xl text-foreground">{card.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p><p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-primary">{card.note}</p></article>; })}
        </StaggeredReveal>
      </div>
    </section>
  );
}
