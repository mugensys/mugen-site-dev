import './globals.css'
import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import React from 'react'

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Mugen Systems — Network & IT Consulting',
    template: '%s | Mugen Systems',
  },
  description: 'We design and deploy high-speed networks and provide comprehensive IT support so your business runs faster, safer, and smarter. Vendor-neutral by design.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mugen Systems — Network & IT Consulting',
    description: 'Vendor-neutral network & IT consulting in Southern California.',
    url: 'https://example.com/',
    siteName: 'Mugen Systems',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Mugen Systems' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mugen Systems — Network & IT Consulting',
    description: 'Vendor-neutral network & IT consulting in Southern California.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={epilogue.variable}>
      <head>
        {/* Preconnects for Google Fonts (ok for local testing) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD for ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Mugen Systems",
              "url": "https://example.com/",
              "areaServed": "Southern California",
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "hello@mugensystems.com",
                "telephone": "(XXX) XXX-XXXX"
              }]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
