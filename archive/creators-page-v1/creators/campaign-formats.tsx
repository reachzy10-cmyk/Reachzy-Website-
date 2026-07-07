const formats = [
  {
    name: 'Integration',
    price: 'From $600',
    summary:
      'A 60–90 second placement inside a tutorial, with your script input welcome and the final cut kept by the creator.',
    details: [
      'Pinned comment and first line of the description',
      '30-day performance report',
      'Most booked format',
    ],
  },
  {
    name: 'Dedicated video',
    price: 'From $1,200',
    summary:
      'A 15–25 minute video with your product as the subject, built live into a real workflow.',
    details: [
      'Cross-promoted to the channel’s other communities',
      'Keeps drawing search traffic for 6+ months',
    ],
  },
  {
    name: 'Bundle',
    price: 'From $2,500',
    summary:
      'One dedicated video, two integrations in follow-up uploads, and cross-promotion on Instagram, LinkedIn and Discord.',
    details: ['Built for launches and sustained pushes'],
  },
  {
    name: 'Monthly retainer',
    price: 'From $3,250/mo',
    summary:
      'Four integrations a month with priority scheduling in the content calendar. Minimum three months.',
    details: ['Affiliate terms negotiable on top'],
  },
]

export function CampaignFormats() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Formats and rates
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Four ways to work together, published up front.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Rates are the channel’s published starting prices in USD, so your
            finance team can size the campaign before the first call. INR
            equivalents are available on request for accounting.
          </p>
        </div>

        <ol className="mt-12 border-t border-border">
          {formats.map((format, i) => (
            <li
              key={format.name}
              className="grid gap-x-8 gap-y-3 border-b border-border py-8 md:grid-cols-[3rem_14rem_1fr]"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-xl leading-snug text-foreground">
                  {format.name}
                </h3>
                <p className="mt-1 text-sm text-foreground">{format.price}</p>
              </div>
              <div>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {format.summary}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  {format.details.map((detail) => (
                    <li key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-xs text-muted-foreground">
          Starting rates published by the channel, August 2026. Final quotes
          depend on scope, exclusivity and timing.
        </p>
      </div>
    </section>
  )
}
