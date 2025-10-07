import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import resultsImage from '../../assets/results.png';

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
      tags: ["Championship", "Records", "Results"],
      image: resultsImage
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
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', count: newsArticles.length },
    { id: 'Championship', name: 'Championships', count: newsArticles.filter(article => article.category === 'Championship').length },
    { id: 'Team', name: 'Team News', count: newsArticles.filter(article => article.category === 'Team').length },
    { id: 'Training', name: 'Training', count: newsArticles.filter(article => article.category === 'Training').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: newsArticles.filter(article => article.category === 'Infrastructure').length }
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? newsArticles
      : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const recentArticles = newsArticles.filter(article => !article.featured).slice(0, 6);

  const formatDate = dateString => {
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

      {/* Featured News */}
      <section className="featured-news">
        <div className="container">
          <div className="section-header">
            <h2>Featured Story</h2>
          </div>

          {featuredArticle && (
            <article className="featured-article">
              <div className="featured-content">
                <div className="featured-image">
                  <img
                    src={featuredArticle.image || resultsImage}
                    alt={featuredArticle.title}
                    className="news-article-img"
                  />
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
                      <span key={index} className="tag">
                        {tag}
                      </span>
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

      {/* Main News Grid */}
      <section className="news-content">
        <div className="container">
          <div className="content-layout">
            {/* Sidebar */}
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
            </aside>

            {/* Articles */}
            <main className="news-main">
              <div className="news-grid">
                {filteredArticles
                  .filter(article => !article.featured)
                  .map(article => (
                    <article key={article.id} className="news-card">
                      <div className="news-image">
                        <img
                          src={article.image || resultsImage}
                          alt={article.title}
                          className="news-article-img"
                        />
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
                        <div className="article-footer">
                          <span className="author">By {article.author}</span>
                          <Link to={`/news/${article.id}`} className="read-more">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
