"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to home after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <Head>
        <title>Page Not Found - Diverse Visa</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist. Explore other services from Diverse Visa." />
        <meta property="og:url" content="https://www.diversevisa.com/404" />
        <meta property="og:title" content="Page Not Found - Diverse Visa" />
        <meta property="og:description" content="Sorry, the page you are looking for does not exist. Explore other services from Diverse Visa." />
        <meta property="og:image" content="/images/logo/dv-logo-reverse.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">We can't seem to find the page you're looking for.</p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go back to Home
        </a>
      </div>
    </>
  );
}
