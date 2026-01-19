import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Is CVify really free to use?',
            answer: 'Yes! CVify offers a free plan that includes access to basic templates and features. You can create and download your resume without any cost. We also offer premium plans with additional templates and advanced features.'
        },
        {
            question: 'Are the templates ATS-friendly?',
            answer: 'Absolutely! All our templates are designed to be ATS (Applicant Tracking System) compatible. This means your resume will be easily parsed by recruitment software, increasing your chances of getting noticed.'
        },
        {
            question: 'Can I edit my resume after downloading?',
            answer: 'Yes, you can come back anytime to edit your resume. Your data is saved automatically, and you can make unlimited edits and downloads.'
        },
        {
            question: 'What file formats can I download?',
            answer: 'You can download your resume in PDF and Word (DOCX) formats. PDF is recommended for job applications as it preserves formatting across all devices.'
        },
        {
            question: 'Do I need to create an account?',
            answer: 'No account is required! You can start creating your resume immediately without any signup. However, creating an account allows you to save your progress and access your resume from any device.'
        },
        {
            question: 'Can I use CVify on my mobile device?',
            answer: 'Yes! CVify is fully responsive and works perfectly on smartphones, tablets, and desktop computers. Create and edit your resume on any device.'
        },
        {
            question: 'How long does it take to create a resume?',
            answer: 'Most users complete their resume in 10-15 minutes. Our intuitive interface and pre-written suggestions make the process quick and easy.'
        },
        {
            question: 'Can I customize the colors and fonts?',
            answer: 'Yes! You have full control over colors, fonts, spacing, and layout. Make your resume truly unique while maintaining professional standards.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-container bg-white">
            <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">
                    Frequently Asked{' '}
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Questions
                    </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Everything you need to know about CVify
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors duration-300"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                            <span className="font-semibold text-gray-900 pr-8">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-6 h-6 text-primary-600 flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Still have questions CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                    We're here to help! Contact our support team anytime.
                </p>
                <button className="btn-primary">
                    Contact Support
                </button>
            </div>
        </section>
    );
};

export default FAQ;
