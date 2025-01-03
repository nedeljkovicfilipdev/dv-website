"use client"; // Mark as a client component

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { alexbrush } from '@/app/fonts';

export const DiverseHero = () => {
  const t = useTranslations();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale(); 
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);

  const images = [
    "/images/hero-section1.jpg",
    "/images/hero-section2.jpg",
    "/images/hero-section3.jpg",
    "/images/hero-section4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const handleNavigation = useCallback((sectionId: string) => {
    const currentPath = window.location.pathname;
    const rootPath = `/${locale}`;

    if (currentPath === rootPath) {
      if (isMenuOpen) setIsMenuOpen(false);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (isMenuOpen) setIsMenuOpen(false);
      setPendingSectionId(sectionId);
      router.push(rootPath);
    }
  }, [locale, isMenuOpen, router]);

  return (
    <section id="poster" className="relative flex flex-col justify-center items-center h-screen pt-40 sm:pt-24 pb-40 sm:pb-24">
      {/* Sliding Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-[1000ms] ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative"
              style={{ flexBasis: "100%" }}
            >
              <Image
                src={src}
                alt={`Hero section ${index + 1}`}
                fill
                sizes="100vw"
                quality={100}
                priority
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-customblue opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 items-center w-full">
          <div className="col-span-1 md:col-span-2 lg:col-span-7 flex flex-col md:flex-row items-center justify-between shadow-lg bg-opacity-50 bg-customblue p-6 md:p-8 w-full rounded-lg">
            {/* Text and EmailForm container */}
            <div className="flex flex-col items-center text-center text-white mb-6 md:mb-0 md:mr-4 md:text-left md:ml-8 lg:ml-16 xl:ml-24 md:flex-grow">
              <h1 className="text-2xl font-bold tracking-tight md:text-4xl xl:text-5xl mb-6 leading-tight">
                {t('headline')}
                <span>&nbsp;</span>
                <span className={`${alexbrush.className} lg:text-8xl`}>{t('headline-part')}</span>
              </h1>
              <h2 className="font-medium text-lg md:text-xl xl:text-2xl leading-snug">
                {t('subHeadline')}
              </h2>
            </div>
            {/* Display button on small screens */}
            <div className="block sm:hidden w-full text-center">
              <button
                onClick={() => handleNavigation('contact-us')}
                className="mt-4 sm:mt-6 cursor-pointer font-bold inline-flex items-center justify-center gap-3 py-3 sm:py-4 px-6 sm:px-8 bg-white text-customblue shadow-lg rounded-lg hover:bg-custombluehover hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
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
