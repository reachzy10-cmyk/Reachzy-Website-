'use client';

import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ForCreatorsFinalCta() {
  const { finalCta } = forCreatorsContent;

  // Generate mailto link with encoded subject and body
  const emailSubject = encodeURIComponent('Creator Partnership — [Channel Name]');
  const emailBody = encodeURIComponent(`Hi Reachzy,

I'm interested in working with Reachzy.

Channel name:
[Fill in]

Primary niche:
[Fill in]

Typical sponsorship formats:
[Fill in]

Typical sponsorship rates:
[Fill in]

Preferred time / communication window:
[Fill in]

Optional — past sponsorships, campaign examples, performance information, media kit or anything else relevant:
[Fill in]

Best,
[Creator name]

Fallback: partnerships@reachzy.space`);
  const mailtoHref = `mailto:partnerships@reachzy.space?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="bg-[var(--accent-coral)]/5 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <StaggeredReveal staggerDelay={120} direction="up">
            <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {finalCta.headline}
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[var(--accent-coral)]">
              {finalCta.subheadline}
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
              {finalCta.body}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button asChild variant="coral" size="lg">
                <a href={mailtoHref} className="flex items-center gap-2">
                  {finalCta.cta.label}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground font-mono">{finalCta.microcopy}</p>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}