import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      number: '01',
      title: 'JUST US GAMES',
      role: 'Builder & Modeler',
      status: 'ACTIVE',
      statusType: 'active',
      description: 'Working on an upcoming Roblox game. Responsible for core environments and custom 3D assets that define the game\'s visual identity.',
      tags: ['ROBLOX STUDIO', 'BLENDER', 'WORLD BUILDING', 'GAME DEV']
    },
    {
      id: 2,
      number: '02',
      title: 'KIBRIX TREND',
      role: 'Moderator',
      status: 'VERIFIED',
      statusType: 'verified',
      description: 'Moderating a Verified Roblox Group. Maintaining a safe and engaging environment for thousands of members.',
      tags: ['COMMUNITY MANAGEMENT', 'MODERATION', 'VERIFIED GROUP']
    },
    {
      id: 3,
      number: '03',
      title: 'DEVFLARE',
      role: 'Developer',
      status: 'IN PROGRESS',
      statusType: 'progress',
      description: 'Building custom development tools and utilities. Contributing to an innovative platform for creators.',
      tags: ['DEVELOPMENT', 'TOOLS', 'TECHNICAL']
    }
  ]

  return (
    <section className="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-dot">●</span>
          <h2 className="section-title">EXPERIENCE</h2>
        </div>

        <div className="experiences-list">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience-number">{exp.number}</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className={`status-badge ${exp.statusType}`}>{exp.status}</span>
                </div>
                <p className="experience-role">{exp.role}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tags">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="experience-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
