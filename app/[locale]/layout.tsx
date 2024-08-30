import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '@/config';
import Header from '@/components/header-page';
import { Footer } from '@/components/footer-page';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  return {
    title: 'Diverse Visa - Expert Immigration Services for Canada and Beyond',
    description: 'Expert immigration services for Canada. Diverse Visa helps with visa applications, study permits, work permits, and more. Seamless, professional, and successful outcomes.'
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main> {/* Ensure main content grows to fill available space */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
