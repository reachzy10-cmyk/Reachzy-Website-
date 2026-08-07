import { ArrowUpRight, Check, FileText } from 'lucide-react';

const items = [
  ['Campaign objective', 'The goal, intended audience and role of creator content'],
  ['Creator recommendation', 'Profile, relevant content examples and fit rationale'],
  ['Deliverables and timeline', 'Format, placements, milestones and approval points'],
  ['Commercial scope', 'Creator fees, agency services, usage rights and exclusions'],
  ['Measurement plan', 'Agreed KPIs, tracking requirements and reporting scope'],
];

export function ProposalPreview() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What you can review</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">A recommendation should be clear before a commitment is made.</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">A campaign proposal should make the thinking and the commercial scope easy to evaluate. The exact document depends on the brief; this is an illustrative outline of the information to clarify.</p>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Illustrative proposal structure — not a past client deliverable or completed campaign.</p>
        </div>
        <div className="relative rounded-2xl border border-border bg-[#0a1118] p-4 shadow-2xl shadow-black/30 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300"><FileText className="size-5" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Reachzy / proposal outline</p>
                <p className="mt-1 text-xs text-slate-400">Technology product campaign</p>
              </div>
            </div>
            <span className="rounded-full border border-cyan-300/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cyan-200">Sample</span>
          </div>
          <div className="py-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Campaign recommendation</p>
            <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">Product / audience fit</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">A structured view of why the creator, content format and campaign objective belong together.</p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {items.map(([title, description], index) => (
              <div key={title} className="flex gap-3 py-3.5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-[10px] font-mono text-cyan-200">0{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-100">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
                </div>
                <Check className="mt-1 size-4 shrink-0 text-cyan-300/80" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 text-[10px] text-slate-500">
            <span>Scope is agreed before activation.</span>
            <span className="flex items-center gap-1 text-cyan-200">Example structure <ArrowUpRight className="size-3" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
