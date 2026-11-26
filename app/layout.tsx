import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://imprio.org'),
  title: 'IMPRIO — Influencer Marketing Agency for Technology Brands',
  description:
    'IMPRIO is an India-based influencer marketing agency connecting technology, AI, SaaS, and software brands with relevant creators. We handle creator research, brand-creator matching, outreach, negotiations, briefing, deliverables, timelines, campaign coordination, usage rights and reporting.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/impro-favicon.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: '/impro-favicon.png',
  },
  openGraph: {
    title: 'IMPRIO — Influencer Marketing Agency for Technology Brands',
    description:
      'IMPRIO connects technology, AI, SaaS, and software brands with relevant creators. We manage the commercial and operational side of creator collaborations.',
    type: 'website',
    siteName: 'IMPRIO',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0d12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
