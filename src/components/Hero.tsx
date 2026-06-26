import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Twojokergaming</h1>
          <p className="hero-subtitle">Roblox Developer & 3D Modeler</p>
          <p className="hero-description">
            Passionate Roblox developer with experience in building, 3D modeling, project management, and community management. Focused on creating engaging, high-quality experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cube cube-1"></div>
          <div className="cube cube-2"></div>
          <div className="cube cube-3"></div>
          <div className="cube cube-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
