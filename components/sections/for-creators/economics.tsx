'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function Economics() {
  const { economics } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {economics.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {economics.headline}
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground text-lg">
            {economics.body.map((paragraph, index) => (
              <p key={index} className={clsx(
                index < 3 && 'font-semibold text-foreground'
              )}>
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up" className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground italic">
            {economics.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}