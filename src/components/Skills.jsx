import html5 from '../assets/html-5.png'
import css3 from '../assets/css-3.png'
import javascript from '../assets/javascript2.webp'
import typescript from '../assets/typescript.png'
import reactjs from '../assets/reactjs2.png'
import nodejs from '../assets/nodejs.svg'
import expressjs from '../assets/express-js.png'
import postgres from '../assets/postgres2.webp'
import mongodb from '../assets/mongodb2.png'
import tailwindcss from '../assets/tailwindcss2.png'
import github from '../assets/github.webp'
import gitimg from '../assets/gitimg.png'
import cpp from '../assets/C++.png'

const skills = [
  { name: 'HTML5', image: html5, group: 'Frontend' }, { name: 'CSS3', image: css3, group: 'Frontend' },
  { name: 'JavaScript', image: javascript, group: 'Frontend' }, { name: 'TypeScript', image: typescript, group: 'Frontend' },
  { name: 'React', image: reactjs, group: 'Frontend' }, { name: 'Tailwind CSS', image: tailwindcss, group: 'Frontend' },
  { name: 'Node.js', image: nodejs, group: 'Backend' }, { name: 'Express', image: expressjs, group: 'Backend' },
  { name: 'MongoDB', image: mongodb, group: 'Database' }, { name: 'PostgreSQL', image: postgres, group: 'Database' },
  { name: 'C++', image: cpp, group: 'Programming Language' },
  { name: 'Java', mark: 'Java', markClass: 'java-mark', group: 'Programming Language' },
  { name: 'Python', mark: 'Py', markClass: 'python-mark', group: 'Programming Language' },
  { name: 'Git', image: gitimg, group: 'Tools' }, { name: 'GitHub', image: github, group: 'Tools' },
]

export default function Skills() {
  return <section id="skills" className="section-wrap content-section">
    <div className="section-heading reveal"><p className="section-label">WHAT I WORK WITH</p><h2>My <span className="gradient-text">toolkit.</span></h2><p>Technologies and programming languages I use to bring ideas to life.</p></div>
    <div className="skills-grid">
      {skills.map((skill, index) => <article className="skill-card reveal" style={{ '--delay': `${(index % 6) * 65}ms` }} key={skill.name}>
        <div className="skill-icon">
          {skill.image ? <img src={skill.image} alt={`${skill.name} logo`} loading="lazy" /> : <span className={`skill-mark ${skill.markClass}`}>{skill.mark}</span>}
        </div>
        <h3>{skill.name}</h3><span>{skill.group}</span>
      </article>)}
    </div>
  </section>
}
