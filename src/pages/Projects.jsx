import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "GoExplore",
            description: "A comprehensive travel platform for discovering and planning your perfect trips with interactive features.",
            tech: ["React.js", "CSS Modules", "Framer Motion"],
            github: "https://github.com/Harinisanth82/GoExplore",
            demo: "https://goexlore.netlify.app/",
        },
        {
            title: "FitTracker",
            description: "Dedicated fitness dashboard for tracking workouts, monitoring progress, and achieving health goals.",
            tech: ["React.js", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/Harinisanth82/Fittracker_app",
            demo: "https://fittrackz.netlify.app/",
        },
        {
            title: "Policfy",
            description: "Modern insurance policy management system with secure data handling and user-centric dashboard.",
            tech: ["React.js", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/Harinisanth82/Policfy",
            demo: "https://policfy.netlify.app/",
        },
        {
            title: "Personalized Book Finder",
            description: "A machine learning-based recommendation system that suggests books based on user interests using collaborative filtering techniques.",
            tech: ["Python", "Flask", "Machine Learning", "Pandas", "Scikit-learn", "NumPy"],
            github: "https://github.com/Harinisanth82/Book-recommendation",
        }
    ];

    return (
        <motion.div
            id="projects"
            className="projects container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">My Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card glass"
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map(t => <span key={t}>{t}</span>)}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <br /><br /><br />
        </motion.div>
    );
};

export default Projects;
