import React, { useRef, useState, useEffect } from 'react'

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
    <section id="about" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 01 — ABOUT'}</SectionLabel>

        <div className="grid gap-16 mt-12 grid-cols-1 md:grid-cols-2">
          {/* Left: Portrait with 3D frame */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.9s ease 0.1s',
            }}
          >
            <TiltCard>
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', borderRadius: '2px' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&auto=format"
                  alt="Tayyab Ali — MERN Stack & Mobile Developer"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.1)' }}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.8) 100%)',
                }} />
                {/* Corner brackets */}
                <CornerBrackets color="var(--primary)" />
              </div>
            </TiltCard>

            {/* Stat badge */}
            <div className="absolute -bottom-6 -right-6 p-5 border"
              style={{
                background: 'var(--card)',
                borderColor: 'rgba(0,245,255,0.15)',
                borderRadius: '2px',
                backdropFilter: 'blur(10px)',
              }}>
              <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>3.27</div>
              <div className="text-xs tracking-widest mt-1" style={{ color: 'var(--muted-foreground)' }}>CGPA</div>
            </div>
          </div>

          {/* Right: Bio */}
          <div
            className="flex flex-col justify-center gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.9s ease 0.3s',
            }}
          >
            <h2 className="text-4xl font-bold leading-tight" style={{ letterSpacing: '-0.02em' }}>
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

            <p className="text-sm leading-loose" style={{ color: 'rgba(232, 232, 240, 0.85)' }}>
              I am a detail-oriented MERN Stack Developer focused on building high-performance, scalable web
              applications. With hands-on experience across the entire software development lifecycle, I specialize
              in creating robust backend services using Node.js & Express.js, designing efficient database schemas
              in MongoDB & MySQL, and crafting clean, responsive user interfaces with React.js & Tailwind CSS.
            </p>

            <p className="text-sm leading-loose" style={{ color: 'rgba(232, 232, 240, 0.85)' }}>
              Beyond the MERN stack, I have a solid foundation in computer science principles, with practical experience
              in OOP using C++, API testing with Postman, version control via Git, and seamless deployments on Vercel & Render.
              I thrive on solving complex logic puzzles and translating requirements into production-ready software.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: 'LOCATION', value: 'Lahore, Pakistan' },
                { label: 'FOCUS', value: 'MERN Stack' },
                { label: 'EDUCATION', value: 'BS Computer Science' },
                { label: 'STATUS', value: 'Open for Roles' },
              ].map(item => (
                <div key={item.label} className="p-3 border" style={{
                  borderColor: 'var(--border)',
                  borderRadius: '2px',
                  background: 'var(--muted)',
                }}>
                  <div className="text-xs tracking-widest mb-1" style={{ color: 'var(--muted-foreground)' }}>{item.label}</div>
                  <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>{item.value}</div>
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
