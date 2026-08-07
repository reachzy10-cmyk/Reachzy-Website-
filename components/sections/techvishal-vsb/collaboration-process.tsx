'use client';

import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function CollaborationProcess() {
  const { collaborationProcess } = techvishalVsbContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal direction="up" className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{collaborationProcess.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{collaborationProcess.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{collaborationProcess.intro}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="grid gap-4 md:grid-cols-3">
          {collaborationProcess.steps.map((step) => <article key={step.number} className="rounded-xl border border-border bg-card p-5">
            <p className="font-mono text-sm text-primary">{step.number}</p>
            <h3 className="mt-3 font-serif text-xl text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </article>)}
        </StaggeredReveal>
        <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">{collaborationProcess.closingLine}</p>
      </div>
    </section>
  );
}
