import React, { useRef, useState, useEffect } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react'

const projectServices = [
  'Custom Website / Web App',
  'AI Automation & Workflows',
  'Website Handling & Maintenance',
  'WordPress & Shopify Store',
  'Business Portfolio Site',
  'Complete Store / Web Solution',
]

const timelines = [
  'Urgent (< 2 weeks)',
  '2 - 4 weeks',
  '1 - 2 months',
  'Flexible / Ongoing',
]

export default function Contact({ prefilledScope }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Custom Website / Web App',
    timeline: '2 - 4 weeks',
    message: '',
  })

  // Sync with estimator selection if user configured scope
  useEffect(() => {
    if (prefilledScope) {
      setForm((prev) => ({
        ...prev,
        service: prefilledScope.type || prev.service,
        timeline: prefilledScope.scope || prev.timeline,
        message: prev.message || `Hi Tayyab, I'd like to discuss a project for a ${prefilledScope.type || 'web application'}.`,
      }))
    }
  }, [prefilledScope])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

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
        setForm({
          name: '',
          email: '',
          service: 'Custom Website / Web App',
          timeline: '2 - 4 weeks',
          message: '',
        })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Unable to submit inquiry. Please reach out via WhatsApp or email directly.')
      }
    } catch (err) {
      setError(err.message || 'Network error. Please reach out via WhatsApp or email directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-2">
            07 // Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Discuss Your Project
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Have a website to build, a store to launch, an automation to set up, or need reliable maintenance? Fill out the brief below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Direct Contact Channels & WhatsApp */}
          <div
            className="lg:col-span-5 flex flex-col justify-between gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="space-y-3.5">
              {/* WhatsApp Highlight Box */}
              <a
                href="https://wa.me/923254269162"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-500/50 hover:bg-emerald-500/15 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform duration-200">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    Instant Messaging
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp (+92 325 4269162)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Fastest way to get an instant reply on project scope
                  </div>
                </div>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:maliktayyabali789@gmail.com"
                className="p-4.5 rounded-xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 break-all">
                    maliktayyabali789@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/tayyab-ali89"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4.5 rounded-xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    linkedin.com/in/tayyab-ali89
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mailktayyabali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4.5 rounded-xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GitHub Repositories</div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    github.com/mailktayyabali
                  </div>
                </div>
              </a>
            </div>

            {/* Reassurance notes */}
            <div className="p-4 rounded-xl bg-[#0d0f1a] border border-white/[0.06] space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Quick Response:</strong> Replies within 2-4 hours on business days.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Free Consultation:</strong> Architectural advice & milestone breakdown.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Location:</strong> Lahore, Pakistan · Collaborating globally.</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Generation Form */}
          <div
            className="lg:col-span-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            {sent ? (
              <div className="h-full min-h-[420px] p-8 rounded-2xl bg-[#0f111d] border border-emerald-500/30 flex flex-col items-center justify-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Project Inquiry Received!</h3>
                <p className="text-sm text-slate-400 max-w-md">
                  Thank you for reaching out. I'll review your project requirements and message you back with recommendations and timeline estimates.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#0f111d] border border-white/[0.08] flex flex-col gap-5">
                {/* Service Needed */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-2">
                    Service Needed <span className="text-blue-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectServices.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setForm((f) => ({ ...f, service: srv }))}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer"
                        style={{
                          background: form.service === srv ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          borderColor: form.service === srv ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)',
                          color: form.service === srv ? '#93c5fd' : '#cbd5e1',
                        }}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-2">
                    Estimated Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setForm((f) => ({ ...f, timeline: time }))}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer"
                        style={{
                          background: form.timeline === time ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          borderColor: form.timeline === time ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)',
                          color: form.timeline === time ? '#93c5fd' : '#cbd5e1',
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Your Name / Company <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Project Details & Goals <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about what you are looking to build, any existing links, or specific features..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
