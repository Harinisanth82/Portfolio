import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Hari Nisanth. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Harinisanth82" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    <a href="https://linkedin.com/in/hari-nisanth" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    <a href="mailto:harinisanth563@gmail.com" title="Email"><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
