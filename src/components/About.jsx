import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { icon: <Code2 size={24} />, label: 'Experience', value: '1.5+ Years' },
        { icon: <Cpu size={24} />, label: 'Projects', value: '8+ Completed' },
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Discovery</span>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-card about-card">
                            <div className="card-decoration"></div>
                            <User size={120} className="about-icon" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-info"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="about-text">
                            Hi, I’m <strong>Sangani Viraj</strong> — a React Native Developer passionate about building scalable and high-quality mobile applications, with 1.5+ years of hands-on experience in hybrid mobile app development.
                        </p>
                        <p className="about-text">
                            I focus on performance, clean UI, and real-world problem solving, turning complex business requirements into reliable mobile solutions. My experience spans <span className="highlight-underline">React Native</span>, <span className="highlight-underline">state management</span>, <span className="highlight-underline">REST APIs</span>, <span className="highlight-underline">offline-first design</span>, <span className="highlight-underline">BLE-based IoT integrations</span>, <span className="highlight-underline">Firebase</span>, <span className="highlight-underline">deep linking</span>, and <span className="highlight-underline">app optimization</span>.
                        </p>
                        <p className="about-text">
                            I am also interested in content creation, productivity, leadership, and emerging technologies such as AI and modern application workflows.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item glass-card">
                                    <div className="stat-icon">{stat.icon}</div>
                                    <div className="stat-info">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
