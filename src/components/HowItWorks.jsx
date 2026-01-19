const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Choose a Template',
            description: 'Browse our collection of professional templates and select the one that best fits your style and industry.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Fill in Your Details',
            description: 'Add your information using our easy-to-use form. Our AI suggestions help you write compelling content.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Customize Design',
            description: 'Personalize colors, fonts, and layout to match your personality and stand out from the crowd.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Download & Apply',
            description: 'Export your polished resume as PDF or Word and start applying to your dream jobs immediately.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="section-container bg-gradient-to-br from-gray-50 to-primary-50 mx-8 rounded-xl">
            <div className="text-center mb-16">
                <h2 className="heading-2 mb-4">
                    How It{' '}
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Works
                    </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Create your professional resume in 4 simple steps
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connection Line - Hidden on mobile */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200" style={{ top: '6rem' }}></div>

                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                            {/* Step Number */}
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="mt-8 mb-6 text-primary-600">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            {/* <div className="text-center mt-16">
                <button className="btn-primary text-lg">
                    Start Building Now
                </button>
            </div> */}
        </section>
    );
};

export default HowItWorks;
