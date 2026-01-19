import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCreateResume = () => {
        navigate('/builder');
    };

    return (
        <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
            <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-2">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                                <img src="/cvify-logo.png" alt="CVify Logo" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                                CVify
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                            Home
                        </Link>
                        <a href="/#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                            Features
                        </a>
                        <a href="/#templates" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                            Templates
                        </a>
                        <a href="/#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                            How It Works
                        </a>
                        <a href="/#faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                            FAQ
                        </a>
                        <button onClick={handleCreateResume} className="btn-primary">
                            Create Resume
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-slide-down">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#templates"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Templates
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#faq"
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-primary-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </a>
                            <button
                                onClick={() => {
                                    handleCreateResume();
                                    setIsMenuOpen(false);
                                }}
                                className="btn-primary w-full"
                            >
                                Create Resume
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
