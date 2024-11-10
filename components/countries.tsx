"use client"; // Add this to mark the component as a Client Component

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const ResidentCountries = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="countries" className="py-16 bg-gray-50">
      <div className="container mx-auto py-16 px-4 md:px-6 max-w-screen-lg rounded-lg bg-opacity-95 shadow-md">
        <h3 className="mb-12 text-center text-4xl font-extrabold text-gray-800">
          {t("countriesHeader")}
        </h3>
        <div className="mx-auto flex w-full flex-col gap-10 px-4 md:flex-row md:space-x-8">
          {/* Canada */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Link href={`/${locale}/links/canada`} className="w-full">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/images/flags/canada.png"
                  alt="Canada flag"
                  className="h-40 w-full object-cover rounded-lg" // Adjusted height to make it rectangular
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 text-2xl font-medium text-white">
                  Canada
                </div>
              </div>
            </Link>
          </div>

          {/* Serbia */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Link href={`/${locale}/links/serbia`} className="w-full">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/images/flags/serbia.png"
                  alt="Serbia flag"
                  className="h-40 w-full object-cover rounded-lg" // Adjusted height
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  Serbia
                </div>
              </div>
            </Link>
          </div>

          {/* USA */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Link href={`/${locale}/links/usa`} className="w-full">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/images/flags/usa.png"
                  alt="USA flag"
                  className="h-40 w-full object-cover rounded-lg" // Adjusted height
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  USA
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentCountries;
