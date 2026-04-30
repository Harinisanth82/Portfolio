import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Hari Nisanth. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Harinisanth82" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/harinisanth82" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    <a href="https://x.com/itz_hari3056" target="_blank" rel="noopener noreferrer" title="Twitter(X)"><FaXTwitter /></a>
                    <a href="https://leetcode.com/u/HariNisanth_TM/" target="_blank" rel="noopener noreferrer" title="LeetCode"><SiLeetcode /></a>
                    <a href="https://www.instagram.com/_hari._82/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                    <a href="mailto:harinisanth563@gmail.com" title="Email"><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
