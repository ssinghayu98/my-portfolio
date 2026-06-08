import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⬡',
    color: 'from-cyan-400/20 to-transparent',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA/Hibernate'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: 'from-indigo-400/20 to-transparent',
    skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '⌬',
    color: 'from-emerald-400/20 to-transparent',
    skills: ['Docker', 'CI/CD', 'Linux', 'GitHub Actions', 'Render', 'Vercel'],
  },
  {
    category: 'Tools',
    icon: '⊞',
    color: 'from-amber-400/20 to-transparent',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'],
  },
]

const coreMetrics = [
  { value: '2+', label: 'Projects Shipped' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '1', label: 'Active Internship' },
  { value: '∞', label: 'Drive to Build' },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="section-reveal mb-16">
          <p className="font-mono text-cyan-400 text-xs tracking-widest mb-3">02. TECHNICAL SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 section-reveal">
          {coreMetrics.map(({ value, label }) => (
            <div key={label} className="bg-[#0d1526] border border-[#1a2540] rounded-sm p-6 text-center card-hover">
              <div className="font-display text-4xl font-bold text-cyan-400 text-glow mb-2">{value}</div>
              <div className="font-body text-xs text-slate-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map(({ category, icon, color, skills }, i) => (
            <div key={category}
              className={`section-reveal bg-[#0d1526] border border-[#1a2540] rounded-sm p-6 card-hover relative overflow-hidden`}
              style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} pointer-events-none`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-cyan-400 text-xl">{icon}</span>
                  <h3 className="font-display text-lg font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
