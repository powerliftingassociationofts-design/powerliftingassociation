import React, { useState } from 'react';
import './Gallery.css';

// Import images from src/assets/gallery
import championshipOpening from '../../assets/gallery/championship-opening.jpg';
import recordDeadlift from '../../assets/gallery/record-deadlift.jpg';
import youthTraining from '../../assets/gallery/youth-training.jpg';
import championshipVideo from '../../assets/gallery/championship-video.jpg';
import medalCeremony from '../../assets/gallery/medal-ceremony.jpg';
import benchWorkshop from '../../assets/gallery/bench-workshop.jpg';
import teamNationals from '../../assets/gallery/team-nationals.jpg';
import juniorAction from '../../assets/gallery/junior-action.jpg';
import facilityTour from '../../assets/gallery/facility-tour.jpg';
import victoryCelebration from '../../assets/gallery/victory-celebration.jpg';
import coachingStaff from '../../assets/gallery/coaching-staff.jpg';
import squatMasterclass from '../../assets/gallery/squat-masterclass.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "State Championship 2024 - Opening Ceremony",
      category: "events",
      type: "image",
      thumbnail: championshipOpening,
      description: "Grand opening ceremony of the Telangana State Powerlifting Championship 2024"
    },
    {
      id: 2,
      title: "Record Breaking Deadlift",
      category: "competitions",
      type: "image",
      thumbnail: recordDeadlift,
      description: "Athlete setting new state record in deadlift category"
    },
    {
      id: 3,
      title: "Youth Training Program",
      category: "training",
      type: "image",
      thumbnail: youthTraining,
      description: "Young athletes learning proper powerlifting techniques"
    },
    {
      id: 4,
      title: "Championship Highlights 2024",
      category: "competitions",
      type: "video",
      thumbnail: championshipVideo,
      description: "Best moments from the 2024 State Championship"
    },
    {
      id: 5,
      title: "Medal Ceremony",
      category: "events",
      type: "image",
      thumbnail: medalCeremony,
      description: "Winners receiving their medals at the championship"
    },
    {
      id: 6,
      title: "Bench Press Technique Workshop",
      category: "training",
      type: "image",
      thumbnail: benchWorkshop,
      description: "Expert coaches demonstrating proper bench press form"
    },
    {
      id: 7,
      title: "Team Telangana at Nationals",
      category: "teams",
      type: "image",
      thumbnail: teamNationals,
      description: "Our state team at the National Powerlifting Championship"
    },
    {
      id: 8,
      title: "Junior Athletes in Action",
      category: "competitions",
      type: "image",
      thumbnail: juniorAction,
      description: "Young powerlifters competing in junior category"
    },
    {
      id: 9,
      title: "Training Facility Tour",
      category: "training",
      type: "video",
      thumbnail: facilityTour,
      description: "Virtual tour of our state-of-the-art training facility"
    },
    {
      id: 10,
      title: "Victory Celebration",
      category: "events",
      type: "image",
      thumbnail: victoryCelebration,
      description: "Athletes celebrating their achievements"
    },
    {
      id: 11,
      title: "Coaching Staff Meeting",
      category: "teams",
      type: "image",
      thumbnail: coachingStaff,
      description: "Our experienced coaching team planning training programs"
    },
    {
      id: 12,
      title: "Squat Technique Masterclass",
      category: "training",
      type: "video",
      thumbnail: squatMasterclass,
      description: "Advanced squat technique demonstration by expert coaches"
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const categories = [
    { id: 'all', name: 'All', count: galleryItems.length },
    { id: 'competitions', name: 'Competitions', count: galleryItems.filter(item => item.category === 'competitions').length },
    { id: 'events', name: 'Events', count: galleryItems.filter(item => item.category === 'events').length },
    { id: 'training', name: 'Training', count: galleryItems.filter(item => item.category === 'training').length },
    { id: 'teams', name: 'Teams', count: galleryItems.filter(item => item.category === 'teams').length }
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="hero-content">
          <h1>Gallery</h1>
          <p>Capturing the spirit, strength, and success of Telangana Powerlifting</p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>

          <div className="gallery-stats">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Photos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Videos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Events Covered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Memories</span>
              </div>
            </div>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.type}`}
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-thumbnail">
                  {/* show actual thumbnail image */}
                  <img src={item.thumbnail} alt={item.title} className="thumbnail-image" />

                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <span className="view-btn">
                        {item.type === 'video' ? 'Play Video' : 'View Image'}
                      </span>
                    </div>
                  </div>

                  {item.type === 'video' && (
                    <div className="video-indicator">
                      <span>▶️</span>
                    </div>
                  )}
                </div>
                <div className="gallery-info">
                  <h4 className="gallery-title">{item.title}</h4>
                  <span className={`gallery-category ${item.category}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="featured-albums">
        <div className="container">
          <div className="section-header">
            <h2>Featured Albums</h2>
            <p>Explore our curated collections of memorable moments</p>
          </div>
          
          <div className="albums-grid">
            <div className="album-card">
              <div className="album-cover">
                <div className="cover-placeholder">🏆</div>
              </div>
              <div className="album-info">
                <h3>Championship 2024</h3>
                <p>Complete coverage of our biggest championship event</p>
                <div className="album-stats">
                  <span>📸 150 Photos</span>
                  <span>🎥 12 Videos</span>
                </div>
              </div>
            </div>
            
            <div className="album-card">
              <div className="album-cover">
                <div className="cover-placeholder">👨‍🏫</div>
              </div>
              <div className="album-info">
                <h3>Training Sessions</h3>
                <p>Behind the scenes of our intensive training programs</p>
                <div className="album-stats">
                  <span>📸 85 Photos</span>
                  <span>🎥 8 Videos</span>
                </div>
              </div>
            </div>
            
            <div className="album-card">
              <div className="album-cover">
                <div className="cover-placeholder">🥇</div>
              </div>
              <div className="album-info">
                <h3>National Team</h3>
                <p>Our athletes representing Telangana at national level</p>
                <div className="album-stats">
                  <span>📸 65 Photos</span>
                  <span>🎥 5 Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="submission-section">
        <div className="container">
          <div className="submission-content">
            <h2>Share Your Moments</h2>
            <p>Have photos or videos from our events? We'd love to feature them in our gallery!</p>
            <div className="submission-info">
              <div className="submission-guidelines">
                <h4>Submission Guidelines:</h4>
                <ul>
                  <li>High-resolution images (minimum 1920x1080)</li>
                  <li>Videos in MP4 format (maximum 100MB)</li>
                  <li>Include event name and date</li>
                  <li>Obtain consent from people in photos</li>
                  <li>Original content only</li>
                </ul>
              </div>
              <div className="submission-actions">
                <button className="btn-primary">Submit Content</button>
                <button className="btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <div className="lightbox-media">
              {selectedImage.type === 'video' ? (
                // if thumbnail file is a video (mp4) it will play, otherwise it will try to show as image
                (typeof selectedImage.thumbnail === 'string' && selectedImage.thumbnail.toLowerCase().endsWith('.mp4')) ? (
                  <video controls className="lightbox-video">
                    <source src={selectedImage.thumbnail} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="video-placeholder">
                    <img src={selectedImage.thumbnail} alt={selectedImage.title} className="lightbox-image" />
                    <div className="video-play-overlay">▶</div>
                  </div>
                )
              ) : (
                <img src={selectedImage.thumbnail} alt={selectedImage.title} className="lightbox-image" />
              )}
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className={`category-tag ${selectedImage.category}`}>
                {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
