import { FileCheck2, Scale, Wallet, ShieldCheck } from 'lucide-react';

const commercial = [
  { icon: Wallet, title: 'Creator compensation', body: 'The fee quoted for each agreed creator deliverable and placement.' },
  { icon: FileCheck2, title: 'Agency scope', body: 'Research, outreach and coordination responsibilities included in the proposal.' },
  { icon: Scale, title: 'Usage and exclusivity', body: 'Where the content can be used, for how long and which category restrictions apply.' },
  { icon: ShieldCheck, title: 'Approvals and safeguards', body: 'Agree talking points, claim substantiation, disclosure expectations, review windows and decision owners before production.' },
];

export function CommercialFramework() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Commercial clarity</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">Know what goes into the campaign.</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground">Creator fees are only one part of a campaign decision. The proposal should identify the deliverables, service scope, rights and other costs so the brand can assess the full commitment.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {commercial.map(({ icon: Icon, title, body }, index) => (
            <article key={title} className="rounded-xl border border-border bg-card/45 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
