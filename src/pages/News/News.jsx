import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const newsArticles = [
    {
      id: 1,
      title: "State Championship Results Announced",
      category: "Championship",
      date: "2025-09-25",
      author: "Sports Desk",
      excerpt: "Record-breaking performances at the recently concluded Telangana State Powerlifting Championship with new state records in multiple categories.",
      content: "The Telangana State Powerlifting Championship concluded with outstanding performances...",
      featured: true,
      readTime: "5 min read",
      tags: ["Championship", "Records", "Results"]
    },
    {
      id: 2,
      title: "National Team Selection for Asian Championships",
      category: "Team",
      date: "2025-09-20",
      author: "Technical Committee",
      excerpt: "Congratulations to our athletes selected for the National Powerlifting Team representation at upcoming Asian Championships.",
      content: "Following rigorous selection trials, five athletes from Telangana have been selected...",
      featured: false,
      readTime: "3 min read",
      tags: ["National Team", "Selection", "Asian Championships"]
    },
    {
      id: 3,
      title: "Advanced Coaching Workshop Success",
      category: "Training",
      date: "2025-09-15",
      author: "Coaching Department",
      excerpt: "Advanced coaching techniques workshop concluded with great participation from coaches statewide.",
      content: "The three-day advanced coaching workshop focused on modern training methodologies...",
      featured: false,
      readTime: "4 min read",
      tags: ["Coaching", "Workshop", "Training"]
    },
    {
      id: 4,
      title: "New Training Facility Inaugurated",
      category: "Infrastructure",
      date: "2025-09-10",
      author: "Infrastructure Team",
      excerpt: "State-of-the-art training facility opens in Warangal with modern equipment and safety features.",
      content: "The new training facility in Warangal spans 5000 sq ft with Olympic-standard equipment...",
      featured: true,
      readTime: "3 min read",
      tags: ["Infrastructure", "Facility", "Warangal"]
    },
    {
      id: 5,
      title: "Youth Development Program Launch",
      category: "Development",
      date: "2025-09-05",
      author: "Youth Committee",
      excerpt: "New initiative to identify and nurture young powerlifting talent across the state.",
      content: "The Youth Development Program aims to create a systematic approach to talent identification...",
      featured: false,
      readTime: "4 min read",
      tags: ["Youth", "Development", "Talent"]
    },
    {
      id: 6,
      title: "International Referee Certification Program",
      category: "Training",
      date: "2025-08-30",
      author: "Technical Committee",
      excerpt: "Local officials complete international referee certification to improve competition standards.",
      content: "Fifteen officials from Telangana have successfully completed the international referee certification...",
      featured: false,
      readTime: "3 min read",
      tags: ["Referee", "Certification", "Officials"]
    },
    {
      id: 7,
      title: "Sponsorship Partnership with Local Businesses",
      category: "Partnership",
      date: "2025-08-25",
      author: "Marketing Team",
      excerpt: "New sponsorship deals secured to support athlete development and facility improvements.",
      content: "Strategic partnerships with local businesses will provide crucial funding for our programs...",
      featured: false,
      readTime: "2 min read",
      tags: ["Sponsorship", "Partnership", "Funding"]
    },
    {
      id: 8,
      title: "Record Participation in Women's Category",
      category: "Achievement",
      date: "2025-08-20",
      author: "Women's Committee",
      excerpt: "Highest ever participation by women athletes in state-level competitions marks significant milestone.",
      content: "This year has seen unprecedented growth in women's participation in powerlifting...",
      featured: false,
      readTime: "4 min read",
      tags: ["Women", "Participation", "Growth"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', count: newsArticles.length },
    { id: 'Championship', name: 'Championships', count: newsArticles.filter(article => article.category === 'Championship').length },
    { id: 'Team', name: 'Team News', count: newsArticles.filter(article => article.category === 'Team').length },
    { id: 'Training', name: 'Training', count: newsArticles.filter(article => article.category === 'Training').length },
    { id: 'Development', name: 'Development', count: newsArticles.filter(article => article.category === 'Development').length },
    { id: 'Achievement', name: 'Achievements', count: newsArticles.filter(article => article.category === 'Achievement').length }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const recentArticles = newsArticles.filter(article => !article.featured).slice(0, 6);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="hero-content">
          <h1>Latest News</h1>
          <p>Stay updated with the latest happenings in Telangana Powerlifting</p>
        </div>
      </section>

      <section className="featured-news">
        <div className="container">
          <div className="section-header">
            <h2>Featured Story</h2>
          </div>
          
          {featuredArticle && (
            <article className="featured-article">
              <div className="featured-content">
                <div className="featured-image">
                  <div className="image-placeholder">📰</div>
                </div>
                <div className="featured-text">
                  <div className="article-meta">
                    <span className={`category-tag ${featuredArticle.category.toLowerCase()}`}>
                      {featuredArticle.category}
                    </span>
                    <span className="article-date">{formatDate(featuredArticle.date)}</span>
                    <span className="read-time">{featuredArticle.readTime}</span>
                  </div>
                  <h2>{featuredArticle.title}</h2>
                  <p className="excerpt">{featuredArticle.excerpt}</p>
                  <div className="article-tags">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="article-footer">
                    <span className="author">By {featuredArticle.author}</span>
                    <Link to={`/news/${featuredArticle.id}`} className="read-more-btn">
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="content-layout">
            <aside className="news-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Recent Updates</h3>
                <div className="recent-updates">
                  {recentArticles.slice(0, 3).map(article => (
                    <div key={article.id} className="update-item">
                      <h4>{article.title}</h4>
                      <p className="update-date">{formatDate(article.date)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Newsletter</h3>
                <div className="newsletter-signup">
                  <p>Get the latest news delivered to your inbox</p>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit" className="subscribe-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </aside>

            <main className="news-main">
              <div className="news-grid">
                {filteredArticles.filter(article => !article.featured).map(article => (
                  <article key={article.id} className="news-card">
                    <div className="news-image">
                      <div className="image-placeholder">📰</div>
                    </div>
                    <div className="news-content-area">
                      <div className="article-meta">
                        <span className={`category-tag ${article.category.toLowerCase()}`}>
                          {article.category}
                        </span>
                        <span className="article-date">{formatDate(article.date)}</span>
                      </div>
                      <h3>{article.title}</h3>
                      <p className="excerpt">{article.excerpt}</p>
                      <div className="article-tags">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                      <div className="article-footer">
                        <div className="article-info">
                          <span className="author">By {article.author}</span>
                          <span className="read-time">{article.readTime}</span>
                        </div>
                        <Link to={`/news/${article.id}`} className="read-more">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredArticles.filter(article => !article.featured).length === 0 && (
                <div className="no-articles">
                  <p>No articles found in this category.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      <section className="news-archive">
        <div className="container">
          <div className="archive-content">
            <h2>News Archive</h2>
            <p>Looking for older news? Browse our complete archive of articles and updates.</p>
            <div className="archive-actions">
              <button className="btn-primary">View Archive</button>
              <button className="btn-secondary">Search Articles</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;