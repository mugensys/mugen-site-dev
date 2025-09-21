import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import { ScrollSpyProvider } from "@/components/ScrollSpyProvider";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com/"),
  title: "Mugen Systems — Network & IT Consulting",
  description: "Vendor-neutral network & IT consulting. Design, deploy, and support fast, secure infrastructure for Southern California businesses.",
  alternates: { canonical: "https://example.com/" },
  openGraph: {
    title: "Mugen Systems — Network & IT Consulting",
    description: "Vendor-neutral network & IT consulting across Southern California.",
    url: "https://example.com/",
    siteName: "Mugen Systems",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugen Systems — Network & IT Consulting",
    description: "Vendor-neutral network & IT consulting across Southern California.",
    images: ["/og.png"],
  },
};

export const dynamic = 'error';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={epilogue.variable}>
      <head>
        {/* Preconnect for Google Fonts (not strictly needed with next/font, but allowed by CSP while testing) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD: ProfessionalService */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Mugen Systems",
          "url": "https://example.com/",
          "areaServed": "Southern California",
          "contactPoint": [{
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "hello@mugensystems.com",
            "telephone": "(XXX) XXX-XXXX",
            "areaServed": "US-CA"
          }]
        }) }} />
      </head>
      <body>
        <ScrollSpyProvider>
          {children}
        </ScrollSpyProvider>
      </body>
    </html>
  );
}
