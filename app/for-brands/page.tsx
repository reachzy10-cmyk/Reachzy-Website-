import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForBrandsHero } from '@/components/sections/for-brands/hero';
import { Problem } from '@/components/sections/for-brands/problem';
import { FitPhilosophy } from '@/components/sections/for-brands/fit-philosophy';
import { Formats } from '@/components/sections/for-brands/formats';
import { Process } from '@/components/sections/for-brands/process';
import { CampaignPlanner, ProposalPreview, CommercialClarity, MeasurementFramework } from '@/components/sections/for-brands/brand-experience';
import { Faq } from '@/components/sections/for-brands/faq';
import { ForBrandsFinalCta } from '@/components/sections/for-brands/final-cta';

export const metadata: Metadata = {
  title: 'For Brands — IMPRIO',
  description: 'A focused creator marketing process for technology, AI, SaaS, software, and productivity brands. Start with the product, evaluate creator fit and define the campaign scope.',
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
