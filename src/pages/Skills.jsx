import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "JavaScript (ES6+)", "CSS Modules", "HTML5/CSS3"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "MongoDB", "SQL (Basics)", "REST APIs"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git & GitHub", "AWS Basics", "Postman"]
        }
    ];

    return (
        <motion.div
            id="skills"
            className="skills container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">My Skills</h2>

            <div className="skills-categories">
                {categories.map((cat, idx) => (
                    <motion.div
                        className="category-card glass"
                        key={cat.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3>{cat.title}</h3>
                        <div className="skills-badges">
                            {cat.skills.map(skill => (
                                <span className="skill-badge" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <br /><br /><br />
        </motion.div>
    );
};

export default Skills;
