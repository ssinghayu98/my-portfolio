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

    let delay

    if (!deleting && charIdx < word.length) {
      delay = 80
    } else if (!deleting && charIdx === word.length) {
      delay = 2000
    } else if (deleting && charIdx > 0) {
      delay = 50
    } else {
      delay = 500
    }

    const timeout = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setText(word.slice(0, charIdx + 1))
        setCharIdx((current) => current + 1)
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setText(word.slice(0, charIdx - 1))
        setCharIdx((current) => current - 1)
      } else {
        setDeleting(false)
        setWordIdx((current) => (current + 1) % words.length)
      }
    }, delay)

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

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

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

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > w) p.dx *= -1
        if (p.y < 0 || p.y > h) p.dy *= -1
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          )

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            ctx.strokeStyle = `rgba(34,211,238,${
              0.06 * (1 - dist / 120)
            })`

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

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExperience = () => {
    document
      .getElementById('experience')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Availability badge */}
        <div
          className="flex justify-center mb-8 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            border border-cyan-400/20 bg-cyan-400/5
            text-xs font-mono text-cyan-400 tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        {/* Profile photo */}
        <div
          className="flex justify-center mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative group">
            
            {/* Outer glow */}
            <div
              className="absolute -inset-3 rounded-[2rem] opacity-40
              group-hover:opacity-70 transition-opacity duration-500 blur-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(34,211,238,0.35), rgba(99,102,241,0.2))',
              }}
            />

            {/* Photo */}
            <div
              className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-60 md:h-72
              overflow-hidden rounded-[1.5rem]
              border border-cyan-400/30
              bg-[#0d1526]
              shadow-[0_0_45px_rgba(34,211,238,0.15)]
              transition-all duration-500
              group-hover:border-cyan-400/60
              group-hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
              group-hover:-translate-y-1"
            >
              <img
                src={ayush}
                alt="Ayush Singh"
                className="w-full h-full object-cover object-center
                transition-transform duration-700
                group-hover:scale-105"
              />

              {/* Subtle image overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t
                from-[#050810]/30 via-transparent to-transparent
                pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div
          className="text-center animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl
            font-bold tracking-tight leading-none"
          >
            <span className="text-white">Ayush</span>
            <br />
            <span className="gradient-text text-glow">Singh</span>
          </h1>
        </div>

        {/* Typewriter */}
        <p
          className="text-center font-display text-2xl md:text-3xl
          font-medium text-slate-400 mt-6 mb-7 h-10 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Typewriter words={roles} />
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-center text-slate-400
          text-base md:text-lg leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          Computer Science Engineering student and developer focused on
          building scalable full-stack applications with{' '}
          <span className="text-cyan-400 font-semibold">
            Java, Spring Boot & React
          </span>
          . Experienced in backend development, REST APIs, DevOps and
          enterprise application development.
        </p>

        {/* Previous internship highlight */}
        <div
          className="flex justify-center mb-10 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          <button
            onClick={scrollToExperience}
            className="group inline-flex items-center gap-3
            px-5 py-2.5 rounded-full
            border border-[#1a2540]
            bg-[#0d1526]/70
            hover:border-cyan-400/40
            hover:bg-cyan-400/5
            transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />

            <span className="text-sm text-slate-400">
              Former App Developer Intern
            </span>

            <span className="text-cyan-400 font-semibold text-sm">
              @ LG Electronics
            </span>

            <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">
              ↓
            </span>
          </button>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap justify-center gap-4
          animate-fade-up"
          style={{ animationDelay: '0.65s' }}
        >
          {/* Projects */}
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-cyan-400
            text-[#050810]
            font-display font-bold text-sm tracking-wide
            hover:bg-cyan-300
            transition-all duration-200
            rounded-sm
            glow-cyan-strong
            hover:scale-105"
          >
            View Projects →
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3
            border border-cyan-400/40
            text-cyan-400
            font-display font-semibold text-sm tracking-wide
            hover:bg-cyan-400/10
            hover:border-cyan-400
            transition-all duration-200
            rounded-sm"
          >
            View Resume ↗
          </a>

          {/* Contact */}
          <a
            href="mailto:ssinghayu98@gmail.com"
            className="px-8 py-3
            border border-[#1a2540]
            text-slate-300
            font-display font-semibold text-sm tracking-wide
            hover:text-cyan-400
            hover:border-cyan-400/40
            transition-all duration-200
            rounded-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex justify-center gap-7 mt-12
          animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          {[
            {
              label: 'GitHub',
              href: 'https://github.com/ssinghayu98',
              icon: '⌥',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ayush-singh3113/',
              icon: '◈',
            },
            {
              label: 'Email',
              href: 'mailto:ssinghayu98@gmail.com',
              icon: '◉',
            },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-slate-500
              hover:text-cyan-400
              transition-colors
              flex items-center gap-2 group"
            >
              <span
                className="text-cyan-400/60
                group-hover:text-cyan-400
                transition-colors"
              >
                {icon}
              </span>

              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2
        -translate-x-1/2
        flex flex-col items-center gap-2
        animate-bounce"
      >
        <span
          className="font-mono text-[10px]
          text-slate-600 tracking-widest"
        >
          SCROLL
        </span>

        <div
          className="w-px h-12
          bg-gradient-to-b
          from-cyan-400/40
          to-transparent"
        />
      </div>
    </section>
  )
}