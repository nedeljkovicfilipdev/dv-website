"use client"; // Add this to mark the component as a Client Component

import { useLocale, useTranslations } from 'next-intl';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EmailForm } from './email-page';
import { Button } from '@/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Flag from 'react-world-flags';
import { cinzel } from '@/app/fonts';

export const Footer = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handlePrivacy = () => {
    router.push(`/${locale}/privacy-policy`);
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
<section id="contact-us" className="bg-[#f2f4f3] mt-20 py-16">
  <div className="container mx-auto px-4 ">
    <div className="flex flex-col md:flex-row bg-white items-center rounded-xl">
      {/* Left Section - Contact Info */}
      <div className="mb-4 flex flex-col items-center md:mb-0 md:items-start bg-white rounded-2xl p-4 md:w-[450px] xl:w-[450px]">
        <Link href="#poster">
          <div className="cursor-pointer text-4xl hover:text-white dark:text-white">
            <Image
              src="/images/logo/dv-logo-white.png"
              alt="Diverse Logo"
              width={216} // Adjust width and height accordingly
              height={54}
              className="h-54 w-auto dark:filter dark:brightness-90 rounded-2xl"
            />
          </div>
        </Link>

        <div className="mb-6 p-4 text-black rounded-lg">
          {/* Canadian Office */}
          <div className="mb-2">
            <span className="text-blue-400 hover:text-blue-300">
              Canadian Office:
            </span>
            <div className="flex items-center">
              <Flag code="CA" className="w-6 h-6 mr-2" />
              <span>+1 (647) 931-6484</span>
            </div>
          </div>

          {/* Serbian Office */}
          <div className="mb-2">
            <span className="text-blue-400 hover:text-blue-300">
              Serbian Office:
            </span>
            <div className="flex items-center">
              <Flag code="RS" className="w-6 h-6 mr-2" />
              <span>+381 (64) 468-4465</span>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4 mt-6">
            <a href="mailto:info@example.com" className="flex text-blue-400 hover:text-blue-300">
              <Mail className="mr-4" /> info@diversevisa.com
            </a>
          </div>

          {/* Locations */}
          <div className="mt-10 text-lg font-semibold">{t('Locations')}:</div>
          <div className="mt-2">
            <p className="flex mb-4">
              <MapPin className="mr-4" />
              Belgrade, Serbia
            </p>
            <p className="flex">
              <MapPin className="mr-4" />
              Toronto, Canada
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Hero Image */}
      <div className="md:w-7/12 w-full md:ml-8">
  <div className="nmr hero-img-container">
    <Image 
      src="/images/footer-section.jpg" 
      className="w-full h-auto rounded-xl shadow-lg" 
      alt="Footer Section"
      height="600"
      width={1000}
    />
  </div>
</div>
    </div>
    <div className='mt-20 flex flex-col justify-center items-center bg-white p-8 rounded-xl'>
      <div className='text-center text-4xl mb-16'>Contact us</div>
    <EmailForm />
    </div>
  </div>
</section>


  );
};
