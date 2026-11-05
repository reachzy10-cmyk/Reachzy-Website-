'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { Card } from '@/components/ui/card';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Video, Film } from 'lucide-react';

export function CollaborationFormats() {
  const { collaborationFormats } = pavanLalwaniContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{collaborationFormats.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{collaborationFormats.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{collaborationFormats.intro}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-4 md:grid-cols-2">
          {collaborationFormats.formats.map((format) => {
            const Icon = format.name.startsWith('Integrated') ? Film : Video;
            return (
              <Card key={format.name} variant="pricing" hoverable={false} className="flex h-full flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><Icon className="size-4" />YouTube</div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{format.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{format.description}</p>
                <p className="mt-5 font-mono text-3xl font-semibold text-foreground">{format.rate}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{format.details}</p>
              </Card>
            );
          })}
        </StaggeredReveal>
        <p className="mt-6 rounded-xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">{collaborationFormats.terms}</p>
      </div>
    </section>
  );
}
