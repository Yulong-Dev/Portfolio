import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import services from '../data/services'

const process = [
  { step: '01', title: 'Discovery',     desc: 'We discuss your project goals, requirements, timeline, and budget to make sure we\'re aligned from day one.' },
  { step: '02', title: 'Design',        desc: 'I wireframe and prototype the solution, then refine based on your feedback before writing a single line of code.' },
  { step: '03', title: 'Development',   desc: 'Clean, well-structured code built with the right tools. Regular updates so you always know where things stand.' },
  { step: '04', title: 'Delivery',      desc: 'Thorough testing, deployment, and handover. I stay available post-launch to handle any issues that come up.' },
]

export default function ServicesPage() {
  return (
    <div className="page-enter pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> What I Offer</p>
          <h1 className="section-title">My Services</h1>
          <p className="font-body text-slate-400 mt-3 max-w-xl leading-relaxed">
            From concept to deployed product — I handle every layer of the stack with the same level of care and attention to detail.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {services.map((s, i) => (
            <div key={s.id} className={`reveal reveal-delay-${i + 1} group bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300`}>
              <p className="font-mono text-5xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors mb-4">{s.id}</p>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
              <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mb-20">
          <div className="reveal mb-10">
            <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Always Included</p>
            <h2 className="section-title text-3xl">What You Always Get</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Fully responsive design (mobile-first)',
              'Clean, documented code',
              'Cross-browser compatibility',
              'Performance optimized builds',
              'SEO-friendly structure',
              'Post-delivery support',
              'Git version control',
              'Regular progress updates',
              'On-time delivery guarantee',
            ].map((item, i) => (
              <div key={item} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 3)} flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-lg px-4 py-3`}>
                <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span className="font-body text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="reveal mb-10 text-center">
            <p className="section-label justify-center"><span className="w-6 h-px bg-cyan-400 inline-block" /> How It Works</p>
            <h2 className="section-title text-3xl">My Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div key={p.step} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-cyan-400 text-lg mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mb-20 bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-glow pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">Ready to start your project?</h3>
            <p className="font-body text-slate-400 mb-6 max-w-md mx-auto">Let's discuss what you need and how I can help bring it to life.</p>
            <Link to="/contact" className="btn-primary px-8">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
