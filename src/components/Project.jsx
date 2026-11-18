import projects from '../data/projects.js'

export default function Project() {
  return <section id="projects" className="section-wrap content-section">
    <div className="section-heading reveal"><p className="section-label">A FEW THINGS I'VE BUILT</p><h2>Selected <span className="gradient-text">work.</span></h2><p>Some experiments, ideas, and applications I've brought to life.</p></div>
    <div className="projects-grid">
      {projects.map((project, index) => <article className="project-card reveal" style={{ '--delay': `${index * 100}ms` }} key={project.title}>
        <div className="project-image-wrap"><img src={project.image} alt={`${project.title} preview`} loading="lazy" /><span className="project-number">0{index + 1}</span></div>
        <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
          <div className="tag-list">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-links">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live preview <span>↗</span></a>}</div>
        </div>
      </article>)}
    </div>
    <p className="section-footnote">More projects are on the way. <a href="https://github.com/chetanilva86" target="_blank" rel="noreferrer">Explore my GitHub ↗</a></p>
  </section>
}
