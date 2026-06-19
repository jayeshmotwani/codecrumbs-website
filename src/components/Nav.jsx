export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#F97316]">Code</span>
            <span className="text-white">Crumbs</span>
          </span>
        </a>
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-white/50 hover:text-white transition-colors">Projects</a>
          <a
            href="mailto:jayeshmotwani99@gmail.com"
            className="text-sm px-4 py-1.5 rounded-full border border-[#F97316]/40 text-[#F97316] hover:bg-[#F97316]/10 transition-colors"
          >
            Say hi
          </a>
        </nav>
      </div>
    </header>
  )
}
