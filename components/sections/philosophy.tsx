'use client';

import { homeContent } from '@/lib/content/home';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Philosophy() {
  const { philosophy } = homeContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <ScrollReveal delay={80} direction="up" className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{philosophy.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">{philosophy.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={160} direction="up" className="lg:col-span-7">
          <div className="max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {philosophy.body.map((paragraph, index) => <p key={index} className={index === 0 ? 'font-serif text-lg text-foreground/90 md:text-xl' : undefined}>{paragraph}</p>)}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
