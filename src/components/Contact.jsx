import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  const contacts = [
    {
      label: 'Email',
      value: 'ssinghayu98@gmail.com',
      href: 'mailto:ssinghayu98@gmail.com',
      icon: '◉',
      copyable: true,
    },
    {
      label: 'Phone',
      value: '+91 8789506799',
      href: 'tel:+918789506799',
      icon: '◈',
      copyable: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/ssinghayu98',
      href: 'https://github.com/ssinghayu98',
      icon: '⌥',
      copyable: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ayush-singh3113',
      href: 'https://www.linkedin.com/in/ayush-singh3113/',
      icon: '⬡',
      copyable: false,
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 relative bg-[#0a0f1e]/50">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto">
        <div className="section-reveal mb-16">
          <p className="font-mono text-cyan-400 text-xs tracking-widest mb-3">05. CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Let's Connect
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </div>

        <div className="section-reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-slate-400 text-lg leading-relaxed">
            Currently open to <span className="text-cyan-400 font-semibold">new opportunities</span>. Whether it's a full-time role, freelance project, or just a tech chat — my inbox is open.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12 section-reveal">
          {contacts.map(({ label, value, href, icon, copyable }) => (
            <div key={label}
              className="flex items-center gap-4 bg-[#0d1526] border border-[#1a2540] rounded-sm p-5 card-hover group">
              <span className="text-cyan-400 text-xl w-8 text-center shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] text-slate-600 tracking-widest mb-0.5">{label}</p>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-body truncate block">
                  {value}
                </a>
              </div>
              {copyable && (
                <button onClick={() => copy(value, label)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs text-slate-500 hover:text-cyan-400 shrink-0">
                  {copied === label ? '✓' : 'copy'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center section-reveal">
          <a href="mailto:ssinghayu98@gmail.com"
            className="inline-block px-10 py-4 bg-transparent border border-cyan-400/50 text-cyan-400
              font-display font-bold text-sm tracking-widest hover:bg-cyan-400/10 hover:border-cyan-400
              transition-all duration-300 rounded-sm glow-cyan hover:scale-105">
            SAY HELLO →
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-28 text-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a2540] to-transparent mb-8" />
        <p className="font-mono text-xs text-slate-600 tracking-widest">
          DESIGNED & BUILT BY{' '}
          <span className="text-cyan-400/60">AYUSH SINGH</span>
          {' '}· {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[10px] text-slate-700 mt-2">
          React · Vite · Tailwind · Framer Motion
        </p>
      </div>
    </section>
  )
}
