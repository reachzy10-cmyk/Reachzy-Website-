'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Card } from '@/components/ui/card';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Video, Camera as Instagram, Briefcase as Linkedin, Play as Youtube } from 'lucide-react';

const platformIcons: Record<string, typeof Video> = { YouTube: Youtube, Instagram, LinkedIn: Linkedin };

export function CollaborationFormats() {
  const { collaborationFormats } = punitChawlaContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal delay={80} direction="up" className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{collaborationFormats.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{collaborationFormats.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{collaborationFormats.intro}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={60} direction="up" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {collaborationFormats.formats.map((format) => {
            const Icon = platformIcons[format.platform] || Video;
            return (
              <Card key={`${format.platform}-${format.name}`} variant="pricing" hoverable={false} className="flex h-full flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{format.platform}</span>
                  <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-lg leading-snug text-foreground">{format.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{format.description}</p>
                <p className="mt-5 font-mono text-3xl font-semibold tracking-tight text-foreground">{format.rate}</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{format.details}</p>
              </Card>
            );
          })}
        </StaggeredReveal>
        <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{collaborationFormats.terms}</p>
        </div>
      </div>
    </section>
  );
}
