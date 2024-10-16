"use client";

import { BlogList } from '@/data/blogList';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const DiverseLatestBlogs: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const handleBlogClick = (blogSlug: string) => {
    router.push(`/${locale}/blog/${blogSlug}`);
    window.scrollTo(0, 0);
  };

  const latestBlogs = BlogList.slice(0,3);

  return (
    <div className="container shadow-lg p-8 bg-gray-50">
      <h2 className="text-center sm:text-3xl xl:text-5xl p-4 text-black rounded-t-lg font-bold mb-8">
        {t('blog-latest')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBlogs.map(blog => (
          <div
            key={blog.slug}
            className="card cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            onClick={() => handleBlogClick(blog.slug)}
          >
            <img src={blog.image} alt={t(blog.titleKey)} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mt-2">{t(blog.titleKey)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiverseLatestBlogs;
