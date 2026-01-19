const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Software Engineer',
            company: 'Tech Corp',
            image: '👩‍💻',
            rating: 5,
            text: 'CVify helped me land my dream job! The templates are professional and the customization options are amazing. Highly recommend!'
        },
        {
            name: 'Michael Chen',
            role: 'Marketing Manager',
            company: 'Brand Co',
            image: '👨‍💼',
            rating: 5,
            text: 'Creating my resume was so easy and fast. The ATS-optimized templates gave me confidence that my resume would get noticed.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Graphic Designer',
            company: 'Creative Studio',
            image: '👩‍🎨',
            rating: 5,
            text: 'As a designer, I appreciate the beautiful templates and the ability to customize every detail. My resume looks stunning!'
        },
        {
            name: 'David Kim',
            role: 'Data Analyst',
            company: 'Analytics Inc',
            image: '👨‍🔬',
            rating: 5,
            text: 'The process was incredibly smooth. I had my resume ready in under 15 minutes. The quality is outstanding!'
        },
        {
            name: 'Lisa Anderson',
            role: 'HR Director',
            company: 'People First',
            image: '👩‍💼',
            rating: 5,
            text: 'I recommend CVify to all job seekers. The templates are modern and professional, exactly what recruiters want to see.'
        },
        {
            name: 'James Wilson',
            role: 'Product Manager',
            company: 'Innovation Labs',
            image: '👨‍💻',
            rating: 5,
            text: 'Best resume builder I\'ve used! The interface is intuitive and the results are professional. Worth every penny!'
        }
    ];

    return (
        <section className="section-container bg-gradient-to-br from-primary-50 to-secondary-50 mx-8 rounded-xl">
            <div className="text-center mb-16 ">
                <h2 className="heading-2 mb-4">
                    What Our Users{' '}
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Say
                    </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Join thousands of satisfied users who landed their dream jobs
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        {/* Rating Stars */}
                        <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-yellow-400 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 mb-6 leading-relaxed italic">
                            "{testimonial.text}"
                        </p>

                        {/* User Info */}
                        <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-2xl">
                                {testimonial.image}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {testimonial.role} at {testimonial.company}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
