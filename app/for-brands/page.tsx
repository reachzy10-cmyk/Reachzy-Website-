import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForBrandsHero } from '@/components/sections/for-brands/hero';
import { Problem } from '@/components/sections/for-brands/problem';
import { FitPhilosophy } from '@/components/sections/for-brands/fit-philosophy';
import { Formats } from '@/components/sections/for-brands/formats';
import { Process } from '@/components/sections/for-brands/process';
import { CreatorRoll } from '@/components/sections/creator-roll';
import { CampaignPlanner, ProposalPreview, CommercialClarity, MeasurementFramework } from '@/components/sections/for-brands/brand-experience';
import { Faq } from '@/components/sections/for-brands/faq';
import { ForBrandsFinalCta } from '@/components/sections/for-brands/final-cta';

export const metadata: Metadata = {
  title: 'For Brands — Reachzy',
  description: 'A focused creator marketing process for technology, software, SaaS, productivity and AI brands. Start with the product, evaluate creator fit and define the campaign scope.',
  alternates: { canonical: '/for-brands' },
};

export default function ForBrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <ForBrandsHero />
        <Problem />
        <FitPhilosophy />
        <Formats />
        <Process />
        <CreatorRoll heading="Selected creator profiles." description="Explore a few profiles across technology, software, productivity and AI. The right recommendation depends on your product and campaign brief." ctaHref={null} />
        <CampaignPlanner />
        <ProposalPreview />
        <CommercialClarity />
        <MeasurementFramework />
        <Faq />
        <ForBrandsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
