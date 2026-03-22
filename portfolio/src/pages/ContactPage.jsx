import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Youtube } from 'lucide-react'

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'onyiigodset@gmail.com',  href: 'mailto:onyiigodset@gmail.com' },
  { icon: Phone,   label: 'Phone',    value: '+234-9075802372',         href: 'tel:+2349075802372' },
  { icon: MapPin,  label: 'Location', value: 'Abia, Nigeria',           href: null },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/gowinstar55555',           color: 'hover:bg-blue-600 hover:border-blue-600' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/gowinstar55555',                color: 'hover:bg-slate-600 hover:border-slate-600' },
  { icon: Youtube,  label: 'YouTube',  href: 'https://youtube.com/@george-godwin',               color: 'hover:bg-red-600 hover:border-red-600' },
  { icon: Mail,     label: 'Email',    href: 'mailto:onyiigodset@gmail.com',                     color: 'hover:bg-cyan-600 hover:border-cyan-600' },
]

export default function ContactPage() {
  const [form, setForm]         = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    formData.append('access_key', '4f2eb5cc-0ded-46ed-b2f5-2f6bd8bac655')
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then(r => r.json())
    setLoading(false)
    if (res.success) setSubmitted(true)
  }

  return (
    <div className="page-enter pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> Get in Touch</p>
          <h1 className="section-title">Let's Talk</h1>
          <p className="font-body text-slate-400 mt-3 max-w-xl leading-relaxed">
            I'm currently available to take on new projects. Feel free to reach out about anything you'd like to build together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 md:p-9">
              <h3 className="font-display font-bold text-xl text-white mb-1">Send a Message</h3>
              <p className="font-body text-sm text-slate-500 mb-7">I'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-slate-400 max-w-xs mx-auto mb-6">
                    Thanks <span className="text-cyan-400">{form.name}</span>! I'll review your message and get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', email:'', message:'' }) }}
                    className="btn-outline text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-2">Your Name *</label>
                      <input
                        type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder="John Doe"
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email" name="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className="input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message" rows={6} required
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="input resize-none"
                    />
                  </div>
                  <button
                    type="submit" disabled={loading}
                    className="w-full btn-primary justify-center py-3.5 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 reveal reveal-delay-2 space-y-5">

            {/* Availability banner */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="font-body font-semibold text-sm text-emerald-400">Available for Work</p>
                <p className="font-body text-xs text-slate-400 mt-0.5">Open to freelance & full-time roles</p>
              </div>
            </div>

            {/* Contact details */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrap = href ? 'a' : 'div'
              return (
                <Wrap
                  key={label}
                  href={href}
                  className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-600 uppercase tracking-wider">{label}</p>
                    <p className="font-body text-sm text-slate-300 mt-0.5">{value}</p>
                  </div>
                </Wrap>
              )
            })}

            {/* Social links */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <p className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label} href={href}
                    target="_blank" rel="noreferrer"
                    aria-label={label}
                    className={`flex-1 flex flex-col items-center gap-1.5 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-white ${color} transition-all text-xs font-mono`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <p className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-3">Working hours</p>
              <div className="space-y-2">
                {[
                  ['Mon – Fri', '9:00 AM – 6:00 PM WAT'],
                  ['Saturday',  '10:00 AM – 3:00 PM WAT'],
                  ['Response',  'Within 24 hours'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-body text-xs text-slate-500">{day}</span>
                    <span className="font-mono text-xs text-slate-300">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
