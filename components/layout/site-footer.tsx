'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'For Creators', href: '/for-creators' },
  { label: 'Creators', href: '/#creators' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href="/" className="inline-block rounded-md focus-visible-ring" aria-label="IMPRIO — Home"><Image src="/impro-logo.png" alt="IMPRIO" width={2172} height={724} className="h-7 w-auto md:h-8 max-w-[180px]" /></Link>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">An India-based influencer marketing agency focused on technology, AI, SaaS, software, and productivity. We connect brands with relevant creators and manage the commercial and operational side of their collaborations.</p>
          </div>
          <nav className="md:col-span-6 md:justify-self-end" aria-label="Footer navigation"><ul className="flex flex-wrap gap-x-7 gap-y-3">{footerLinks.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link></li>)}</ul></nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-muted-foreground">© 2026 IMPRIO. All rights reserved.</p><a href="mailto:partnerships@imprio.org" className="text-xs text-muted-foreground transition-colors hover:text-foreground">partnerships@imprio.org</a></div>
      </div>
    </footer>
  );
}
