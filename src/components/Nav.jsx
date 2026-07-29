import React, { useState, useEffect } from 'react'

const links = [
  { id: 'home', number: '01' },
  { id: 'about', number: '02' },
  { id: 'projects', number: '03' },
  { id: 'skills', number: '04' },
  { id: 'contact', number: '05' },
]

export default function Nav({ activeSection, onSectionChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleClick = (linkId) => {
    onSectionChange(linkId)
    setMobileMenuOpen(false)
    const el = document.getElementById(linkId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav
          className="flex items-center justify-between px-4 sm:px-8 py-4 transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : '1px solid transparent',
          }}
        >
          <div className="text-sm font-bold tracking-widest font-mono" style={{ color: 'var(--primary)' }}>
            {'<TAYYAB.DEV />'}
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {links.map(({ id }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className="text-xs tracking-widest uppercase transition-all duration-300 bg-transparent border-none cursor-pointer font-mono"
                  style={{
                    color: activeSection === id ? 'var(--primary)' : 'var(--muted-foreground)',
                    textShadow: activeSection === id ? '0 0 12px var(--primary)' : 'none',
                  }}
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2.5 text-white bg-white/5 border border-white/10 rounded-lg cursor-pointer transition-all duration-300 hover:border-cyan-400"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Right Side Drawer (Does NOT cover whole screen) */}
      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden transition-opacity duration-300"
        />
      )}

      {/* Side Panel Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden w-[85vw] max-w-xs h-[100dvh] flex flex-col justify-between p-5 sm:p-6 shadow-2xl border-l overflow-y-auto"
        style={{
          background: 'rgba(10, 10, 16, 0.98)',
          backdropFilter: 'blur(25px)',
          borderColor: 'rgba(0, 245, 255, 0.15)',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between w-full pb-4 border-b border-white/10 shrink-0">
          <div className="text-xs font-bold tracking-widest font-mono" style={{ color: 'var(--primary)' }}>
            {'<MENU />'}
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-white bg-white/5 border border-white/15 rounded-lg cursor-pointer transition-all duration-300 hover:border-cyan-400"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="my-auto flex flex-col gap-3 py-6 shrink-0">
          {links.map(({ id, number }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className="group flex items-center justify-between text-left py-3 px-4 rounded-lg border transition-all duration-300 bg-transparent cursor-pointer font-mono min-h-[46px]"
                style={{
                  borderColor: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 245, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-cyan-400 opacity-60">
                    {number}
                  </span>
                  <span
                    className="text-sm sm:text-base font-bold tracking-wider uppercase"
                    style={{
                      color: isActive ? 'var(--primary)' : '#ffffff',
                    }}
                  >
                    {id}
                  </span>
                </div>

                <span
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: isActive ? 'var(--primary)' : 'var(--muted-foreground)' }}
                >
                  →
                </span>
              </button>
            )
          })}
        </div>

        {/* Drawer Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col gap-2 shrink-0">
          <div className="text-[10px] font-mono text-gray-400">
            TAYYAB ALI — MERN DEV
          </div>
          <a
            href="mailto:maliktayyabali789@gmail.com"
            className="text-[11px] font-mono text-cyan-400 hover:underline truncate"
          >
            maliktayyabali789@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}


