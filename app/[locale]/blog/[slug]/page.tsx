import { notFound } from 'next/navigation';
import Blog1 from '@/components/blogs/blog1';
import Blog2 from '@/components/blogs/blog2';
import Blog3 from '@/components/blogs/blog3';

interface BlogPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { slug } = params;

  let BlogComponent;

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
