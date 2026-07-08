'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function TheFit() {
  const { theFit } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {theFit.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {theFit.headline}
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground text-lg">
            {theFit.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={120} direction="up" className="grid gap-6 md:grid-cols-2">
            {theFit.factors.map((factor, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 bg-background/50">
                <div className="flex-shrink-0 w-36">
                  <span className="font-mono text-xs uppercase tracking-wide text-primary font-medium">
                    {factor.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {factor.description}
                </p>
              </div>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground italic">
            {theFit.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}