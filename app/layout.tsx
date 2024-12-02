import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { cinzel } from './fonts';
import Head from 'next/head';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Diverse Visa - Expert Immigration Services for Canada and Beyond',
  description: 'Expert immigration services for Canada. Diverse Visa helps with visa applications, study permits, work permits, and more.',
  keywords: 'diverse visa, immigration, visa, canada immigration, work permits, study permits, visa application',
  alternates: {
    canonical: 'https://diversevisa.com',
  },
  openGraph: {
    siteName: 'Diverse Visa',
    title: 'Diverse Visa - Expert Immigration Services for Canada and Beyond',
    url: 'https://diversevisa.com',
    type: 'website',
    images: '/images/logo/dv-logo-reverse.jpg',
  },
  metadataBase: new URL('https://diversevisa.com'),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Diverse Visa",
  url: "https://diversevisa.com",
  description: "Expert immigration services for Canada and more.",
  sameAs: [
    "https://www.facebook.com/diversevisa",
    "https://www.instagram.com/diversevisa",
    "https://www.linkedin.com/company/diverse-visa",
  ],
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <Head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16715603156" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16715603156');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className={`${cinzel.className} bg-white`}>
        <h1 className="sr-only">Diverse Visa</h1>
        {children}
      </body>
      <GoogleAnalytics gaId="G-VQSRSLBQYG" />
    </html>
  );
}
