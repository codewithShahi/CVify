import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Users, Shield, Zap } from 'lucide-react';

const About = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            About <span className="text-primary-600">CVify</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are on a mission to help job seekers build professional resumes with ease and confidence.
                            Our AI-powered platform simplifies the resume-building process, ensuring your skills and
                            experience shine through to potential employers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide accessible, high-quality career tools that empower everyone to achieve their
                                professional goals. We believe that everyone deserves a great resume.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A passionate team of designers, developers, and career experts dedicated to building
                                the best resume builder on the planet.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-12">Why Choose CVify?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div className="mx-auto w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <Zap size={20} />
                                </div>
                                <h4 className="font-bold text-xl">Fast & Easy</h4>
                                <p className="text-gray-500">Build a resume in minutes, not hours.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Shield size={20} />
                                </div>
                                <h4 className="font-bold text-xl">ATS-Friendly</h4>
                                <p className="text-gray-500">Templates designed to pass scanning bots.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                    <Zap size={20} />
                                </div>
                                <h4 className="font-bold text-xl">AI-Powered</h4>
                                <p className="text-gray-500">Smart suggestions for every section.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;
