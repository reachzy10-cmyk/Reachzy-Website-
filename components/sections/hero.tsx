'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { homeContent } from '@/lib/content/home';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Copy - 60% */}
          <div className="lg:col-span-7">
            <StaggeredReveal staggerDelay={150} initialDelay={100} direction="up">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                {hero.body}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant={hero.primaryCta.variant} size="lg">
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant={hero.secondaryCta.variant} size="lg">
                  <Link href={hero.secondaryCta.href}>
                    {hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">
                    {hero.trustBar.text}
                  </p>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link href={hero.trustBar.link.href}>
                    {hero.trustBar.link.label}
                  </Link>
                </Button>
              </div>
            </StaggeredReveal>
          </div>

          {/* Right: Visual teaser - 40% */}
          <div className="hidden lg:block lg:col-span-5">
            <ScrollReveal delay={300} direction="up">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-card border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-mono text-5xl md:text-7xl font-medium text-primary mb-2">
                      160,000+
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      Subscribers
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-mono text-3xl font-medium text-foreground">
                          8.1M
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Lifetime Views
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-3xl font-medium text-foreground">
                          4:39
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Avg Duration
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground max-w-xs mx-auto">
                    AI Learners India — Hindi AI agents & automation for freelancers & agency founders
                  </p>
                </div>
              </div>
              {/* Subtle geometric accent */}
              <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg viewBox="0 0 480 600" fill="none" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" />
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}