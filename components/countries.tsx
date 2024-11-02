import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const ResidentCountries = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="countries">
      <h3 className="mb-4 text-center text-2xl font-bold md:mb-6 md:text-3xl">
        {t("countriesHeader")}
      </h3>
      <div className="mx-auto flex w-full max-w-full flex-col gap-10 rounded-lg bg-white p-10 md:flex-row">
        {/* Canada */}
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <Link href={`/${locale}/links/canada`}>
            <img
              src="/images/flags/canada.svg"
              alt="Canada flag"
              className="h-full w-full rounded-lg object-cover"
            />
          </Link>
        </div>
        {/* Serbia */}
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <Link href={`/${locale}/links/serbia`}>
            <img
              src="/images/flags/serbia.svg"
              alt="Serbia flag"
              className="h-full w-full rounded-lg object-cover"
            />
          </Link>
          {/* USA */}
        </div>
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <Link href={`/${locale}/links/usa`}>
            <img
              src="/images/flags/usa.svg"
              alt="USA flag"
              className="h-full w-full rounded-lg object-cover"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResidentCountries;
