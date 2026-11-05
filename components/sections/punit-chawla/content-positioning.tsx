'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ContentPositioning() {
  const { contentPositioning } = punitChawlaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {contentPositioning.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {contentPositioning.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {contentPositioning.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contentPositioning.topics.map((topic, index) => (
              <Card
                key={index}
                variant="default"
                hoverable={false}
                className="p-6"
              >
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10 text-center">
          <p className="text-base text-muted-foreground border-t border-border pt-6">
            {contentPositioning.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
