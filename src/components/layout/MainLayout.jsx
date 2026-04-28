import React from 'react';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import Contact from '../../pages/Contact';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default MainLayout;
