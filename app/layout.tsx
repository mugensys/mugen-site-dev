import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const epilogue = Epilogue({ subsets: ['latin'], display: 'swap', variable: '--font-epilogue' })

export const metadata: Metadata = {
  metadataBase: new URL('http://192.168.10.174/'),
  title: 'Mugen Systems — Network & IT Consulting',
  description: 'Vendor-neutral network and IT consulting. We design resilient architectures, optimize wireless, and de-risk cloud migrations across Southern California.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mugen Systems — Network & IT Consulting',
    description: 'Vendor-neutral network and IT consulting serving Southern California.',
    url: 'http://192.168.10.174/',
    type: 'website',
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mugen Systems — Network & IT Consulting',
    description: 'Vendor-neutral network and IT consulting serving Southern California.',
    images: ['/og.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={epilogue.variable}>
      <head>
        {/* Preconnect while testing (safe even with next/font) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD: ProfessionalService */}
        <Script id="jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Mugen Systems",
            url: "http://192.168.10.174/",
            description: "Vendor-neutral network and IT consulting.",
            areaServed: "Southern California",
            image: "http://192.168.10.174/og.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "hello@mugensystems.example",
              availableLanguage: ["English"]
            }
          })}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
