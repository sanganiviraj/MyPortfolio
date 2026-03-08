import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import './EduCert.css';

const EduCert = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Application',
            school: 'Veer Narmad South Gujarat University',
            duration: '2021 – Present',
        },
        {
            degree: 'Higher Secondary (12th Commerce)',
            school: 'Dharamjivan Higher Secondary School',
            duration: '2020 – 2021',
        },
    ];

    const certifications = [
        {
            title: 'System Design Masterclass',
            issuer: 'Udemy',
            year: '2025',
            topics: 'Load balancing, caching, microservices, distributed systems',
        },
        {
            title: 'Complete SQLITE Crash Course',
            issuer: 'Udemy',
            year: '2024',
        },
    ];

    return (
        <section id="background" className="background">
            <div className="container background-grid">
                {/* Education Section */}
                <div className="edu-col">
                    <motion.div
                        className="section-header-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title small">Education</h2>
                    </motion.div>

                    <div className="edu-list">
                        {education.map((item, i) => (
                            <motion.div
                                key={i}
                                className="edu-item glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="edu-icon"><GraduationCap size={24} /></div>
                                <div className="edu-content">
                                    <h3>{item.degree}</h3>
                                    <p>{item.school}</p>
                                    <span>{item.duration}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="cert-col">
                    <motion.div
                        className="section-header-left"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title small">Certifications</h2>
                    </motion.div>

                    <div className="cert-list">
                        {certifications.map((item, i) => (
                            <motion.div
                                key={i}
                                className="cert-item glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="cert-header">
                                    <div className="cert-icon"><Award size={24} /></div>
                                    <div className="cert-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.issuer} • {item.year}</p>
                                    </div>
                                </div>
                                {item.topics && (
                                    <p className="cert-topics"><strong>Topics:</strong> {item.topics}</p>
                                )}
                                <a href="#" className="cert-link">View Credential <ExternalLink size={14} /></a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EduCert;
