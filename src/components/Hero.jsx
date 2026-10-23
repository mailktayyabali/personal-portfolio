import React, { useState, useEffect } from 'react'
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react'

import chatgptImage from '../assets/ChatGPT Image Jul 24, 2026, 05_01_56 PM.png'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[92dvh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <div className="w-full flex flex-col items-center text-center">
        {/* Personal Intro Badge with avatar */}
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-700 mb-6"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            color: '#e2e8f0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 shrink-0">
            <img src={chatgptImage} alt="Tayyab Ali" className="w-full h-full object-cover object-top" />
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] sm:text-xs tracking-wide text-slate-300">
            Tayyab Ali · Available for Freelance & Web Projects
          </span>
        </div>

        {/* Primary Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            letterSpacing: '-0.03em',
          }}
        >
          I build custom web apps, online stores & automations that{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
            grow your business
          </span>
          .
        </h1>

        {/* Subhead / Value Proposition */}
        <p
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 px-2 font-normal"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          I'm a Full-Stack MERN Developer who works directly with founders, businesses, and creators.
          From custom React platforms and Shopify/WordPress stores to AI workflow automations, delivered on time with zero agency overhead.
        </p>

        {/* Action CTAs: Lead Generation Focus */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
          }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <span>View Selected Work</span>
          </button>

          <a
            href="https://wa.me/923254269162"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* The Direct Freelancer Advantage over Agencies */}
        <div
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-8 border-t border-white/[0.08]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 font-semibold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>DIRECT ACCESS</span>
            </div>
            <div className="text-sm font-bold text-white">1-on-1 Communication</div>
            <div className="text-[11px] text-slate-400 mt-0.5">No agency middlemen or delays</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 font-semibold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>FAST SPRINTS</span>
            </div>
            <div className="text-sm font-bold text-white">Rapid MVP Delivery</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Working software in weeks</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 font-semibold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% YOURS</span>
            </div>
            <div className="text-sm font-bold text-white">Full Code Ownership</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Clean repo & zero lock-in</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 font-semibold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>END-TO-END</span>
            </div>
            <div className="text-sm font-bold text-white">Design to Cloud</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Deployment & ongoing handling</div>
          </div>
        </div>
      </div>
    </section>
  )
}
