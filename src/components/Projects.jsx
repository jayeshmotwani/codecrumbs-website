const projects = [
  {
    name: 'Skillfolio',
    tagline: 'Your portfolio, minus the painful part.',
    description:
      "Building a portfolio from scratch is genuinely tedious. Skillfolio generates one for you — clean, professional, and ready to share. Fill in your details, get a live page. That's it.",
    url: 'https://skillfolio.dev',
    logo: '/assets/skillfolio-logo.png',
    logoDark: true,
    accentColor: '#F97316',
    stack: ['PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    category: 'Portfolio',
  },
  {
    name: 'Lexie',
    tagline: 'Language tutor that actually talks back.',
    description:
      'Most language apps feel like a chore. Lexie is a chatbot that drills vocab, corrects grammar, and holds real conversations in your target language. No streaks guilt-tripping you.',
    url: 'https://lexie.codecrumbs.in',
    logo: '/assets/lexie-logo.svg',
    logoDark: false,
    accentColor: '#8B5CF6',
    stack: ['Python', 'FastAPI', 'React', 'Claude AI'],
    category: 'AI / Language',
  },
]

function TechBadge({ tech, accent }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full border font-medium"
      style={{ borderColor: `${accent}30`, color: accent, backgroundColor: `${accent}08` }}
    >
      {tech}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>
      {/* Text side */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider"
            style={{ color: project.accentColor, backgroundColor: `${project.accentColor}15` }}
          >
            {project.category}
          </span>
        </div>

        <h3 className="text-4xl font-black tracking-tight mb-3" style={{ color: project.accentColor }}>
          {project.name}
        </h3>
        <p className="text-lg text-white/60 mb-4 font-medium">{project.tagline}</p>
        <p className="text-white/40 leading-relaxed mb-8">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} accent={project.accentColor} />
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: project.accentColor }}
        >
          Visit {project.name}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>

      {/* Visual side */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-3xl blur-[60px] opacity-20"
          style={{ backgroundColor: project.accentColor }}
        />
        <div className="relative rounded-3xl border border-white/8 overflow-hidden bg-white/[0.03] aspect-[4/3] flex items-center justify-center p-12">
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="max-w-[200px] max-h-[200px] w-full h-full object-contain"
            style={project.logoDark ? { borderRadius: '16px' } : {}}
          />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-xs text-[#EC4899] uppercase tracking-widest mb-4 font-medium">Projects</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
            The apps.{' '}
            <span className="text-white/30">Both of them.</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg">
            Quality over quantity — each one is actually finished and actually useful.
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
