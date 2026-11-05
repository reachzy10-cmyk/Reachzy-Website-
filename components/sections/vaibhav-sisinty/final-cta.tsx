'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { AlertTriangle, Lock } from 'lucide-react';

export function FinalCta() {
  const { finalCta } = vaibhavSisintyContent;

  return (
    <section className="bg-primary/5 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="text-center max-w-3xl mx-auto">
          <StaggeredReveal staggerDelay={120} direction="up">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber/10 text-amber border border-amber/30 mb-6">
              <Lock className="size-4" />
              <span className="text-sm font-medium">Internal Draft — Not for Publication</span>
            </div>
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
              <Button asChild variant="ghost" size="lg" className="w-full opacity-50 cursor-not-allowed" disabled>
                <span className="flex items-center justify-center gap-2">
                  {finalCta.cta.label}
                </span>
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
