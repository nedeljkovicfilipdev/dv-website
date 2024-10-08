"use client"; // Add this to mark the component as a Client Component

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EmailForm } from './email-page';
import { useState } from 'react';

export const DiverseHero = () => {
  const t = useTranslations();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale(); // Adjust locale as needed
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);

  const handleNavigation = (sectionId: string) => {
    const currentPath = window.location.pathname;
    const rootPath = `/${locale}`;

    if (currentPath === rootPath) {
      // If already on the root path, just scroll to the section
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on a different path, push to the root and set pending sectionId
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      setPendingSectionId(sectionId);
      router.push(rootPath);
    }
  };

  return (
    <section id="poster" className="relative flex flex-col justify-center items-center h-screen pt-40 sm:pt-24 pb-40 sm:pb-24">
      {/* Background image using Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/canada-poster.jpg"
          alt="Canada Poster"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          quality={100}
          priority
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 items-center w-full">
          <div className="col-span-1 md:col-span-2 lg:col-span-7 flex flex-col md:flex-row items-center justify-between shadow-lg bg-opacity-75 bg-customblue p-6 md:p-8 w-full">
            {/* Text and EmailForm container */}
            <div className="flex flex-col items-center text-center text-white mb-6 md:mb-0 md:mr-4 md:text-left md:ml-8 lg:ml-16 xl:ml-24 md:flex-grow">
              <h1 className="text-xl font-bold tracking-tighter md:text-3xl xl:text-5xl mb-4">
                {t('headline')}
              </h1>
              <h2 className="font-regular text-lg tracking-tighter md:text-xl xl:text-2xl">
                {t('subHeadline')}
              </h2>
            </div>
            {/* Display EmailForm on larger screens */}
            <div className="hidden sm:block md:w-[250px] xl:w-[450px] bg-white p-4 md:p-6 text-black rounded-2xl shadow-lg mt-6 md:mt-0 flex-shrink-0">
              <EmailForm />
            </div>
            {/* Display button on small screens */}
            <div className="block sm:hidden w-full text-center mt-6">
              <button
                onClick={() => handleNavigation('contact-us')}
                className="mt-4 sm:mt-6 cursor-pointer font-bold inline-flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 bg-white text-customblue shadow-md hover:bg-custombluehover transition-colors duration-300"
              >
                {t('callToAction')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseHero;
