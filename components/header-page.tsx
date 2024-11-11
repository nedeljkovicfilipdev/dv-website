"use client"

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Languages, Menu, X } from 'lucide-react';
import { Button } from '@/ui/button';
import LocaleSwitcher from './LocaleSwitcher';
import Image from 'next/image';

interface IProps {
  leftNode?: ReactNode;
}

export const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);

  // Handle navigation and scroll to section
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

  // Use useEffect to handle scrolling after route change
  useEffect(() => {
    if (pendingSectionId) {
      const handleRouteChangeComplete = () => {
        document.getElementById(pendingSectionId)?.scrollIntoView({ behavior: 'smooth' });
        setPendingSectionId(null); // Reset pending section ID after scrolling
      };

      // Adding a small delay to ensure DOM is fully loaded
      setTimeout(handleRouteChangeComplete, 100); 
    }
  }, [pendingSectionId]);

  const handleBlog = () => {
    router.push(`/${locale}/blog`);
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  const handleFAQ = () => {
    router.push(`/${locale}/faq`);
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-2 md:px-12">
        <button
          onClick={() => handleNavigation('poster')}
          className="flex font-regular md:flex-col sm:flex-row text-slate-700 items-center text-center cursor-pointer hover:opacity-75"
        >
          <Image src="/images/logo/dv-icon.png" 
          alt="Diverse Logo"
          width={80} // Define a fixed width for the image
          height={10} // Define a fixed height to maintain aspect ratio
          />
          <span>DIVERSE VISA</span>
        </button>
        <div className="hidden lg:flex flex-grow items-center justify-center gap-4">
          <button
            onClick={() => handleNavigation('about')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('about-nav')}
          </button>
          <button
            onClick={() => handleNavigation('our-programs')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-custombluehover transition-colors duration-500"
          >
            {t('our-programs-nav')}
          </button>
          <button
            onClick={() => handleNavigation('services')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('services-nav')}
          </button>
          <button
            onClick={() => handleNavigation('consultations')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('consultations')}
          </button>
          <button
            onClick={() => handleNavigation('contact-us-form')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('contact-nav')}
          </button>
          <Button onClick={handleBlog} className="cursor-pointer bg-customblue hover:bg-custombluehover text-white rounded-xl">
            {t('blog-nav')}
          </Button>
          <Button onClick={handleFAQ} className="cursor-pointer bg-customblue hover:bg-custombluehover text-white rounded-xl">
            {t('faq-nav')}
          </Button>
          <button
          onClick={() => handleNavigation('contact-us')}
          className="fixed bottom-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-slate-100 transition duration-300"
          aria-label="Submit Form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
            <path d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <LocaleSwitcher isMenuOpen={isMenuOpen} />
        </div>
        <button className="lg:hidden flex items-center justify-center p-2 text-slate-700" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
        
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white shadow-lg md:hidden">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-bold">{t('title-header')}</span>
            <button className="p-2 text-slate-700" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4 mt-8">
            <button
              onClick={() => handleNavigation('about')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('about-nav')}
            </button>
            <button
              onClick={() => handleNavigation('our-programs')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('our-programs-nav')}
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('services-nav')}
            </button>
            <button
              onClick={() => handleNavigation('consultations')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('consultations')}
            </button>
            <button
              onClick={() => handleNavigation('contact-us-form')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('contact-nav')}
            </button>
            <Button onClick={handleBlog} className="text-xl cursor-pointer bg-customblue text-white hover:bg-custombluehover rounded-xl">
              {t('blog-nav')}
            </Button>
          </nav>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center">
            <div className="mb-2">
              <LocaleSwitcher isMenuOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
