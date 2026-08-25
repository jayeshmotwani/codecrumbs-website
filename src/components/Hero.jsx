export default function Hero({ onOpenLeadModal }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
          Freelance developer · AWS heavy · No BS
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          Your idea.{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6]">
              Shipped fast.
            </span>
          </span>
          <br />
          No fluff.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm a freelance developer who takes ideas from a rough sketch to a working
          MVP — clear communication, AWS-heavy cloud work, and code that doesn't fall over.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenLeadModal}
            className="px-8 py-3.5 rounded-full bg-[#F97316] text-black font-bold text-sm hover:bg-[#fb923c] transition-colors"
          >
            Let's talk
          </button>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white/70 text-sm hover:border-white/30 hover:text-white transition-colors"
          >
            See the work
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
