import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Nav from './components/Nav'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--background)' }}>
      <GridBackground />
      <Nav activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Perspective grid floor */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 30%, transparent 70%)',
      }} />
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, #00f5ff, transparent)' }} />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)', animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full opacity-6 blur-3xl animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', animationDelay: '3s' }} />
    </div>
  )
}
