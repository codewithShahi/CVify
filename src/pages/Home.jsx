import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, Layout, Sparkles, Wand2, FileText, Download } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Templates from '../components/Templates';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-28 sm:pt-32 pb-4 overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30">
                        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/50 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-200/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="container mx-auto px-6 pt-12">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            {/* Text Content */}
                            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm border border-primary-100 animate-fade-in-up">
                                    <Sparkles size={16} />
                                    <span>Powered by Advanced AI</span>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
                                    Build Your Dream <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                                        Resume Fast
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                                    Create expert-quality resumes in minutes. Our AI helper suggests skills, summaries, and experience descriptions tailored to your role.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                                    <Link to="/builder" className="px-8 py-4 btn-primary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                                        <Wand2 size={20} />
                                        <span>Create My Resume</span>
                                    </Link>
                                    <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                                        <Layout size={20} />
                                        <a href="/#templates" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                                            View Templates
                                        </a>
                                    </button>
                                </div>

                                <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-80 animate-fade-in-up animation-delay-400">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                <img src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        Joined by 1,000+ professionals
                                    </div>
                                </div>
                            </div>

                            {/* Animated Visual (Fake Builder Interface) */}
                            <div className="lg:w-1/2 w-full relative group animate-fade-in-right mt-12 lg:mt-0">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                                {/* Main Container: Fixed height for desktop, auto for mobile */}
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-h-[400px] lg:h-[600px] flex flex-col">

                                    {/* Window Bar */}
                                    <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="ml-4 px-3 py-1 bg-white rounded-md text-[10px] text-gray-400 border border-gray-200 flex-1 text-center font-mono">
                                            CVify-aibuilder
                                        </div>
                                    </div>

                                    {/* Builder Animation Interface */}
                                    <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">

                                        {/* Sidebar: Mobile par hide ya chota karne ke liye */}
                                        <div className="w-full sm:w-1/3 bg-gray-50 border-r border-gray-100 p-4 lg:p-6 space-y-4 lg:space-y-6 hidden sm:block">
                                            <div className="space-y-2 animate-pulse">
                                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                                <div className="h-8 bg-white border border-gray-200 rounded-lg"></div>
                                            </div>
                                            <div className="space-y-2 animate-pulse animation-delay-500">
                                                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                                                <div className="h-20 bg-white border border-gray-200 rounded-lg"></div>
                                            </div>

                                            {/* AI Suggestion Box */}
                                            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 border-l-4 border-l-blue-500 mt-4">
                                                <div className="flex gap-2 items-center text-blue-700 font-bold text-[10px] mb-1">
                                                    <Sparkles size={12} />
                                                    <span>AI Suggestion</span>
                                                </div>
                                                <div className="h-1.5 bg-blue-200 rounded w-full mb-1"></div>
                                                <div className="h-1.5 bg-blue-200 rounded w-2/3"></div>
                                            </div>
                                        </div>

                                        {/* Preview Area: Mobile par full width aur scaling adjust ki hai */}
                                        <div className="flex-1 bg-gray-100 p-4 lg:p-6 flex justify-center items-start overflow-hidden relative">
                                            <div className="w-full max-w-[350px] sm:w-[140%] bg-white shadow-xl min-h-[450px] p-6 lg:p-8 origin-top transform scale-90 sm:scale-75 lg:scale-90 space-y-4 transition-transform duration-500">

                                                {/* Resume Header Animation */}
                                                <div className="flex gap-3 items-center mb-6">
                                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
                                                    <div className="space-y-2 flex-1">
                                                        <div className="h-4 lg:h-6 bg-gray-800 rounded w-3/4 animate-slide-in-right"></div>
                                                        <div className="h-3 lg:h-4 bg-blue-500 rounded w-1/2 animate-slide-in-right animation-delay-200"></div>
                                                    </div>
                                                </div>

                                                {/* Resume Body */}
                                                <div className="border-b border-gray-200 pb-4 mb-4 space-y-2">
                                                    <div className="h-3 bg-gray-200 rounded w-full animate-width-grow"></div>
                                                    <div className="h-3 bg-gray-200 rounded w-11/12 animate-width-grow animation-delay-300"></div>
                                                    <div className="h-3 bg-gray-200 rounded w-4/5 animate-width-grow animation-delay-500"></div>
                                                </div>

                                                <div className="space-y-4">
                                                    {[1, 2].map((i) => (
                                                        <div key={i} className={`flex gap-3 animate-fade-in-up ${i === 2 ? 'hidden sm:flex' : 'flex'}`}>
                                                            <div className="w-0.5 bg-gray-200 rounded"></div>
                                                            <div className="flex-1 space-y-2">
                                                                <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                                                                <div className="h-2 bg-gray-400 rounded w-1/4"></div>
                                                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Floating "Ready" Action: Mobile par chota aur niche adjust kiya */}
                                            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce-slow z-20">
                                                <CheckCircle size={14} className="text-emerald-400" />
                                                <span className="text-[10px] sm:text-sm font-bold whitespace-nowrap">Resume Ready!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Features />
                <HowItWorks />
                <Templates />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default Home;
