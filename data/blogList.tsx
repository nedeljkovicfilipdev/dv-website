import Blog1 from '@/components/blogs/blog1';
import Blog2 from '@/components/blogs/blog2';
import Blog3 from '@/components/blogs/blog3';
import { TranslationKeys } from '@/types/translationKeys';
import { ReactNode } from 'react';

export interface Blog {
  slug: string;
  titleKey: TranslationKeys;
  image: string;
  component: ReactNode;
}

export const BlogList: Blog[] = [
  {
    slug: 'understanding-the-canadian-study-permit-process-a-comprehensive-guide',
    titleKey: 'blog-title',
    image: '/images/blog/blogimg3.jpg',
    component: <Blog1 />
  },
  {
    slug: 'family-sponsorship-reuniting-families-in-canada',
    titleKey: 'family.blog-title',
    image: '/images/blog/blogimg2.jpg',
    component: <Blog2 />
  },
  {
    slug: 'exploring-the-start-up-visa-program-your-gateway-to-entrepreneurship-in-canada',
    titleKey: 'startup.blog-title',
    image: '/images/blog/blogimg1.jpg',
    component: <Blog3 />
  },
];
