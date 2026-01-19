import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <img src="/cvify-logo.png" alt="CVify" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold">CVify</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Create professional resumes in minutes with our AI-powered builder.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/builder" className="hover:text-white transition-colors">Resume Builder</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 CVify. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Make by</span>
                        <span className="font-bold text-white">Shahzar Ahmad</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
