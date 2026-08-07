'use client';

import { homeContent } from '@/lib/content/home';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhatWeDo() {
  const { whatWeDo } = homeContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{whatWeDo.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">{whatWeDo.headline}</h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{whatWeDo.body}</p>
        </ScrollReveal>
        <div className="lg:col-span-7">
          <StaggeredReveal staggerDelay={90} direction="up" className="space-y-5">
            {whatWeDo.steps.map((step, index) => (
              <article key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border pb-5 last:border-0 last:pb-0 sm:grid-cols-[3.25rem_1fr]">
                <span className="font-mono text-xl font-medium text-primary/70 sm:text-2xl">{String(index + 1).padStart(2, '0')}</span>
                <div><h3 className="font-serif text-xl text-foreground">{step.title}</h3><p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{step.body}</p></div>
              </article>
            ))}
          </StaggeredReveal>
        </div>
      </div>
    </section>
  );
}
