import React, { useState, useEffect } from 'react';
import './Project.css';

// Import your actual project components based on your screenshot
import FirefoxExtension from './Firefox_extension';
import Games from './Games';
import StockPredictor from './Stock_predixtor'; // Note: spelling matches your file
import AiEngine from './Ai_engine';
import OsKernel from './Os_kernel';

const Projects = () => {
  // State to control visibility of the "Scroll to Top" button
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Listen for scroll events to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      // Show the button if scrolled down more than 300 pixels
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Function to smoothly scroll to a specific section ID
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevents the default anchor jump
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-page-container">
      {/* Your Navigation Bar */}
      <div className='card'>
        <h2 className='pro'>Projects</h2>
        <a href="#firefox" className="link" onClick={(e) => scrollToSection(e, 'firefox')}>Firefox Extention</a>
        <a href="#games" className="link" onClick={(e) => scrollToSection(e, 'games')}>2d Games</a>
        <a href="#stock" className="link" onClick={(e) => scrollToSection(e, 'stock')}>Stock Predictor</a>
        <a href="#ai" className="link" onClick={(e) => scrollToSection(e, 'ai')}>Ai Engine</a>
        <a href="#os" className="link" onClick={(e) => scrollToSection(e, 'os')}>OS Kernel</a>
      </div>

      {/* The Content Sections 
        Instead of <Routes>, we render everything here and give each a matching ID 
      */}
      <div className="projects-content">
        <section id="firefox" className="scroll-section">
          <FirefoxExtension />
        </section>
        
        <section id="games" className="scroll-section">
          <Games />
        </section>
        
        <section id="stock" className="scroll-section">
          <StockPredictor />
        </section>
        
        <section id="ai" className="scroll-section">
          <AiEngine />
        </section>
        
        <section id="os" className="scroll-section">
          <OsKernel />
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default Projects;