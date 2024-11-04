"use client"; // Add this to mark the component as a Client Component

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from '@react-spring/web';

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
    <div className="overflow-hidden border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between bg-custombluehover hover:bg-customblue1 text-white focus:outline-none"
      >
        <span className="tracking-tighter sm:text-lg lg:text-xl xl:text-2xl font-regular text-left">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <animated.div style={animationProps} className="overflow-hidden">
        <div className="p-4 bg-gray-50 text-lg text-left">{content}</div>
      </animated.div>
    </div>
  );
};

export const DiverseBenefits = () => {
  const t = useTranslations();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const benefits = [
    { title: 'Personalized Immigration Guidance', description: 'We conduct in-depth assessments of your background, qualifications, and goals during our consultations to provide tailored immigration strategies that suit your specific needs.' },
    { title: 'Full-Service Support', description: 'We manage every stage of the immigration process, from documentation and job matching to visa submissions and interview coaching, ensuring you have expert guidance throughout.' },
    { title: 'Expertise Across Multiple Programs', description: 'Our team is proficient in a variety of Canadian immigration programs such as Express Entry, Provincial Nominee Programs (PNPs), Work Permits, and Family Sponsorship, giving us the ability to recommend the most suitable pathway for you.' },
    { title: 'Job Matching and Employment Support', description: 'We provide job matching services by working directly with employers and helping you build a professional resume and prepare for interviews, giving you access to Canadian job opportunities that match your skill set.' },
    { title: 'Transparency and Clear Communication', description: 'We maintain clear, transparent communication, providing upfront details about costs and regular updates on your application’s progress to keep you informed at every step.' },
    { title: 'Experience and a Strong Network', description: 'With years of experience, we have built a network of professionals including immigration lawyers, recruiters, and business brokers, ensuring that you have access to the best resources available.' },
    { title: 'Post-Immigration Support', description: 'After you’ve arrived in Canada, we offer additional services such as housing assistance and career guidance to help you settle smoothly into your new life.' },
    { title: 'Streamlined Documentation', description: 'We handle the entire documentation process, ensuring that all paperwork is accurately completed, translated when necessary, and submitted on time to the appropriate authorities.' }
  ];

  return (
    <section id="services" className="relative w-full py-12 sm:py-16 bg-white text-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mx-auto w-full max-w-5xl p-6 sm:p-10 rounded-lg bg-customblue bg-opacity-95 shadow-md">
          <div className="w-full">
            <h4 className="mb-6 sm:mb-8 text-center sm:text-3xl xl:text-4xl font-bold text-white">Benefits of Working with Diverse Visa</h4>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <AccordionItem
                  key={index}
                  title={benefit.title}
                  content={<p className="text-base sm:text-lg text-gray-800">{benefit.description}</p>}
                  isOpen={expandedItem === benefit.title}
                  onToggle={() => toggleAccordion(benefit.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseBenefits;
