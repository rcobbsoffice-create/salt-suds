import React from 'react'
import './Services.css'

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Bespoke cleaning for your sanctuary. We use eco-friendly products to ensure a healthy home for you and your family.',
    icon: '🏠'
  },
  {
    title: 'Commercial Cleaning',
    description: 'Elevate your workspace with a professional, sustainable clean. Perfect for offices, studios, and boutiques.',
    icon: '🏢'
  },
  {
    title: 'Move-In/Out',
    description: 'A deep, comprehensive clean for new beginnings. We leave every corner sparkling and fresh.',
    icon: '✨'
  },
  {
    title: 'Subscription Cleans',
    description: 'Regular maintenance to keep your space perpetually pristine. Weekly, bi-weekly, or monthly options.',
    icon: '🔄'
  }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Coastal Services</h2>
          <p className="section-subtitle">Tailored cleaning solutions for every space.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
