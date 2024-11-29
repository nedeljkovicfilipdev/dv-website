import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { benne } from '@/app/fonts';

const Blog7: React.FC = () => {
    const t = useTranslations();

    return (
        <section className={`${benne.className} p-2 md:p-4`}>
            <div className="max-w-3xl mt-20 mx-auto">
                <Image 
                    src="/images/blog/moving-to-serbia.jpg" 
                    alt={t('moving-serbia-image-alt')} 
                    className="mb-4 rounded-xl mx-auto" 
                    width={600} 
                    height={400} 
                />

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('moving-serbia-title')}
                </h1>

                <p className="mb-4 text-lg">{t('moving-serbia-intro')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-visa-title')}</h2>
                <p className="mb-4 text-lg">{t('moving-serbia-visa-desc')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-white-card-title')}</h2>
                <p className="mb-4 text-lg">{t('moving-serbia-white-card-desc')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-trp-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('moving-serbia-trp-employment')}</strong>: {t('moving-serbia-trp-employment-desc')}</li>
                    <li><strong>{t('moving-serbia-trp-education')}</strong>: {t('moving-serbia-trp-education-desc')}</li>
                    <li><strong>{t('moving-serbia-trp-family')}</strong>: {t('moving-serbia-trp-family-desc')}</li>
                    <li><strong>{t('moving-serbia-trp-property')}</strong>: {t('moving-serbia-trp-property-desc')}</li>
                </ul>
                <p className="mb-4 text-lg">{t('moving-serbia-trp-docs')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-work-permit-title')}</h2>
                <p className="mb-4 text-lg">{t('moving-serbia-work-permit-desc')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-property-title')}</h2>
                <p className="mb-4 text-lg">{t('moving-serbia-property-desc')}</p>
                <p className="mb-4 text-lg">{t('moving-serbia-property-remote')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-citizenship-title')}</h2>
                <p className="mb-4 text-lg">{t('moving-serbia-citizenship-desc')}</p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-cost-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('moving-serbia-cost-affordable')}</strong>: {t('moving-serbia-cost-affordable-desc')}</li>
                    <li><strong>{t('moving-serbia-cost-business')}</strong>: {t('moving-serbia-cost-business-desc')}</li>
                    <li><strong>{t('moving-serbia-cost-culture')}</strong>: {t('moving-serbia-cost-culture-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('moving-serbia-diverse-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li>{t('moving-serbia-diverse-guidance')}</li>
                    <li>{t('moving-serbia-diverse-legal')}</li>
                    <li>{t('moving-serbia-diverse-remote')}</li>
                    <li>{t('moving-serbia-diverse-complete')}</li>
                </ul>

                <p className="mb-4 text-lg">{t('moving-serbia-conclusion')}</p>
            </div>
        </section>
    );
};

export default Blog7;
