import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your Powerlifting Journey?</h2>
          <p>Join hundreds of athletes who have transformed their strength and achieved their goals with us</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary cta-btn">Get Started Today</Link>
            <Link to="/about" className="btn-secondary cta-btn">Learn More About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;