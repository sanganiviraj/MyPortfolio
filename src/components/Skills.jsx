import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            name: 'Mobile & Frontend',
            skills: [
                { name: 'React Native', level: 95 },
                { name: 'JavaScript', level: 90 },
                { name: 'Redux / Context API', level: 85 },
                { name: 'TanStack Query', level: 80 },
            ],
        },
        {
            name: 'Backend & Data',
            skills: [
                { name: 'REST APIs', level: 90 },
                { name: 'GraphQL', level: 75 },
                { name: 'Firebase', level: 85 },
                { name: 'SQL / SQLite', level: 80 },
            ],
        },
        {
            name: 'Specialized',
            skills: [
                { name: 'Bluetooth LE', level: 80 },
                { name: 'Offline-first Apps', level: 85 },
                { name: 'Deep Linking', level: 90 },
                { name: 'Stripe / Payments', level: 80 },
            ],
        },
        {
            name: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'System Design', level: 75 },
                { name: 'Teamwork', level: 95 },
                { name: 'C Programming', level: 70 },
            ],
        },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Expertise</span>
                    <h2 className="section-title">Technical Skills</h2>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="skill-category glass-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3>{cat.name}</h3>
                            <div className="skill-list">
                                {cat.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="skills-tags-container">
                    <h3>Keywords</h3>
                    <div className="skills-tags">
                        {['React Native', 'JavaScript', 'Redux', 'TanStack Query', 'REST APIs', 'Firebase', 'BLE', 'Deep Linking', 'Stripe', 'GraphQL', 'Git', 'SQL', 'System Design'].map((tag, i) => (
                            <motion.span
                                key={i}
                                className="skill-tag"
                                whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
