import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, MousePointer2, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // 1. Refresh Function for Logo
    const handleLogoClick = (e) => {
        e.preventDefault();
        window.location.reload(); // Page ko refresh kar dega
    };

    // 2. Scroll to Top Function for Home Button
    const handleHomeClick = (e) => {
        e.preventDefault();
        // Agar hum home page par hi hain to scroll karega, varna navigate
        if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
        setIsMenuOpen(false); // Mobile menu band karne ke liye
    };

    const navLinks = [
        { name: 'Home', onClick: handleHomeClick }, // Yahan onClick use karenge
        { name: 'Features', href: '#features' },
        { name: 'Templates', href: '#templates' },
        { name: 'How it works', href: '#how-it-works' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
            {/* --- MAIN NAVBAR --- */}
            <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-2 relative z-20">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Refresh Logic Added */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
                        <div className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg overflow-hidden transition-transform group-hover:scale-110">
                                <img src="/cvify-logo.png" alt="CVify Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                                CVify
                            </span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href || '#'}
                                onClick={link.onClick}
                                className="text-slate-600 hover:text-blue-600 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => navigate('/builder')}
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95 flex items-center gap-2 cursor-pointer"
                        >
                            Create Resume <MousePointer2 size={14} />
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 p-2 cursor-pointer focus:outline-none">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MINI SUB-NAVBAR --- */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-center">
                <div className="inline-flex items-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-md px-5 sm:px-8 py-2 rounded-b-2xl shadow-md border-x border-b border-white/40 animate-slide-down relative z-10">
                    <div className="flex items-center gap-2 border-r border-slate-200 pr-3 sm:pr-4">
                        <Lock size={16} className="text-emerald-500" />
                        <span className="text-[8px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">No Signup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-blue-500" />
                        <span className="text-[8px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">Data stays in browser</span>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU CONTENT --- */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 space-y-1 border border-white/40 animate-in fade-in zoom-in duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href || '#'}
                            className="block px-4 py-3 text-slate-700 font-bold uppercase text-xs hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
                            onClick={link.onClick || (() => setIsMenuOpen(false))}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-[1px] bg-slate-100 my-2"></div>
                    <button
                        onClick={() => { navigate('/builder'); setIsMenuOpen(false); }}
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest mt-2 cursor-pointer shadow-lg active:scale-95"
                    >
                        Create Resume
                    </button>
                </div>
            )}

            <style>{`
                @keyframes slide-down {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
            `}</style>
        </header>
    );
};

export default Header;