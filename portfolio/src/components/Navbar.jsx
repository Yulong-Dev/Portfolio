import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/port',     label: 'Portfolio' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-display font-bold text-slate-950 text-sm group-hover:bg-cyan-400 transition-colors">
            G
          </div>
          <span className="font-display font-bold text-white text-lg">
            George<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to} to={to} end={to === '/'}
              className={({ isActive }) =>
                `nav-link px-4 py-2 rounded-lg text-sm font-body transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://linkedin.com/in/gowinstar55555"
            target="_blank" rel="noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Connect <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-900 border-b border-slate-800 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to} to={to} end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-body text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://linkedin.com/in/gowinstar55555"
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 mt-3 btn-primary w-full py-3 text-sm"
          >
            Connect on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
