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
  title: 'IMPRIO — Influencer Marketing Agency for Technology Brands',
  description: 'IMPRIO connects technology, AI, SaaS, and software brands with relevant creators. We handle creator research, brand-creator matching, outreach, negotiations, briefing, deliverables, timelines, campaign coordination, usage rights and reporting.',
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
        <CreatorRoll />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
