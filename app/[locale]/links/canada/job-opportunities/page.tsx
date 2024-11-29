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
          {t("jobOpportunities.lmiaWorkPermitTitle")}
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.introduction")}
          </h2>
          <p className="mb-4">
            {t("jobOpportunities.introductionDescription1")}
          </p>
          <p>{t("jobOpportunities.introductionDescription2")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.programOverview")}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {t("jobOpportunities.eligibilityRequirements")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>
              {t("jobOpportunities.eligibilityRequirementsList.requirement1")}
            </li>
            <li>
              {t("jobOpportunities.eligibilityRequirementsList.requirement2")}
            </li>
            <li>
              {t("jobOpportunities.eligibilityRequirementsList.requirement3")}
            </li>
            <li>
              {t("jobOpportunities.eligibilityRequirementsList.requirement4")}
            </li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("jobOpportunities.typesOfJobsAvailable")}
          </h3>
          <p className="mb-4">{t("jobOpportunities.typesOfJobsDescription")}</p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("jobOpportunities.jobsList.job1")}</li>
            <li>{t("jobOpportunities.jobsList.job2")}</li>
            <li>{t("jobOpportunities.jobsList.job3")}</li>
            <li>{t("jobOpportunities.jobsList.job4")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.benefitsOfLmiaWorkPermits")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("jobOpportunities.benefitsList.benefit1")}</li>
            <li>{t("jobOpportunities.benefitsList.benefit2")}</li>
            <li>{t("jobOpportunities.benefitsList.benefit3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.challenges")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("jobOpportunities.challengesList.challenge1")}</li>
            <li>{t("jobOpportunities.challengesList.challenge2")}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.howWeHelp")}
          </h2>
          <p className="mb-4">
            {t("jobOpportunities.howWeHelpDescription.helpDescription1")}
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              {t("jobOpportunities.howWeHelpDescription.helpDescription2")}
            </li>
            <li>
              {t("jobOpportunities.howWeHelpDescription.helpDescription3")}
            </li>
            <li>
              {t("jobOpportunities.howWeHelpDescription.helpDescription4")}
            </li>
            <li>
              {t("jobOpportunities.howWeHelpDescription.helpDescription5")}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("jobOpportunities.whyChooseDiverseVisa")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("jobOpportunities.whyChooseDiverseVisaList.choice1")}</li>
            <li>{t("jobOpportunities.whyChooseDiverseVisaList.choice2")}</li>
            <li>{t("jobOpportunities.whyChooseDiverseVisaList.choice3")}</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
