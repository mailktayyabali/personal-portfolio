import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Process from './components/Process'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'skills', 'process', 'contact']
      const scrollPos = window.scrollY + 220

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

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#090a11] text-[#f3f4f6]">
      <AmbientBackground />
      <Nav activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative w-full max-w-full overflow-x-hidden">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Subtle modern engineering dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 40%, transparent 95%)',
        }}
      />
      {/* Soft, calm ambient glows */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, #1d4ed8 40%, transparent 80%)' }}
      />
      <div
        className="absolute top-[35%] -right-40 w-[500px] h-[400px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[70%] -left-40 w-[500px] h-[400px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
    </div>
  )
}
