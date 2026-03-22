import { Link } from 'react-router-dom'
import { ArrowRight, Download, CheckCircle, Briefcase } from 'lucide-react'

const skills = [
  { name: 'HTML & CSS',   level: 95 },
  { name: 'JavaScript',   level: 88 },
  { name: 'React JS',     level: 90 },
  { name: 'Next.js',      level: 80 },
  { name: 'Node.js',      level: 82 },
  { name: 'MongoDB',      level: 75 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'TypeScript',   level: 68 },
]

const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Fairmoney',
    period: '2022 – Present',
    desc: 'Leading frontend development for Nigeria\'s top digital lending platform. Built loan management dashboards and automated credit scoring UIs serving 500K+ users.',
  },
  {
    role: 'Fullstack Developer',
    company: 'Billpoint',
    period: '2020 – 2022',
    desc: 'Developed banking and payment interfaces. Built real-time transaction tracking, account management systems, and integrated multiple payment gateway APIs.',
  },
  {
    role: 'Frontend Developer',
    company: 'JengaTech',
    period: '2019 – 2020',
    desc: 'Started career building React web applications for fintech clients. Contributed to 3 major product launches and established component library standards.',
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="reveal">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-cyan-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="page-enter pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Get to Know Me</p>
          <h1 className="section-title">About Me</h1>
        </div>

        {/* Bio section */}
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">

          {/* Profile visual */}
          <div className="reveal">
            <div className="relative">
              {/* Decorative box */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/20 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-5xl text-white mx-auto mb-5 animate-float">
                  GG
                </div>
                <h2 className="font-display font-bold text-2xl text-white">George Godwin</h2>
                <p className="font-body text-cyan-400 text-sm mt-1 mb-4">Fullstack Developer</p>

                {/* Info rows */}
                <div className="space-y-3 text-left mt-6 border-t border-slate-700 pt-6">
                  {[
                    ['Location',     'Abia, Nigeria'],
                    ['Experience',   '5+ Years'],
                    ['Email',        'onyiigodset@gmail.com'],
                    ['Phone',        '+234-9075802372'],
                    ['Availability', 'Open to Projects'],
                  ].map(([key, val]) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="font-mono text-xs text-slate-500 flex-shrink-0">{key}</span>
                      <span className="font-body text-xs text-slate-300 text-right">{val}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://drive.google.com/file/d/1bewnBUHNyU7oM9p1IbcrCmw4tWBEGA9K/view"
                  target="_blank" rel="noreferrer"
                  className="btn-primary w-full justify-center mt-6 text-sm"
                >
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Text + stats */}
          <div className="reveal reveal-delay-2">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Building the web, one component at a time.
            </h3>
            <div className="space-y-4 font-body text-slate-400 leading-relaxed mb-8">
              <p>
                I'm George Godwin, a passionate fullstack developer from Abia, Nigeria with over <span className="text-white">5 years of professional experience</span> crafting high-performance web applications.
              </p>
              <p>
                My journey started at JengaTech where I discovered my love for building things people actually use. I went on to build fintech products at Billpoint and Fairmoney — products that handle real money and real people's livelihoods.
              </p>
              <p>
                I believe great software is more than working code — it's about understanding the user's journey, writing clean maintainable code, and shipping on time.
              </p>
            </div>

            {/* What I bring */}
            <div className="space-y-3 mb-8">
              {[
                'Clean, maintainable, and scalable code',
                'Strong eye for UI/UX and design details',
                'Experience with real production systems',
                'Fast learner, strong communicator',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span className="font-body text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5+',  label: 'Years Exp.' },
                { value: '90+', label: 'Projects' },
                { value: '15+', label: 'Clients' },
              ].map(s => (
                <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-2xl text-cyan-400">{s.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <div className="reveal mb-8">
            <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Expertise</p>
            <h2 className="section-title text-3xl">Skills & Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}>
                <SkillBar {...skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <div className="reveal mb-8">
            <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Work History</p>
            <h2 className="section-title text-3xl">Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={exp.company} className={`reveal reveal-delay-${i + 1} sm:pl-14 relative`}>
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500/50 items-center justify-center">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div className="card card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">{exp.role}</h3>
                        <p className="font-body text-cyan-400 text-sm font-semibold">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-body text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center pb-20">
          <p className="font-body text-slate-400 mb-5">Want to see what I've built?</p>
          <Link to="/port" className="btn-primary px-8">
            View My Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
