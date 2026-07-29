import React, { useRef, useState, useEffect } from 'react'
import { SectionLabel } from './About'

const skillGroups = [
  {
    category: 'MERN STACK',
    icon: '◈',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js / Express.js', level: 85 },
      { name: 'MongoDB / MySQL', level: 82 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    category: 'WEB & MOBILE BASICS',
    icon: '◇',
    items: [
      { name: 'Flutter / Dart', level: 75 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'C++', level: 80 },
    ],
  },
  {
    category: 'TOOLS & PLATFORMS',
    icon: '◉',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 82 },
      { name: 'Vercel / Render', level: 80 },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref} className="relative py-16 md:py-32 px-4 sm:px-8 overflow-hidden w-full max-w-full" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 03 — CAPABILITIES'}</SectionLabel>

        <div className="flex items-end justify-between mt-4 mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
            Skills
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="p-5 sm:p-6 border"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: '2px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s ease ${gi * 0.15}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg" style={{ color: 'var(--primary)' }}>{group.icon}</span>
                <span className="text-xs tracking-widest font-bold" style={{ color: 'var(--primary)' }}>
                  {group.category}
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    visible={visible}
                    delay={gi * 0.15 + si * 0.07}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech orbit display */}
        <div className="mt-12 sm:mt-20 flex flex-wrap gap-2 sm:gap-3 justify-center">
          {[
            'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Dart',
            'C++', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL',
            'Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'REST APIs',
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono font-semibold tracking-wider border rounded transition-all duration-300 cursor-default"
              style={{
                borderColor: 'rgba(0, 245, 255, 0.3)',
                background: 'rgba(0, 245, 255, 0.08)',
                color: '#ffffff',
                boxShadow: '0 0 12px rgba(0, 245, 255, 0.12)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--primary)'
                el.style.background = 'rgba(0, 245, 255, 0.2)'
                el.style.color = 'var(--primary)'
                el.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.5)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(0, 245, 255, 0.3)'
                el.style.background = 'rgba(0, 245, 255, 0.08)'
                el.style.color = '#ffffff'
                el.style.boxShadow = '0 0 12px rgba(0, 245, 255, 0.12)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, visible, delay }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs" style={{ color: 'var(--foreground)' }}>{name}</span>
        <span className="text-xs font-bold" style={{ color: 'var(--primary)' }}>{level}%</span>
      </div>
      <div className="h-px w-full relative" style={{ background: 'var(--border)' }}>
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, var(--primary), var(--accent))`,
            transition: `width 1.2s ease ${delay + 0.3}s`,
            boxShadow: '0 0 6px var(--primary)',
          }}
        />
      </div>
    </div>
  )
}
