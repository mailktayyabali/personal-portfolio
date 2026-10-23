import React, { useRef, useState, useEffect } from 'react'
import { Code2, Server, Database, Sparkles, GraduationCap, Award, CheckCircle2 } from 'lucide-react'

const skillPillars = [
  {
    title: 'Frontend Engineering',
    icon: Code2,
    badge: 'UI & State',
    skills: [
      'React 19',
      'JavaScript (ES6+)',
      'Tailwind CSS v4',
      'Vite Tooling',
      'HTML5 & Modern CSS3',
      'Zustand & Hooks',
      'Mobile-First Responsive',
    ],
  },
  {
    title: 'Backend & Real-Time',
    icon: Server,
    badge: 'APIs & WebSockets',
    skills: [
      'Node.js',
      'Express.js 5',
      'Socket.io',
      'RESTful Architecture',
      'JWT Authentication',
      'Middleware Design',
      'Postman API Testing',
    ],
  },
  {
    title: 'Databases & Cloud',
    icon: Database,
    badge: 'Storage & Deploy',
    skills: [
      'MongoDB Atlas',
      'Mongoose ODM',
      'MySQL',
      'AWS S3 Storage',
      'Vercel Deployment',
      'Render Cloud',
      'Schema Indexing',
    ],
  },
  {
    title: 'CMS, AI & Workflow',
    icon: Sparkles,
    badge: 'Solutions & Tools',
    skills: [
      'WordPress Solutions',
      'Shopify Setup',
      'OpenAI API Integration',
      'Git & GitHub',
      'C++ (OOP & Algorithms)',
      'Web Automation',
      'Client Maintenance',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-14 sm:py-18 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-6">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-1">
              06 // Technical Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Skills & Engineering Toolkit
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>MERN Stack · Real-Time · Web Solutions</span>
          </div>
        </div>

        {/* Compact 4-Pillar Grid (High Density, Sleek) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/35 transition-all duration-200 flex flex-col justify-between group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`,
                }}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Compact Skills List */}
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Verified Academic & Certification Bar */}
        <div
          className="p-3.5 sm:p-4 rounded-xl bg-[#0b0d16] border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          <div className="flex items-center gap-2.5 text-slate-300">
            <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              <strong className="text-white">BS Computer Science</strong> (CGPA 3.27 / 4.0) — Riphah International University
            </span>
          </div>

          <div className="hidden md:block w-px h-4 bg-white/10" />

          <div className="flex items-center gap-2.5 text-slate-300">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white">Cisco Certified</strong> (JS Essentials 1 & 2 · C++ Essentials 2)
            </span>
          </div>

          <div className="hidden md:block w-px h-4 bg-white/10" />

          <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Ready for Client Projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
