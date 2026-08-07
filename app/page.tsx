import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/sections/hero';
import { Philosophy } from '@/components/sections/philosophy';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { HomepageApproach } from '@/components/sections/homepage-approach';
import { DualPath } from '@/components/sections/dual-path';
import { CreatorRoll } from '@/components/sections/creator-roll';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = {
  title: 'Reachzy — Influencer Marketing for Technology Brands',
  description: 'Reachzy helps technology, software, SaaS and AI brands evaluate creator fit and coordinate relevant sponsorship campaigns.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <HomepageApproach />
        <DualPath />
        <CreatorRoll
          heading="A few creators worth exploring."
          description="A selected look at creators across technology, software, productivity and AI. Looking for a different audience or content style? Tell us what your campaign needs."
          ctaHref="mailto:partnerships@reachzy.space?subject=Creator%20and%20campaign%20enquiry"
          ctaLabel="Discuss your campaign"
        />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
