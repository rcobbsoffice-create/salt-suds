import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Rooted in Hampton Roads</h2>
            <p className="about-description">
              Salt & Suds Cleaning Co. was founded with a simple goal: to bring the freshness of the coast into every home in Virginia Beach, Norfolk, and Chesapeake. 
              We are a locally owned business that cares about our community and our shoreline.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Eco-Friendly</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Hampton Roads</span>
                <span className="stat-label">Local Area</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <h3>Our Promise</h3>
              <p>We treat your home like our own, with the respect and attention to detail it deserves.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
