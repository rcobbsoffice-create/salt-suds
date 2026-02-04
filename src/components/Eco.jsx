import React from 'react'
import './Eco.jsx' // Note: This will be corrected to import the CSS
import './Eco.css'
import ecoSupplies from '../assets/images/eco-supplies.png'

const Eco = () => {
  return (
    <section id="eco" className="eco">
      <div className="container eco-content">
        <div className="eco-image">
          <img src={ecoSupplies} alt="Eco-friendly cleaning supplies" />
        </div>
        <div className="eco-text">
          <h2 className="section-title">Kind to You, <span className="highlight-blue">Kind to the Earth</span></h2>
          <p className="eco-description">
            At Salt & Suds, we believe that a clean home shouldn't come at the cost of your health or the environment. 
            That's why we exclusively use 100% non-toxic, biodegradable, and sustainable cleaning products.
          </p>
          <ul className="eco-features">
            <li>🌿 Organic & Plant-Based Formulas</li>
            <li>💧 Low-Water Consumption Techniques</li>
            <li>♻️ Recyclable & Refillable Packaging</li>
            <li>🚫 No Harsh Chemicals or Artificial Fragrances</li>
          </ul>
          <div className="eco-mission">
            <p><strong>Our Mission:</strong> To provide a premium clean while preserving the natural beauty of Hampton Roads.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eco
