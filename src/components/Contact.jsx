import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle">Connect</span>
                    <h2 className="section-title">Get In Touch</h2>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Let's collaborate on your next mobile project</h3>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><Mail size={20} /></div>
                                <div className="method-text">
                                    <span>Email Me</span>
                                    <a href="mailto:viraj.sangani@example.com">viraj.sangani@example.com</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><Linkedin size={20} /></div>
                                <div className="method-text">
                                    <span>LinkedIn</span>
                                    <a href="https://linkedin.com/in/viraj-sangani" target="_blank" rel="noreferrer">viraj-sangani</a>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><MapPin size={20} /></div>
                                <div className="method-text">
                                    <span>Location</span>
                                    <p>Surat, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Highlight your requirements..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
