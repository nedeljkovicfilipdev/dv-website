"use client"; // Add this to mark the component as a Client Component

import { animated, useSpring } from "@react-spring/web";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const AccordionItem: React.FC<{
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ title, content, isOpen, onToggle }) => {
  const animationProps = useSpring({
    from: { maxHeight: 0, opacity: 0 },
    to: {
      maxHeight: isOpen ? 1000 : 0,
      opacity: isOpen ? 1 : 0,
    },
    config: { duration: 300 },
  });

  return (
    <div className="overflow-hidden border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-custombluehover p-4 text-white hover:bg-customblue1 focus:outline-none"
      >
        <span className="text-left font-regular tracking-tighter sm:text-lg lg:text-xl xl:text-2xl">
          {title}
        </span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <animated.div style={animationProps} className="overflow-hidden">
        <div className="bg-gray-50 p-4 text-left text-lg">{content}</div>
      </animated.div>
    </div>
  );
};

export const DiverseBenefits = () => {
  const t = useTranslations("benefits");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const benefits = [
    { titleKey: "title1", descriptionKey: "description1" },
    { titleKey: "title2", descriptionKey: "description2" },
    { titleKey: "title3", descriptionKey: "description3" },
    { titleKey: "title4", descriptionKey: "description4" },
    { titleKey: "title5", descriptionKey: "description5" },
    { titleKey: "title6", descriptionKey: "description6" },
    { titleKey: "title7", descriptionKey: "description7" },
    { titleKey: "title8", descriptionKey: "description8" },
  ] as const;

  return (
    <section
      id="services"
      className="relative w-full bg-white py-12 text-left sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col rounded-lg bg-customblue bg-opacity-95 p-6 shadow-md sm:p-10">
          <div className="w-full">
            <h4 className="mb-6 text-center font-bold text-white sm:mb-8 sm:text-3xl xl:text-4xl">
              {t("title")}
            </h4>
            <div className="space-y-4">
              {benefits.map(({ titleKey, descriptionKey }, index) => (
                <AccordionItem
                  key={index}
                  title={t(titleKey)}
                  content={
                    <p className="text-base text-gray-800 sm:text-lg">
                      {t(descriptionKey)}
                    </p>
                  }
                  isOpen={expandedItem === t(titleKey)}
                  onToggle={() => toggleAccordion(t(titleKey))}
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
