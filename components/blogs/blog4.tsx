import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { benne } from '@/app/fonts';

const Blog4: React.FC = () => {
    const t = useTranslations();

    return (
        <section className={`${benne.className} p-2 md:p-4`}>
            <div className="max-w-3xl mt-20 mx-auto">
                <Image 
                    src="/images/blog/blogimg4.jpg" 
                    alt={t('startup.blog-image1-alt')} 
                    className="mb-4 rounded-xl mx-auto"
                    width={600} // Define a fixed width for the image
                    height={400} // Define a fixed height to maintain aspect ratio
                />
                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('job-title')}
                </h1>
                <p className="mb-4 text-lg">
                    {t('job-intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('job-about-role-title')}</h2>
                <p className="mb-4 text-lg">
                    {t('job-about-role-desc')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('job-responsibilities-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li>{t('job-responsibility1')}</li>
                    <li>{t('job-responsibility2')}</li>
                    <li>{t('job-responsibility3')}</li>
                    <li>{t('job-responsibility4')}</li>
                    <li>{t('job-responsibility5')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('job-requirements-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li>{t('job-requirement1')}</li>
                    <li>{t('job-requirement2')}</li>
                    <li>{t('job-requirement3')}</li>
                    <li>{t('job-requirement4')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('job-why-choose-title')}</h2>
                <p className="mb-4 text-lg">
                    {t('job-why-choose-desc')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('job-application-process-title')}</h2>
                <p className="mb-4 text-lg">
                    {t('job-application-process-desc')}
                </p>

                <p className="mb-4 text-lg">
                    {t('job-conclusion-desc')}
                </p>
            </div>
        </section>
    );
};

export default Blog4;
