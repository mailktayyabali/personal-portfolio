import React from 'react'

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t mt-20" style={{ zIndex: 1, borderColor: 'rgba(0,245,255,0.15)', background: 'linear-gradient(180deg, rgba(5,5,8,0.5) 0%, rgba(12,12,20,0.95) 100%)' }}>
      {/* Top glowing line gradient effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]" 
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,245,255,0.6) 50%, transparent 100%)'
        }} 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b" style={{ borderColor: 'var(--border)' }}>
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-bold tracking-wider font-mono" style={{ color: 'var(--primary)' }}>
                  {'<TAYYAB.DEV />'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full" style={{ background: 'rgba(0,245,255,0.1)', color: 'var(--primary)', border: '1px solid rgba(0,245,255,0.2)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'var(--muted-foreground)' }}>
                Full-Stack MERN Developer specializing in crafting high-performance web applications, responsive user interfaces, and scalable API backend systems.
              </p>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JavaScript'].map((tech) => (
                <span 
                  key={tech} 
                  className="text-[11px] font-mono px-2.5 py-1 rounded transition-colors duration-200"
                  style={{ background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              // Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm list-none p-0 m-0">
              {[
                { name: '01. Home', id: 'home' },
                { name: '02. About Me', id: 'about' },
                { name: '03. Featured Projects', id: 'projects' },
                { name: '04. Technical Skills', id: 'skills' },
                { name: '05. Get In Touch', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="font-mono text-left transition-all duration-200 hover:translate-x-1 cursor-pointer bg-transparent border-0 p-0"
                    style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials (Cols 9-12) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                // Connect
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="mailto:maliktayyabali789@gmail.com"
                  className="flex items-center gap-2.5 group text-decoration-none transition-colors duration-200"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  <svg className="w-4 h-4 text-[#00f5ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono truncate">maliktayyabali789@gmail.com</span>
                </a>

                <a
                  href="http://www.linkedin.com/in/tayyab-ali89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group text-decoration-none transition-colors duration-200"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  <svg className="w-4 h-4 text-[#00f5ff] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-mono">linkedin.com/in/tayyab-ali89</span>
                </a>

                <a
                  href="https://github.com/mailktayyabali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group text-decoration-none transition-colors duration-200"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  <svg className="w-4 h-4 text-[#00f5ff] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-mono">github.com/mailktayyabali</span>
                </a>

                <div className="flex items-center gap-2.5 pt-1" style={{ color: 'var(--muted-foreground)' }}>
                  <svg className="w-4 h-4 text-[#a855f7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-mono text-xs">Lahore, Pakistan 🇵🇰</span>
                </div>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold rounded transition-all duration-300 group cursor-pointer border"
                style={{
                  background: 'var(--muted)',
                  borderColor: 'rgba(0,245,255,0.2)',
                  color: 'var(--foreground)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,245,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,255,0.2)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span>BACK TO TOP</span>
                <svg className="w-3.5 h-3.5 text-[#00f5ff] transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and credit row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>
          <div>
            © {new Date().getFullYear()} <span style={{ color: 'var(--foreground)' }}>Tayyab Ali</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Built with</span>
            <span style={{ color: '#00f5ff' }}>⚡</span>
            <span>in React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
