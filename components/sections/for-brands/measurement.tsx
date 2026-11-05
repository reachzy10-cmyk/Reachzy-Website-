import { BarChart3, Eye, MousePointer2, UserRoundCheck } from 'lucide-react';

const outcomes = [
  { icon: Eye, goal: 'Awareness', metrics: 'Reach, impressions, qualified views and video retention.' },
  { icon: BarChart3, goal: 'Engagement', metrics: 'Engagements, engagement rate and meaningful viewing activity.' },
  { icon: MousePointer2, goal: 'Consideration', metrics: 'Tracked clicks, landing-page activity and other agreed actions.' },
  { icon: UserRoundCheck, goal: 'Acquisition', metrics: 'Trials, signups or conversions where reliable tracking is available.' },
];

export function Measurement() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Measurement framework</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">Measure the campaign against the reason it exists.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">A campaign objective should determine its KPIs. The measures below are examples; the final set depends on the platform, tracking setup and what the brand needs to learn.</p>
        </div>
        <div className="mt-9 overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-[0.7fr_1.3fr] gap-6 bg-secondary/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:grid">
            <span>Objective</span><span>Possible measures</span>
          </div>
          {outcomes.map(({ icon: Icon, goal, metrics }, index) => (
            <div key={goal} className="grid gap-2 border-t border-border px-5 py-4 first:border-t-0 sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:gap-6 sm:px-6">
              <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-4" /></span><span className="font-medium text-foreground">{goal}</span></div>
              <p className="text-sm leading-6 text-muted-foreground sm:pl-2">{metrics}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">Platform-reported metrics and attributed conversions have different definitions. Reporting should state the source, measurement window and attribution method where available.</p>
      </div>
    </section>
  );
}
