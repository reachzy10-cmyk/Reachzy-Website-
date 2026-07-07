import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ForBrandsHero } from '@/components/sections/for-brands/hero';
import { Problem } from '@/components/sections/for-brands/problem';
import { Process } from '@/components/sections/for-brands/process';
import { FitPhilosophy } from '@/components/sections/for-brands/fit-philosophy';
import { CreatorProof } from '@/components/sections/for-brands/creator-proof';
import { Formats } from '@/components/sections/for-brands/formats';
import { Faq } from '@/components/sections/for-brands/faq';
import { ForBrandsFinalCta } from '@/components/sections/for-brands/final-cta';

export const metadata: Metadata = {
  title: 'For Brands — Reachzy',
  description:
    'Reachzy helps technology brands find creators whose content, audience and experience give the product a genuine reason to be there. We research creators, start the conversations, and develop sponsorship opportunities around the product.',
  alternates: { canonical: '/for-brands' },
};

export default function ForBrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <ForBrandsHero />
        <Problem />
        <Process />
        <FitPhilosophy />
        <CreatorProof />
        <Formats />
        <Faq />
        <ForBrandsFinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}