'use client';

import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'For Creators', href: '/for-creators' },
];

export function SiteFooter() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href="/" className="focus-visible-ring inline-block" aria-label="Reachzy — Home">
              <Image
                src="/reachzy-logo.png"
                alt="Reachzy"
                width={140}
                height={76}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              An influencer marketing agency running brand collaborations with a
              small, deliberately chosen roster of creators. Fit first, always.
            </p>
          </div>

          <nav className="md:col-span-6 md:justify-self-end" aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Reachzy. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <a
              href="mailto:partnerships@reachzy.space"
              className="transition-colors hover:text-foreground"
            >
              partnerships@reachzy.space
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
