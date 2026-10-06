'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function WhyCreatorsWorkWithUs() {
  const { whyCreatorsWorkWithUs } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl">
          <StaggeredReveal staggerDelay={120} direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
              {whyCreatorsWorkWithUs.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {whyCreatorsWorkWithUs.headline}
            </h2>
            <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground text-lg">
              {whyCreatorsWorkWithUs.body.map((paragraph, index) => (
                <p key={index} className={clsx(index === 0 && 'font-serif text-foreground/90')}>
                  {paragraph}
                </p>
              ))}
            </div>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}