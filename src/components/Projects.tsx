import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: '3D Pillar Modeling',
      description: 'Advanced Blender 3D modeling project featuring textured cone structures with realistic material properties including metallic and roughness values.',
      tags: ['Blender', '3D Modeling', 'Texturing'],
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032443_hzorus'
    },
    {
      title: 'Voxel World Environment',
      description: 'Immersive Roblox voxel-based environment with colorful terrain, vegetation, and custom architecture showcasing building and design expertise.',
      tags: ['Roblox', 'Building', 'Environment Design'],
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032442_eisarq'
    },
    {
      title: 'Fantasy Voxel Landscape',
      description: 'Surreal, whimsical voxel world featuring creative floating islands, custom pipes, and magical aesthetics demonstrating advanced building techniques.',
      tags: ['Roblox', 'Creative Building', 'Game Design'],
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032441_mfylkq'
    },
    {
      title: 'Creative Voxel Build',
      description: 'Another impressive voxel creation showcasing diverse building styles and creative environmental design within Roblox.',
      tags: ['Roblox', 'Building', 'Creative Design'],
      image: 'https://res.cloudinary.com/dqn6uilgw/image/upload/f_auto,q_auto/1000032440_txicxy'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcase of my recent work and creations</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
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

export default Projects
