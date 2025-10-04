import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "🏆",
      title: "Championships",
      description: "Participate in state and national level powerlifting championships with professional organization and fair judging."
    },
    {
      icon: "🏋️",
      title: "Expert Training",
      description: "Access quality coaching and scientifically-backed training programs from certified powerlifting coaches."
    },
    {
      icon: "👥",
      title: "Strong Community",
      description: "Join a supportive community of strength enthusiasts, from beginners to elite competitive lifters."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your progress with official records, rankings, and performance analytics tools."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Telangana Powerlifting Federation?</h2>
          <p>We provide comprehensive support for powerlifters at every level</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;