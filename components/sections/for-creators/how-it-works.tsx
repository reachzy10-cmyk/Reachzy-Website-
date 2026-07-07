'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function HowItWorks() {
  const { process } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {process.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {process.headline}
          </h2>
        </ScrollReveal>

        <div className="relative max-w-3xl">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            <StaggeredReveal staggerDelay={150} direction="up">
              {process.steps.map((step, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className="relative flex-shrink-0 z-10 w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-2xl md:text-3xl font-medium text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 pt-2">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </StaggeredReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
