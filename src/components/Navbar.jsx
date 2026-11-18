import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="navbar-wrap">
      <nav className="navbar container-wide" aria-label="Main navigation">
        <a className="brand" href="#hero" onClick={() => setIsOpen(false)} aria-label="Chetan home">
          <span className="brand-mark">C<span>.</span></span>
          <span className="brand-name">chetan<span>ilva</span></span>
        </a>
        <button className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => <li key={link.href}><a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a></li>)}
          <li><a className="nav-cta" href="/cv.pdf" download>Download CV <span>↗</span></a></li>
        </ul>
      </nav>
    </header>
  )
}
