import { notFound } from 'next/navigation';
import Blog1 from '@/components/blogs/blog1';
import Blog2 from '@/components/blogs/blog2';
import Blog3 from '@/components/blogs/blog3';
import Blog4 from '@/components/blogs/blog4';
import Blog5 from '@/components/blogs/blog5';
import Blog6 from '@/components/blogs/cost-living';
import Blog7 from '@/components/blogs/moving-to-serbia';

interface BlogPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { slug } = params;

  let BlogComponent;

  //Links for blogs
  switch (slug) {
    case 'understanding-the-canadian-study-permit-process-a-comprehensive-guide':
      BlogComponent = Blog1;
      break;
    case 'family-sponsorship-reuniting-families-in-canada':
      BlogComponent = Blog2;
      break;
    case 'exploring-the-start-up-visa-program-your-gateway-to-entrepreneurship-in-canada':
      BlogComponent = Blog3;
      break;
    case 'exciting-remote-job-opportunity-web-developer-in-canada':
      BlogComponent = Blog4
      break;
    case 'on-site-job-opportunities-across-canada-apply-now':
      BlogComponent = Blog5
      break;
    case 'cost-of-living-in-canada-what-you-need-to-know-before-relocating':
      BlogComponent = Blog6
      break;
    case 'moving-to-serbia-a-comprehensive-immigration-guide':
      BlogComponent = Blog7
      break;
    default:
      return notFound(); // Show 404 page if slug is not found
  }

  return (
    <div>
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
