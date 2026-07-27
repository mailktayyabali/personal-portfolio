import React, { useRef, useState, useEffect } from 'react'
import { SectionLabel } from './About'

const projects = [
  {
    id: '01',
    title: 'THE LOST LINK',
    category: 'MERN Stack Developer',
    description: 'A full-stack Lost & Found community platform using MongoDB, Express.js, React.js, and Node.js with JWT authentication.',
    tags: ['MERN Stack', 'JWT Auth', 'REST APIs', 'Tailwind CSS'],
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
    color: 'var(--secondary)',
    featured: false,
    link: 'https://gpa-calculator-riu.vercel.app',
    github: 'https://github.com/mailktayyabali/GpaCalculator',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-16 md:py-32 px-4 sm:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 02 — SELECTED WORK'}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 mb-10 sm:mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
              Projects
            </h2>
            <p className="text-xs sm:text-sm mt-2" style={{ color: 'var(--muted-foreground)' }}>
              Showcase of recent full-stack & frontend web engineering applications.
            </p>
          </div>
          <span className="text-[10px] sm:text-xs tracking-widest font-mono" style={{ color: 'var(--muted-foreground)' }}>
            {projects.length} CASE STUDIES
          </span>
        </div>

        {/* Card Style Showcase Grid (No photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, visible }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl p-5 sm:p-6 transition-all duration-500"
      style={{
        background: 'var(--card)',
        border: `1px solid ${isHovered ? project.color : 'var(--border)'}`,
        boxShadow: isHovered ? `0 12px 30px -10px ${project.color}33` : 'none',
        transform: visible
          ? isHovered ? 'translateY(-8px)' : 'translateY(0)'
          : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div>
        {/* Top bar with ID, Category & Featured indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-bold tracking-widest font-mono border border-white/10 text-white bg-white/5">
              {project.id}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase font-mono" style={{ color: project.color }}>
              {project.category}
            </span>
          </div>

          {project.featured && (
            <span
              className="px-2.5 py-1 rounded text-[10px] font-extrabold tracking-widest font-mono uppercase"
              style={{
                background: project.color,
                color: 'var(--primary-foreground)',
              }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 tracking-tight transition-colors duration-300" style={{ color: 'var(--foreground)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(232, 232, 240, 0.75)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs tracking-wide font-mono rounded border transition-colors duration-300"
              style={{
                borderColor: isHovered ? `${project.color}aa` : 'rgba(255, 255, 255, 0.18)',
                background: isHovered ? `${project.color}15` : 'rgba(255, 255, 255, 0.06)',
                color: isHovered ? project.color : '#e8e8f0',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded text-xs font-bold font-mono tracking-wider transition-all duration-300 border"
            style={{
              background: isHovered ? project.color : 'transparent',
              color: isHovered ? 'var(--primary-foreground)' : 'var(--foreground)',
              borderColor: isHovered ? project.color : 'rgba(255,255,255,0.15)',
            }}
          >
            <span>LIVE DEMO</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded text-xs font-mono transition-all duration-300 border hover:border-white/40"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'var(--border)',
              color: 'var(--muted-foreground)',
            }}
            title="View Source Code"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}


