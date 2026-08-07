'use client';

import { vaibhavSisintyContent } from '@/lib/content/vaibhav-sisinty';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { Card } from '@/components/ui/card';
import { BarChart3, Users, MapPin, Calendar } from 'lucide-react';

export function AudienceInsights() {
  const { audienceInsights } = vaibhavSisintyContent;

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {audienceInsights.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {audienceInsights.headline}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground lg:text-base">
            {audienceInsights.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <StaggeredReveal staggerDelay={150} direction="up" className="space-y-12 md:space-y-16">
            {audienceInsights.platforms.map((platform, platformIndex) => (
              <div key={platformIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                    <BarChart3 className="size-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    {platform.name}
                  </h3>
                </div>

                {platform.geography && (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card variant="default" hoverable={false} className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="size-4 text-primary" />
                        <h4 className="font-serif text-base font-medium text-foreground">Geography</h4>
                      </div>
                      <ul className="space-y-2">
                        {platform.geography.map((geo, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{geo.region}</span>
                            <span className="font-mono font-bold text-primary">{geo.percentage}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {platform.topCities && (
                      <Card variant="default" hoverable={false} className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="size-4 text-primary" />
                          <h4 className="font-serif text-base font-medium text-foreground">Top Cities</h4>
                        </div>
                        <ul className="space-y-2">
                          {platform.topCities.map((city, i) => (
                            <li key={i} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{city.city}</span>
                              <span className="font-mono font-bold text-primary">{city.percentage}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}

                    <Card variant="default" hoverable={false} className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="size-4 text-primary" />
                        <h4 className="font-serif text-base font-medium text-foreground">Age Distribution</h4>
                      </div>
                      <ul className="space-y-2">
                        {platform.ageDistribution && platform.ageDistribution.map((age, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{age.range}</span>
                            <span className="font-mono font-bold text-primary">{age.percentage}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card variant="default" hoverable={false} className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="size-4 text-primary" />
                        <h4 className="font-serif text-base font-medium text-foreground">Gender</h4>
                      </div>
                      <ul className="space-y-2">
                        {platform.genderDistribution && platform.genderDistribution.map((gender, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{gender.label}</span>
                            <span className="font-mono font-bold text-primary">{gender.percentage}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                )}

                {platform.contentType && (
                  <Card variant="default" hoverable={false} className="p-6 bg-secondary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="size-4 text-primary" />
                      <h4 className="font-serif text-base font-medium text-foreground">Content Type Distribution (YouTube)</h4>
                    </div>
                    <ul className="space-y-2">
                      {platform.contentType.map((ct, i) => (
                        <li key={i} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{ct.type}</span>
                          <span className="font-mono font-bold text-primary">{ct.percentage}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {platform.metrics && (
                  <Card variant="default" hoverable={false} className="p-6 bg-secondary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="size-4 text-primary" />
                      <h4 className="font-serif text-base font-medium text-foreground">Key Metrics</h4>
                    </div>
                    <ul className="space-y-2">
                      {platform.metrics.map((metric, i) => (
                        <li key={i} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{metric.label}</span>
                          <span className="font-mono font-bold text-primary">{metric.value}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {platform.performanceNote && (
                  <Card variant="default" hoverable={false} className="p-6 border-amber/30 bg-amber/5 text-amber">
                    <div className="flex items-start gap-2">
                      <Calendar className="size-4 text-amber mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-amber">
                        <strong className="text-foreground">Verification Required:</strong> {platform.performanceNote}
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            ))}
          </StaggeredReveal>
        </ScrollReveal>
      </div>
    </section>
  );
}
