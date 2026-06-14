'use client'

import { useState, useEffect } from 'react'

const navLinks = ['Services', 'Team', 'Gallery', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/96 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-sans transition-opacity group-hover:opacity-80">
            The
          </span>
          <span className="text-[1.4rem] font-serif font-bold tracking-[0.15em] text-white transition-opacity group-hover:opacity-80">
            SOVEREIGN
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-[#c9a84c] transition-colors duration-300 font-sans"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-7 py-2.5 border border-[#c9a84c]/60 text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase font-sans hover:bg-[#c9a84c] hover:text-black hover:border-[#c9a84c] transition-all duration-300"
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0d0d0d] border-t border-white/[0.06] px-6 py-8 flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-[0.25em] uppercase text-white/50 hover:text-[#c9a84c] transition-colors font-sans"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-[#c9a84c]/60 text-[#c9a84c] text-xs tracking-[0.25em] uppercase font-sans hover:bg-[#c9a84c] hover:text-black transition-all duration-300 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  )
}
