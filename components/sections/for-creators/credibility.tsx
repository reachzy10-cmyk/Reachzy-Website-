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

export function Credibility() {
  const { credibility } = forCreatorsContent;

  const metrics = credibility.metrics.map((m) => ({
    value: m.value,
    label: m.label,
  }));

  const iconComponents = {
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
  } as const;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left: Portrait */}
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
            </div>
          </ScrollReveal>

          {/* Right: Details */}
          <ScrollReveal delay={200} direction="up">
            <StaggeredReveal staggerDelay={120} direction="up" className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
                  {credibility.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-2xl md:text-3xl font-medium text-foreground">
                  {credibility.headline}
                </h2>
                <p className="mt-2 text-sm text-primary font-medium">{credibility.tagline}</p>
              </div>

              <p className="text-pretty text-muted-foreground lg:text-base">
                {credibility.description}
              </p>

              <MetricRow metrics={metrics} />

              {/* External Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                {credibility.externalLinks.map((link, index) => {
                  const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[var(--accent-coral)] transition-colors"
                    >
                      <Icon className="size-4" />
                      {link.label}
                      <ExternalLink className="size-3.5 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              <p className="pt-4 border-t border-border text-sm text-muted-foreground">
                {credibility.footnote}
              </p>
            </StaggeredReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
