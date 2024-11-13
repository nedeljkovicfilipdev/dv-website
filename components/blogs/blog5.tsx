import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Blog5: React.FC = () => {
    const t = useTranslations();

    return (
        <section className="p-2 md:p-4">
            <div className="max-w-3xl mt-20 mx-auto">
                <Image 
                    src="/images/blog/blogimg5.jpg" 
                    alt={t('startup.blog-image1-alt')} 
                    className="mb-4 rounded-xl"
                    width={600} // Define a fixed width for the image
                    height={400} // Define a fixed height to maintain aspect ratio
                />
                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('heading')}
                </h1>
                <p className="mb-4 text-lg">
                    {t('intro-paragraph')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('positions-header')}</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-1-title')}</h3>
                    <p>{t('position-1-location')}</p>
                    <p>{t('position-1-program')}</p>
                    <p>{t('position-1-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-2-title')}</h3>
                    <p>{t('position-2-location')}</p>
                    <p>{t('position-2-program')}</p>
                    <p>{t('position-2-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-3-title')}</h3>
                    <p>{t('position-3-location')}</p>
                    <p>{t('position-3-program')}</p>
                    <p>{t('position-3-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-4-title')}</h3>
                    <p>{t('position-4-location')}</p>
                    <p>{t('position-4-program')}</p>
                    <p>{t('position-4-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-5-title')}</h3>
                    <p>{t('position-5-location')}</p>
                    <p>{t('position-5-program')}</p>
                    <p>{t('position-5-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-6-title')}</h3>
                    <p>{t('position-6-location')}</p>
                    <p>{t('position-6-program')}</p>
                    <p>{t('position-6-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-7-title')}</h3>
                    <p>{t('position-7-location')}</p>
                    <p>{t('position-7-program')}</p>
                    <p>{t('position-7-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-8-title')}</h3>
                    <p>{t('position-8-location')}</p>
                    <p>{t('position-8-program')}</p>
                    <p>{t('position-8-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-9-title')}</h3>
                    <p>{t('position-9-location')}</p>
                    <p>{t('position-9-program')}</p>
                    <p>{t('position-9-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-10-title')}</h3>
                    <p>{t('position-10-location')}</p>
                    <p>{t('position-10-program')}</p>
                    <p>{t('position-10-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-11-title')}</h3>
                    <p>{t('position-11-location')}</p>
                    <p>{t('position-11-program')}</p>
                    <p>{t('position-11-description')}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold">{t('position-12-title')}</h3>
                    <p>{t('position-12-location')}</p>
                    <p>{t('position-12-program')}</p>
                    <p>{t('position-12-description')}</p>
                </div>

                <p className="mb-4 text-lg">
                    {t('conclusion')}
                </p>
            </div>
        </section>
    );
};

export default Blog5;
