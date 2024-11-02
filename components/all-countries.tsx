"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DiverseCountries: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Handle opening the modal with selected country options
  const handleCountryClick = (countrySlug: string) => {
    setSelectedCountry(countrySlug);
  };

  // Handle redirect when an option is selected in the modal
  const handleOptionClick = (optionSlug: string) => {
    router.push(`/${locale}/country/${selectedCountry}/${optionSlug}`);
    window.scrollTo(0, 0);
    setSelectedCountry(null);
  };

  // Define countries and their options
  const countries = [
    { name: 'Canada', slug: 'canada', flag: '/images/canadaflag.png', options: ['visitor-visa', 'job-opportunities', 'study', 'start-up-visa'] },
    { name: 'Serbia', slug: 'serbia', flag: '/images/serbiaflag.png', options: [] },  // Adjust options as needed
    { name: 'USA', slug: 'usa', flag: '/images/usaflag.png', options: [] },  // Adjust options as needed
  ];

  return (
    <div className="container shadow-lg p-8 bg-gray-50">
      <h2 className="text-center sm:text-3xl xl:text-5xl p-4 text-black rounded-t-lg font-bold mb-8">
        Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <div
            key={country.slug}
            className="cursor-pointer hover:shadow-md rounded-lg overflow-hidden"
            onClick={() => handleCountryClick(country.slug)}
          >
            <img src={country.flag} alt={`${country.name} Flag`} className="w-full h-40 object-cover" />
            <div className="p-4 text-center bg-white">
              <h3 className="text-lg font-semibold">{country.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selecting a page */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-bold text-center mb-4">
              {t(`${selectedCountry}-title`)}
            </h3>
            <div className="space-y-2">
              {countries.find(c => c.slug === selectedCountry)?.options.map(option => (
                <button
                  key={option}
                  className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleOptionClick(option)}
                >
                  {t(`${selectedCountry}-${option}`)}
                </button>
              ))}
            </div>
            <button
              className="mt-4 w-full p-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
              onClick={() => setSelectedCountry(null)}
            >
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiverseCountries;
