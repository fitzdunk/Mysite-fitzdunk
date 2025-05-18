// src/Components/homepage/homepage.jsx
import React from 'react';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h2 className="section-title">Performance of The Week</h2>
        <div className="highlight-section">
          <img 
            src="/assets/performance1.jpg" 
            alt="Athlete Highlight" 
            className="highlight-image"
          />
          <img 
            src="/assets/performance2.jpg" 
            alt="Race Moment" 
            className="highlight-image"
          />
        </div>
      </header>

      <section className="upcoming-section">
        <div className="section-header">
          <h3>Upcoming Games</h3>
          <span className="see-all">Show all →</span>
        </div>
        <ul className="games-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className="list-item">
              <div className="thumbnail-placeholder"></div>
              <div className="text-content">
                <p className="item-title">List item</p>
                <p className="item-subtext">
                  Supporting line text lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Homepage;