import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl';

type PartnerKeys =
| 'immigrationProfessionals'
| 'recruiters'
| 'businessBrokers'
| 'governmentAgencies'
| 'educationalInstitutions'
| 'businessIncubators'
| 'communityOrganizations';

export const DiverseNetwork = () => {
  const t = useTranslations();

const partners: PartnerKeys[] = [
  'immigrationProfessionals',
  'recruiters',
  'businessBrokers',
  'governmentAgencies',
  'educationalInstitutions',
  'businessIncubators',
  'communityOrganizations',
];

  return (
    <section id="our-network">
      <div className=" w-full bg-white py-16">
        <h2 className="mb-6 text-3xl font-bold text-center">{t('partnernetwork')}</h2>
        <Marquee gradient={false} speed={30} className="overflow-hidden px-4">
          <div className="flex space-x-12 items-center min-w-max px-8">
            {partners.map((partnerKey, index) => (
              <div
                key={index}
                className="w-[600px] h-[150px] p-4 rounded-lg border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold">{t(`partners.${partnerKey}.title`)}</h3>
                <p className="text-gray-700 text-lg">{t(`partners.${partnerKey}.description`)}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default DiverseNetwork;
