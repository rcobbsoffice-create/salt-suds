import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Eco from '../components/Eco'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Contact from '../components/Contact'
import BookingWizard from '../components/BookingWizard'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <section id="book" className="book-now-section">
        <div className="container">
          <BookingWizard />
        </div>
      </section>
      <Services />
      <Eco />
      <Pricing />
      <About />
      <Contact />
    </>
  )
}

export default LandingPage
