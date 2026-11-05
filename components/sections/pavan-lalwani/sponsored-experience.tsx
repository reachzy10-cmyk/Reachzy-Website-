'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function SponsoredExperience() {
  const { sponsoredExperience } = pavanLalwaniContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={80} direction="up" className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{sponsoredExperience.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{sponsoredExperience.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{sponsoredExperience.body}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={80} direction="up" className="mt-7 flex flex-wrap gap-2">
          {sponsoredExperience.categories.map((category) => <span key={category} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">{category}</span>)}
        </StaggeredReveal>
        <p className="mt-7 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">{sponsoredExperience.closingLine}</p>
      </div>
    </section>
  );
}
