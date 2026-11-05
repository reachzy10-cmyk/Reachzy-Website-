'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CollaborationProcess() {
  const { collaborationProcess } = aiLearnersIndiaContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal direction="up" className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Campaign workflow</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{collaborationProcess.headline}</h2>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={70} direction="up" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {collaborationProcess.steps.map((step) => <article key={step.number} className="rounded-xl border border-border bg-card p-5">
            <span className="font-mono text-sm text-primary">{step.number}</span>
            <h3 className="mt-3 font-serif text-xl text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </article>)}
        </StaggeredReveal>
      </div>
    </section>
  );
}
