'use client';

import { punitChawlaContent } from '@/lib/content/punit-chawla';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function FinalCta() {
  const { finalCta } = punitChawlaContent;

  // Generate mailto link with encoded subject and body from email_draft.md
  const creatorName = 'Punit Chawla';
  const emailSubject = encodeURIComponent(`Campaign enquiry — ${creatorName}`);
  const emailBody = encodeURIComponent(`Hi Reachzy Team,

I'd like to explore a potential campaign with ${creatorName}. Here are a few details to help you understand what we're looking for.

Brand / Company:

Website or Product Page:

What We'd Like to Promote:

Primary Campaign Goal:
(e.g. awareness, clicks, sign-ups, installs or sales)

Ideal Launch Window:

Estimated Budget:
(An approximate range is fine. Please include currency.)

What Would Make This Campaign Successful? (Optional)

Any Other Information You'd Like to Share: (Optional)

Best,
[Your Name]`);
  const mailtoHref = `mailto:partnerships@reachzy.space?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="bg-primary/5 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <StaggeredReveal staggerDelay={120} direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
              {finalCta.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {finalCta.headline}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base whitespace-pre-line">
              {finalCta.supportingCopy}
            </p>
            <div className="mt-10">
              <Button asChild variant="primary" size="lg">
                <a href={mailtoHref} className="flex items-center gap-2">
                  {finalCta.cta.label}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground font-mono">
              {finalCta.fallbackContact}
            </p>
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
