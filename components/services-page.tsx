"use client"; // Add this to mark the component as a Client Component

import { benne } from "@/app/fonts";
import { useTranslations } from "next-intl";
import React from "react";

export const DiverseBenefits = () => {
  const t = useTranslations("benefits");

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
      className="relative w-full bg-cover bg-center sm:py-16"
      style={{ backgroundImage: "url('/images/benefits-section.jpg')" }}
    >
      <div className="px-4 sm:px-6 lg:px-12 mt-20">
        <div className="w-full max-w-9xl mx-auto">
          <h4 className="mb-8 text-center font-semibold text-customblue sm:text-3xl xl:text-4xl">
            {t("title")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {benefits.map(({ titleKey, descriptionKey }, index) => (
              <div
              key={index}
              className="flex flex-col items-center justify-start p-6 bg-customblue1 bg-opacity-60 rounded-xl text-customblue shadow-md hover:shadow-lg hover:scale-105 transition-all w-full sm:w-[320px] lg:w-[350px] mx-auto"
            >
              <h5 className="mb-4 text-center font-semibold sm:text-xl w-full">
                {t(titleKey)}
              </h5>
              <div className={`${benne.className}`}>
                <p className="text-center sm:text-lg lg:text-lg text-[#333]">
                  {t(descriptionKey)}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseBenefits;