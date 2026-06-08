import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 'banking',
    hero: true,
    title: 'Banking Management System',
    subtitle: 'Full-Stack Financial Platform',
    description:
      'A production-grade banking application featuring complete account management, fund transfers, transaction history, and real-time balance tracking. Built with a Spring Boot REST API backend and a React frontend deployed across cloud platforms.',
    contributions: [
      'Architected REST API with Spring Boot & MySQL',
      'Built React frontend with full CRUD operations',
      'Deployed backend on Render, frontend on Vercel',
      'Implemented JWT authentication & secure endpoints',
      'Designed relational schema with JPA/Hibernate',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'Vercel', 'Render'],
    github: 'https://github.com/ssinghayu98/banking-app',
    live: 'https://banking-frontend-ghyetuhel-ssinghayu98s-projects.vercel.app',
    backend: 'https://banking-app-j821.onrender.com',
    status: 'LIVE',
    accentColor: '#22d3ee',
  },
  {
    id: 'mediaflow',
    hero: false,
    title: 'MediaFlow',
    subtitle: 'News Aggregation Platform',
    description:
      'A full-stack news application that aggregates and displays articles across categories. Contributed to backend API development, frontend deployment pipeline, and DevOps infrastructure including CORS configuration.',
    contributions: [
      'Developed backend news APIs from scratch',
      'Deployed frontend to production environment',
      'Set up CI/CD pipeline and DevOps workflows',
      'Resolved complex CORS issues across environments',
      'Integrated third-party news APIs',
    ],
    tech: ['React', 'Node.js', 'REST APIs', 'DevOps', 'CI/CD', 'CORS'],
    github: 'https://github.com/ssinghayu98/MediaFlow',
    live: null,
    status: 'DEPLOYED',
    accentColor: '#818cf8',
  },
  {
    id: 'ytmusic',
    hero: false,
    title: 'YouTube Music Player',
    subtitle: 'Custom Audio Experience',
    description:
      'A custom YouTube-based music player with playlist management, custom UI controls, and a seamless listening experience built with React.',
    contributions: [
      'Built custom video/audio player controls',
      'Playlist management & queue system',
      'Responsive UI with React',
    ],
    tech: ['React', 'YouTube API', 'JavaScript', 'CSS'],
    github: 'https://github.com/ssinghayu98',
    live: null,
    status: 'COMPLETED',
    accentColor: '#f59e0b',
  },
]

function HeroProject({ project }) {
  return (
    <div className="section-reveal mb-12">
      <div className="relative bg-[#0d1526] border border-cyan-400/20 rounded-sm overflow-hidden"
        style={{ boxShadow: '0 0 60px rgba(34,211,238,0.1), 0 0 120px rgba(34,211,238,0.04)' }}>

        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Hero badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-sm font-mono text-xs text-cyan-400 tracking-widest">
            ★ HERO PROJECT
          </span>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left side */}
            <div>
              <p className="font-mono text-xs text-cyan-400/60 tracking-widest mb-2">FEATURED PROJECT</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-400 font-semibold mb-6">{project.subtitle}</p>
              <p className="text-slate-400 leading-relaxed mb-8">{project.description}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400 text-[#050810] font-display font-bold text-sm
                    hover:bg-cyan-300 transition-all rounded-sm hover:scale-105">
                  GitHub →
                </a>
                <a href={project.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-cyan-400/40 text-cyan-400 font-display font-semibold text-sm
                    hover:bg-cyan-400/10 hover:border-cyan-400 transition-all rounded-sm">
                  Live Demo ↗
                </a>
                <a href={project.backend} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-400 font-display font-semibold text-sm
                    hover:bg-white/5 transition-all rounded-sm">
                  API ⌁
                </a>
              </div>
            </div>

            {/* Right side */}
            <div>
              <p className="font-mono text-xs text-cyan-400/60 tracking-widest mb-4">KEY CONTRIBUTIONS</p>
              <ul className="space-y-3 mb-8">
                {project.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-cyan-400 mt-0.5 shrink-0 font-mono">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scan line decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </div>
  )
}

function ProjectCard({ project, delay }) {
  return (
    <div className="section-reveal bg-[#0d1526] border border-[#1a2540] rounded-sm p-7 card-hover relative overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}>
      <div className="absolute top-0 left-0 w-full h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}66, transparent)` }} />

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`font-mono text-xs tracking-widest px-2 py-0.5 rounded-sm border mb-3 inline-block`}
            style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}10` }}>
            {project.status}
          </span>
          <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm font-body" style={{ color: project.accentColor }}>{project.subtitle}</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

      <ul className="space-y-1.5 mb-6">
        {project.contributions.slice(0, 3).map((c, i) => (
          <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
            <span style={{ color: project.accentColor }} className="mt-0.5 shrink-0">▸</span>
            {c}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => (
          <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-sm border"
            style={{ color: `${project.accentColor}cc`, borderColor: `${project.accentColor}30`, background: `${project.accentColor}08` }}>
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a href={project.github} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
          ⌥ GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
            ↗ Live
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const heroProject = projects.find(p => p.hero)
  const otherProjects = projects.filter(p => !p.hero)

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="section-reveal mb-16">
          <p className="font-mono text-cyan-400 text-xs tracking-widest mb-3">04. PROJECTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Things I've Built
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </div>

        <HeroProject project={heroProject} />

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
