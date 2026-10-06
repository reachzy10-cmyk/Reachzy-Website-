'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function OpportunityBriefing() {
  const { opportunityBriefing } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {opportunityBriefing.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {opportunityBriefing.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {opportunityBriefing.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-coral)]/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative space-y-4 md:space-y-5">
              {opportunityBriefing.fields.map((field, index) => (
                <div
                  key={index}
                  className={clsx(
                    'flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border border-border/50 bg-background/50 transition-colors hover:border-primary/20 hover:bg-background',
                    index === opportunityBriefing.fields.length - 1 && 'border-primary/20 bg-primary/5'
                  )}
                >
                  <div className="flex-shrink-0 w-40 sm:w-48">
                    <span className="font-mono text-xs uppercase tracking-wide text-primary font-medium">
                      {field.label}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {field.description}
                    </p>
                  </div>
                  {index === opportunityBriefing.fields.length - 1 && (
                    <span className="flex-shrink-0 font-mono text-xs text-primary font-medium">
                      ★ Highlighted
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic text-center">
                {opportunityBriefing.closingLine}
              </p>
            </div>

            {/* Illustrative label */}
            <div className="absolute top-4 right-4 text-xs font-mono uppercase tracking-wider text-muted-foreground/50">
              Illustrative briefing
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}