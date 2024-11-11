"use client"
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Stories = () => {
    const t = useTranslations();

    // Retrieve and parse success stories from translations
    const successStories = [
        t('journeyStart.successStories1'),
        t('journeyStart.successStories2'),
        t('journeyStart.successStories3'),
    ].map(story => {
        const [text, author] = story.split(':');
        return { text: text.trim(), author: author ? author.trim() : '' };
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers for navigating between stories
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
        );
    };

    const currentStory = successStories[currentIndex];

    return (
        <div className="bottom-0 w-full mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                {t("journeyStart.successStoriesTitle")}
            </h3>
            <div className="flex flex-col items-center text-center">
                <div className="p-6 md:p-8 rounded-xl bg-gray-100 w-3/4 md:w-1/2 lg:h-[300px]">
                    <p className="text-gray-700 italic text-lg md:text-xl mb-3">
                        {currentStory.text}
                    </p>
                    <p className="text-gray-900 font-bold text-lg md:text-xl">
                        {currentStory.author}
                    </p>
                </div>
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-2 rounded-lg bg-customblue text-white hover:bg-custombluehover transition font-semibold shadow-lg"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 rounded-lg bg-customblue text-white hover:bg-custombluehover transition font-semibold shadow-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Stories;
