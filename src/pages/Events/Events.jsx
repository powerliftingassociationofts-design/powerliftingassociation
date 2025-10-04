import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: "Junior Powerlifting Championship",
      date: "2025-10-15",
      location: "Hyderabad Sports Complex",
      category: "championship",
      status: "upcoming",
      description: "Annual championship for junior athletes (Sub-Junior & Junior categories)",
      tags: ["Sub-Junior", "Junior"],
      registrationDeadline: "2025-10-01",
      entryFee: "₹1,500"
    },
    {
      id: 2,
      title: "Senior State Championship",
      date: "2025-11-28",
      location: "Warangal Indoor Stadium",
      category: "championship",
      status: "upcoming",
      description: "Official state championship and national team selection event",
      tags: ["Open", "Masters"],
      registrationDeadline: "2025-11-15",
      entryFee: "₹2,000"
    },
    {
      id: 3,
      title: "Bench Press Speciality Meet",
      date: "2025-12-10",
      location: "Nizamabad Sports Hall",
      category: "specialty",
      status: "upcoming",
      description: "Specialized bench press competition for all categories",
      tags: ["All Categories"],
      registrationDeadline: "2025-11-25",
      entryFee: "₹1,000"
    },
    {
      id: 4,
      title: "Beginner's Workshop",
      date: "2025-10-05",
      location: "Hyderabad Training Center",
      category: "workshop",
      status: "upcoming",
      description: "Introduction to powerlifting techniques and safety",
      tags: ["Beginners"],
      registrationDeadline: "2025-09-30",
      entryFee: "₹500"
    },
    {
      id: 5,
      title: "State Championship 2024",
      date: "2024-09-15",
      location: "Hyderabad Sports Complex",
      category: "championship",
      status: "completed",
      description: "Successfully concluded state championship with record participation",
      tags: ["All Categories"],
      registrationDeadline: "",
      entryFee: ""
    },
    {
      id: 6,
      title: "Coaching Certification Program",
      date: "2025-11-10",
      location: "Multiple Venues",
      category: "workshop",
      status: "upcoming",
      description: "Comprehensive coaching certification program",
      tags: ["Coaches"],
      registrationDeadline: "2025-10-25",
      entryFee: "₹5,000"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upcoming') return event.status === 'upcoming';
    if (activeFilter === 'completed') return event.status === 'completed';
    return event.category === activeFilter;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDateParts = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="hero-content">
          <h1>Events & Competitions</h1>
          <p>Join our exciting powerlifting events, championships, and training programs</p>
        </div>
      </section>

      <section className="events-content">
        <div className="container">
          <div className="events-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Events
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveFilter('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'championship' ? 'active' : ''}`}
              onClick={() => setActiveFilter('championship')}
            >
              Championships
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'workshop' ? 'active' : ''}`}
              onClick={() => setActiveFilter('workshop')}
            >
              Workshops
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'specialty' ? 'active' : ''}`}
              onClick={() => setActiveFilter('specialty')}
            >
              Specialty Meets
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveFilter('completed')}
            >
              Past Events
            </button>
          </div>

          <div className="events-grid">
            {filteredEvents.map(event => {
              const dateParts = getDateParts(event.date);
              return (
                <div key={event.id} className={`event-card ${event.status}`}>
                  <div className="event-date-badge">
                    <span className="day">{dateParts.day}</span>
                    <span className="month">{dateParts.month}</span>
                    <span className="year">{dateParts.year}</span>
                  </div>
                  
                  <div className="event-content">
                    <div className="event-header">
                      <span className={`event-category ${event.category}`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                      <span className={`event-status ${event.status}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="event-title">{event.title}</h3>
                    
                    <div className="event-details">
                      <p className="event-location">
                        <span className="icon">📍</span>
                        {event.location}
                      </p>
                      <p className="event-description">{event.description}</p>
                    </div>
                    
                    <div className="event-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    {event.status === 'upcoming' && (
                      <div className="event-info">
                        <div className="info-row">
                          <span className="label">Registration Deadline:</span>
                          <span className="value">{formatDate(event.registrationDeadline)}</span>
                        </div>
                        <div className="info-row">
                          <span className="label">Entry Fee:</span>
                          <span className="value">{event.entryFee}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="event-actions">
                      {event.status === 'upcoming' ? (
                        <>
                          <button className="btn-primary">Register Now</button>
                          <button className="btn-secondary">View Details</button>
                        </>
                      ) : (
                        <button className="btn-secondary">View Results</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="event-calendar">
        <div className="container">
          <div className="section-header">
            <h2>Event Calendar</h2>
            <p>Stay updated with our complete event schedule</p>
          </div>
          
          <div className="calendar-widget">
            <div className="calendar-header">
              <h3>Upcoming Events This Month</h3>
            </div>
            
            <div className="calendar-events">
              {events.filter(event => event.status === 'upcoming').slice(0, 4).map(event => {
                const dateParts = getDateParts(event.date);
                return (
                  <div key={event.id} className="calendar-event">
                    <div className="calendar-date">
                      <span className="day">{dateParts.day}</span>
                      <span className="month">{dateParts.month}</span>
                    </div>
                    <div className="calendar-info">
                      <h4>{event.title}</h4>
                      <p>{event.location}</p>
                    </div>
                    <div className="calendar-action">
                      <button className="btn-small">View</button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="calendar-footer">
              <button className="btn-primary">View Full Calendar</button>
            </div>
          </div>
        </div>
      </section>

      <section className="registration-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📝</div>
              <h3>How to Register</h3>
              <ul>
                <li>Create an account on our portal</li>
                <li>Complete your athlete profile</li>
                <li>Submit required documents</li>
                <li>Pay registration fee</li>
                <li>Receive confirmation email</li>
              </ul>
              <button className="btn-primary">Start Registration</button>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>Requirements</h3>
              <ul>
                <li>Valid ID proof</li>
                <li>Medical fitness certificate</li>
                <li>Recent passport-size photograph</li>
                <li>Federation membership</li>
                <li>Insurance coverage (recommended)</li>
              </ul>
              <button className="btn-secondary">Download Checklist</button>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏆</div>
              <h3>Competition Rules</h3>
              <ul>
                <li>IPF approved equipment only</li>
                <li>Drug testing may be conducted</li>
                <li>Three attempts per lift</li>
                <li>Standard powerlifting rules apply</li>
                <li>Referee decisions are final</li>
              </ul>
              <button className="btn-secondary">View Rulebook</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;