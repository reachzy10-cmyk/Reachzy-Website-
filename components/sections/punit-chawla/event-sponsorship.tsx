'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function EventSponsorship() {
  const { eventSponsorship } = punitChawlaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {eventSponsorship.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {eventSponsorship.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <Card variant="default" hoverable={false} className="p-6 border-primary/30 bg-primary/5">
            <p className="text-base text-muted-foreground">
              {eventSponsorship.body}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
