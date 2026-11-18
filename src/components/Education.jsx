const education = [
  {
    degree: 'Master of Science in Information Technology',
    short: 'MSc IT',
    institution: 'B.G.P.S. College, University of Mumbai',
    duration: '2026 — Present',
    location: 'Mumbai, India',
    detail: 'Currently pursuing postgraduate studies, with a focus on software development, full-stack technologies, and practical projects.',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    short: 'BSc Computer Science',
    institution: 'B.G.P.S. College, University of Mumbai',
    duration: '2023 — 2026',
    location: 'Mumbai, India',
    detail: 'Built a foundation in programming, data structures, database management, computer networks, and core computer science concepts.',
  },
]

export default function Education() {
  return <section id="education" className="section-wrap content-section">
    <div className="section-heading reveal"><p className="section-label">THE LEARNING JOURNEY</p><h2>Education & <span className="gradient-text">growth.</span></h2><p>Learning, building, and getting better with every step.</p></div>
    <div className="education-list">
      {education.map((item, index) => <article className="education-card reveal" key={item.short}>
        <div className="education-marker">0{index + 1}</div><div className="education-main"><div className="education-top"><div><p className="project-category">{item.short}</p><h3>{item.degree}</h3><p className="education-school">{item.institution}</p></div><span className="education-date">{item.duration}</span></div><p className="education-detail">{item.detail}</p><span className="education-location">⌖ &nbsp;{item.location}</span></div>
      </article>)}
    </div>
  </section>
}
