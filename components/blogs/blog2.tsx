import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Blog2: React.FC = () => {
    const t = useTranslations();

    return (
        <section className="p-2 md:p-4">
            <div className="max-w-3xl mt-20 mx-auto">
                <Image src="/images/blog/blogimg2.jpg" 
                alt={t('family.blog-image2-alt')} 
                className="mb-4 rounded-xl"
                width={600} // Define a fixed width for the image
                height={400} // Define a fixed height to maintain aspect ratio
                />

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('family.blog-title')}
                </h1>

                <p className="mb-4 text-lg">
                    {t('family.intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.who-can-sponsor-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {t.raw('family.who-can-sponsor').map((item: string, index: number) => (
                        <li key={index}>
                            <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                        </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.why-choose-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {t.raw('family.why-choose').map((item: string, index: number) => (
                        <li key={index}>
                            <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                        </li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.how-it-works-title')}</h2>
                <ol className="list-decimal list-inside mb-4 text-lg">
                    {t.raw('family.how-it-works').map((item: string, index: number) => (
                        <li key={index}>
                            <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                        </li>
                    ))}
                </ol>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.benefits-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {t.raw('family.benefits').map((item: string, index: number) => (
                        <li key={index}>
                            <strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                        </li>
                    ))}
                </ul>

                <p className="mb-4 text-lg">
                    {t('family.closing')}
                </p>
            </div>
        </section>
    );
};

export default Blog2;
