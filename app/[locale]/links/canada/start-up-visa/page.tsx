"use client"

import { benne } from "@/app/fonts";
import { useTranslations } from "next-intl";

export default function IndexPage() {
  // Enable static rendering
  const t = useTranslations();


  return (
    <section className={`${benne.className } mt-20 p-2 md:p-4`}>
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">
          {t("startUpVisa.startUpVisaTitle")}
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("startUpVisa.introduction")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.introductionDescription.description1")}</li>
            <li>{t("startUpVisa.introductionDescription.description2")}</li>
            <li>{t("startUpVisa.introductionDescription.description3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("startUpVisa.programOverview")}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {t("startUpVisa.qualifyingBusiness")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.qualifyingBusinessList.qualifying1")}</li>
            <li>{t("startUpVisa.qualifyingBusinessList.qualifying2")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            {t("startUpVisa.languageRequirements")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.languageRequirementsList.language1")}</li>
            <li>{t("startUpVisa.languageRequirementsList.language2")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            {t("startUpVisa.letterOfSupport")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.letterOfSupportList.supportLetter1")}</li>
            <li>{t("startUpVisa.letterOfSupportList.supportLetter2")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            {t("startUpVisa.settlementFunds")}
          </h3>
          <p className="mb-2 text-gray-700">
            {t("startUpVisa.settlementFundsDescription")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("startUpVisa.whyPerfectForFamilies")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>
              {t("startUpVisa.whyPerfectForFamiliesDescription.familyBenefit1")}
            </li>
            <li>
              {t("startUpVisa.whyPerfectForFamiliesDescription.familyBenefit2")}
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            {t("startUpVisa.processingTime")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.processingTimeList.processingTime1")}</li>
            <li>{t("startUpVisa.processingTimeList.processingTime2")}</li>
            <li>{t("startUpVisa.processingTimeList.processingTime3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("startUpVisa.benefitsOfProgram")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.benefitsList.benefit1")}</li>
            <li>{t("startUpVisa.benefitsList.benefit2")}</li>
            <li>{t("startUpVisa.benefitsList.benefit3")}</li>
            <li>{t("startUpVisa.benefitsList.benefit4")}</li>
            <li>{t("startUpVisa.benefitsList.benefit5")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("startUpVisa.howWeHelp")}
          </h2>

          <ul className="mb-4 list-inside list-disc">
            <li>{t("startUpVisa.howWeHelpDescription.helpDescription1")}</li>
            <li>{t("startUpVisa.howWeHelpDescription.helpDescription2")}</li>
            <li>{t("startUpVisa.howWeHelpDescription.helpDescription3")}</li>
            <li>{t("startUpVisa.howWeHelpDescription.helpDescription4")}</li>
            <li>{t("startUpVisa.howWeHelpDescription.helpDescription5")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="mb-2 text-gray-700">
            {t("startUpVisa.chooseDiverseVisa")}
          </p>
        </section>
      </div>
    </section>
  );
}
