'use client';

import { techvishalVsbContent } from '@/lib/content/techvishal-vsb';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Smartphone, Settings, SmartphoneNfc, LayoutList, Cpu, Zap } from 'lucide-react';

const topicIcons = {
  'Smartphone Reviews and Unboxing': Smartphone,
  'Mobile Tips and Troubleshooting': Settings,
  'Android Features and Updates': SmartphoneNfc,
  'Apps and Software': LayoutList,
  'Device Testing and Demonstrations': Cpu,
  'Technology Updates': Zap,
};

export function ChannelCoverage() {
  const { channelCoverage } = techvishalVsbContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {channelCoverage.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {channelCoverage.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {channelCoverage.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={100} direction="up" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {channelCoverage.topics.map((topic, index) => {
              const Icon = topicIcons[topic.title as keyof typeof topicIcons] || Smartphone;
              return (
                <Card
                  key={index}
                  variant="default"
                  hoverable
                  className="p-6 flex flex-col h-full"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground flex-1">
                    {topic.description}
                  </p>
                </Card>
              );
            })}
          </StaggeredReveal>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up" className="mt-10">
          <p className="text-base text-muted-foreground border-t border-border pt-6 text-center">
            {channelCoverage.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
