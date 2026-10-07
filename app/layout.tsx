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
  metadataBase: new URL('https://reachzy.space'),
  title: 'Reachzy — Influencer Marketing Agency',
  description:
    'Reachzy is an influencer marketing agency. We connect brands with relevant creators and run campaigns from brief to delivery.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/reachzy-icon-32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/reachzy-icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: '/reachzy-icon-180.png',
  },
  openGraph: {
    title: 'Reachzy — Influencer Marketing Agency',
    description:
      'We connect brands with relevant creators and run campaigns from brief to delivery.',
    type: 'website',
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
