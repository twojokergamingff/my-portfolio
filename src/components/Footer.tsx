import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">Twojokergaming</h3>
          <p className="footer-description">
            Roblox developer passionate about creating immersive experiences, 3D modeling, and community building.
          </p>
        </div>
        <p className="footer-copyright">
          © {currentYear} Twojokergaming. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
