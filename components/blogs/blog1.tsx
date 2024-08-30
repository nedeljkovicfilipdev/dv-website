import React from 'react';
import { useTranslations } from 'next-intl';

const Blog1: React.FC = () => {
    const t = useTranslations();

    return (
        <section className="p-2 md:p-4">
            <div className="max-w-3xl mt-20 mx-auto">
                <img src="/images/blog/blogimg3.jpg" alt={t('blog-image3-alt')} className="mb-4 w-full h-auto rounded-xl" />

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">{t('blog-title')}</h1>
                <p className="mb-4 text-lg">
                    {t('blog-intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-why-study-canada')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('blog-high-quality-education')}</strong>: {t('blog-high-quality-education-desc')}</li>
                    <li><strong>{t('blog-work-opportunities')}</strong>: {t('blog-work-opportunities-desc')}</li>
                    <li><strong>{t('blog-pathway-to-pr')}</strong>: {t('blog-pathway-to-pr-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-study-permit')}</h2>
                <p className="mb-4 text-lg">
                    {t('blog-study-permit-desc')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-eligibility')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('blog-acceptance-at-dli')}</strong>: {t('blog-acceptance-at-dli-desc')}</li>
                    <li><strong>{t('blog-proof-of-funds')}</strong>: {t('blog-proof-of-funds-desc')}</li>
                    <li><strong>{t('blog-ties-to-home')}</strong>: {t('blog-ties-to-home-desc')}</li>
                    <li><strong>{t('blog-no-criminal-record')}</strong>: {t('blog-no-criminal-record-desc')}</li>
                    <li><strong>{t('blog-medical-exam')}</strong>: {t('blog-medical-exam-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-application-process')}</h2>
                <ol className="list-decimal list-inside mb-4 text-lg">
                    <li><strong>{t('blog-acceptance-letter')}</strong>: {t('blog-acceptance-letter-desc')}</li>
                    <li><strong>{t('blog-gather-documentation')}</strong>: {t('blog-gather-documentation-desc')}</li>
                    <li><strong>{t('blog-submit-application')}</strong>: {t('blog-submit-application-desc')}</li>
                    <li><strong>{t('blog-pay-fees')}</strong>: {t('blog-pay-fees-desc')}</li>
                    <li><strong>{t('blog-processing-time')}</strong>: {t('blog-processing-time-desc')}</li>
                    <li><strong>{t('blog-approval-and-travel')}</strong>: {t('blog-approval-and-travel-desc')}</li>
                </ol>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-after-arrival')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('blog-begin-studies')}</strong>: {t('blog-begin-studies-desc')}</li>
                    <li><strong>{t('blog-work-while-studying')}</strong>: {t('blog-work-while-studying-desc')}</li>
                    <li><strong>{t('blog-post-graduation-opportunities')}</strong>: {t('blog-post-graduation-opportunities-desc')}</li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('blog-advantages')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    <li><strong>{t('blog-quality-of-life')}</strong>: {t('blog-quality-of-life-desc')}</li>
                    <li><strong>{t('blog-cultural-diversity')}</strong>: {t('blog-cultural-diversity-desc')}</li>
                    <li><strong>{t('blog-career-opportunities')}</strong>: {t('blog-career-opportunities-desc')}</li>
                </ul>

                <p className="mb-4 text-lg">
                    {t('blog-closing')}
                </p>
            </div>
        </section>
    );
};

export default Blog1;
