import { useState } from "react";
import logo from "../assets/logo2.png";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Educaion" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 border-b glass-effect lass-effect p-4 md:p-3 backdrop-blur-md [var(--border-color)]">
      <a href="#hero" onClick={() => setIsOpen(false)}>
        <div>
          <img src={logo} alt="logo" className="w-16 h-12 md:w-20 md:h-15" />
        </div>
      </a>

      {/* Desktop nav links — unchanged from original design at lg and above */}
      <ul className="hidden lg:flex gap-15 pr-20 font-bold text-lg">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-500 transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile / tablet hamburger toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile / tablet dropdown menu */}
      <ul
        className={`glass-effect lg:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-6 overflow-hidden border-t border-(--border-color) font-bold text-lg transition-all duration-300 ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-500 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
