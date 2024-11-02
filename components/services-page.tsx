"use client"; // Add this to mark the component as a Client Component

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from '@react-spring/web';

export const Card: React.FC<{ title: string, content: string }> = ({ title, content }) => (
  <div className="w-full h-auto p-8 rounded-lg bg-customblue shadow-md flex flex-col justify-center hover:bg-customblue1 cursor-pointer tracking-tighter">
    <h3 className="mb-6 text-2xl sm:text-2xl xl:text-3xl font-bold text-white">{title}</h3>
    <p className="text-xl text-gray-100 text-left">{content}</p>
  </div>
);

const AccordionItem: React.FC<{ title: string, content: React.ReactNode, isOpen: boolean, onToggle: () => void }> = ({ title, content, isOpen, onToggle }) => {
  const animationProps = useSpring({
    from: { maxHeight: 0, opacity: 0 },
    to: { maxHeight: isOpen ? 1000 : 0, opacity: isOpen ? 1 : 0 },
    config: { duration: 300 }
  });

  return (
    <div>
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

const servicesData = [
  { title: 'Personalized Immigration Guidance', content: 'We conduct in-depth assessments of your background, qualifications, and goals during our consultations to provide tailored immigration strategies that suit your specific needs.' },
  { title: 'Full-Service Support', content: 'We manage every stage of the immigration process, from documentation and job matching to visa submissions and interview coaching, ensuring you have expert guidance throughout.' },
  { title: 'Expertise Across Multiple Programs', content: 'Our team is proficient in a variety of Canadian immigration programs such as Express Entry, Provincial Nominee Programs (PNPs), Work Permits, and Family Sponsorship, giving us the ability to recommend the most suitable pathway for you.' },
  { title: 'Job Matching and Employment Support', content: 'We provide job matching services by working directly with employers and helping you build a professional resume and prepare for interviews, giving you access to Canadian job opportunities that match your skill set.' },
  { title: 'Transparency and Clear Communication', content: 'We maintain clear, transparent communication, providing upfront details about costs and regular updates on your application’s progress to keep you informed at every step.' },
  { title: 'Experience and a Strong Network', content: 'With years of experience, we have built a network of professionals including immigration lawyers, recruiters, and business brokers, ensuring that you have access to the best resources available.' },
  { title: 'Post-Immigration Support', content: 'After you’ve arrived in Canada, we offer additional services such as housing assistance and career guidance to help you settle smoothly into your new life.' },
  { title: 'Streamlined Documentation', content: 'We handle the entire documentation process, ensuring that all paperwork is accurately completed, translated when necessary, and submitted on time to the appropriate authorities.' },
];

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
            <div className="p-8 bg-customblue rounded-lg shadow-md text-xl">
              <h4 className="mb-8 text-center sm:text-3xl xl:text-5xl p-4 text-white rounded-t-lg font-bold text-3xl">
                {t('services')}
              </h4>
              <div className="space-y-4 mb-4">
                {servicesData.map((service, index) => (
                  <AccordionItem
                    key={index}
                    title={service.title}
                    content={<p className="text-lg">{service.content}</p>}
                    isOpen={expandedItem === service.title}
                    onToggle={() => toggleAccordion(service.title)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseServices;
