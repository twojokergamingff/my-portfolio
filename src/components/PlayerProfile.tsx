import { useState } from 'react'
import './PlayerProfile.css'

const PlayerProfile = () => {
  const [isOnline, setIsOnline] = useState(true)

  const stats = {
    level: 42,
    totalXP: 15420,
    maxXP: 20000,
    hp: 100,
    builderXP: 88,
    maxBuilderXP: 100
  }

  const roles = ['ROBLOX BUILDER', '3D MODELER', 'GAME TESTER', 'COMMUNITY MANAGER', 'PROJECT MANAGER']

  return (
    <section className="player-profile">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image-wrapper">
            <div className="profile-image">
              <div className="image-placeholder">🎮</div>
            </div>
            <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
              <span className="status-dot"></span>
              {isOnline ? 'ONLINE' : 'OFFLINE'}
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-header-top">
              <div className="player-badges">
                <span className="badge player-badge">⚡ PLAYER ONE</span>
                <span className="badge online-badge">🟢 ONLINE</span>
              </div>
            </div>

            <h1 className="player-name">TWOJOKER<span className="highlight">GAMING</span></h1>

            <div className="roles-container">
              {roles.map((role, index) => (
                <div key={index} className="role-badge">{role}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <label>HP</label>
            <div className="stat-bar">
              <div className="stat-fill hp-fill" style={{ width: `${(stats.hp / 100) * 100}%` }}></div>
            </div>
            <span className="stat-value">{stats.hp} / 100</span>
          </div>

          <div className="stat-item">
            <label>BUILDER XP</label>
            <div className="stat-bar">
              <div className="stat-fill xp-fill" style={{ width: `${(stats.builderXP / stats.maxBuilderXP) * 100}%` }}></div>
            </div>
            <span className="stat-value">{stats.builderXP} / {stats.maxBuilderXP} XP</span>
          </div>

          <div className="level-display">
            <span className="level-label">LVL</span>
            <span className="level-number">{stats.level}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayerProfile
