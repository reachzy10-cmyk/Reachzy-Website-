'use client';

import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ForCreatorsFinalCta() {
  const { finalCta } = forCreatorsContent;

  return (
    <section className="bg-[var(--accent-coral)]/5 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <StaggeredReveal staggerDelay={120} direction="up">
            <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {finalCta.headline}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
              {finalCta.body}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button asChild variant={finalCta.cta.variant as any} size="lg">
                <Link href={finalCta.cta.href} className="flex items-center gap-2">
                  {finalCta.cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{finalCta.microcopy}</p>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}