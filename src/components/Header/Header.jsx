import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShrunken, setIsShrunken] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSection = document.querySelector('.hero-section');
      const heroHeight = heroSection ? heroSection.offsetHeight : 600;
      
      // Add glassmorphism effect after scrolling starts
      setIsScrolled(scrollTop > 0);
      
      // Shrink navbar after scrolling past hero section
      setIsShrunken(scrollTop > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header backdrop-filter backdrop-blur-xl bg-white/10 firefox:bg-white/80 ${isScrolled ? 'header-scrolled' : ''} ${isShrunken ? 'header-shrunken' : ''}`}>
      <div className="header-container border-b border-white/10">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-circle">
              <img src="/images/icon.png" alt="TPF Logo" />
            </div>
          </div>
          <div className="logo-text">
            <h1>Telangana Powerlifting Federation</h1>
            <span>Strength • Unity • Excellence</span>
          </div>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'nav-open' : ''}`} >
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
            <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>News</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;