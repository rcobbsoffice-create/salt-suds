import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'standard',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon to confirm your coastal clean.')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">Ready for a <span className="highlight-blue">Fresh Start?</span></h2>
          <p className="contact-text">
            Book your eco-friendly clean today. Fill out the form, and our team in Hampton Roads will get back to you within 24 hours.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <strong>📍 Location:</strong> Virginia Beach, VA
            </div>
            <div className="detail-item">
              <strong>📞 Phone:</strong> (757) 555-SALT
            </div>
            <div className="detail-item">
              <strong>✉️ Email:</strong> hello@saltandsuds.com
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper glass-effect">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange}>
                <option value="standard">Standard Clean</option>
                <option value="deep">Deep Coastal Clean</option>
                <option value="commercial">Commercial Clean</option>
                <option value="move">Move-In/Out</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Special Requests</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your space..."></textarea>
            </div>
            <button type="submit" className="btn-primary btn-submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
