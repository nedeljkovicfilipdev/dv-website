import React from 'react';

const faqData = [
    {
        question: "How long does the immigration process take?",
        answer: "Processing times vary depending on the program. For instance, work permits like the LMIA can take 2-6 months, while Express Entry may take around 6 months. Although we can’t control government timelines, we ensure all documentation is prepared properly to avoid unnecessary delays."
    },
    {
        question: "Do I need a job offer to immigrate to Canada?",
        answer: "Not all programs require a job offer. While LMIA work permits and Provincial Nominee Programs (PNPs) do, options like Express Entry and study permits do not. We’ll help you determine the best immigration pathway, whether or not you have a job offer."
    },
    {
        question: "What happens if my visa application is rejected?",
        answer: "Rejections are disheartening, but they’re not the end. We review the reasons for rejection and help strengthen your application for resubmission. Our expert guidance from the start minimizes the risk of rejection by ensuring everything is complete and accurate."
    },
    {
        question: "What if I’m concerned about the costs?",
        answer: "We understand that finances can be a concern. Immigration involves fees, but we offer full transparency about costs upfront, breaking everything down. We can also explore programs that suit your budget and financial situation."
    },
    {
        question: "Can I bring my family with me to Canada?",
        answer: "Yes, many immigration programs allow you to bring your spouse and children. We’ll guide you through the process to ensure they’re included in your application and meet the necessary requirements, so your family can stay together during the transition."
    }
];

const FAQSection: React.FC = () => {
    return (
        <section className="p-4 md:p-8">
            <div className="max-w-3xl mx-auto py-20">
                <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-2 text-black">{faq.question}</h2>
                            <p className="text-lg text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
