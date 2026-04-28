import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.div
            id="about"
            className="about container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <section className="about-section">
                        <h3>Who I Am</h3>
                        <p>
                            I'm an Information Technology student and aspiring
                            Full-Stack Developer with a deep interest in building scalable,
                            high-performance web applications. My journey began with an fascination for how digital systems work, leading me to master the MERN stack.
                        </p>
                        <p>
                            I love solving complex challenges through elegant code and user-centric design. I specialize in creating robust backend architectures and sleek, responsive frontends.
                        </p>
                    </section>

                    <div className="education">
                        <h3>Education</h3>
                        <div className="edu-grid">
                            <div className="edu-item">
                                <h4>Bachelor of Technology (2023 – 2027)</h4>
                                <p className="edu-dept">Information Technology | Bannari Amman Institute of Technology</p>
                                <span className="edu-score">CGPA: 7.75</span>
                            </div>
                            <div className="edu-item">
                                <h4>Higher Secondary Education (2021 – 2023)</h4>
                                <p className="edu-dept">Adharsh Vidyalaya Matric Hr Sec School</p>
                                <span className="edu-score">Percentage: 73.83%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br /><br />
        </motion.div>
    );
};

export default About;
