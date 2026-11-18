import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import StarBackground from './components/StarBackground.jsx'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <StarBackground />
      <Navbar />
      <main className="site-content">
        <Hero />
        <Skills />
        <Project />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Chetan Ilva</span>
        <span>Designed & built with React</span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
