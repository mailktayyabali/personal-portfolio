import React, { useState, useEffect } from 'react'

const links = ['home', 'about', 'projects', 'skills', 'contact']

export default function Nav({ activeSection, onSectionChange }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleClick = (link) => {
    onSectionChange(link)
    const el = document.getElementById(link)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,255,0.08)' : '1px solid transparent',
      }}>
      <div className="text-sm font-bold tracking-widest" style={{ color: 'var(--primary)' }}>
        {'<TAYYAB.DEV />'}
      </div>
      <ul className="flex gap-8 list-none m-0 p-0">
        {links.map(link => (
          <li key={link}>
            <button
              onClick={() => handleClick(link)}
              className="text-xs tracking-widest uppercase transition-all duration-300 bg-transparent border-none cursor-pointer"
              style={{
                color: activeSection === link ? 'var(--primary)' : 'var(--muted-foreground)',
                textShadow: activeSection === link ? '0 0 12px var(--primary)' : 'none',
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
