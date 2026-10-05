'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ForCreatorsHero() {
  const { hero } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <StaggeredReveal staggerDelay={150} initialDelay={100} direction="up" className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-coral)]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild variant={hero.primaryCta.variant as any} size="lg">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}