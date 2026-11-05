'use client';

import { pavanLalwaniContent } from '@/lib/content/pavan-lalwani';
import { MetricRow } from '@/components/ui/metric-row';
import { Card } from '@/components/ui/card';
import { clsx } from 'clsx';
import { ScrollReveal, StaggeredReveal } from '@/components/ui/scroll-reveal';
import { MapPin, Users, User, UserCheck } from 'lucide-react';

export function AudienceInsights() {
  const { audienceInsights } = pavanLalwaniContent;

  // Geography metrics
  const geographyMetrics = audienceInsights.geography.map((g) => ({
    value: g.percentage,
    label: g.region,
  }));

  // Age distribution metrics
  const ageMetrics = audienceInsights.ageDistribution.map((a) => ({
    value: a.percentage,
    label: a.range,
  }));

  // Gender distribution metrics
  const genderMetrics = audienceInsights.genderDistribution.map((g) => ({
    value: g.percentage,
    label: g.label,
  }));

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20 lg:py-24">
        <ScrollReveal delay={100} direction="up" className="max-w-3xl mb-9 lg:mb-10">
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

        {/* Geography */}
        <ScrollReveal delay={200} direction="up" className="mb-16 lg:mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
            Audience Geography
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-4">
            {audienceInsights.geography.map((geo, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-mono"
              >
                <MapPin className="size-4 text-primary" />
                <span className="font-medium text-foreground">{geo.region}</span>
                <span className="text-primary font-bold">{geo.percentage}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Age & Gender */}
        <ScrollReveal delay={300} direction="up" className="grid gap-8 md:grid-cols-2 mb-16 lg:mb-20">
          {/* Age Distribution */}
          <Card variant="default" hoverable={false} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="size-5 text-primary" />
              <h3 className="font-serif text-xl font-medium text-foreground">
                Age Distribution
              </h3>
            </div>
            <div className="space-y-3">
              {audienceInsights.ageDistribution.map((age, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                    {age.range}
                  </span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: age.percentage }}
                    />
                  </div>
                  <span className="text-sm font-mono font-bold text-primary min-w-[50px] text-right">
                    {age.percentage}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Reported for the last 28 days in the media kit.
            </p>
          </Card>

          {/* Gender Distribution */}
          <Card variant="default" hoverable={false} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="size-5 text-primary" />
              <h3 className="font-serif text-xl font-medium text-foreground">
                Gender Distribution
              </h3>
            </div>
            <div className="space-y-4">
              {audienceInsights.genderDistribution.map((gender, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                    {gender.label}
                  </span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: gender.percentage }}
                    />
                  </div>
                  <span className="text-sm font-mono font-bold text-primary min-w-[50px] text-right">
                    {gender.percentage}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Reported for the last 28 days in the media kit.
            </p>
          </Card>
        </ScrollReveal>

        {/* Additional Interests */}
        <ScrollReveal delay={400} direction="up" className="mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
            Additional Audience Interests
          </h3>
          <Card variant="default" hoverable={false} className="mt-4 p-6">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {audienceInsights.audienceNote}
            </p>
          </Card>
        </ScrollReveal>

        {/* Closing Line */}
        <ScrollReveal delay={500} direction="up" className="mt-6">
          <p className="text-base text-muted-foreground border-t border-border pt-6 text-center">
            {audienceInsights.closingLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
