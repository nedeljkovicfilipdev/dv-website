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
          {t("studyInCanada.studyPermitProgramTitle")}
        </h1>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("studyInCanada.introduction")}
          </h2>
          <p className="mb-4">
            {t("studyInCanada.studyPermitProgramDescription")}
          </p>
          <p>{t("studyInCanada.diverseVisaSupport")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("studyInCanada.programOverview")}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {t("studyInCanada.eligibilityRequirements")}
          </h3>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("studyInCanada.acceptanceIntoDLI")}</li>
            <li>{t("studyInCanada.proofOfFinancialSupport")}</li>
            <li>{t("studyInCanada.languageProficiency")}</li>
            <li>{t("studyInCanada.healthAndCriminalRecord")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("studyInCanada.workWhileStudying")}
          </h3>
          <p className="mb-4">
            {t("studyInCanada.workWhileStudyingDescription")}
          </p>

          <h3 className="mb-2 text-xl font-semibold">
            {t("studyInCanada.postGraduationWorkPermit")}
          </h3>
          <p className="mb-4">{t("studyInCanada.pgwpDescription")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("studyInCanada.whyStudyInCanada")}
          </h2>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("studyInCanada.studyInCanadaBenefits.benefit1")}</li>
            <li>{t("studyInCanada.studyInCanadaBenefits.benefit2")}</li>
            <li>{t("studyInCanada.studyInCanadaBenefits.benefit3")}</li>
            <li>{t("studyInCanada.studyInCanadaBenefits.benefit4")}</li>
            <li>{t("studyInCanada.studyInCanadaBenefits.benefit5")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("studyInCanada.howWeHelp")}
          </h2>
          <p className="mb-4">{t("studyInCanada.howWeHelpDescription")}</p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("studyInCanada.supportList.support1")}</li>
            <li>{t("studyInCanada.supportList.support2")}</li>
            <li>{t("studyInCanada.supportList.support3")}</li>
            <li>{t("studyInCanada.supportList.support4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("studyInCanada.whyChooseDiverseVisa")}
          </h2>
          <p>{t("studyInCanada.chooseDiverseVisaDescription")}</p>
        </section>
      </div>
    </section>
  );
}
