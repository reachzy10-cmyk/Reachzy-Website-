import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForCreatorsHero } from '@/components/sections/for-creators/hero';
import { WhyCreatorsWorkWithUs } from '@/components/sections/for-creators/why-creators-work-with-us';
import { WhatWeActuallyHandle } from '@/components/sections/for-creators/what-we-actually-handle';
import { OpportunityBriefing } from '@/components/sections/for-creators/opportunity-briefing';
import { CreatorControl } from '@/components/sections/for-creators/creator-control';
import { TheFit } from '@/components/sections/for-creators/the-fit';
import { Economics } from '@/components/sections/for-creators/economics';
import { TechnologyCategories } from '@/components/sections/for-creators/technology-categories';
import { CreatorExample } from '@/components/sections/for-creators/creator-example';
import { GettingStarted } from '@/components/sections/for-creators/getting-started';
import { FirstConversation } from '@/components/sections/for-creators/first-conversation';
import { ForCreatorsFinalCta } from '@/components/sections/for-creators/final-cta';

export const metadata: Metadata = {
  title: 'For Creators — Reachzy',
  description:
    'Reachzy helps creators find relevant sponsorship opportunities. Right-fit deals, clear details, your approval always.',
  alternates: { canonical: '/for-creators' },
};

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <ForCreatorsHero />
        <WhyCreatorsWorkWithUs />
        <WhatWeActuallyHandle />
        <OpportunityBriefing />
        <CreatorControl />
        <TheFit />
        <Economics />
        <TechnologyCategories />
        <CreatorExample />
        <GettingStarted />
        <FirstConversation />
        <ForCreatorsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}