'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CreatorBackground() {
  const { background } = aiLearnersIndiaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-4xl">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {background.headline}
          </h2>
          <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {background.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Details */}
          <StaggeredReveal staggerDelay={120} initialDelay={200} direction="up" className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {background.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl">
                <div className="inline-flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Check className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {detail.label}
                  </p>
                  <p className="text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}