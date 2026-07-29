import React, { useRef, useState, useEffect } from 'react'
import chatgptImage from '../assets/ChatGPT Image Jul 24, 2026, 05_01_56 PM.png'

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-32 px-4 sm:px-8 overflow-hidden w-full max-w-full" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 01 — ABOUT'}</SectionLabel>

        <div className="grid gap-12 md:gap-16 mt-8 sm:mt-12 grid-cols-1 md:grid-cols-2">
          {/* Left: Portrait with 3D frame */}
          <div
            className="relative max-w-sm mx-auto md:max-w-none w-full"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.1s',
            }}
          >
            <TiltCard>
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', borderRadius: '2px' }}>
                <img
                  src={chatgptImage}
                  alt="Tayyab Ali — MERN Stack & Mobile Developer"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(10%) contrast(1.05)' }}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.8) 100%)',
                }} />
                {/* Corner brackets */}
                <CornerBrackets color="var(--primary)" />
              </div>
            </TiltCard>

            {/* Stat badge */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-0 md:-right-4 p-3 sm:p-5 border"
              style={{
                background: 'var(--card)',
                borderColor: 'rgba(0,245,255,0.15)',
                borderRadius: '2px',
                backdropFilter: 'blur(10px)',
              }}>
              <div className="text-xl sm:text-3xl font-bold" style={{ color: 'var(--primary)' }}>3.27</div>
              <div className="text-[10px] sm:text-xs tracking-widest mt-0.5 sm:mt-1" style={{ color: 'var(--muted-foreground)' }}>CGPA</div>
            </div>
          </div>

          {/* Right: Bio */}
          <div
            className="flex flex-col justify-center gap-4 sm:gap-6 mt-4 md:mt-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.3s',
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight" style={{ letterSpacing: '-0.02em' }}>
              <span style={{ color: 'var(--foreground)' }}>Building the </span>
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                impossible
              </span>
              <br />
              <span style={{ color: 'var(--foreground)' }}>in the browser.</span>
            </h2>

            <p className="text-xs sm:text-sm leading-loose" style={{ color: 'rgba(232, 232, 240, 0.85)' }}>
              I am a detail-oriented MERN Stack Developer focused on building high-performance, scalable web
              applications. With hands-on experience across the entire software development lifecycle, I specialize
              in creating robust backend services using Node.js & Express.js, designing efficient database schemas
              in MongoDB & MySQL, and crafting clean, responsive user interfaces with React.js & Tailwind CSS.
            </p>

            <p className="text-xs sm:text-sm leading-loose" style={{ color: 'rgba(232, 232, 240, 0.85)' }}>
              Beyond the MERN stack, I have a solid foundation in computer science principles, with practical experience
              in OOP using C++, API testing with Postman, version control via Git, and seamless deployments on Vercel & Render.
              I thrive on solving complex logic puzzles and translating requirements into production-ready software.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mt-2">
              {[
                { label: 'LOCATION', value: 'Lahore, PK' },
                { label: 'FOCUS', value: 'MERN Stack' },
                { label: 'EDUCATION', value: 'BS Comp Sci' },
                { label: 'STATUS', value: 'Available' },
              ].map(item => (
                <div key={item.label} className="p-2.5 sm:p-3 border" style={{
                  borderColor: 'var(--border)',
                  borderRadius: '2px',
                  background: 'var(--muted)',
                }}>
                  <div className="text-[9px] sm:text-xs tracking-widest mb-0.5 sm:mb-1" style={{ color: 'var(--muted-foreground)' }}>{item.label}</div>
                  <div className="text-xs sm:text-sm font-bold truncate" style={{ color: 'var(--foreground)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TiltCard({ children }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 12, y: -x * 12 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

function CornerBrackets({ color }) {
  const style = { position: 'absolute', width: 20, height: 20, borderColor: color }
  return (
    <>
      <div style={{ ...style, top: 12, left: 12, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
      <div style={{ ...style, top: 12, right: 12, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
      <div style={{ ...style, bottom: 12, left: 12, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
      <div style={{ ...style, bottom: 12, right: 12, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    </>
  )
}

export function SectionLabel({ children }) {
  return (
    <div className="text-xs tracking-widest font-bold" style={{ color: 'var(--primary)' }}>
      {children}
    </div>
  )
}
