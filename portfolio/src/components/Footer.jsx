import { Link } from 'react-router-dom'
import { Github, Linkedin, Youtube, Mail, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/port',     label: 'Portfolio' },
  { to: '/contact',  label: 'Contact' },
]

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/gowinstar55555', label: 'LinkedIn' },
  { icon: Github,   href: 'https://github.com/gowinstar55555',       label: 'GitHub' },
  { icon: Youtube,  href: 'https://youtube.com/@george-godwin',      label: 'YouTube' },
  { icon: Mail,     href: 'mailto:onyiigodset@gmail.com',            label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-display font-bold text-slate-950 text-sm">G</div>
              <span className="font-display font-bold text-white text-lg">George<span className="text-cyan-400">.</span></span>
            </Link>
            <p className="font-body text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Fullstack Developer from Nigeria, building modern web experiences with React, Next.js, and Node.js. Open to new projects.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label} href={href}
                  target="_blank" rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-body text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="font-body text-sm text-slate-400">onyiigodset@gmail.com</li>
              <li className="font-body text-sm text-slate-400">+234-9075802372</li>
              <li className="font-body text-sm text-slate-400">Abia, Nigeria</li>
              <li className="mt-4">
                <a
                  href="https://drive.google.com/file/d/1bewnBUHNyU7oM9p1IbcrCmw4tWBEGA9K/view"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-600">© {new Date().getFullYear()} George Godwin. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-600">Built with React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
