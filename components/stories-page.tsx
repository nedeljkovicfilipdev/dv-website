import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";

export const Stories = () => {
    const t = useTranslations();

    // Retrieve and parse success stories from translations
    const successStories = [
        t('journeyStart.successStories1'),
        t('journeyStart.successStories2'),
        t('journeyStart.successStories3'),
        t('journeyStart.successStories4')
    ].map(story => {
        const [text, author] = story.split(':');
        return { text: text.trim(), author: author ? author.trim() : '' };
    });

    return (
        <div className="bottom-0 w-full py-2">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                {t('journeyStart.successStoriesTitle')}
            </h3>
            <Marquee gradient={false} speed={30} className="overflow-hidden">
                <div className="flex space-x-2 md:space-x-4">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="p-2 md:p-4 rounded-lg flex-none flex flex-col justify-center mx-1 md:mx-2"
                        >
                            <p className="text-gray-700 italic text-base md:text-lg mb-1 md:mb-2">
                                {story.text}
                            </p>
                            <p className="text-gray-900 font-bold text-base md:text-lg">
                                {story.author}
                            </p>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default Stories;
