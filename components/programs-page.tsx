"use client"; // Add this to mark the component as a Client Component

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSpring, animated } from '@react-spring/web';

interface Program {
  title: string;
  content: string;
}

export const DiversePrograms = () => {
  const t = useTranslations();
  const [program, setProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      title: t('programs.skilledWorkers.title'),
      content: t('programs.skilledWorkers.content')
    },
    {
      title: t('programs.businessAndEntrepreneurs.title'),
      content: t('programs.businessAndEntrepreneurs.content')
    },
    {
      title: t('programs.familySponsorship.title'),
      content: t('programs.familySponsorship.content')
    },
    {
      title: t('programs.caregivers.title'),
      content: t('programs.caregivers.content')
    },
    {
      title: t('programs.temporary.title'),
      content: t('programs.temporary.content')
    },
    {
      title: t('programs.humanitarian.title'),
      content: t('programs.humanitarian.content')
    },
    {
      title: t('programs.studentsAndGraduates.title'),
      content: t('programs.studentsAndGraduates.content')
    },
    {
      title: t('programs.refugees.title'),
      content: t('programs.refugees.content')
    }
  ];

  // Animation for the modal
  const [{ opacity, scale }, set] = useSpring(() => ({
    opacity: 0,
    scale: 0.8,
  }));

  const handleProgramClick = (prog: Program) => {
    set({ opacity: 1, scale: 1 });
    setProgram(prog);
  };

  const handleClose = () => {
    set({ opacity: 0, scale: 0.8 });
    setTimeout(() => setProgram(null), 300); // Delay to match animation duration
  };

  return (
    <section id="our-programs" className="h-screen">
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/niagara-waterfalls.jpg')` }}>
        <div className="absolute inset-0 bg-customblue bg-opacity-0">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Rotating structure for large screens */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="absolute flex flex-wrap justify-center items-center ">
                {programs.map((prog, index) => (
                  <div
                    key={index}
                    className="absolute w-40 h-40 bg-white hover:bg-gray-100 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
                    style={{
                      transform: `rotate(${index * 45}deg) translate(18rem) rotate(-${index * 45}deg)` // Adjusted translation for the image
                    }}
                    onClick={() => handleProgramClick(prog)}
                  >
                    <h3 className="text-center sm:text-lg xl:text-xl text-[#333] font-bold">{prog.title}</h3>
                  </div>
                ))}
                <div className="mb-6 tracking-tighter font-bold text-white sm:text-3xl xl:text-5xl">{t('ourPrograms')}</div>
              </div>
            </div>
            {/* Card layout for small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 lg:hidden">
            <div className="absolute top-0 left-0 w-full text-center bg-opacity-70 bg-customblue shadow-lg p-4">
              <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{t('ourPrograms')}</h2>
            </div>
              {programs.map((prog, index) => (
                <div
                  key={index}
                  className="w-full bg-white bg-opacity-95 flex items-center justify-center rounded-lg shadow-lg cursor-pointer p-4"
                  onClick={() => handleProgramClick(prog)}
                >
                  <h3 className="text-center sm:text-lg xl:text-xl text-[#333] font-bold">{prog.title}</h3>
                </div>
              ))}
            </div>
          </div>
          {program && (
            <animated.div
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{ opacity, transform: scale.to(s => `scale(${s})`) }}
              onClick={handleClose} // Close overlay on click anywhere
            >
              <div className="bg-customblue text-white p-8 rounded-lg shadow-lg max-w-xl text-center" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                <p className="text-xl text-left tracking-tighter">{program.content}</p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2 bg-custombluehover text-white rounded-md hover:bg-white hover:text-black tracking-tighter text-xl"
                >
                  {t('close')}
                </button>
              </div>
            </animated.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiversePrograms;
