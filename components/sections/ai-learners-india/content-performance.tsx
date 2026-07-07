'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ContentPerformance() {
  const { contentPerformance } = aiLearnersIndiaContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-balance font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {contentPerformance.headline}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground lg:text-base">
            {contentPerformance.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={100} direction="up" className="space-y-4">
            {contentPerformance.videos.map((video, index) => (
              <Card
                key={index}
                variant="default"
                hoverable
                className="p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                    {video.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground font-mono">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                  <span>{video.published}</span>
                  <span className="text-primary">{video.ctr} CTR</span>
                  <span>{video.avgDuration} avg duration</span>
                </div>
              </Card>
            ))}
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}