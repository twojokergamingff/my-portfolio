import './Contact.css'

const Contact = () => {
  const contacts = [
    {
      platform: 'Roblox',
      username: 'Twojokergaming',
      url: 'https://www.roblox.com/users/3588705859/profile',
      icon: '🎮'
    },
    {
      platform: 'YouTube',
      username: '@AlightJoker',
      url: 'https://www.youtube.com/@AlightJoker',
      icon: '📺'
    },
    {
      platform: 'Discord',
      username: 'somejoypeople',
      url: '#',
      icon: '💬'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Connect With Me</h2>
        <p className="section-subtitle">Find me on your favorite platforms</p>
        
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-platform">{contact.platform}</h3>
              <p className="contact-username">{contact.username}</p>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
