'use client';

import { forBrandsContent } from '@/lib/content/for-brands';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function Process() {
  const { process } = forBrandsContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-8 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{process.eyebrow}</p><h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{process.headline}</h2><p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{process.intro}</p></ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step) => <article key={step.number} className="rounded-xl border border-border bg-card p-5"><span className="font-mono text-sm text-primary">{step.number}</span><h3 className="mt-5 font-serif text-lg text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p></article>)}
        </StaggeredReveal>
      </div>
    </section>
  );
}
