'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'For Creators', href: '/for-creators' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="focus-visible-ring rounded-md px-2 py-1 -ml-2 -mt-1 -mr-2 -mb-1"
          onClick={() => setOpen(false)}
          aria-label="Reachzy — Home"
        >
          <Image
            src="/reachzy-logo.png"
            alt="Reachzy"
            width={140}
            height={76}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors relative py-2',
                isActive(link.href)
                  ? 'text-foreground border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="primary" size="md">
            <Link href="mailto:partnerships@reachzy.space">
              Discuss a Campaign
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-1.5 text-foreground md:hidden focus-visible-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={clsx(
          'md:hidden fixed inset-0 z-50 bg-background transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="flex h-full flex-col p-8">
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/"
              className="focus-visible-ring"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/reachzy-logo.png"
                alt="Reachzy"
                width={160}
                height={87}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-1.5 text-foreground focus-visible-ring"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  'text-2xl font-medium py-4 border-b border-border/50 transition-colors',
                  isActive(link.href)
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="primary" size="lg" className="mt-8 w-full">
            <Link href="mailto:partnerships@reachzy.space">
              Discuss a Campaign
            </Link>
          </Button>
        </div>

        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
