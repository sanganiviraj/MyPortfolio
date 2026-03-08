import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Available for new opportunities
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I'm <span className="gradient-text">Viraj Sangani</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        React Native Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Building scalable, high-performance mobile applications with a focus
                        on seamless user experiences and robust architecture.
                    </motion.p>

                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ChevronRight size={18} />
                        </a>
                        <a href="#" className="btn btn-outline">
                            Download Resume <Download size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="https://linkedin.com/in/viraj-sangani" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={24} /></a>
                        <a href="mailto:viraj@example.com"><Mail size={24} /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="image-blob">
                        <div className="blob-inner">
                            <div className="avatar-placeholder">
                                VS
                            </div>
                        </div>
                    </div>
                    <div className="experience-badge">
                        <span className="years">1.5+</span>
                        <span className="text">Years Experience</span>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mouse"
                >
                    <div className="wheel"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
