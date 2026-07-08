'use client';

import { Portrait } from '@/components/ui/portrait';
import { MetricRow } from '@/components/ui/metric-row';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

// Inline SVG brand icons (lucide-react doesn't export brand logos)
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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function CreatorExample() {
  const { creatorExample } = forCreatorsContent;

  const metrics = creatorExample.metrics.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  const iconMap = {
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
  } as const;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Portrait + Key Metrics */}
          <ScrollReveal delay={100} direction="up">
            <div className="lg:col-span-5">
              <Portrait
                src="/creators/ai-learners-india-profile.jpg"
                alt="AI Learners India channel profile — Abhijeet Kalamkar, founder"
                width={480}
                height={600}
                priority
                fill
              />
              <div className="mt-6 space-y-3 text-center md:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
                  {creatorExample.eyebrow}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  {creatorExample.headline}
                </h3>
                <p className="text-sm text-[var(--accent-coral)] font-medium">
                  {creatorExample.creatorName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {creatorExample.categoryLine}
                </p>

                <MetricRow metrics={metrics} className="mt-6 justify-center md:justify-start" />

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {creatorExample.externalLinks.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={link.label}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Description + Closing */}
          <ScrollReveal delay={200} direction="up">
            <div className="lg:col-span-7 space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-pretty leading-relaxed text-muted-foreground text-lg">
                  {creatorExample.body}
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic border-t border-border pt-6">
                {creatorExample.closingLine}
              </p>
              <div className="mt-4 p-4 rounded-xl border border-border/50 bg-card/50 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Note:</p>
                <p>This is a public example of the kind of creator evidence Reachzy values. AI Learners India is not a Reachzy client or case study unless explicitly stated in a published case study.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}