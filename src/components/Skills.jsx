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
    <section id="skills" ref={ref} className="relative py-32 px-8" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 03 — CAPABILITIES'}</SectionLabel>

        <div className="flex items-end justify-between mt-4 mb-16">
          <h2 className="text-5xl font-bold" style={{ letterSpacing: '-0.03em', color: 'var(--foreground)' }}>
            Skills
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="p-6 border"
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
        <div className="mt-20 flex flex-wrap gap-3 justify-center">
          {[
            'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Dart',
            'C++', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL',
            'Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'REST APIs',
          ].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs tracking-widest border transition-all duration-300 cursor-default hover:border-current"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--muted-foreground)',
                borderRadius: '1px',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.03}s, border-color 0.3s, color 0.3s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--primary)'
                el.style.color = 'var(--primary)'
                el.style.textShadow = '0 0 10px var(--primary)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--muted-foreground)'
                el.style.textShadow = 'none'
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
