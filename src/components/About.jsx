import React, { useRef, useState, useEffect } from 'react'
import chatgptImage from '../assets/ChatGPT Image Jul 24, 2026, 05_01_56 PM.png'
import { GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react'


export default function About() {
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
    <section id="about" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
            05 // About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Background & Engineering Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Photo & Key Facts */}
          <div
            className="lg:col-span-5 flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f111d] shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img
                  src={chatgptImage}
                  alt="Tayyab Ali — Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a11] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-5 flex flex-col gap-2 bg-[#0d0f1a] border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    Lahore, Pakistan
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Open to Relocation / Remote
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono pt-1">
                  maliktayyabali789@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Education */}
          <div
            className="lg:col-span-7 flex flex-col gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            <div className="text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I am a detail-oriented <strong className="text-white font-semibold">MERN Stack Developer</strong> with hands-on experience designing and developing scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p>
                My background is anchored in solid computer science foundations from Riphah International University. I focus on writing clean, modular JavaScript and C++, structuring RESTful API architectures, designing normalized database schemas, and securing user workflows with JWT authentication.
              </p>
              <p>
                I enjoy taking projects through the complete software lifecycle—from initial data modeling and API testing with Postman to crafting responsive frontend interfaces with React and deploying production builds on Vercel and Render.
              </p>
            </div>

            {/* Education & Academic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>DEGREE</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white">Bachelor of Computer Science</h3>
                  <div className="text-xs text-slate-400 mt-1">Riphah International University</div>
                </div>
                <div className="mt-3 text-xs font-mono font-bold text-blue-300">
                  CGPA: 3.27 / 4.0
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
                    <Award className="w-4 h-4" />
                    <span>CERTIFICATIONS</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white">Cisco Networking Academy</h3>
                  <div className="text-xs text-slate-400 mt-1">JavaScript Essentials 1 & 2 · C++ Essentials 2</div>
                </div>
                <div className="mt-3 text-xs font-mono text-emerald-400">
                  Verified Cisco Badges
                </div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="p-4 rounded-xl bg-[#0e101a] border border-white/[0.08]">
              <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-3">
                Key Development Strengths
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Full-Stack MERN Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>REST API Design & Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>JWT Auth & Role Authorization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>MongoDB & MySQL Database Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Responsive UI with Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Cloud Deployment (Vercel & Render)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
