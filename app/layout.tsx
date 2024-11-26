import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { cinzel } from './fonts';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Diverse Visa - Expert Immigration Services for Canada and Beyond',
  description: 'Expert immigration services for Canada. Diverse Visa helps with visa applications, study permits, work permits, and more. Seamless, professional, and successful outcomes.',
  keywords: 'diverse visa, immigration, visa, canada immigration, work permits, study permits, diverse visa, visa application',
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/icon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="Diverse Visa" />
        <meta property="og:title" content="Diverse Visa - Expert Immigration Services for Canada and Beyond" />
        <meta property="og:description" content="Expert immigration services for Canada. Diverse Visa helps with visa applications, study permits, work permits, and more. Seamless, professional, and successful outcomes." />
        <meta property="og:image" content="/images/logo/dv-logo-reverse.jpg" /> {/* Replace with a specific image if needed */}
        <meta property="og:url" content="https://diversevisa.com" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag (gtag.js) */}
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Diverse Visa",
              "url": "https://diversevisa.com",
              "description": "Expert immigration services for Canada and more.",
              "sameAs": [
                "https://www.facebook.com/diversevisa",
                "https://www.instagram.com/diversevisa",
                "https://www.linkedin.com/company/diverse-visa"
              ]
            }),
          }}
        />
      </head>
      <body className={`${cinzel.className} bg-white`}>
        <h1 className='sr-only'>Diverse Visa</h1>
        {children}
      </body>
      <GoogleAnalytics gaId='G-VQSRSLBQYG' />
    </html>
  );
}
