import React, { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, Zap, FolderGit2 } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Real-Time Collaborative Editor',
    subtitle: 'Multiplayer Document & Code Collaboration Suite',
    category: 'Real-Time SaaS · CRDT Architecture',
    highlight: 'Yjs CRDTs + Monaco Code Editor + AWS S3',
    description:
      'Multiplayer collaboration platform featuring conflict-free real-time document editing, embedded Monaco code editor, direct-to-cloud AWS S3 presigned asset pipeline, and Google OAuth 2.0 authentication.',
    tech: ['React 19', 'Yjs CRDTs', 'Socket.io', 'Monaco Editor', 'AWS S3', 'Express 5', 'MongoDB'],
    github: 'https://github.com/mailktayyabali/CollabrativeEditor',
    live: null,
    sourceTag: 'Local Project · D:\\CollabrativeEditor',
    statusDot: 'bg-emerald-400',
  },
  {
    id: '02',
    title: 'DevCollab',
    subtitle: 'Developer Team Collaboration & Task Hub',
    category: 'Full-Stack Team Productivity Platform',
    highlight: 'Socket.io Chat + Task Boards + Zustand State',
    description:
      'Centralized developer workspace integrating real-time team chat channels, interactive Kanban-style task boards, dynamic team invitation workflows, and secure Express/MongoDB backend architecture.',
    tech: ['React 19', 'Zustand', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/AlishbaAsif1266/DevCollab',
    live: null,
    sourceTag: 'Local Project · D:\\DevCollab',
    statusDot: 'bg-emerald-400',
  },
  {
    id: '03',
    title: 'The Lost Link',
    subtitle: 'Community Recovery Web Platform',
    category: 'Full-Stack MERN Platform',
    highlight: 'MongoDB Document Indexing + JWT Authentication',
    description:
      'Full-stack platform enabling community members to report, categorize, and recover lost belongings through a centralized digital registry with secure claim verification and RESTful APIs.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/mailktayyabali/Lost-and-found',
    live: 'https://thelostlink.vercel.app',
    sourceTag: 'Live Production',
    statusDot: 'bg-blue-400',
  },
  {
    id: '04',
    title: 'Impact Edge Agency',
    subtitle: 'Digital Marketing Agency Business Site',
    category: 'Commercial Web Platform · Performance',
    highlight: 'Sub-Second Load Time + Responsive UI + SEO',
    description:
      'High-performance commercial agency platform designed for high client conversion, featuring mobile-first responsive layouts, structured SEO metadata, and optimized Vite build delivery.',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript', 'SEO Architecture', 'Vercel'],
    github: 'https://github.com/mailktayyabali/impact-edge-sloution-portfolio',
    live: 'https://www.impactedgemarketingagency.com/',
    sourceTag: 'Client Production',
    statusDot: 'bg-blue-400',
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
    <section id="projects" ref={ref} className="relative py-14 sm:py-18 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-6">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-4">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-1">
              02 // Featured Projects
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Selected Engineering & Client Work
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>4 Documented Case Studies</span>
          </div>
        </div>

        {/* Compact 2x2 Grid (Non-bulky, high scannability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/35 transition-all duration-200 flex flex-col justify-between shadow-lg group hover:-translate-y-0.5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
              }}
            >
              <div>
                {/* Card Topline: ID & Tag */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      {project.id}
                    </span>
                    <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.statusDot}`} />
                    <span>{project.sourceTag}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-0.5 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-400 mb-2.5 font-medium">
                  {project.subtitle}
                </div>

                {/* Highlight Pill */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono mb-2.5">
                  <Zap className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">{project.highlight}</span>
                </div>

                {/* Description (Clean, concise) */}
                <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills (Compact) */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="ml-auto text-[11px] font-mono text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Need similar? →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
