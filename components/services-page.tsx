"use client"; // Add this to mark the component as a Client Component

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from '@react-spring/web';

export const Card: React.FC<{ title: string, content: string }> = ({ title, content }) => {

  return (
  <div className="w-full h-auto p-8 rounded-lg bg-customblue shadow-md flex flex-col justify-center hover:bg-customblue1 hover:cursor-default tracking-tighter">
    <h3 className="mb-6 text-2xl sm:text-2xl xl:text-3xl font-bold text-white">{title}</h3>
    <p className="text-xl text-gray-100 text-left">{content}</p>
  </div>

  );
};

const AccordionItem: React.FC<{ title: string, content: React.ReactNode, isOpen: boolean, onToggle: () => void }> = ({ title, content, isOpen, onToggle }) => {

  const animationProps = useSpring({
    from: { maxHeight: 0, opacity: 0 },
    to: {
      maxHeight: isOpen ? 1000 : 0,
      opacity: isOpen ? 1 : 0
    },
    config: { duration: 300 }
  });

  return (
    <div className="">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between bg-custombluehover hover:bg-customblue1 text-white focus:outline-none"
      >
        <span className="tracking-tighter sm:text-xl xl:text-2xl font-regular">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <animated.div style={animationProps} className="overflow-hidden">
        <div className="p-4 bg-gray-50">{content}</div>
      </animated.div>
    </div>
  );
};

export const DiverseServices = () => {
  const t = useTranslations();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <section id="services" className="w-full">
      <div className="w-full py-16 bg-white">
        <div className="px-4 md:px-6 container">
          <div className="mx-auto w-full max-w-full space-y-20">
            
            {/* Our Services */}
            <div className="p-8 bg-customblue rounded-lg shadow-md text-xl">
              <h4 className="mb-8 text-center sm:text-3xl xl:text-5xl p-4 text-white rounded-t-lg font-bold text-3xl">{t('services')}</h4>
              <div className="space-y-4 mb-4">
                <AccordionItem
                  title={t('immigration-consulting-experts')}
                  content={<div className="text-lg"><p>{t('immigration-consulting-experts-description')}</p></div>}
                  isOpen={expandedItem === 'immigration-consulting-experts'}
                  onToggle={() => toggleAccordion('immigration-consulting-experts')}
                />
                <AccordionItem
                  title={t('recruiters-job-placements')}
                  content={<div className="text-lg"><p>{t('recruiters-job-placements-description')}</p></div>}
                  isOpen={expandedItem === 'recruiters-job-placements'}
                  onToggle={() => toggleAccordion('recruiters-job-placements')}
                />
                <AccordionItem
                  title={t('business-brokers')}
                  content={<div className="text-lg"><p>{t('business-brokers-description')}</p></div>}
                  isOpen={expandedItem === 'business-brokers'}
                  onToggle={() => toggleAccordion('business-brokers')}
                />
                <AccordionItem
                  title={t('educational-institutions')}
                  content={<div className="text-lg"><p>{t('educational-institutions-description')}</p></div>}
                  isOpen={expandedItem === 'educational-institutions'}
                  onToggle={() => toggleAccordion('educational-institutions')}
                />
                <AccordionItem
                  title={t('legal-compliance-advisors')}
                  content={<div className="text-lg"><p>{t('legal-compliance-advisors-description')}</p></div>}
                  isOpen={expandedItem === 'legal-compliance-advisors'}
                  onToggle={() => toggleAccordion('legal-compliance-advisors')}
                />
              </div>
              
              {/* What Sets Us Apart */}
              {/* Display cards on larger screens */}
              <div className="hidden md:grid md:grid-cols-2 gap-4">
                <Card title={t('holistic-approach')} content={t('holistic-approach-text')} />
                <Card title={t('understanding-unique-journeys')} content={t('understanding-unique-journeys-text')} />
              </div>
              
              {/* Display title and content on mobile screens */}
              <div className="md:hidden space-y-4 mb-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold font-bold mb-4">{t('holistic-approach')}</h3>
                  <p className="text-lg text-[#333] mt-2">{t('holistic-approach-text')}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-bold font-bold mb-4">{t('understanding-unique-journeys')}</h3>
                  <p className="text-lg text-[#333] mt-2">{t('understanding-unique-journeys-text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseServices;
