import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, MapPin, ExternalLink } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import services from '../data/services'

const roles = ['Fullstack Developer', 'React Developer', 'Node.js Engineer', 'UI/UX Enthusiast']

/* ── Typewriter ───────────────────────────────── */
function Typewriter() {
  const [index, setIndex]   = useState(0)
  const [text, setText]     = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const speed   = deleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1800)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <span className="text-cyan-400">
      {text}<span className="animate-blink">|</span>
    </span>
  )
}

/* ── Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      {/* Glow */}
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Cyan orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-300">Available for work</span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-4 animate-fade-up">
              Hi, I'm<br />
              <span className="text-white">George</span>
              <span className="text-cyan-400">.</span>
            </h1>

            <div className="font-display text-2xl sm:text-3xl text-slate-400 mb-6 h-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Typewriter />
            </div>

            <p className="font-body text-slate-400 text-lg leading-relaxed mb-3 max-w-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Fullstack developer from Nigeria with <span className="text-white font-semibold">5+ years</span> of experience building production-grade web applications for companies like JengaTech, Billpoint, and Fairmoney.
            </p>

            <div className="flex items-center gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span className="font-mono text-sm text-slate-500">Abia, Nigeria</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/port" className="btn-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1bewnBUHNyU7oM9p1IbcrCmw4tWBEGA9K/view"
                target="_blank" rel="noreferrer"
                className="btn-outline"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Tech stack */}
            <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="font-mono text-xs text-slate-600 mb-3 uppercase tracking-widest">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'JavaScript', 'MongoDB', 'Tailwind CSS'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="hidden lg:flex flex-col gap-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Profile card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-3xl text-white mb-4 animate-float">
                  GG
                </div>
                <h3 className="font-display font-bold text-xl text-white">George Godwin</h3>
                <p className="font-body text-sm text-cyan-400 mt-1">Fullstack Developer</p>
                <p className="font-mono text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> Abia, Nigeria
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+',  label: 'Years Exp.' },
                { value: '90+', label: 'Projects' },
                { value: '15+', label: 'Clients' },
              ].map(s => (
                <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors">
                  <div className="font-display font-bold text-2xl text-cyan-400">{s.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Companies */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-3">Previously worked at</p>
              <div className="flex flex-wrap gap-2">
                {['JengaTech', 'Billpoint', 'Fairmoney'].map(c => (
                  <span key={c} className="font-body text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Featured Projects ────────────────────────── */
function FeaturedProjects() {
  const featured = projects.filter(p => p.featured)

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 reveal">
          <div>
            <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Featured Work</p>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <Link to="/port" className="btn-outline text-sm self-start sm:self-auto flex-shrink-0">
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Services preview ─────────────────────────── */
function ServicesPreview() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <p className="section-label justify-center"><span className="w-6 h-px bg-cyan-400 inline-block" /> What I Do</p>
          <h2 className="section-title">Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={s.id} className={`reveal reveal-delay-${i + 1} card card-hover`}>
              <p className="font-mono text-3xl font-bold text-slate-800 mb-3">{s.id}</p>
              <h3 className="font-display font-bold text-white text-base mb-2">{s.title}</h3>
              <p className="font-body text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.slice(0, 2).map(t => <span key={t} className="tag text-xs">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/services" className="btn-outline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal bg-slate-900 border border-slate-800 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-glow pointer-events-none" />
          <div className="relative z-10">
            <p className="section-label justify-center mb-4"><span className="w-6 h-px bg-cyan-400 inline-block" /> Let's Work Together</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Got a project in mind?
            </h2>
            <p className="font-body text-slate-400 text-lg max-w-xl mx-auto mb-8">
              I'm currently available for freelance work and full-time roles. Let's build something great together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://linkedin.com/in/gowinstar55555"
                target="_blank" rel="noreferrer"
                className="btn-outline px-8 py-3.5"
              >
                LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <CTA />
    </div>
  )
}
