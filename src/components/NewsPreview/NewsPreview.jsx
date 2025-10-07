import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPreview.css';

import featuredImage from "../../assets/featured-powerlifting-comp.jpg";
import teamImage from "../../assets/team-selection-photo.jpg";
import trainingImage from "../../assets/coaching-workshop-photo.jpg";

const NewsPreview = () => {
  const newsItems = [
    {
      id: 1,
      category: "Championship",
      title: "State Championship Results Announced",
      date: "September 25, 2025",
      excerpt: "Record-breaking performances at the recently concluded Telangana State Powerlifting Championship with new state records in multiple categories.",
      link: "/news/state-championship",
      featured: true,
      imageUrl: featuredImage 
    },
    {
      id: 2,
      category: "Team",
      title: "National Team Selection",
      date: "September 20, 2025",
      excerpt: "Congratulations to our athletes selected for the National Powerlifting Team representation.",
      link: "/news/team-selection",
      featured: false,
      imageUrl: teamImage 
    },
    {
      id: 3,
      category: "Training",
      title: "Coaching Workshop Success",
      date: "September 15, 2025",
      excerpt: "Advanced coaching techniques workshop concluded with great participation from coaches statewide.",
      link: "/news/coaching-workshop",
      featured: false,
      imageUrl: trainingImage 
    },
    {
      id: 4,
      category: "Team-Training",
      title: "Team-Training Workshop Success",
      date: "September 20, 2025",
      excerpt: "Advanced Team-Training techniques workshop concluded with great participation from Team-Training statewide.",
      link: "/news/coaching-workshop",
      featured: false,
      imageUrl: trainingImage 
    }
  ];

  return (
    <section className="news-preview">
      <div className="container">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <Link to="/news" className="view-all-link">View All News →</Link>
        </div>
        
        <div className="news-grid">
          {newsItems.map((news) => (
            <article key={news.id} className={`news-card ${news.featured ? 'featured' : ''}`}>
              <div className="news-image">
                {news.imageUrl && (
                  <img src={news.imageUrl} alt={news.title} />
                )}
              </div>

              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3>{news.title}</h3>
                <p className="news-date">{news.date}</p>
                <p>{news.excerpt}</p>
                <Link to={news.link} className="read-more">
                  {news.featured ? 'Read Full Story' : 'Read More'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
