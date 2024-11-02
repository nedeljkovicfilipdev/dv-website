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
          {t("immigrationSerbia.serbiaImmigrationPathways")}
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.introduction")}
          </h2>
          <p className="mb-4">
            {t("immigrationSerbia.serbiaAttractiveDestination")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.availablePathways")}
          </h2>

          <div className="mb-4">
            <h3 className="font-semibold">
              {t("immigrationSerbia.temporaryResidenceByEmployment")}
            </h3>
            <p>{t("immigrationSerbia.foreignNationalsApply")}</p>
            <p>{t("immigrationSerbia.unifiedProcess")}</p>
            <p>{t("immigrationSerbia.validFor3Years")}</p>
            <p>{t("immigrationSerbia.eligibilityForPrograms")}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">
              {t("immigrationSerbia.temporaryResidenceByCompanyFormation")}
            </h3>
            <p>{t("immigrationSerbia.entrepreneursSelfEmployed")}</p>
            <p>{t("immigrationSerbia.noNationalityRestrictions")}</p>
            <p>{t("immigrationSerbia.lowCorporateTax")}</p>
            <p>{t("immigrationSerbia.freeTradeAgreements")}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">
              {t("immigrationSerbia.temporaryResidenceByPropertyInvestment")}
            </h3>
            <p>{t("immigrationSerbia.investingInRealEstate")}</p>
            <p>{t("immigrationSerbia.noWealthTax")}</p>
            <p>{t("immigrationSerbia.noMinimumInvestment")}</p>
            <p>{t("immigrationSerbia.idealForRetirees")}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">
              {t("immigrationSerbia.temporaryResidenceByFamilyReunification")}
            </h3>
            <p>{t("immigrationSerbia.familyMembersInSerbia")}</p>
            <p>{t("immigrationSerbia.validAsLongAsPrimaryValid")}</p>
            <p>{t("immigrationSerbia.rightToWorkForFamily")}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.longTermResidencyAndCitizenship")}
          </h2>
          <p>{t("immigrationSerbia.5YearsForResidency")}</p>
          <p>{t("immigrationSerbia.activeResidency")}</p>
          <p>{t("immigrationSerbia.permanentResidencyStability")}</p>
          <p>{t("immigrationSerbia.citizenshipApplications")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.whyChooseSerbia")}
          </h2>
          <p>{t("immigrationSerbia.excellentQualityOfLife")}</p>
          <p>{t("immigrationSerbia.costEffectiveLiving")}</p>
          <p>{t("immigrationSerbia.centralLocation")}</p>
          <p>{t("immigrationSerbia.flexibleBankingSystem")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.howDiverseVisaCanHelp")}
          </h2>
          <p>{t("immigrationSerbia.simplifyingImmigration")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationSerbia.ourServices")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("immigrationSerbia.completeDocumentation")}</li>
            <li>{t("immigrationSerbia.speedyApplicationProcessing")}</li>
            <li>{t("immigrationSerbia.personalizedSupport")}</li>
          </ul>
        </section>

        <section>
          <p>{t("immigrationSerbia.serbiaFavoredDestination")}</p>
        </section>
      </div>
    </section>
  );
}
