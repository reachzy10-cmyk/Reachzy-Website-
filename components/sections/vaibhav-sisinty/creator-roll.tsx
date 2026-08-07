'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { getApprovedCreators } from '@/lib/data/creator-roll';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CreatorRoll() {
  const { creatorRoll } = vaibhavSisintyContent;
  const approvedCreators = getApprovedCreators();

  // Vaibhav Sisinty is excluded from the Creator Roll, so we show other approved creators
  // Filter out Vaibhav's own page (though he's excluded anyway)
  const otherCreators = approvedCreators.filter(
    (c) => c.destinationPage !== '/creators/vaibhav-sisinty'
  );

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {creatorRoll.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {creatorRoll.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {creatorRoll.supportingCopy}
          </p>
        </ScrollReveal>

        {otherCreators.length > 0 ? (
          <ScrollReveal delay={200} direction="up">
            <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherCreators.map((creator, index) => (
                <Card
                  key={index}
                  variant="creator"
                  hoverable
                  className="p-0"
                >
                  {creator.imageAsset && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={creator.imageAsset}
                        alt={creator.publicName}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="font-mono">{creator.primaryPlatform}</span>
                      <span className="text-primary">{creator.primaryPlatformAudience}</span>
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {creator.publicName}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">
                      {creator.oneLineDescription}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                        <Link
                          href={creator.destinationPage}
                          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          View profile
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </StaggeredReveal>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={200} direction="up" className="text-center py-12">
            <Card variant="default" hoverable={false} className="p-12 max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg">
                No other creators are currently approved for public display.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Creator profiles require explicit permission before appearing in the Creator Roll.
              </p>
            </Card>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
