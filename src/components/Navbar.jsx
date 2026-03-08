import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="hero" smooth={true} className="nav-logo">
                    VIRAJ<span>.DEV</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                smooth={true}
                                spy={true}
                                offset={-80}
                                activeClass="active"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </ul>

                {/* Mobile Toggle */}
                <div className="nav-mobile-controls">
                    <button onClick={toggleTheme} className="theme-toggle mobile">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    offset={-80}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
