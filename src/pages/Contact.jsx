import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }

        setStatus('Sending...');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "0caf6864-34d6-4b62-9355-be56e8b9c70b",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Error: Could not connect to the server.');
        }

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <motion.div
            id="contact"
            className="contact container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for collaborations or just a friendly chat!</p>

                    <div className="info-item">
                        <FaEnvelope />
                        <span>harinisanth563@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <FaPhone />
                        <span>+91 99441 92989</span>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <span>Erode, TN</span>
                    </div>
                </div>

                <motion.div
                    className="contact-form glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary submit-btn"
                            disabled={status === 'Sending...'}
                        >
                            {status === 'Sending...' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                        </button>
                        {status && status !== 'Sending...' && (
                            <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
            <br />
            <br />
        </motion.div>
    );
};

export default Contact;
