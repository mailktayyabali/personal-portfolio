import React from 'react'
import { MessageSquare, ArrowUpRight } from 'lucide-react'

export default function FloatingLeadBar() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#0d0f1b]/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:border-blue-500/40"
    >
      {/* Availability indicator */}
      <div className="hidden sm:flex items-center gap-2 pl-3 pr-1 text-[11px] text-slate-300 font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Available for Projects</span>
      </div>

      {/* Main Quote / Consultation CTA */}
      <button
        onClick={scrollToContact}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
      >
        <span>Get Free Quote</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/923254269162"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 rounded-full text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors flex items-center justify-center"
        title="Chat with Tayyab on WhatsApp (+92 325 4269162)"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </aside>
  )
}
