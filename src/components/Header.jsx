import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Our Mission', path: '/about' },
        { name: 'Products & Solutions', path: '/products' },
        { name: 'Investors', path: '/investors' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || location.pathname !== '/'
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3'
                : 'bg-white/50 backdrop-blur-sm border-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="BPM Logo" className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-sm font-semibold transition-colors hover:text-secondary ${location.pathname === item.path ? 'text-secondary' : 'text-primary/80'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg'
                        }`}>
                        Contact Us
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-primary font-medium py-2 border-b border-slate-50 hover:text-secondary ${location.pathname === item.path ? 'text-secondary' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="w-full px-5 py-2 rounded-full font-medium bg-accent text-white hover:bg-accent-hover">
                        Contact Us
                    </button>
                </div>
            )}
        </header>
    );
}
