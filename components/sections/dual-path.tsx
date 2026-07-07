'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { homeContent } from '@/lib/content/home';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function DualPath() {
  const { dualPath } = homeContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
              {dualPath.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {dualPath.headline}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={200} direction="up" className="grid gap-8 md:grid-cols-2">
            {/* For Brands Card */}
            <Card variant="default" hoverable={false} className="h-full flex flex-col">
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {dualPath.brandCard.headline}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {dualPath.brandCard.body}
                </p>
              </div>
              <Button
                asChild
                variant={dualPath.brandCard.cta.variant}
                size="md"
                className="mt-6 w-full sm:w-auto"
              >
                <Link href={dualPath.brandCard.cta.href}>
                  {dualPath.brandCard.cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Card>

            {/* For Creators Card */}
            <Card variant="default" hoverable={false} className="h-full flex flex-col border-[var(--accent-coral)]/30">
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {dualPath.creatorCard.headline}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {dualPath.creatorCard.body}
                </p>
              </div>
              <Button
                asChild
                variant={dualPath.creatorCard.cta.variant as any}
                size="md"
                className="mt-6 w-full sm:w-auto"
              >
                <Link href={dualPath.creatorCard.cta.href}>
                  {dualPath.creatorCard.cta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Card>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}