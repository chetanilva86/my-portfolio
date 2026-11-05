import StarBackground from './components/StarBackground.jsx'

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Education2 from './components/Education2.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Education />
        <Education2/>
        <Contact />
      </div>
      <footer className="relative z-10 py-5 text-center text-(--foreground-secondary) border-t border-(--border-color)">
        <p className="text-md px-6 leading-relaxed">
          © {new Date().getFullYear()} Chetan Ilve. Built with React,
          and JavaScript.
        </p>
      </footer>
    </div>
    
  )
}
export default App

