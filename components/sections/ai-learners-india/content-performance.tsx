'use client';

import { aiLearnersIndiaContent } from '@/lib/content/ai-learners-india';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';

export function ContentPerformance() {
  const { contentPerformance } = aiLearnersIndiaContent;
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <ScrollReveal direction="up" className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Channel examples</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">{contentPerformance.headline}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{contentPerformance.description}</p>
        </ScrollReveal>
        <StaggeredReveal staggerDelay={70} direction="up" className="grid gap-3 md:grid-cols-2">
          {contentPerformance.videos.map((video) => <article key={video.title} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-serif text-lg leading-snug text-foreground">{video.title}</h3>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
              <span><strong className="font-mono text-foreground">{video.views}</strong> views</span>
              <span><strong className="font-mono text-foreground">{video.duration}</strong> duration</span>
              <span>{video.published}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>CTR <strong className="font-mono text-foreground">{video.ctr}</strong></span>
              <span>Avg. view duration <strong className="font-mono text-foreground">{video.avgDuration}</strong></span>
            </div>
          </article>)}
        </StaggeredReveal>
      </div>
    </section>
  );
}
