import React from 'react';
import '../index.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <span className="badge">⚡ 10,000+ Events Booked</span>
        <h1>BOOK THE FUTURE NOW</h1>
        <p>
          Quick search • Real reviews • Trusted providers.
          <br />
          Find the perfect act or venue in seconds.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button className="btn">🎤 Find Entertainment</button>
          <button
            className="btn"
            style={{
              marginLeft: '1rem',
              background: 'linear-gradient(90deg,#00ffa1,#00e5ff)',
            }}
          >
            ✨ Become a Provider
          </button>
        </div>
      </section>

      <section className="stats">
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

      <section className="features">
        <div className="feature">
          <h3>🎶 Bands & DJs</h3>
          <p>From indie to Ibiza — plug into any vibe.</p>
        </div>
        <div className="feature">
          <h3>🎤 Hosts & MCs</h3>
          <p>Keep crowds buzzing with pro showrunners.</p>
        </div>
        <div className="feature">
          <h3>💒 Weddings & Parties</h3>
          <p>Make it magical with stress-free bookings.</p>
        </div>
        <div className="feature">
          <h3>🏙️ Venues</h3>
          <p>From rooftops to halls — discover your perfect match.</p>
        </div>
      </section>
    </div>
  );
}
