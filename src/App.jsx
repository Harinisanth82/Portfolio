import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import { useTheme } from './hooks/useTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="app-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <MainLayout />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
