'use client';

import { Button } from '@/components/ui/button';
import { homeContent } from '@/lib/content/home';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { StaggeredReveal } from '@/components/ui/scroll-reveal';

export function FinalCta() {
  const { finalCta } = homeContent;

  return (
    <section className="bg-primary/5 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <StaggeredReveal staggerDelay={150} initialDelay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {finalCta.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {finalCta.body}
          </p>
          <div className="mt-10">
            <Button asChild variant={finalCta.cta.variant} size="lg">
              <Link href={finalCta.cta.href} className="flex items-center gap-2">
                {finalCta.cta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </StaggeredReveal>
      </div>
    </section>
  );
}