import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Diverse Visa - Expert Immigration Services for Canada and Beyond',
  description: 'Expert immigration services for Canada. Diverse Visa helps with visa applications, study permits, work permits, and more. Seamless, professional, and successful outcomes.',
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
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
      <GoogleAnalytics gaId='G-VQSRSLBQYG' />
    </html>
  );
}
