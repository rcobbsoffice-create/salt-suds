import React from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Standard Clean',
    price: '$120+',
    features: ['Dusting & Vacuuming', 'Kitchen & Bathroom', 'Floors & Surfaces', '100% Eco-Friendly'],
    cta: 'Select Standard',
    popular: false
  },
  {
    name: 'Deep Coastal Clean',
    price: '$200+',
    features: ['Includes Standard features', 'Inside Cabinets', 'Baseboards & Blinds', 'Detailed Sanitization'],
    cta: 'Select Deep Clean',
    popular: true
  },
  {
    name: 'Commercial Clean',
    price: 'Custom',
    features: ['Office Spaces', 'Retail Boutiques', 'Eco-Safe workspace', 'Flexible Scheduling'],
    cta: 'Get a Quote',
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Transparent Coastal Pricing</h2>
          <p className="section-subtitle">Premium quality at competitive rates. No hidden fees.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn-plan ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
