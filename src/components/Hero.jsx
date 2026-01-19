import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in">
                        <h1 className="heading-1 mb-6">
                            Create Your Perfect{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Resume
                            </span>{' '}
                            in Minutes
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            Build a professional resume that stands out. Choose from our expertly designed templates and land your dream job faster.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => navigate('/builder')} className="btn-primary text-lg">
                                Get Started Free
                            </button>
                            <a href="#templates" className="btn-secondary text-lg text-center">
                                View Templates
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    50K+
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Resumes Created</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    100+
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Templates</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    4.9★
                                </div>
                                <div className="text-sm text-gray-600 mt-1">User Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative animate-slide-up">
                        <div className="relative z-10">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>

                            {/* Resume Preview Card */}
                            <div
                                className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => navigate('/builder')}
                            >
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                        </div>
                                    </div>

                                    {/* Content Lines */}
                                    <div className="space-y-3 pt-4">
                                        <div className="h-3 bg-gradient-to-r from-primary-200 to-primary-100 rounded"></div>
                                        <div className="h-3 bg-gradient-to-r from-primary-200 to-primary-100 rounded w-5/6"></div>
                                        <div className="h-3 bg-gradient-to-r from-primary-200 to-primary-100 rounded w-4/6"></div>
                                    </div>

                                    <div className="space-y-3 pt-4">
                                        <div className="h-3 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded"></div>
                                        <div className="h-3 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded w-5/6"></div>
                                        <div className="h-3 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded w-3/6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
