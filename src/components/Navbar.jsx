import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar glass-effect">
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="Salt & Suds Logo" className="logo-img" />
          <span className="brand-name">Salt & Suds</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#pricing">Pricing</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><a href="#book" className="btn-nav">Book Now</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
