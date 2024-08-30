"use client";

import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Blog1 from '@/components/blogs/blog1';
import Blog2 from '@/components/blogs/blog2';
import Blog3 from '@/components/blogs/blog3';
import { TranslationKeys } from '@/types/translationKeys';
import { useLocale } from 'next-intl';

interface Blog {
  slug: string;
  titleKey: TranslationKeys;
  image: string;
  component: React.ReactNode;
}

export const BlogList: Blog[] = [
  {
    slug: 'CanadianStudyGuide',
    titleKey: 'blog-title',
    image: '/images/blog/blogimg3.jpg',
    component: <Blog1 />
  },
  {
    slug: 'FamilySponsorship',
    titleKey: 'family.blog-title',
    image: '/images/blog/blogimg2.jpg',
    component: <Blog2 />
  },
  {
    slug: 'StartUpVisa',
    titleKey: 'startup.blog-title',
    image: '/images/blog/blogimg1.jpg',
    component: <Blog3 />
  },
];

const ResidentBlog: React.FC = () => {
  const router = useRouter();
  const t = useTranslations();
  const { slug } = useParams(); // Get the dynamic parameters
  const [selectedBlog, setSelectedBlog] = useState<React.ReactNode | null>(null);
  const locale = useLocale();

  useEffect(() => {
    if (slug) {
      const blog = BlogList.find(blog => blog.slug === slug);
      if (blog) {
        setSelectedBlog(blog.component);
      } else {
        setSelectedBlog(null);
      }
    }
  }, [slug]);

  const handleClickToBlog = () => {
    setSelectedBlog(null);
    router.push(`/${locale}/blog`);
    window.scrollTo(0, 0);
  };

  const handleBlogClick = (blogSlug: string) => {
    router.push(`/${locale}/blog/${blogSlug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="mt-20 px-4 md:px-8 p-8">
      <div className="container shadow-lg p-8 bg-gray-50">
        {!selectedBlog && (
          <h4 className="mb-8 text-center sm:text-3xl xl:text-5xl p-4 text-black rounded-t-lg font-bold text-3xl">
            {t('our-blogs')}
          </h4>
        )}

        {selectedBlog ? (
          <div>
            {selectedBlog}
            <div className="flex justify-center">
              <button
                onClick={handleClickToBlog}
                className="p-3 bg-customblue text-white rounded-lg shadow-md hover:bg-customblue-dark transition duration-300 transform hover:scale-105"
              >
                {t('back-blog')}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogList.map(blog => (
              <div
                key={blog.slug}
                className="card cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                onClick={() => handleBlogClick(blog.slug)}
              >
                <img src={blog.image} alt={t(blog.titleKey)} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mt-2">{t(blog.titleKey)}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResidentBlog;
