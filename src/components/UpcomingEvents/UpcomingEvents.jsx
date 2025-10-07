import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      date: {
        day: "15",
        month: "Oct",
        year: "2025"
      },
      title: "Junior Powerlifting Championship",
      location: "📍 Hyderabad Sports Complex",
      description: "Annual championship for junior athletes (Sub-Junior & Junior categories)",
      tags: ["Sub-Junior", "Junior"],
      link: "/events/junior-championship",
      actionText: "Register Now"
    },
    {
      id: 2,
      date: {
        day: "28",
        month: "Nov",
        year: "2025"
      },
      title: "Senior State Championship",
      location: "📍 Warangal Indoor Stadium",
      description: "Official state championship and national team selection event",
      tags: ["Open", "Masters"],
      link: "/events/senior-championship",
      actionText: "Learn More"
    },
    {
      id: 3,
      date: {
        day: "10",
        month: "Dec",
        year: "2025"
      },
      title: "Bench Press Speciality Meet",
      location: "📍 Nizamabad Sports Hall",
      description: "Specialized bench press competition for all categories",
      tags: ["All Categories"],
      link: "/events/bench-press",
      actionText: "View Details"
    }
  ];

  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <Link to="/events" className="view-all-link">View Event Calendar →</Link>
        </div>
        
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-date">
                <span className="day">{event.date.day}</span>
                <span className="month">{event.date.month}</span>
                <span className="year">{event.date.year}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <div className="event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
              <Link to={event.link} className="event-action">{event.actionText}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;