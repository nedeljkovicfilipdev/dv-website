import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const ResidentCountries = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="countries" className="py-10 bg-gray-100">
      <h3 className="mb-10 text-center text-2xl font-bold md:text-3xl">
        {t("countriesHeader")}
      </h3>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 md:flex-row">
        {/* Canada */}
        <div className="w-full md:w-1/3">
          <Link href={`/${locale}/links/canada`}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/flags/canada.png"
                alt="Canada flag"
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
                Canada
              </div>
            </div>
          </Link>
        </div>

        {/* Serbia */}
        <div className="w-full md:w-1/3">
          <Link href={`/${locale}/links/serbia`}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/flags/serbia.png"
                alt="Serbia flag"
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
                Serbia
              </div>
            </div>
          </Link>
        </div>

        {/* USA */}
        <div className="w-full md:w-1/3">
          <Link href={`/${locale}/links/usa`}>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src="/images/flags/usa.png"
                alt="USA flag"
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
                USA
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResidentCountries;
