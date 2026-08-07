import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page unavailable — Reachzy',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function VaibhavSisintyPage() {
  notFound();
}
