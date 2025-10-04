import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: [
        'Telangana Powerlifting Federation',
        'Sports Complex, Road No. 12',
        'Banjara Hills, Hyderabad - 500034',
        'Telangana, India'
      ]
    },
    {
      icon: '📞',
      title: 'Phone',
      details: [
        '+91 40 2345 6789',
        '+91 98765 43210 (Emergency)',
        'Timings: 9:00 AM - 6:00 PM (Mon-Sat)'
      ]
    },
    {
      icon: '✉️',
      title: 'Email',
      details: [
        'info@telanganapowerlifting.org',
        'president@telanganapowerlifting.org',
        'coaching@telanganapowerlifting.org'
      ]
    },
    {
      icon: '🌐',
      title: 'Social Media',
      details: [
        'Facebook: @TelanganaTPF',
        'Instagram: @telangana_powerlifting',
        'Twitter: @TelanganaTPF'
      ]
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Competition Days', hours: 'As per event schedule' }
  ];

  const keyPersons = [
    {
      name: 'Mr. Rajesh Kumar',
      position: 'President',
      email: 'president@telanganapowerlifting.org',
      phone: '+91 98765 43210',
      department: 'Administration'
    },
    {
      name: 'Ms. Priya Sharma',
      position: 'Vice President',
      email: 'vicepresident@telanganapowerlifting.org',
      phone: '+91 98765 43211',
      department: 'Women\'s Development'
    },
    {
      name: 'Dr. Vikram Reddy',
      position: 'Secretary General',
      email: 'secretary@telanganapowerlifting.org',
      phone: '+91 98765 43212',
      department: 'General Administration'
    },
    {
      name: 'Mr. Suresh Patel',
      position: 'Technical Director',
      email: 'technical@telanganapowerlifting.org',
      phone: '+91 98765 43213',
      department: 'Technical & Coaching'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help you with all your powerlifting needs</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="events">Events & Competitions</option>
                      <option value="coaching">Coaching & Training</option>
                      <option value="partnership">Partnership/Sponsorship</option>
                      <option value="media">Media & Press</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please provide detailed information about your inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="card-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <div className="card-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="office-hours">
        <div className="container">
          <div className="section-header">
            <h2>Office Hours</h2>
            <p>When you can reach us</p>
          </div>
          
          <div className="hours-grid">
            {officeHours.map((schedule, index) => (
              <div key={index} className="hours-card">
                <span className="day">{schedule.day}</span>
                <span className="hours">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="key-contacts">
        <div className="container">
          <div className="section-header">
            <h2>Key Contacts</h2>
            <p>Direct contact information for specific departments</p>
          </div>
          
          <div className="contacts-grid">
            {keyPersons.map((person, index) => (
              <div key={index} className="contact-person-card">
                <div className="person-avatar">
                  <span>👤</span>
                </div>
                <div className="person-info">
                  <h4>{person.name}</h4>
                  <p className="position">{person.position}</p>
                  <p className="department">{person.department}</p>
                  <div className="person-contacts">
                    <a href={`mailto:${person.email}`} className="contact-link">
                      ✉️ {person.email}
                    </a>
                    <a href={`tel:${person.phone}`} className="contact-link">
                      📞 {person.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location-map">
        <div className="container">
          <div className="section-header">
            <h2>Find Us</h2>
            <p>Our location in Hyderabad</p>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <span>🗺️</span>
              <h3>Interactive Map</h3>
              <p>Telangana Powerlifting Federation</p>
              <p>Sports Complex, Banjara Hills, Hyderabad</p>
              <div className="map-actions">
                <button className="btn-primary">View on Google Maps</button>
                <button className="btn-secondary">Get Directions</button>
              </div>
            </div>
          </div>
          
          <div className="location-info">
            <div className="info-grid">
              <div className="info-item">
                <h4>🚗 By Car</h4>
                <p>Ample parking space available. Main entrance from Road No. 12, Banjara Hills.</p>
              </div>
              <div className="info-item">
                <h4>🚌 Public Transport</h4>
                <p>Bus routes: 5K, 8A, 9K. Nearest metro station: Jubilee Hills (2.5 km)</p>
              </div>
              <div className="info-item">
                <h4>✈️ Airport</h4>
                <p>Rajiv Gandhi International Airport is 45 minutes drive from our facility.</p>
              </div>
              <div className="info-item">
                <h4>🏨 Nearby Hotels</h4>
                <p>Multiple accommodation options available within 3 km radius.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I become a member?</h4>
              <p>Visit our membership page or contact us directly. We'll guide you through the registration process and requirements.</p>
            </div>
            <div className="faq-item">
              <h4>When are competitions held?</h4>
              <p>We organize regular competitions throughout the year. Check our events calendar for upcoming competitions and registration details.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide coaching services?</h4>
              <p>Yes, we have certified coaches available for individual and group training sessions. Contact our technical department for details.</p>
            </div>
            <div className="faq-item">
              <h4>What equipment do you have?</h4>
              <p>Our facility is equipped with Olympic standard powerlifting equipment including competition-grade bars, plates, and platforms.</p>
            </div>
            <div className="faq-item">
              <h4>Are there age categories?</h4>
              <p>Yes, we have various age categories from Sub-Junior to Masters, ensuring fair competition for all age groups.</p>
            </div>
            <div className="faq-item">
              <h4>How can I volunteer?</h4>
              <p>We welcome volunteers for events and programs. Contact us with your interests and availability, and we'll find a suitable role for you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;