import { useTranslations } from 'next-intl'

export const DiverseStoryline = () => {
  const t = useTranslations()

  return (
    <div>
      <section className="w-full py-8 bg-gradient-to-r from-customblue to-custombluehover text-white">
        <div className="mx-[40px] px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-12">
            <h1 className="text-center text-3xl sm:text-lg xl:text-4xl font-bold">
              {t('storyline-title')}
            </h1>
            <div className="flex flex-col items-center space-y-2 p-4">
              <p className="mb-6 text-justify sm:text-lg xl:text-xl font-light">
                {t('storyline')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiverseStoryline;
