import React from 'react'

const experiences = [
  {
    role: 'App Developer Intern',
    company: 'LG Electronics',
    period: 'Jun 2026 – Completed',
    type: 'COMPLETED',
    highlights: [
      'Built internal application tooling using Java & Spring Boot',
      'Developed an Auto Reminder Sender system for employee notifications',
      'Worked with REST APIs and MySQL for backend application development',
      'Worked in an agile environment on enterprise software',
      'Collaborated on backend API design and application development',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    certificate: '/lg-internship-certificate.pdf',
    certificateLabel: 'View LG Certificate',
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
    certificate: '/gram-sudhar-certificate.pdf',
    certificateLabel: 'View Internship Certificate',
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

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-2">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl">
            A snapshot of my professional experience, projects, and
            hands-on work across application development and data management.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#111827]
              border border-slate-700
              rounded-2xl
              p-6 md:p-8
              hover:border-cyan-400/30
              transition-all duration-300"
            >

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 text-lg">
                    {exp.company}
                  </p>
                </div>

                <div className="md:text-right">

                  {/* Status */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
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

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-slate-300 text-sm md:text-base"
                  >
                    <span className="text-cyan-400 shrink-0">
                      ▸
                    </span>

                    <span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm
                    bg-cyan-500/10
                    text-cyan-300
                    border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Certificate */}
              {exp.certificate && (
                <div className="pt-5 border-t border-slate-700/70">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    bg-cyan-500/10
                    border border-cyan-400/20
                    text-cyan-400
                    text-sm font-semibold
                    hover:bg-cyan-400/20
                    hover:border-cyan-400/40
                    transition-all duration-200"
                  >
                    <span>▣</span>
                    {exp.certificateLabel}
                    <span>↗</span>
                  </a>
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Education */}
        <div
          className="mt-12
          bg-[#111827]
          border border-slate-700
          rounded-2xl
          p-6 md:p-8
          hover:border-cyan-400/30
          transition-all duration-300"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-xs mb-3">
            Education
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            {education.degree}
          </h3>

          <p className="text-cyan-400">
            {education.institution}
          </p>

          <p className="text-slate-500 text-sm mt-1">
            {education.period}
          </p>
        </div>

      </div>
    </section>
  )
}