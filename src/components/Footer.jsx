export default function Footer({ onOpenLegalModal }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-8 mb-12">
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
              href="mailto:jayeshbydefault@gmail.com"
              className="text-sm text-white/40 hover:text-[#F97316] transition-colors"
            >
              jayeshbydefault@gmail.com
            </a>
            <a href="#work" className="text-sm text-white/40 hover:text-[#EC4899] transition-colors">
              See recent work
            </a>
            <a href="#process" className="text-sm text-white/40 hover:text-[#8B5CF6] transition-colors">
              How it works
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs text-white/25 uppercase tracking-widest">Elsewhere</p>
            <a
              href="https://github.com/jayeshmotwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-[#F97316] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jayeshbydefault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-[#EC4899] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://jayeshbydefault.skillfolio.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-[#8B5CF6] transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {year} CodeCrumbs. Built with React + Tailwind. Deployed on the internet, somehow.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              Terms of Use
            </button>
            <p className="text-xs text-white/20">
              No cookies, no trackers — just what you send us.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
