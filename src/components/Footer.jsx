import React from 'react'
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080e] text-slate-400 py-14 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                TA
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                Tayyab Ali
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack MERN Developer specializing in building scalable web applications, RESTful APIs, and clean user interfaces.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs list-none p-0 m-0">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Me', id: 'about' },
                { name: 'Featured Projects', id: 'projects' },
                { name: 'Technical Skills', id: 'skills' },
                { name: 'Get In Touch', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-3">
                Connect
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <a
                  href="mailto:maliktayyabali789@gmail.com"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">maliktayyabali789@gmail.com</span>
                </a>
                <a
                  href="http://www.linkedin.com/in/tayyab-ali89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>linkedin.com/in/tayyab-ali89</span>
                </a>
                <a
                  href="https://github.com/mailktayyabali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>github.com/mailktayyabali</span>
                </a>
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Tayyab Ali. All rights reserved.
          </div>
          <div>
            Crafted with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
