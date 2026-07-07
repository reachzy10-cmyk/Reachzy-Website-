import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CreatorsHero } from '@/components/sections/creators/creators-hero'
import { CreatorAudience } from '@/components/sections/creators/creator-audience'
import { CampaignFormats } from '@/components/sections/creators/campaign-formats'
import { FinalCta } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Creators — Reachzy',
  description:
    'The Reachzy roster: AI Learners India, a Hindi-language AI agents and automation channel with 160,000+ subscribers, 8.1M lifetime views and published collaboration rates.',
  alternates: { canonical: '/creators' },
}

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <CreatorsHero />
        <CreatorAudience />
        <CampaignFormats />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
