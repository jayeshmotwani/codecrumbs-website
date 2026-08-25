import { useState } from 'react'

const stats = [
  { value: '9+', label: 'Years shipping backend systems' },
  { value: '3', label: 'Clouds — AWS, Azure, GCP' },
  { value: '2', label: 'Live GenAI apps' },
  { value: '4', label: 'Certifications earned' },
]

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/jayeshmotwani',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1.15-.02-2.09-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.63 5.24-5.13 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54A11.04 11.04 0 0 0 23.02 11.5C23.02 5.25 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jayeshbydefault',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    href: 'https://jayeshbydefault.skillfolio.dev',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
      </svg>
    ),
  },
]

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-16 items-start">
          {/* Photo */}
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-3xl blur-[50px] opacity-25 bg-gradient-to-br from-[#F97316] to-[#8B5CF6]" />
            {photoFailed ? (
              <div className="relative w-64 h-64 md:w-full md:h-80 rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#F97316] to-[#8B5CF6]">
                  JM
                </span>
              </div>
            ) : (
              <img
                src="/assets/jayesh-motwani.jpg"
                alt="Jayesh Motwani"
                onError={() => setPhotoFailed(true)}
                className="relative w-64 h-64 md:w-full md:h-80 object-cover rounded-3xl border border-white/10"
              />
            )}
          </div>

          {/* Text */}
          <div>
            <p className="text-xs text-[#F97316] uppercase tracking-widest mb-4 font-medium">About</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              Not a bootcamp grad.<br />
              <span className="text-white/30">9+ years in production.</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed mb-8">
              <p>
                I'm Jayesh — a backend-heavy full-stack developer based in Pune, India. Nine-plus years
                shipping production systems in PHP/Laravel and Python/FastAPI, mostly for SaaS platforms
                that couldn't afford downtime.
              </p>
              <p>
                Along the way I've led AI-augmented modernization on a trading platform, shipped
                RAG-based LLM apps with FastAPI and ChromaDB, and mentored teams on the Git workflows
                and code quality they actually needed.
              </p>
              <p>
                AWS, Azure, and GCP all show up on my resume, but AWS is where I live — EC2, RDS, S3,
                the works. CodeCrumbs is where I bring all of that to your project, without the
                enterprise process tax.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {links.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#F97316] to-[#EC4899] mb-1">
                    {value}
                  </div>
                  <div className="text-xs text-white/40 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
