'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CollaborationProcess() {
  const { collaborationProcess } = pavanLalwaniContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-20">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {collaborationProcess.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {collaborationProcess.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {collaborationProcess.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={200} direction="up" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {collaborationProcess.steps.map((step, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-5">
                <span className="font-mono text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <div className="mt-3 min-w-0">
                  <h3 className="font-serif text-xl font-medium text-foreground">
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

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <p className="text-base text-muted-foreground border-t border-border pt-6 text-center">
            {collaborationProcess.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
