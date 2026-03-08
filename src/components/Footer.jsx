import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="hero" smooth={true} className="footer-logo">
                            VIRAJ<span>.DEV</span>
                        </Link>
                        <p>Building high-performance mobile applications with React Native and modern technologies.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="hero" smooth={true}>Home</Link></li>
                                <li><Link to="about" smooth={true}>About</Link></li>
                                <li><Link to="projects" smooth={true}>Projects</Link></li>
                                <li><Link to="contact" smooth={true}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://linkedin.com/in/viraj-sangani" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                                <li><a href="#" target="_blank" rel="noreferrer">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Viraj Sangani. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="#"><Github size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Mail size={20} /></a>
                    </div>
                    <Link to="hero" smooth={true} className="scroll-top">
                        <ChevronUp size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
