import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/sections/hero';
import { Philosophy } from '@/components/sections/philosophy';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { CreatorProof } from '@/components/sections/creator-proof';
import { DualPath } from '@/components/sections/dual-path';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = {
  title: 'Reachzy — Influencer Marketing Agency',
  description:
    'Reachzy is an influencer marketing agency. We match brands with creators whose audience already needs what they sell, and run the collaboration from brief to published video.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <CreatorProof />
        <DualPath />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}