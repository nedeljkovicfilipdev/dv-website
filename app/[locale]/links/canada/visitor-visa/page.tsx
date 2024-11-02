import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  const t = useTranslations();
  unstable_setRequestLocale(locale);

  return (
    <section className="mt-20 p-2 md:p-4">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">
          {t("visitorVisa.visitorVisaTitle")}
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.introduction")}
          </h2>
          <p className="mb-4">{t("visitorVisa.canadianVisitorVisa")}</p>
          <p>{t("visitorVisa.diverseVisaAim")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.programOverview")}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {t("visitorVisa.eligibilityRequirements")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.validPassport")}</li>
            <li>{t("visitorVisa.proofOfFunds")}</li>
            <li>{t("visitorVisa.purposeOfVisit")}</li>
            <li>{t("visitorVisa.criminalAndHealthRecord")}</li>
            <li>{t("visitorVisa.invitationLetter")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("visitorVisa.typesOfVisitorVisas")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.singleEntryVisa")}</li>
            <li>{t("visitorVisa.multipleEntryVisa")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.whyVisitCanada")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.stunningNaturalBeauty")}</li>
            <li>{t("visitorVisa.businessOpportunities")}</li>
            <li>{t("visitorVisa.familyAndCulture")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.commonChallenges")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.provingFinancialStability")}</li>
            <li>{t("visitorVisa.tiesToHomeCountry")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.howDiverseVisaHelps")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.fastDocumentSubmission")}</li>
            <li>{t("visitorVisa.helpWithGatheringDocuments")}</li>
            <li className="mt-4">
              {t("visitorVisa.lowServiceFees")}
              <ul className="ml-4 list-inside list-disc">
                <li>{t("visitorVisa.standardServiceFee")}</li>
                <li>{t("visitorVisa.rushServiceFee")}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("visitorVisa.whyChooseDiverseVisa")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("visitorVisa.fastAndEfficientProcess")}</li>
            <li>{t("visitorVisa.affordableService")}</li>
            <li>{t("visitorVisa.completeDocumentAssistance")}</li>
            <li>{t("visitorVisa.ongoingSupport")}</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
