'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
  const pathname = usePathname();
  const isActive = (href: string) => href !== '/#creator-roll' && pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 md:px-8">
        <Link href="/" className="rounded-md focus-visible-ring" onClick={() => setOpen(false)} aria-label="Reachzy — Home">
          <Image src="/reachzy-logo.png" alt="Reachzy" width={140} height={76} className="h-8 w-auto md:h-9" priority />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.label} href={link.href} className={clsx('relative py-2 text-sm font-medium transition-colors', isActive(link.href) ? 'text-foreground after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-primary' : 'text-muted-foreground hover:text-foreground')}>{link.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Button asChild variant="primary" size="md"><Link href="mailto:partnerships@reachzy.space?subject=Campaign%20enquiry">Discuss a Campaign</Link></Button></div>
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-foreground focus-visible-ring md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      <div id="mobile-menu" className={clsx('md:hidden fixed inset-0 z-[60] transition-transform duration-300 ease-out', open ? 'translate-x-0' : 'translate-x-full pointer-events-none')} aria-hidden={!open}>
        <button type="button" className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-label="Close navigation" tabIndex={open ? 0 : -1} />
        <div className="relative ml-auto flex h-full w-[min(88%,24rem)] flex-col border-l border-border bg-background p-7 shadow-2xl">
          <div className="mb-10 flex items-center justify-between"><Image src="/reachzy-logo.png" alt="Reachzy" width={140} height={76} className="h-9 w-auto" /><button type="button" onClick={() => setOpen(false)} className="rounded-md p-2 focus-visible-ring" aria-label="Close menu"><X className="size-5" /></button></div>
          <nav className="flex-1" aria-label="Mobile navigation">{navLinks.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className={clsx('block border-b border-border py-4 text-xl font-medium', isActive(link.href) ? 'text-foreground' : 'text-muted-foreground')}>{link.label}</Link>)}</nav>
          <Button asChild variant="primary" size="lg" className="mt-8 w-full"><Link href="mailto:partnerships@reachzy.space?subject=Campaign%20enquiry">Discuss a Campaign</Link></Button>
        </div>
      </div>
    </header>
  );
}
