'use client';

import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Globe2, Languages } from 'lucide-react';

export function AudienceInsights() {
  const { audienceInsights } = techvishalVsbContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{audienceInsights.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{audienceInsights.headline}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{audienceInsights.intro}</p>
        </ScrollReveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <Languages className="size-5 text-primary" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Content language</p>
            <p className="mt-1 font-serif text-2xl text-foreground">{audienceInsights.contentLanguage}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <Globe2 className="size-5 text-primary" aria-hidden="true" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Channel location</p>
            <p className="mt-1 font-serif text-2xl text-foreground">{audienceInsights.channelLocation.region}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{audienceInsights.channelLocation.note}</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">{audienceInsights.audienceNote}</p>
      </div>
    </section>
  );
}
