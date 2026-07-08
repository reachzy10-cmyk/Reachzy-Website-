'use client';

import { Card } from '@/components/ui/card';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { ArrowRight } from 'lucide-react';

export function GettingStarted() {
  const { gettingStarted } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {gettingStarted.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {gettingStarted.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {gettingStarted.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="space-y-8 md:space-y-12">
            {/* First Step */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                {gettingStarted.firstStep.headline}
              </h3>
              <ul className="space-y-3">
                {gettingStarted.firstStep.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                      <span className="font-mono text-sm text-primary">{index + 1}</span>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsorship History */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                {gettingStarted.sponsorshipHistory.headline}
              </h3>
              <p className="text-muted-foreground mb-4">{gettingStarted.sponsorshipHistory.body}</p>
              <ul className="grid gap-3 md:grid-cols-2">
                {gettingStarted.sponsorshipHistory.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded border border-border flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up" className="mt-10 text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            {gettingStarted.closing}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}