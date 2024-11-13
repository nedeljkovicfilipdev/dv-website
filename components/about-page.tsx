"use client"; // Add this to mark the component as a Client Component

import { useTranslations } from 'next-intl'
import Image from 'next/image';

export const DiverseAbout = () => {
  const t = useTranslations()

  return (
    <section id="about">
      <div className="relative w-full py-16 text-white text-justify">
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row mx-auto w-full max-w-full p-10 rounded-lg bg-white bg-opacity-95 shadow-md">
            
            {/* Left Column: Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/images/about-canada.jpg"
                alt="Visa Application Canada"
                className="object-cover rounded-lg"
                width={600} // Define a fixed width for the image
                height={400} // Define a fixed height to maintain aspect ratio
              />
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-1/2 md:pl-10 tracking-tight">
              {/* Header */}
              <div className="flex items-center justify-center mb-8">
                <p className="mb-6 text-center font-bold text-black text-3xl md:text-2xl xl:text-5xl text-[#333]">
                  {t('about-us')}
                </p>
              </div>

              {/* Content Sections */}
              <div className="p-2">
                <p className="text-lg text-[#333]">{t('diverse-story')}</p>
              </div>
              <div className="p-2">
                <p className="text-lg text-[#333]">{t('diverse-mission')}</p>
              </div>
              <div className="p-2">
                <p className="text-lg text-[#333]">{t('diverse-vision')}</p>
              </div>
              <div className="p-2">
                <p className="text-lg text-[#333]">{t('diverse-values')}</p>
              </div>
              <div className="p-2 space-y-8">
                <h2 className="text-2xl xl:text-3xl text-[#333] text-center font-bold">{t('our-team')}</h2>
                <p className="text-lg text-[#333]">{t('diverse-team-about')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default DiverseAbout;