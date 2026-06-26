import { useState } from 'react'
import './BuildGallery.css'

const BuildGallery = () => {
  const [selectedBuild, setSelectedBuild] = useState<number | null>(null)

  const builds = [
    {
      id: 1,
      title: 'Voxel World Environment',
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032442_eisarq',
      description: 'Immersive Roblox voxel-based environment with colorful terrain, vegetation, and custom architecture showcasing building and design expertise.',
      tags: ['Roblox', 'Building', 'Environment Design']
    },
    {
      id: 2,
      title: 'Fantasy Voxel Landscape',
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032441_mfylkq',
      description: 'Surreal, whimsical voxel world featuring creative floating islands, custom pipes, and magical aesthetics demonstrating advanced building techniques.',
      tags: ['Roblox', 'Creative Building', 'Game Design']
    },
    {
      id: 3,
      title: 'Creative Voxel Build',
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032440_txicxy',
      description: 'Another impressive voxel creation showcasing diverse building styles and creative environmental design within Roblox.',
      tags: ['Roblox', 'Building', 'Creative Design']
    }
  ]

  return (
    <section className="build-gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-dot">●</span>
          <h2 className="section-title">BUILD GALLERY</h2>
        </div>
        <p className="gallery-subtitle">BUILT BY HAND, STUD BY STUD</p>
        <p className="gallery-description">Every asset, map, and model crafted directly in Roblox Studio and Blender.</p>

        <div className="builds-grid">
          {builds.map((build, index) => (
            <div
              key={build.id}
              className="build-card"
              onClick={() => setSelectedBuild(selectedBuild === index ? null : index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="build-image">
                <img src={build.image} alt={build.title} />
                <div className="build-overlay">
                  <span className="build-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div className="build-content">
                <h3 className="build-title">{build.title}</h3>
                {selectedBuild === index && (
                  <div className="build-details">
                    <p className="build-description">{build.description}</p>
                    <div className="build-tags">
                      {build.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="build-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildGallery
