import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'


const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]


export default function Nav({ activeSection, onSectionChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const handleNavClick = (id) => {
    onSectionChange(id)
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? 'bg-[#090a11]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0 text-left"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-sm group-hover:border-blue-400 transition-colors">
              TA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight">
                Tayyab Ali
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Full-Stack MERN
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 list-none p-0 m-0">
              {navLinks.map(({ id, label }) => {
                const isActive = activeSection === id
                return (
                  <li key={id}>
                    <button
                      onClick={() => handleNavClick(id)}
                      className={`text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                      {label}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-white/[0.08]">
              <a
                href="https://github.com/mailktayyabali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-sm cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-[80vw] max-w-xs bg-[#0c0e18] border-l border-white/[0.08] flex flex-col justify-between p-6 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                TA
              </span>
              <span className="text-sm font-bold text-white">Tayyab Ali</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer border ${isActive
                      ? 'bg-blue-600/10 border-blue-500/30 text-blue-400'
                      : 'border-transparent text-slate-300 hover:bg-white/[0.04]'
                    }`}
                >
                  {label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
          <div className="text-xs text-slate-400 font-mono">
            maliktayyabali789@gmail.com
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mailktayyabali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="http://www.linkedin.com/in/tayyab-ali89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:maliktayyabali789@gmail.com"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
