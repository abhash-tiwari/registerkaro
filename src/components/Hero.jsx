import React from 'react';
import './Hero.css';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2>We take care of ALL your business compliance needs</h2>
          <div className="hero-logo">
            <Shield size={40} />
            <h1>Register<span>Karo</span></h1>
          </div>
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various registrations, tax filings, and other legal
            matters.
          </p>
          <button className="cta-button">Get Started</button>
          
          <div className="metrics">
            <div className="metric-card">
              <h3>500+</h3>
              <p>Businesses Incorporated Every Month</p>
            </div>
            <div className="metric-card">
              <h3>20,000+</h3>
              <p>Clients all over India</p>
            </div>
            <div className="metric-card">
              <h3>250+</h3>
              <p>Professionals Network</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="pattern-bg"></div>
          <div className="professional-silhouette">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-ui">
                  <div className="app-header">RegisterKaro</div>
                  <div className="app-item">Form your LLC</div>
                  <div className="app-item">Use RegisterKaro</div>
                  <div className="app-item">Use RegisterKaro</div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-card">
            <p>100+ Ratings</p>
            <p className="rating-count">Trusted by 20,000+ clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;