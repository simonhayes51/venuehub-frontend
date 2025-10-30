import React from 'react';
import '../index.css';

export default function Home() {
  return (
    <div className="home">
      <header className="vh-header">
        <div className="vh-logo">VENUE<span>HUB</span></div>
        <nav>
          <a href="#">Acts</a>
          <a href="#">Venues</a>
          <a href="#">Pricing</a>
          <a href="#">Search</a>
          <a href="#">Admin</a>
        </nav>
      </header>

      <section className="vh-hero">
        <p className="badge">⚡ 10,000+ Events Booked</p>
        <h1>BOOK THE FUTURE NOW</h1>
        <p className="subtitle">
          Find, book, and shine — trusted acts, glowing venues, and real reviews.
        </p>
        <div className="cta-buttons">
          <button className="btn primary">🎤 Find Entertainment</button>
          <button className="btn secondary">✨ Become a Provider</button>
        </div>
      </section>

      <section className="vh-stats">
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Events</p>
        </div>
        <div className="stat-card">
          <h2>2,500+</h2>
          <p>Professionals</p>
        </div>
        <div className="stat-card">
          <h2>180</h2>
          <p>Cities</p>
        </div>
      </section>

      <section className="vh-features">
        <h2>What You Can Book</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span>🎶</span>
            <h3>Bands & DJs</h3>
            <p>From indie to Ibiza — plug into any vibe.</p>
          </div>
          <div className="feature-card">
            <span>🎤</span>
            <h3>Hosts & MCs</h3>
            <p>Keep crowds buzzing with pro showrunners.</p>
          </div>
          <div className="feature-card">
            <span>💒</span>
            <h3>Weddings & Parties</h3>
            <p>Make it magical with stress-free bookings.</p>
          </div>
          <div className="feature-card">
            <span>🏙️</span>
            <h3>Venues</h3>
            <p>From rooftops to halls — discover your perfect match.</p>
          </div>
        </div>
      </section>

      <footer className="vh-footer">
        <p>© 2025 VenueHub — built for entertainers & venues.</p>
      </footer>
    </div>
  );
}
