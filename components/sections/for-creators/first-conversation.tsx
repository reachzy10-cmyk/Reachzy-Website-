'use client';

import { Button } from '@/components/ui/button';
import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function FirstConversation() {
  const { firstConversation } = forCreatorsContent;

  // Generate mailto link with encoded subject and body
  const emailSubject = encodeURIComponent(firstConversation.emailTemplate.subject);
  const emailBody = encodeURIComponent(firstConversation.emailTemplate.body);
  const mailtoHref = `mailto:partnerships@reachzy.space?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {firstConversation.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {firstConversation.headline}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {firstConversation.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 text-center">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button asChild variant="coral" size="lg" className="w-full sm:w-auto">
                <a href={mailtoHref} className="flex items-center gap-2">
                  {firstConversation.headline.includes('Talk') ? 'Talk to Reachzy' : 'Start conversation'}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground font-mono">
              {firstConversation.emailTemplate.subject.split(' — ')[1]?.replace('[', '').replace(']', '') || 'partnerships@reachzy.space'}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              Opens your email client with a prepared template
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}