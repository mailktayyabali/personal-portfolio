import React, { useState } from 'react'
import { Calculator, ArrowRight, Check } from 'lucide-react'


const projectTypes = [
  { id: 'custom-web', label: 'Custom Web Application', desc: 'React, Node.js, full-stack platform' },
  { id: 'ecommerce', label: 'Shopify / WordPress Store', desc: 'E-commerce storefront with payment setup' },
  { id: 'business-portfolio', label: 'Business / Portfolio Site', desc: 'High-converting agency or corporate site' },
  { id: 'ai-automation', label: 'AI Automation & Workflows', desc: 'OpenAI API, CRM pipelines, webhook bots' },
  { id: 'handling', label: 'Website Handling & Maintenance', desc: 'Ongoing updates, speed, and security' },
]

const projectScopes = [
  { id: 'mvp', label: 'Launch New MVP / Store', timeframe: '2-4 weeks' },
  { id: 'redesign', label: 'Redesign & Speed Up Existing Site', timeframe: '1-2 weeks' },
  { id: 'feature', label: 'Add New Features / AI Integrations', timeframe: '1-3 weeks' },
  { id: 'ongoing', label: 'Monthly Website Handling & Support', timeframe: 'Ongoing' },
]

export default function LeadEstimator({ onScopeSelect }) {
  const [selectedType, setSelectedType] = useState('custom-web')
  const [selectedScope, setSelectedScope] = useState('mvp')

  const handleApplyToContact = () => {
    const currentType = projectTypes.find((t) => t.id === selectedType)?.label || 'Custom Web Application'
    const currentScope = projectScopes.find((s) => s.id === selectedScope)?.label || 'Launch New MVP / Store'
    
    if (onScopeSelect) {
      onScopeSelect({
        type: currentType,
        scope: currentScope,
      })
    }

    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="estimator" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto" style={{ zIndex: 1 }}>
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0f1222] to-[#0a0c16] border border-blue-500/25 shadow-2xl relative overflow-hidden">
        {/* Subtle accent blur */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE PROJECT ESTIMATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Plan Your Project Scope in 30 Seconds
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
                Select your project requirements below to configure a custom brief and get a free proposal & timeline from me within a few hours.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg shrink-0">
              ● Free Consultation & Advice
            </div>
          </div>

          {/* Step 1: Project Type */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
              Step 1: What type of project are you building?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type.id
                return (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold">{type.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-blue-400 shrink-0" />}
                    </div>
                    <span className="text-[11px] text-slate-400">{type.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Goal & Scope */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
              Step 2: What is your primary objective & timeline?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {projectScopes.map((scope) => {
                const isSelected = selectedScope === scope.id
                return (
                  <button
                    type="button"
                    key={scope.id}
                    onClick={() => setSelectedScope(scope.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-600/15 border-blue-500 text-white'
                        : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-semibold mb-2">{scope.label}</span>
                    <span className="text-[10px] font-mono text-blue-400">Est. {scope.timeframe}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.01] p-4 rounded-2xl">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              <span>Configured: </span>
              <strong className="text-white">
                {projectTypes.find((t) => t.id === selectedType)?.label}
              </strong>{' '}
              <span className="text-slate-500">|</span>{' '}
              <span className="text-blue-400">
                {projectScopes.find((s) => s.id === selectedScope)?.label}
              </span>
            </div>

            <button
              onClick={handleApplyToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 cursor-pointer uppercase tracking-wider shrink-0"
            >
              <span>Apply Scope & Request Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
