'use client';

import { useState } from 'react';
import { ArrowUpRight, BookOpen, Eye, MousePointerClick, Target } from 'lucide-react';

const objectives = [
  { id: 'awareness', label: 'Awareness', icon: Eye, outcome: 'Put the product in front of a relevant audience.', formats: 'Creator integrations, launch coverage or a coordinated set of placements.', measures: 'Reach, impressions, qualified views and video retention.' },
  { id: 'education', label: 'Product education', icon: BookOpen, outcome: 'Help people understand what the product does and how it works.', formats: 'Tutorials, walkthroughs and practical use-case demonstrations.', measures: 'Meaningful views, watch time, completion and engaged viewing.' },
  { id: 'consideration', label: 'Consideration', icon: Target, outcome: 'Give interested viewers enough context to evaluate the product.', formats: 'Detailed integrations, comparisons where appropriate and deeper demonstrations.', measures: 'Qualified clicks, landing-page engagement and assisted actions where trackable.' },
  { id: 'conversion', label: 'Signups or trials', icon: MousePointerClick, outcome: 'Make the next step clear and measurable for viewers who are ready to act.', formats: 'Demonstrations with a clear CTA, tracked links and agreed offer messaging.', measures: 'Tracked signups, trials or conversions, subject to reliable attribution.' },
] as const;

export function CampaignPlanner() {
  const [selected, setSelected] = useState<(typeof objectives)[number]['id']>('education');
  const active = objectives.find((item) => item.id === selected) ?? objectives[1];
  const Icon = active.icon;

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Campaign planning</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">What should this campaign actually do?</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">Choose an objective to see how the brief can shape the format and the way success is measured. This is a planning illustration, not a performance forecast.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="grid grid-cols-2 border-b border-border sm:grid-cols-4">
            {objectives.map((item) => {
              const ItemIcon = item.icon;
              const isSelected = item.id === selected;
              return (
                <button key={item.id} type="button" onClick={() => setSelected(item.id)} aria-pressed={isSelected}
                  className={`flex min-h-24 flex-col items-start justify-center gap-2 border-b-2 px-4 py-4 text-left text-xs font-medium transition-colors sm:px-5 ${isSelected ? 'border-primary bg-primary/10 text-foreground' : 'border-transparent text-muted-foreground hover:bg-secondary/60 hover:text-foreground'}`}>
                  <ItemIcon className={`size-4 ${isSelected ? 'text-primary' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Illustrative campaign direction</p>
                <h3 className="mt-1 font-serif text-2xl text-foreground">{active.label}</h3>
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-foreground">{active.outcome}</p>
            <div className="mt-6 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Potential formats</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{active.formats}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Possible measures</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{active.measures}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-2 rounded-lg bg-secondary/60 p-3 text-xs leading-5 text-muted-foreground">
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />
              Final creator, format and KPI selection depends on the product, audience, budget, tracking setup and agreed campaign scope.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
