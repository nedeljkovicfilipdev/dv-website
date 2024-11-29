import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { benne } from '@/app/fonts';

const Blog6: React.FC = () => {
    const t = useTranslations();

    return (
        <section className={`${benne.className} p-2 md:p-4`}>
            <div className="max-w-3xl mt-20 mx-auto">
                <Image
                    src="/images/blog/cost-living.jpg"
                    alt={t('cost-living-image-alt')}
                    className="mb-4 rounded-xl mx-auto"
                    width={600}
                    height={400}
                />

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('cost-living-title')}
                </h1>

                <p className="mb-4 text-lg">
                    {t('cost-living-intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-major-cities')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('cost-living-city-toronto')}</strong>: {t('cost-living-city-toronto-desc')}</li>
                    <li><strong>{t('cost-living-city-vancouver')}</strong>: {t('cost-living-city-vancouver-desc')}</li>
                    <li><strong>{t('cost-living-city-calgary')}</strong>: {t('cost-living-city-calgary-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-minimum-wage-title')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('cost-living-minimum-wage-bc')}</strong>: {t('cost-living-minimum-wage-bc-desc')}</li>
                    <li><strong>{t('cost-living-minimum-wage-ontario')}</strong>: {t('cost-living-minimum-wage-ontario-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-monthly-expenses-title')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('cost-living-rent')}</strong>: {t('cost-living-rent-desc')}</li>
                    <li><strong>{t('cost-living-transportation')}</strong>: {t('cost-living-transportation-desc')}</li>
                    <li><strong>{t('cost-living-groceries')}</strong>: {t('cost-living-groceries-desc')}</li>
                    <li><strong>{t('cost-living-health-insurance')}</strong>: {t('cost-living-health-insurance-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-saving-tips-title')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li>{t('cost-living-tip-suburbs')}</li>
                    <li>{t('cost-living-tip-public-transport')}</li>
                    <li>{t('cost-living-tip-smart-shopping')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-immigration-costs-title')}
                </h2>
                <p className="mb-4 text-lg">
                    {t('cost-living-immigration-costs-desc')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('cost-living-conclusion-title')}
                </h2>
                <p className="mb-4 text-lg">
                    {t('cost-living-conclusion-desc')}
                </p>
            </div>
        </section>
    );
};

export default Blog6;
