import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForCreatorsHero } from '@/components/sections/for-creators/hero';
import { WhyReachzy } from '@/components/sections/for-creators/why-reachzy';
import { BeforeOpportunity } from '@/components/sections/for-creators/before-opportunity';
import { WhatYouGet } from '@/components/sections/for-creators/what-you-get';
import { HowItWorks } from '@/components/sections/for-creators/how-it-works';
import { WhoItsFor } from '@/components/sections/for-creators/who-its-for';
import { Credibility } from '@/components/sections/for-creators/credibility';
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
        <WhyReachzy />
        <BeforeOpportunity />
        <WhatYouGet />
        <HowItWorks />
        <WhoItsFor />
        <Credibility />
        <ForCreatorsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}