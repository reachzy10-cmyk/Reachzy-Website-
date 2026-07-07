'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function BeforeOpportunity() {
  const { beforeOpportunity } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {beforeOpportunity.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {beforeOpportunity.headline}
          </h2>
        </ScrollReveal>

        {/* Desktop: Horizontal scroll with snap - all cards equal */}
        <div className="hidden lg:flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
          {beforeOpportunity.steps.map((step, index) => (
            <div key={index} className="flex-shrink-0 snap-start w-[320px] max-w-[calc(100%-48px)]">
              <ScrollReveal direction="up" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 h-full relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="font-mono text-xl font-medium text-primary">
                      {step.number}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-pretty text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                  {index < beforeOpportunity.steps.length - 1 && (
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-6">
          <StaggeredReveal staggerDelay={150} direction="up">
            {beforeOpportunity.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="font-mono text-lg font-medium text-primary">
                          {step.number}
                        </span>
                      </div>
                      {index < beforeOpportunity.steps.length - 1 && (
                        <div className="absolute left-[22px] top-10 bottom-[-24px] w-px bg-gradient-to-b from-primary/30 to-transparent" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-pretty text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </div>
    </section>
  );
}
