import React, { useRef, useState, useEffect } from 'react'
import { MessageSquare, Layers, Cpu, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Discovery & Requirement Scoping',
    icon: MessageSquare,
    description:
      'We discuss your product vision, target audience, core feature requirements, and timeline. I help define a clear, realistic project scope to ensure fast, focused delivery.',
    points: ['Requirement alignment & feature breakdown', 'Tech stack recommendation', 'Clear timeline & milestone estimates'],
  },
  {
    step: '02',
    title: 'Architecture & UI Planning',
    icon: Layers,
    description:
      'Before writing code, I design the database schemas, API contracts, and user flow wireframes so that engineering progresses smoothly without costly surprises.',
    points: ['MongoDB/MySQL schema modeling', 'REST API endpoint specifications', 'Component structure & design layout'],
  },
  {
    step: '03',
    title: 'Iterative Development & Demos',
    icon: Cpu,
    description:
      'I build your application in transparent sprint cycles. You receive regular live staging links and progress updates to ensure the build matches your expectations.',
    points: ['Clean, modular, documented code', 'Regular staging demos & feedback', 'Proactive communication at every milestone'],
  },
  {
    step: '04',
    title: 'Testing, Deployment & Handover',
    icon: CheckCircle2,
    description:
      'Rigorous end-to-end testing across devices, production deployment on cloud infrastructure (Vercel, Render, AWS), and 100% full handover with documentation.',
    points: ['Cross-browser & mobile testing', 'Production cloud setup & domain mapping', 'Full codebase ownership & handover'],
  },
]

export default function Process() {
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
    <section id="process" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
            04 // Client Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Work Together
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            A transparent, milestone-driven development process designed to deliver reliable web software on schedule.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      STEP {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <ul className="pt-3 border-t border-white/[0.05] space-y-1.5 text-[11px] text-slate-300 list-none p-0 m-0">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
