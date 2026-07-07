'use client';

import { homeContent } from '@/lib/content/home';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function Philosophy() {
  const { philosophy } = homeContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <StaggeredReveal staggerDelay={120} initialDelay={100} direction="up">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {philosophy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {philosophy.headline}
          </h2>
          <div className="mt-8 space-y-6 text-pretty leading-relaxed text-muted-foreground text-lg">
            {philosophy.body.map((paragraph, index) => (
              <p key={index} className={clsx(index === 0 && 'font-serif text-foreground/90')}>
                {paragraph}
              </p>
            ))}
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}