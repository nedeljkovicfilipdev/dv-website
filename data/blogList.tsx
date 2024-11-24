import Blog1 from '@/components/blogs/blog1';
import Blog2 from '@/components/blogs/blog2';
import Blog3 from '@/components/blogs/blog3';
import Blog4 from '@/components/blogs/blog4';
import Blog5 from '@/components/blogs/blog5';
import Blog6 from '@/components/blogs/cost-living';
import Blog7 from '@/components/blogs/moving-to-serbia';
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
    slug:'moving-to-serbia-a-comprehensive-immigration-guide',
    titleKey: 'moving-serbia-title',
    image: '/images/blog/moving-to-serbia.jpg',
    component: <Blog7 />
  },
  {
    slug:'cost-of-living-in-canada-what-you-need-to-know-before-relocating',
    titleKey: 'cost-living-title',
    image: '/images/blog/cost-living.jpg',
    component: <Blog6 />
  },
  {
    slug: 'on-site-job-opportunities-across-canada-apply-now',
    titleKey: 'heading',
    image: '/images/blog/blogimg5.jpg',
    component: <Blog5 />
  },
  {
    slug: 'exciting-remote-job-opportunity-web-developer-in-canada',
    titleKey: 'job-title',
    image: '/images/blog/blogimg4.jpg',
    component: <Blog4 />
  },
  {
    slug: 'exploring-the-start-up-visa-program-your-gateway-to-entrepreneurship-in-canada',
    titleKey: 'startup.blog-title',
    image: '/images/blog/blogimg1.jpg',
    component: <Blog3 />
  },
  {
    slug: 'family-sponsorship-reuniting-families-in-canada',
    titleKey: 'family.blog-title',
    image: '/images/blog/blogimg2.jpg',
    component: <Blog2 />
  },
  {
    slug: 'understanding-the-canadian-study-permit-process-a-comprehensive-guide',
    titleKey: 'blog-title',
    image: '/images/blog/blogimg3.jpg',
    component: <Blog1 />
  }
];
