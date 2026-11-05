import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForCreatorsHero } from '@/components/sections/for-creators/hero';
import { WhyCreatorsWorkWithUs } from '@/components/sections/for-creators/why-creators-work-with-us';
import { TheFit } from '@/components/sections/for-creators/the-fit';
import { TechnologyCategories } from '@/components/sections/for-creators/technology-categories';
import { OpportunityBriefing } from '@/components/sections/for-creators/opportunity-briefing';
import { GettingStarted } from '@/components/sections/for-creators/getting-started';
import { CreatorControl } from '@/components/sections/for-creators/creator-control';
import { CreatorRoll } from '@/components/sections/creator-roll';
import { CreatorFaq } from '@/components/sections/for-creators/creator-faq';
import { ForCreatorsFinalCta } from '@/components/sections/for-creators/final-cta';

export const metadata: Metadata = {
  title: 'For Creators — Reachzy',
  description: 'Explore how Reachzy approaches relevant sponsorship opportunities, clear commercial terms and creator-led decisions.',
  alternates: { canonical: '/for-creators' },
};

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <ForCreatorsHero />
        <WhyCreatorsWorkWithUs />
        <TheFit />
        <TechnologyCategories />
        <OpportunityBriefing />
        <GettingStarted />
        <CreatorControl />
        <CreatorRoll heading="A few creator profiles worth exploring." description="Explore selected profiles across technology, productivity, software and AI. Each creator brings a distinct content style and audience context." ctaHref={null} />
        <CreatorFaq />
        <ForCreatorsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
