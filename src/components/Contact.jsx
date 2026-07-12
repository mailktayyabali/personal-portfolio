import React, { useRef, useState, useEffect } from 'react'
import { SectionLabel } from './About'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://formspree.io/f/xqerzgnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError(err.message || 'Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 px-8 pb-40" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{'// 04 — CONTACT'}</SectionLabel>

        <div className="grid gap-16 mt-12 grid-cols-1 md:grid-cols-2">
          {/* Left: Info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.9s ease 0.1s',
            }}
          >
            <h2 className="text-5xl font-bold leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
              <span style={{ color: 'var(--foreground)' }}>Let's build</span>
              <br />
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                something real.
              </span>
            </h2>

            <p className="text-sm leading-loose mb-10" style={{ color: 'var(--muted-foreground)' }}>
              Available for freelance engagements, creative collaborations, and full-time roles.
              I specialize in projects that push the boundary of what's possible in the browser.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: 'EMAIL', value: 'maliktayyabali789@gmail.com', href: 'mailto:maliktayyabali789@gmail.com' },
                { label: 'LINKEDIN', value: 'tayyab-ali89', href: 'http://www.linkedin.com/in/tayyab-ali89' },
                { label: 'GITHUB', value: 'mailktayyabali', href: 'https://github.com/mailktayyabali' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-xs tracking-widest w-20" style={{ color: 'var(--muted-foreground)' }}>
                    {link.label}
                  </span>
                  <span
                    className="text-sm font-bold transition-all duration-300"
                    style={{ color: 'var(--foreground)' }}
                    onMouseEnter={e => { e.target.style.color = 'var(--primary)' }}
                    onMouseLeave={e => { e.target.style.color = 'var(--foreground)' }}
                  >
                    {link.value} →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.9s ease 0.3s',
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 p-12 border"
                style={{ borderColor: 'rgba(0,245,255,0.2)', background: 'var(--card)', borderRadius: '2px' }}>
                <div className="text-3xl" style={{ color: 'var(--primary)' }}>✓</div>
                <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Message received.</div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>I'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FormField
                  label="NAME"
                  value={form.name}
                  onChange={v => setForm(f => ({ ...f, name: v }))}
                  placeholder="Your full name"
                />
                <FormField
                  label="EMAIL"
                  value={form.email}
                  onChange={v => setForm(f => ({ ...f, email: v }))}
                  placeholder="your@email.com"
                  type="email"
                />
                <div>
                  <label className="text-xs tracking-widest mb-2 block" style={{ color: 'var(--muted-foreground)' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 text-sm resize-none border outline-none transition-all duration-300"
                    style={{
                      background: 'var(--muted)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      fontFamily: 'inherit',
                      borderRadius: '2px',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,245,255,0.4)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)' }}
                  />
                </div>
                 <button
                  type="submit"
                  disabled={loading}
                  className="py-4 text-xs tracking-widest font-bold transition-all duration-300 border"
                  style={{
                    background: loading ? 'var(--muted)' : 'var(--primary)',
                    color: loading ? 'var(--muted-foreground)' : 'var(--primary-foreground)',
                    borderColor: loading ? 'var(--border)' : 'var(--primary)',
                    borderRadius: '2px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (!loading) {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.4)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
                {error && (
                  <div className="text-xs text-center mt-2 font-bold" style={{ color: '#ff4d4f' }}>
                    {error}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs tracking-widest font-bold" style={{ color: 'var(--primary)' }}>
            {'<TAYYAB.DEV />'}
          </div>
          <div className="text-xs" style={{ color: 'rgba(232, 232, 240, 0.6)' }}>
            © 2026 Tayyab Ali. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-xs tracking-widest mb-2 block" style={{ color: 'var(--muted-foreground)' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 text-sm border outline-none transition-all duration-300"
        style={{
          background: 'var(--muted)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
          fontFamily: 'inherit',
          borderRadius: '2px',
        }}
        onFocus={e => { e.target.style.borderColor = 'rgba(0,245,255,0.4)' }}
        onBlur={e => { e.target.style.borderColor = 'var(--border)' }}
      />
    </div>
  )
}
