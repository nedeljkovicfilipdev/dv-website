"use client";

import { useTranslations } from "next-intl";
import React from "react";

const FAQSection: React.FC = () => {
  const t = useTranslations("faq");
  // Define an array of question and answer keys
  const faqItems = [
    { questionKey: "question1", answerKey: "answer1" },
    { questionKey: "question2", answerKey: "answer2" },
    { questionKey: "question3", answerKey: "answer3" },
    { questionKey: "question4", answerKey: "answer4" },
    { questionKey: "question5", answerKey: "answer5" },
  ] as const;

  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-3xl py-20">
        <h1 className="mb-8 text-center text-4xl font-bold">FAQ</h1>
        <div className="space-y-6">
          {faqItems.map(({ questionKey, answerKey }, index: number) => (
            <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-black">
                {t(questionKey)}
              </h2>
              <p className="text-lg text-gray-700">{t(answerKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
