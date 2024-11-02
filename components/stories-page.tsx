import { useTranslations } from "next-intl";

export const Stories = () => {
    const t = useTranslations();

    // Retrieve and parse success stories from translations
    const successStories = [
        t('journeyStart.successStories1'),
        t('journeyStart.successStories2'),
        //t('journeyStart.successStories3'),
    ].map(story => {
        const [text, author] = story.split(':');
        return { text: text.trim(), author: author ? author.trim() : '' };
    });

    return (
        <div className="bottom-0 w-full py-2">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                {t('journeyStart.successStoriesTitle')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
                {successStories.map((story, index) => (
                    <div
                        key={index}
                        className="p-4 bg-gray-100 rounded-lg shadow-md flex-none w-full md:w-1/3"
                    >
                        <p className="text-gray-700 italic text-base md:text-lg mb-2">
                            {story.text}
                        </p>
                        <p className="text-gray-900 font-bold text-base md:text-lg">
                            {story.author}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stories;
