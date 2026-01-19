import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Have questions or suggestions? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-4">
                                    For support and inquiries:
                                </p>
                                <a href="mailto:netgenlab@gmail.com" className="text-primary-600 font-semibold hover:underline">
                                    netgenlab@gmail.com
                                </a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-6">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
                                <p className="text-gray-600">
                                    Lahore, Pakistan
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                        placeholder="How can we help?"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2">
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
