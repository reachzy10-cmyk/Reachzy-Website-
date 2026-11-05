'use client';

import { forCreatorsContent } from '@/lib/content/for-creators';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FirstConversation() {
  const { firstConversation } = forCreatorsContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-coral)]">
            {firstConversation.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {firstConversation.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {firstConversation.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up" className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 text-sm font-mono whitespace-pre-wrap text-muted-foreground">
            {firstConversation.emailTemplate.subject}
            <br /><br />
            {firstConversation.emailTemplate.body}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            The button below opens this template in your email client.
          </p>
          <div className="mt-6 text-center">
            <Button asChild variant="coral" size="lg">
              <Link
                href="mailto:partnerships@reachzy.space?subject=Creator%20Partnership%20%E2%80%94%20%5BChannel%20Name%5D&body=Hi%20Reachzy%2C%0A%0AI%27m%20interested%20in%20working%20with%20Reachzy.%0A%0AChannel%20name%3A%0A%5BFill%20in%5D%0A%0APrimary%20niche%3A%0A%5BFill%20in%5D%0A%0ATypical%20sponsorship%20formats%3A%0A%5BFill%20in%5D%0A%0ATypical%20sponsorship%20rates%3A%0A%5BFill%20in%5D%0A%0APreferred%20time%20%2F%20communication%20window%3A%0A%5BFill%20in%5D%0A%0AOptional%20%E2%80%94%20past%20sponsorships%2C%20campaign%20examples%2C%20performance%20information%2C%20media%20kit%20or%20anything%20else%20relevant%3A%0A%5BFill%20in%5D%0A%0ABest%2C%0A%5BCreator%20name%5D%0A%0AFallback%3A%20partnerships%40reachzy.space"
                className="flex items-center gap-2"
              >
                Talk to Reachzy
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground font-mono">
            {firstConversation.emailTemplate.body.split('\n').pop()}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
