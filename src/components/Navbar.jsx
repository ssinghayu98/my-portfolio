import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-[#050810]/90 backdrop-blur-xl border-b border-[#1a2540]' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-cyan-400 text-lg font-semibold tracking-widest hover:text-glow transition-all">
          <span className="text-white/40">&lt;</span>
          AS
          <span className="text-white/40"> /&gt;</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group">
              <span className="font-mono text-cyan-400/40 text-xs mr-1">
                {String(links.indexOf(link) + 1).padStart(2, '0')}.
              </span>
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a href="/resume.pdf" download
            className="font-mono text-xs px-4 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 rounded-sm">
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-[#1a2540] py-6">
          <div className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                className="font-body text-slate-300 hover:text-cyan-400 transition-colors text-lg">
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
