import LMIAWorkPermit from '@/components/countries/canada/job-opportunities';
import StartupVisaProgram from '@/components/countries/canada/start-up-visa';
import StudyPermitProgram from '@/components/countries/canada/study-in-canada';
import VisitorVisa from '@/components/countries/canada/visitor-visa';
import { TranslationKeys } from '@/types/translationKeys';
import { ReactNode } from 'react';

export interface Countries {
  slug: string;
  titleKey: TranslationKeys;
  component: ReactNode;
}

export const CountryList: Countries[] = [
  {
    slug: 'on-site-job-opportunities-across-canada-apply-now',
    titleKey: 'visitor-visa-title',
    component: <VisitorVisa />
  },
  {
    slug: 'exciting-remote-job-opportunity-web-developer-in-canada',
    titleKey: 'job-opportunities-title',
    component: <LMIAWorkPermit />
  },
  {
    slug: 'exploring-the-start-up-visa-program-your-gateway-to-entrepreneurship-in-canada',
    titleKey: 'study-in-canada-title',
    component: <StudyPermitProgram />
  },
  {
    slug: 'family-sponsorship-reuniting-families-in-canada',
    titleKey: 'start-up-visa-title',
    component: <StartupVisaProgram />
  }
];
