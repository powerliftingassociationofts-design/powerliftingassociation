import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import WaveAnimation from '../WaveAnimation/WaveAnimation';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const slides = useMemo(() => [
    {
      id: 1,
      title: "Welcome to Telangana Powerlifting Federation",
      subtitle: "Strength Beyond Limits – Empowering Telangana's Powerlifting Future",
      description: "Join our community of dedicated powerlifters and achieve your strength goals with professional guidance and support",
      primaryButton: { text: "Upcoming Events", link: "/events" },
      secondaryButton: { text: "Join Our Community", link: "/about" },
      stats: [
        { number: "500+", label: "Registered Athletes" },
        { number: "25+", label: "Annual Events" },
        { number: "15+", label: "Years of Excellence" }
      ]
    },
    {
      id: 2,
      title: "Train Like a Champion",
      subtitle: "Professional coaching and world-class facilities",
      description: "Access expert training programs, certified coaches, and state-of-the-art equipment to maximize your potential",
      primaryButton: { text: "Find Training Centers", link: "/training" },
      secondaryButton: { text: "Meet Our Coaches", link: "/coaches" },
      stats: [
        { number: "50+", label: "Certified Coaches" },
        { number: "20+", label: "Training Centers" },
        { number: "1000+", label: "Success Stories" }
      ]
    },
    {
      id: 3,
      title: "Compete at Every Level",
      subtitle: "From local meets to national championships",
      description: "Participate in competitions that match your skill level and aspire to represent Telangana on the national stage",
      primaryButton: { text: "View Competitions", link: "/events" },
      secondaryButton: { text: "Competition Rules", link: "/rules" },
      stats: [
        { number: "100+", label: "State Records" },
        { number: "30+", label: "National Medalists" },
        { number: "5+", label: "International Athletes" }
      ]
    }
  ], []);

  // Reset autoplay timer
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  // Navigate to specific slide
  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    resetAutoPlay();
    
    // Clear any existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Reset transition lock after animation completes
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Slightly less than CSS transition for better UX
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Initialize autoplay
  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [slides.length]);

  // Pause autoplay on user interaction
  const handleMouseEnter = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    resetAutoPlay();
  };

  return (
    <section 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        <div
          className="slides-wrapper"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <div className="slide-buttons">
                    <Link to={slide.primaryButton.link} className="btn-primary hero-btn">
                      {slide.primaryButton.text}
                    </Link>
                    <Link to={slide.secondaryButton.link} className="btn-secondary hero-btn">
                      {slide.secondaryButton.text}
                    </Link>
                  </div>
                </div>
                <div className="slide-stats">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          className="slider-nav prev" 
          onClick={prevSlide} 
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <rect 
              x="2" 
              y="2" 
              width="66" 
              height="66" 
              rx="14" 
              fill="rgba(255, 255, 255, 0.15)" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="2"
            />
            <path 
              d="M42 50L28 35L42 20" 
              stroke="#ffffff" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button 
          className="slider-nav next" 
          onClick={nextSlide} 
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <rect 
              x="2" 
              y="2" 
              width="66" 
              height="66" 
              rx="14" 
              fill="rgba(255, 255, 255, 0.15)" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="2"
            />
            <path 
              d="M28 20L42 35L28 50" 
              stroke="#ffffff" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <WaveAnimation />
    </section>
  );
};

export default HeroSlider;