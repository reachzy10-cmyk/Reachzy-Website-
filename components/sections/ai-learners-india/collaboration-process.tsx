'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CollaborationProcess() {
  const { collaborationProcess } = aiLearnersIndiaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {collaborationProcess.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={200} direction="up" className="space-y-8 md:space-y-12 max-w-4xl">
            {collaborationProcess.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <span className="font-mono text-4xl md:text-5xl font-medium text-muted-foreground/30 flex-shrink-0 mt-1 md:mt-0 w-16 text-right">
                  {step.number}
                </span>
                <div className="flex-1 min-w-0">
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
        </ScrollReveal>
      </div>
    </section>
  );
}