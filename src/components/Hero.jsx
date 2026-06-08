import { useEffect, useRef, useState } from 'react'
import ayush from '../assets/ayush.jpeg'
const roles = [
  'Full Stack Developer',
  'App Developer',
  'DevOps Engineer',
  'Java Spring Boot Developer',
]

function Typewriter({ words }) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const speed = deleting ? 50 : 80
    const pause = deleting ? 100 : 2000

    const timeout = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setText(word.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && charIdx > 0) {
        setText(word.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words])

  return (
    <span className="text-cyan-400 font-display">
      {text}
      <span className="typewriter-cursor" />
    </span>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.6 + 0.1,
      })
    }

    let frame
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34,211,238,${p.o})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > w) p.dx *= -1
        if (p.y < 0 || p.y > h) p.dy *= -1
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34,211,238,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }

    draw()
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8
          text-xs font-mono text-cyan-400 tracking-widest animate-fade-up"
          style={{ animationDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          OPEN TO OPPORTUNITIES · JUNE 2026
        </div>
       <div className="flex justify-center mt-8">
  <div className="relative">
    <img
      src={ayush}
      alt="Ayush Singh"
      className="w-72 md:w-80 h-auto rounded-3xl object-cover border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
    />

    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#050810] border border-cyan-400/20 rounded-full px-4 py-1">
      <span className="text-cyan-400 text-xs font-mono">
        LG Electronics Intern
      </span>
    </div>
  </div>
</div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Ayush</span>
          <br />
          <span className="gradient-text text-glow">Singh</span>
        </h1>

        {/* Typewriter */}
        <p className="font-display text-2xl md:text-3xl font-medium text-slate-400 mb-8 h-10 animate-fade-up"
          style={{ animationDelay: '0.35s' }}>
          <Typewriter words={roles} />
        </p>

        {/* Description */}
        <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.5s' }}>
          App Developer Intern at{' '}
          <span className="text-cyan-400 font-semibold">LG Electronics</span>.
          Building scalable full-stack systems with Java, Spring Boot & React.
          Passionate about DevOps, CI/CD pipelines and clean architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.65s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-cyan-400 text-[#050810] font-display font-bold text-sm tracking-wide
              hover:bg-cyan-300 transition-all duration-200 rounded-sm glow-cyan-strong hover:scale-105">
            View Projects →
          </button>
          <a href="mailto:ssinghayu98@gmail.com"
            className="px-8 py-3 border border-cyan-400/40 text-cyan-400 font-display font-semibold text-sm tracking-wide
              hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200 rounded-sm">
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/ssinghayu98', icon: '⌥' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-singh3113/', icon: '◈' },
            { label: 'Email', href: 'mailto:ssinghayu98@gmail.com', icon: '◉' },
          ].map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
              <span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/40 to-transparent" />
      </div>
    </section>
  )
}
