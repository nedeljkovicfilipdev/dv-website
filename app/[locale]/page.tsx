import DiverseAbout from '@/components/about-page';
import DiverseConsultations from '@/components/consultations-page';
import DiverseHero from '@/components/hero-page';
import DiverseNetwork from '@/components/network-page';
import DiversePrograms from '@/components/programs-page';
import DiverseServices from '@/components/services-page';
import Stories from '@/components/stories-page';
import DiverseStoryline from '@/components/storyline-page';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);


  return (
    <section>
        <DiverseHero />
        <DiverseStoryline />
        <DiverseAbout />
        <DiversePrograms />
        <DiverseServices />
        <DiverseNetwork />
        <DiverseConsultations />
        <Stories />
    </section>
  );
}