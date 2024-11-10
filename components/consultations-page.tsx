"use client"
import { useLocale, useTranslations } from 'next-intl';

export const ResidentJourney = () => {
  const t = useTranslations();
  const locale = useLocale()

  const handleNavigation = (sectionId: string) => {
    const currentPath = window.location.pathname;
    const rootPath = `/${locale}`;

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  };

  // Retrieve translation strings
  const points = [
    t('journeyStart.firstMeetingPoints1'),
    t('journeyStart.firstMeetingPoints2'),
    t('journeyStart.firstMeetingPoints3'),
    t('journeyStart.firstMeetingPoints4')
  ];

  // Parse strings into objects
  const firstMeetingPoints = points.map(point => {
    const [title, description] = point.split(': ');
    return { title, description };
  });

  return (
    <section id="consultations" className="h-screen relative">
      <section 
        className="relative h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/visa-application-canada.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full text-center bg-opacity-70 bg-customblue shadow-lg p-4">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
            {t('journeyStart.consultationsTitle')}
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {firstMeetingPoints.map((point, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 rounded-xl shadow-lg ${index === 0 ? 'bg-white text-black' : 'bg-customblue text-white bg-opacity-90'} h-auto sm:h-70`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-4">{point.title}</h4>
                    <p className='text-sm sm:text-lg mt-1 sm:mt-2 font-light'>{point.description}</p>
                  </div>
                  {index === 0 && (
                    <button
                    onClick={() => handleNavigation('contact-us')}
                    className="mt-4 sm:mt-6 cursor-pointer font-bold inline-flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 bg-customblue text-white shadow-md hover:bg-custombluehover transition-colors duration-300"
                  >
                    {t('callToAction')}
                  </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ResidentJourney;
