import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import { Search } from 'lucide-react'

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function PortfolioPage() {
  const [active, setActive]   = useState('All')
  const [search, setSearch]   = useState('')

  const filtered = projects.filter(p => {
    const matchCat    = active === 'All' || p.category === active
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <div className="page-enter pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 reveal">
          <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> What I've Built</p>
          <h1 className="section-title">Portfolio</h1>
          <p className="font-body text-slate-400 mt-3 max-w-xl">
            {projects.length} projects built across fintech, e-commerce, and SaaS. Each one represents a real problem solved with clean code.
          </p>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md py-4 mb-8 border-b border-slate-800/50 reveal">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 w-full sm:max-w-xs">
              <Search className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-transparent font-body text-sm text-white outline-none placeholder:text-slate-600 flex-1"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200 ${
                    active === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="font-mono text-xs text-slate-600 mb-6">
          Showing <span className="text-cyan-400">{filtered.length}</span> / {projects.length} projects
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filtered.map((project, i) => (
              <div key={project.id} className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 reveal">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="font-display text-xl text-slate-400 mb-2">No projects found</h3>
            <p className="font-body text-sm text-slate-600 mb-5">Try a different search term or category</p>
            <button onClick={() => { setActive('All'); setSearch('') }} className="btn-outline text-sm">
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
