'use client';

import { Portrait } from '@/components/ui/portrait';
import { MetricRow } from '@/components/ui/metric-row';
import { Button } from '@/components/ui/button';
import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { clsx } from 'clsx';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

// Inline SVG brand icons
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
      <path d="M10.03 19.104V4.896a1.477 1.477 0 0 1 2.316-1.284l10.675 7.105a1.477 1.477 0 0 1 0 2.567l-10.676 7.106a1.476 1.476 0 0 1-2.316-1.285z" />
    </svg>
  );
}

export function CreatorHero() {
  const { hero } = techvishalVsbContent;

  const metrics = hero.metrics.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  const iconComponents = {
    youtube: YoutubeIcon,
  } as const;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Portrait - 6 columns (equal split for better proportions) */}
          <ScrollReveal delay={100} direction="up" className="lg:col-span-5 lg:max-w-[460px]">
            {hero.portrait && (
              <Portrait
                src={hero.portrait}
                alt={hero.portraitAlt}
                width={640}
                height={640}
                priority
                fill
                aspectRatio="1/1"
              />
            )}

          </ScrollReveal>

          {/* Right: Details - 6 columns (equal split) */}
          <ScrollReveal delay={200} direction="up" className="lg:col-span-7 min-w-0">
            <StaggeredReveal staggerDelay={120} direction="up" className="space-y-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  {hero.eyebrow}
                </p>
                <h1 className="mt-2 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
                  {hero.headline}
                </h1>
                <p className="mt-3 text-lg text-primary font-medium">{hero.tagline}</p>
              </div>

              {/* 3 columns on desktop to prevent overlap */}
              <MetricRow metrics={metrics} gridCols="grid-cols-2 md:grid-cols-3" />

              {/* Source Note */}
              <p className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{hero.sourceNote}</p>

              {/* External Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                {hero.externalLinks.map((link, index) => {
                  const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="size-4" />
                      {link.label}
                      <ExternalLink className="size-3.5 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              {/* Sticky CTA on desktop */}
              <div className="hidden lg:block">
                <Button asChild variant={hero.cta.variant as any} size="lg" className="w-full">
                  <Link href={hero.cta.href} className="flex items-center justify-center gap-2">
                    {hero.cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </StaggeredReveal>
          </ScrollReveal>
        </div>

        {/* Mobile CTA */}
        <ScrollReveal delay={400} direction="up" className="lg:hidden mt-8">
          <Button asChild variant={hero.cta.variant as any} size="lg" className="w-full">
            <Link href={hero.cta.href} className="flex items-center justify-center gap-2">
              {hero.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
