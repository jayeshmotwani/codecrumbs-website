export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="text-xl font-bold tracking-tight mb-2">
              <span className="text-[#F97316]">Code</span>
              <span className="text-white">Crumbs</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs">
              Freelance developer turning ideas into shipped MVPs — one project at a time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs text-white/25 uppercase tracking-widest">Get in touch</p>
            <a
              href="mailto:jayeshmotwani99@gmail.com"
              className="text-sm text-white/40 hover:text-[#F97316] transition-colors"
            >
              jayeshmotwani99@gmail.com
            </a>
            <a href="#work" className="text-sm text-white/40 hover:text-[#EC4899] transition-colors">
              See recent work
            </a>
            <a href="#process" className="text-sm text-white/40 hover:text-[#8B5CF6] transition-colors">
              How it works
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {year} CodeCrumbs. Built with React + Tailwind. Deployed on the internet, somehow.
          </p>
          <p className="text-xs text-white/20">
            No cookies, no tracking, just code.
          </p>
        </div>
      </div>
    </footer>
  )
}
