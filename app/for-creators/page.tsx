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
import { CreatorFaq } from '@/components/sections/for-creators/creator-faq';
import { ForCreatorsFinalCta } from '@/components/sections/for-creators/final-cta';

export const metadata: Metadata = {
  title: 'For Creators — IMPRIO',
  description: 'Explore how IMPRIO approaches relevant sponsorship opportunities, clear commercial terms and creator-led decisions for technology, AI, SaaS, and software creators.',
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
        <CreatorFaq />
        <ForCreatorsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
