import React from 'react'
import './Hero.css'
import heroBg from '../assets/images/hero-bg.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Coastal Clean for Your <span className="highlight">Modern Lifestyle</span></h1>
          <p className="hero-subtitle">
            Experience the ultimate eco-friendly cleaning service in Hampton Roads. 
            Pure, non-toxic, and impeccably thorough.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Book Your Clean</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </div>
      <div className="hero-bg-wrapper">
        <img src={heroBg} alt="Modern coastal living room" className="hero-bg-img" />
      </div>
    </section>
  )
}

export default Hero
