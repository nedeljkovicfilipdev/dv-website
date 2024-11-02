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
        <h1 className="mb-4 text-3xl font-bold">{t("immigrationUSA.title")}</h1>

        <section className="mb-8">
          <p className="mb-4">{t("immigrationUSA.introduction")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationUSA.whyImmigrate")}
          </h2>
          <p className="mb-4">{t("immigrationUSA.benefits")}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationUSA.pathways")}
          </h2>
          <p className="mb-4">{t("immigrationUSA.popularPrograms")}</p>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.familyBased")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.familyDescription")}</p>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.employmentBased")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.employmentCategories")}</p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("immigrationUSA.EB1")}</li>
            <li>{t("immigrationUSA.EB2")}</li>
            <li>{t("immigrationUSA.EB3")}</li>
            <li>{t("immigrationUSA.EB4")}</li>
            <li>{t("immigrationUSA.EB5")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.businessInvestment")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.businessDescription")}</p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("immigrationUSA.EB5Investor")}</li>
            <li>{t("immigrationUSA.E2TreatyInvestor")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.workVisas")}
          </h3>
          <p className="mb-2">
            {t("immigrationUSA.temporaryWork")}Temporary work visas include:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("immigrationUSA.H1B")}</li>
            <li>{t("immigrationUSA.L1")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.studentVisas")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.studentDescription")}</p>
          <ul className="mb-4 list-inside list-disc">
            <li>{t("immigrationUSA.F1")}</li>
            <li>{t("immigrationUSA.M1")}</li>
          </ul>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.asylum")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.asylumDescription")}</p>

          <h3 className="mb-2 text-xl font-semibold">
            {t("immigrationUSA.touristVisas")}
          </h3>
          <p className="mb-2">{t("immigrationUSA.touristDescription")}</p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            {t("immigrationUSA.advantages")}
          </h2>
          <p className="mb-4">{t("immigrationUSA.support")}</p>
          <p className="mb-4">{t("immigrationUSA.contact")}</p>
        </section>
      </div>
    </section>
  );
}
