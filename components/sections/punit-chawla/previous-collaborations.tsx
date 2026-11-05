'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function PreviousCollaborations() {
  const { previousCollaborations } = punitChawlaContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{previousCollaborations.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{previousCollaborations.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{previousCollaborations.intro}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {previousCollaborations.examples.map((item) => (
            <article key={item.brand} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{item.type}</p>
              <h3 className="mt-3 font-serif text-xl text-foreground">{item.brand}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </StaggeredReveal>
        <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">{previousCollaborations.closingLine}</p>
      </div>
    </section>
  );
}
