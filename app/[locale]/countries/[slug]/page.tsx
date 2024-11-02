import { notFound } from 'next/navigation';
import StartupVisaProgram from '@/components/countries/canada/start-up-visa';
import StudyPermitProgram from '@/components/countries/canada/study-in-canada';
import LMIAWorkPermit from '@/components/countries/canada/job-opportunities';
import VisitorVisa from '@/components/countries/canada/visitor-visa';

interface CountryPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

const CountryPage = ({ params }: CountryPageProps) => {
  const { slug } = params;

  let CountryComponent;

  switch (slug) {
    case 'visitor-visa':
      CountryComponent = VisitorVisa;
      break;
    case 'job-opportunities':
      CountryComponent = LMIAWorkPermit;
      break;
    case 'study':
      CountryComponent = StudyPermitProgram;
      break;
    case 'start-up-visa':
      CountryComponent = StartupVisaProgram
      break;
    default:
      return notFound(); // Show 404 page if slug is not found
  }

  return (
    <div>
      <CountryComponent />
    </div>
  );
};

export default CountryPage;
