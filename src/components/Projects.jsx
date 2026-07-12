import React, { useRef, useState, useEffect } from 'react'
import { SectionLabel } from './About'

const projects = [
  {
    id: '01',
    title: 'THE LOST LINK',
    category: 'MERN Stack Developer',
    description: 'A full-stack Lost & Found community platform using MongoDB, Express.js, React.js, and Node.js with JWT authentication.',
    tags: ['MERN Stack', 'JWT Auth', 'REST APIs', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
    color: 'var(--primary)',
    featured: true,
    link: 'https://thelostlink.vercel.app',
    github: 'https://github.com/mailktayyabali/Lost-and-found',
  },
  {
    id: '02',
    title: 'IMPACT EDGE AGENCY',
    category: 'React / Frontend Developer',
    description: 'Modern and responsive business website for a digital marketing agency featuring glassmorphism and performance optimization.',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'SEO Optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
    color: 'var(--accent)',
    featured: false,
    link: 'https://www.impactedgemarketingagency.com/',
    github: 'https://github.com/mailktayyabali/impact-edge-sloution-portfolio',
  },
  {
    id: '03',
    title: 'GPA CALCULATOR',
    category: 'React / Frontend Developer',
    description: 'A GPA calculator web application enabling students to compute academic performance using grade-based and marks-based calculation methods.',
    tags: ['React.js', 'Tailwind CSS', 'Glassmorphism', 'Vite'],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop&auto=format',
    color: 'var(--secondary)',
    featured: false,
    link: 'https://gpa-calculator-riu.vercel.app',
    github: 'https://github.com/mailktayyabali/GpaCalculator',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 02 — SELECTED WORK'}</SectionLabel>

        <div className="flex items-end justify-between mt-4 mb-16">
          <h2 className="text-5xl font-bold" style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
            Projects
          </h2>
          <span className="text-xs tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
            {projects.length} CASE STUDIES
          </span>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isActive={active === i}
              visible={visible}
              onHover={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({
  project, index, isActive, visible, onHover
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * 8, y: -x * 8 })
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        onMouseEnter={onHover}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="group relative flex items-center gap-8 py-6 cursor-pointer border-t"
        style={{
          borderColor: 'var(--border)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: `all 0.7s ease ${index * 0.1}s`,
        }}
      >
        {/* Project number */}
        <div className="shrink-0 text-xs font-bold w-8" style={{
          color: isActive ? project.color : 'var(--muted-foreground)',
          transition: 'color 0.3s',
        }}>
          {project.id}
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-xl font-bold transition-all duration-300"
            style={{
              color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
              letterSpacing: '-0.01em',
            }}
          >
            {project.title}
          </h3>
          <div className="text-xs tracking-widest mt-1" style={{ color: 'var(--muted-foreground)', opacity: isActive ? 1 : 0.5 }}>
            {project.category}
          </div>
        </div>

        {/* Tags */}
        <div className="hidden md:flex gap-2 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs tracking-wider border" style={{
              borderColor: isActive ? project.color : 'var(--border)',
              color: isActive ? project.color : 'var(--muted-foreground)',
              borderRadius: '1px',
              transition: 'all 0.3s',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Hover image preview with 3D tilt */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden"
          style={{
            width: 240,
            height: 150,
            opacity: isActive ? 1 : 0,
            transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isActive ? 'scale(1)' : 'scale(0.9)'}`,
            transition: 'opacity 0.3s, transform 0.15s ease-out',
            zIndex: 10,
            borderRadius: '2px',
            border: `1px solid ${project.color}33`,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.7) contrast(1.1)' }}
          />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, ${project.color}22, transparent)`,
          }} />
          <div className="absolute bottom-2 left-3 right-3">
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {project.description.slice(0, 80)}...
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div
          className="shrink-0 text-lg transition-all duration-300"
          style={{
            color: project.color,
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
          }}
        >
          →
        </div>
      </div>
    </a>
  )
}
