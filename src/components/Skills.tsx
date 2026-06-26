import './Skills.css'

const Skills = () => {
  const skills = [
    {
      category: 'Roblox Building',
      description: 'Expert in creating immersive Roblox experiences',
      icon: '🏗️',
      level: 'Advanced'
    },
    {
      category: 'Blender Modeling',
      description: 'Intermediate 3D modeling and texture painting',
      icon: '🎨',
      level: 'Intermediate'
    },
    {
      category: 'Project Management',
      description: 'Coordinating teams and managing development timelines',
      icon: '📋',
      level: 'Advanced'
    },
    {
      category: 'Community Management',
      description: 'Building and nurturing engaged Discord communities',
      icon: '👥',
      level: 'Advanced'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Comprehensive skill set across multiple disciplines</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.category}</h3>
              <p className="skill-description">{skill.description}</p>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
