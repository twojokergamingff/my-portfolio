import { useState } from 'react'
import './AbilitiesStats.css'

const AbilitiesStats = () => {
  const [expandedAbility, setExpandedAbility] = useState<number | null>(null)

  const abilities = [
    {
      id: 1,
      title: 'ROBLOX BUILDER',
      level: 8,
      currentXP: 88,
      maxXP: 100,
      proficiency: 'EXPERT',
      color: 'red',
      icon: '🏗️',
      description: 'Studs, custom textures, low-poly architecture. Crafting immersive worlds inside Roblox Studio.'
    },
    {
      id: 2,
      title: '3D MODELER',
      level: 6,
      currentXP: 65,
      maxXP: 100,
      proficiency: 'INTERMEDIATE',
      color: 'orange',
      icon: '🎲',
      description: 'Blender skills for props, assets, and structural models that bring game environments to life.'
    },
    {
      id: 3,
      title: 'COMMUNITY MANAGER',
      level: 7,
      currentXP: 75,
      maxXP: 100,
      proficiency: 'ADVANCED',
      color: 'blue',
      icon: '👥',
      description: 'Building, moderating and growing Discord servers and Roblox groups from the ground up.'
    },
    {
      id: 4,
      title: 'GAME TESTER',
      level: 5,
      currentXP: 50,
      maxXP: 100,
      proficiency: 'INTERMEDIATE',
      color: 'green',
      icon: '🎯',
      description: 'Testing gameplay mechanics, finding bugs, and ensuring optimal game performance.'
    }
  ]

  const totalLevel = 28

  return (
    <section className="abilities-stats">
      <div className="abilities-container">
        <div className="section-header">
          <span className="section-dot">●</span>
          <h2 className="section-title">ABILITIES & <span className="highlight">STATS</span></h2>
        </div>

        <div className="total-level-card">
          <label>TOTAL LVL</label>
          <span className="total-level">{totalLevel}</span>
        </div>

        <div className="abilities-grid">
          {abilities.map((ability, index) => (
            <div
              key={ability.id}
              className={`ability-card ${ability.color} ${expandedAbility === index ? 'expanded' : ''}`}
              onClick={() => setExpandedAbility(expandedAbility === index ? null : index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="ability-header">
                <div className="ability-icon">{ability.icon}</div>
                <div className="ability-title-section">
                  <h3 className="ability-title">{ability.title}</h3>
                  <span className={`proficiency-badge ${ability.color}`}>{ability.proficiency}</span>
                </div>
              </div>

              {expandedAbility === index && (
                <div className="ability-expanded">
                  <p className="ability-description">{ability.description}</p>
                </div>
              )}

              <div className="ability-progress">
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${ability.color}`}
                    style={{ width: `${(ability.currentXP / ability.maxXP) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-info">
                  <span className="level-info">LVL {ability.level}</span>
                  <span className="xp-info">{ability.currentXP} / {ability.maxXP} XP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AbilitiesStats
