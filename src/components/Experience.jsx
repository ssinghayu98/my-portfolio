import React from 'react'

const experiences = [
  {
    role: 'App Developer Intern',
    company: 'LG Electronics',
    period: 'Jun 2026 – Present',
    type: 'CURRENT',
    highlights: [
      'Building internal application tooling using Java & Spring Boot',
      'Developing Auto Reminder Sender system for employee notifications',
      'Working in an agile environment on production-grade enterprise software',
      'Collaborating with cross-functional teams on backend API design',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
  },
  {
    role: 'Data Management Intern',
    company: 'Gram Sudhar Samiti',
    period: 'Jun 2025 – Jul 2025',
    type: 'COMPLETED',
    highlights: [
      'Managed and maintained organizational records and datasets',
      'Assisted in data organization and reporting',
      'Supported data analysis activities',
      'Improved data accuracy and consistency',
    ],
    tech: ['Excel', 'Reporting', 'Analysis', 'Data Management'],
  },
]

const education = {
  degree: 'B.Tech - Computer Science Engineering',
  institution: 'UPES Dehradun',
  period: '2024 – 2028',
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#0a0f1e] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
            Experience
          </p>
          <h2 className="text-4xl font-bold">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-slate-700 rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400">
                    {exp.company}
                  </p>
                </div>

                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'CURRENT'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    {exp.type}
                  </span>

                  <p className="text-slate-400 text-sm mt-2">
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-slate-300"
                  >
                    <span className="text-cyan-400">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#111827] border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-3">
            Education
          </h3>

          <p className="text-slate-300">
            {education.degree}
          </p>

          <p className="text-cyan-400">
            {education.institution}
          </p>

          <p className="text-slate-500 text-sm">
            {education.period}
          </p>
        </div>
      </div>
    </section>
  )
}