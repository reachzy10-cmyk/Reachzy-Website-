'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { clsx } from 'clsx';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function UsageRightsExclusivity() {
  const { usageRightsExclusivity } = punitChawlaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {usageRightsExclusivity.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {usageRightsExclusivity.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <Accordion
            items={usageRightsExclusivity.topics.map((topic) => ({
              question: topic.title,
              answer: <p className="text-sm">{topic.description}</p>,
            }))}
            allowMultiple
            className="w-full"
          />
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10 text-center">
          <p className="text-base text-muted-foreground border-t border-border pt-6">
            {usageRightsExclusivity.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
