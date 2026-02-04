import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-container">
            <img src="/logo.png" alt="Salt & Suds Logo" className="logo-img" />
            <span className="brand-name">Salt & Suds</span>
          </div>
          <p className="footer-tagline">Providing premium, eco-friendly cleaning services to the Hampton Roads community.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-local">
          <h4>Service Areas</h4>
          <ul>
            <li>Virginia Beach</li>
            <li>Norfolk</li>
            <li>Chesapeake</li>
            <li>Portsmouth</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Salt & Suds Cleaning Co. All rights reserved.</p>
          <p>Designed for the Coastal Lifestyle.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
