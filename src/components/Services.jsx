import React, { useRef, useState, useEffect } from 'react'
import {
  Code2,
  Bot,
  Wrench,
  ShoppingBag,
  Briefcase,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Websites & Web Applications',
    badge: 'Tailored Builds',
    description:
      'Purpose-built websites and web platforms engineered from scratch using modern frameworks (React, Node.js, Tailwind CSS) for businesses that have outgrown standard templates.',
    deliverables: [
      'Custom frontend interfaces with zero cookie-cutter templates',
      'Scalable backend architectures and RESTful API integrations',
      'Mobile-responsive, accessible, and fast Core Web Vitals',
      'Clean, modular code with full ownership and documentation',
    ],
  },
  {
    icon: Bot,
    title: 'AI Automation & Workflow Integration',
    badge: 'Efficiency & Operations',
    description:
      'Practical AI-driven automations to streamline repetitive business operations. Real workflow pipelines, intelligent customer routing, and custom LLM API integrations.',
    deliverables: [
      'Custom OpenAI / Claude API integrations for business data',
      'Automated lead qualification and customer notification flows',
      'Webhook, CRM, and third-party API automation pipelines',
      'Intelligent document and text processing workflows',
    ],
  },
  {
    icon: Wrench,
    title: 'Website Handling & Ongoing Maintenance',
    badge: 'Peace of Mind',
    description:
      'Comprehensive website management and technical support so your site remains secure, fast, and up to date without taking time away from running your business.',
    deliverables: [
      'Regular security updates, bug fixes, and dependency upgrades',
      'Performance audits, speed enhancements, and cache tuning',
      'Content updates, new feature releases, and layout adjustments',
      'Uptime monitoring, backup management, and issue resolution',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'WordPress & Shopify Development',
    badge: 'E-Commerce & CMS',
    description:
      'High-converting Shopify stores and custom WordPress solutions tailored to your brand, complete with payment setup, app integrations, and easy content management.',
    deliverables: [
      'Shopify storefront configuration, theme tailoring & app setup',
      'WordPress & WooCommerce development with custom styling',
      'Secure payment gateway integration (Stripe, PayPal, Local)',
      'Product catalog setup, variant management, and checkout optimization',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Portfolios & Corporate Sites',
    badge: 'Brand Credibility',
    description:
      'Executive-level portfolio and company websites designed for agencies, service businesses, and consultants to establish strong credibility and capture inbound client leads.',
    deliverables: [
      'Professional brand presentation highlighting services & proof',
      'Conversion-focused inquiry forms and calendar booking links',
      'Search engine optimization (SEO) metadata and social sharing tags',
      'Fast loading speeds ensuring high visitor retention',
    ],
  },
  {
    icon: Layers,
    title: 'Complete Web Solutions (Store to Platform)',
    badge: 'End-to-End',
    description:
      'Turnkey digital solutions taking your business concept from initial planning to a fully deployed online store or functional web ecosystem with zero technical debt.',
    deliverables: [
      'Full project scoping: UI layout, database design, and cloud hosting',
      'Integrated user accounts, authentication, and role permissions',
      'Automated transactional emails and order/inquiry handling',
      'Production deployment on secure cloud infrastructure with custom domain',
    ],
  },
]

export default function Services() {
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
    <section id="services" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Services & Web Solutions
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              From custom web applications and business portfolios to Shopify e-commerce, AI automations, and ongoing website handling.
            </p>
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span>Have a project in mind? Let's talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Grid (6 Core Offerings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0f111d] border border-white/[0.08] hover:border-blue-500/35 transition-all duration-300 flex flex-col justify-between shadow-lg"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6">
                    <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 list-none p-0 m-0">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-tight text-[11px] sm:text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-white/[0.03] hover:bg-blue-600 hover:text-white border border-white/[0.08] hover:border-blue-500 transition-all duration-200 cursor-pointer text-center"
                >
                  Inquire About This Service
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
