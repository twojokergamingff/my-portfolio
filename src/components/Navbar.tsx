import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">Twojokergaming</span>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-item">Home</button>
          <button onClick={() => scrollToSection('skills')} className="nav-item">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-item">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-item">Contact</button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
