import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'React Native Developer',
            company: 'ExeLance IT',
            duration: 'Mar 2025 – Present',
            location: 'Surat, Gujarat, India',
            type: 'Full-time On-site',
            responsibilities: [
                'Develop and maintain React Native applications',
                'Focus on performance and clean UI',
                'Implement scalable architecture',
                'Build features based on business requirements',
            ],
        },
        {
            title: 'React Native Developer',
            company: 'Softnoesis Private Limited',
            duration: 'Apr 2024 – Nov 2024',
            location: 'Surat, Gujarat, India',
            responsibilities: [
                'Built and enhanced React Native applications',
                'Worked with GraphQL and APIs',
                'Collaborated with team on mobile solutions',
            ],
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Path</span>
                    <h2 className="section-title">Experience</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot">
                                <Briefcase size={16} />
                            </div>
                            <div className="glass-card timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.title}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <div className="timeline-meta">
                                    <span><Calendar size={14} /> {exp.duration}</span>
                                    <span><MapPin size={14} /> {exp.location}</span>
                                </div>
                                <ul className="timeline-body">
                                    {exp.responsibilities.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
