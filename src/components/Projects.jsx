import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, MessageSquare, Trophy, Briefcase } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Bluetooth IoT Control App',
            description: 'React Native mobile app to control IoT devices via Bluetooth. BLE communication integration with custom command-based hardware communication.',
            tech: ['React Native', 'BLE', 'JavaScript'],
            icon: <Cpu size={40} />,
            color: '#6366f1',
        },
        {
            title: 'AI Chat Bot App',
            description: 'AI chatbot using REST APIs with integrated OpenAI APIs. Optimized chat performance and clean UI.',
            tech: ['React Native', 'OpenAI', 'REST API'],
            icon: <MessageSquare size={40} />,
            color: '#06b6d4',
        },
        {
            title: 'Sports Coaching Platform',
            description: 'Role-based system with real-time score updates, chat, and payment integration via Stripe.',
            tech: ['React Native', 'Firebase', 'Stripe'],
            icon: <Trophy size={40} />,
            color: '#8b5cf6',
        },
        {
            title: 'Enterprise Sales App',
            description: 'Offline-first architecture with GPS-based check-in/out, analytics dashboard, deep linking support, and robust offline data handling.',
            tech: ['React Native', 'SQLite', 'Analytics', 'Salesforce'],
            icon: <Briefcase size={40} />,
            color: '#ec4899',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Works</span>
                    <h2 className="section-title">Projects</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-icon" style={{ color: project.color }}>
                                {project.icon}
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="link-btn"><Github size={18} /> Code</a>
                                    <a href="#" className="link-btn"><ExternalLink size={18} /> Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
