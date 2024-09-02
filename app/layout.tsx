// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
        {/* Add any global meta tags or links here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
