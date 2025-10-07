import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-circle">TPF</div>
            <div>
              <h3>Telangana Powerlifting Federation</h3>
              <p>Promoting strength sports across Telangana since inception</p>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="/rules">Competition Rules</a></li>
            <li><a href="/membership">Membership</a></li>
            <li><a href="/rankings">Rankings</a></li>
            <li><a href="/records">Records</a></li>
            <li><a href="/coaching">Coaching</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p>📍 Hyderabad, Telangana</p>
            <p>📧 info@telangana-powerlifting.org</p>
            <p>📞 +91 XXXXX XXXXX</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="Twitter">TW</a>
            <a href="#" className="social-link" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Telangana Powerlifting Federation. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;