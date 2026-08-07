'use client';

import { clsx } from 'clsx';

export interface CampaignMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CampaignEvidenceItem {
  brand: string;
  period: string;
  type?: string;
  metrics: CampaignMetric[];
  detail?: string;
  note?: string;
}

export interface CampaignTableProps {
  campaigns: CampaignEvidenceItem[];
  className?: string;
  showType?: boolean;
}

export function CampaignTable({ campaigns, className, showType = true }: CampaignTableProps) {
  return (
    <div className={className}>
      <CampaignCards campaigns={campaigns} className="md:hidden" />
      <div className="hidden overflow-x-auto md:block">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 font-mono text-sm text-muted-foreground uppercase tracking-wide">
              Brand
            </th>
            <th className="pb-3 font-mono text-sm text-muted-foreground uppercase tracking-wide">
              Period
            </th>
            {showType && (
              <th className="pb-3 font-mono text-sm text-muted-foreground uppercase tracking-wide">
                Type
              </th>
            )}
            <th className="pb-3 font-mono text-sm text-muted-foreground uppercase tracking-wide">
              Metrics
            </th>
            <th className="pb-3 font-mono text-sm text-muted-foreground uppercase tracking-wide">
              Detail
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {campaigns.map((campaign, index) => (
            <tr key={index} className="transition-colors hover:bg-card/50">
              <td className="py-4 font-medium text-foreground">
                {campaign.brand}
              </td>
              <td className="py-4 text-muted-foreground">
                {campaign.period}
              </td>
              {showType && (
                <td className="py-4 text-muted-foreground">
                  {campaign.type}
                </td>
              )}
              <td className="py-4">
                <div className="flex flex-wrap gap-2">
                  {campaign.metrics.map((metric, mIndex) => (
                    <span
                      key={mIndex}
                      className={clsx(
                        'inline-flex items-center px-2.5 py-1 text-sm font-mono rounded border',
                        metric.highlight
                          ? 'border-[var(--accent-coral)] bg-[var(--accent-coral)]/10 text-[var(--accent-coral)]'
                          : 'border-border bg-secondary text-foreground'
                      )}
                    >
                      {metric.value}
                      <span className="ml-1 text-xs text-muted-foreground font-sans">
                        {metric.label}
                      </span>
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 text-sm text-muted-foreground max-w-xs">
                {campaign.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {campaigns[0]?.note && <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">{campaigns[0].note}</p>}
    </div>
  );
}

/* Mobile card view */
export function CampaignCards({ campaigns, className }: { campaigns: CampaignEvidenceItem[]; className?: string }) {
  return (
    <div className={clsx('space-y-3', className)}>
      {campaigns.map((campaign, index) => (
        <div key={index} className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-medium text-foreground">{campaign.brand}</p>
              <p className="text-sm text-muted-foreground">{campaign.period}</p>
            </div>
            {campaign.type && (
              <span className="text-xs text-muted-foreground sm:whitespace-nowrap">
                {campaign.type}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {campaign.metrics.map((metric, mIndex) => (
              <span
                key={mIndex}
                className={clsx(
                  'inline-flex items-center px-2.5 py-1 text-sm font-mono rounded border',
                  metric.highlight
                    ? 'border-[var(--accent-coral)] bg-[var(--accent-coral)]/10 text-[var(--accent-coral)]'
                    : 'border-border bg-secondary text-foreground'
                )}
              >
                {metric.value}
                <span className="ml-1 text-xs text-muted-foreground font-sans">
                  {metric.label}
                </span>
              </span>
            ))}
          </div>
          {campaign.detail && (
            <p className="text-sm leading-relaxed text-muted-foreground">{campaign.detail}</p>
          )}
        </div>
      ))}
    </div>
  );
}