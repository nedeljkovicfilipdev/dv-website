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
    case 'blog1':
      BlogComponent = Blog1;
      break;
    case 'blog2':
      BlogComponent = Blog2;
      break;
    case 'blog3':
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
