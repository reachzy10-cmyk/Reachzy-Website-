'use client';

import { Accordion } from '@/components/ui/accordion';
import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { clsx } from 'clsx';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CreatorFaq() {
  const { faq } = aiLearnersIndiaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {faq.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <Accordion
            items={faq.items.map((item) => ({
              question: item.question,
              answer: <p className="text-pretty leading-relaxed">{item.answer}</p>,
            }))}
            className="max-w-4xl"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}