const steps = [
  {
    step: '01',
    title: 'Discovery call',
    time: 'Day 1–2',
    description: "We talk through the idea. I ask the annoying questions upfront so scope doesn't creep later.",
    accent: '#F97316',
  },
  {
    step: '02',
    title: 'Build',
    time: 'Week 1–3',
    description: 'AI-accelerated development, real code review, regular check-ins. You see progress, not silence.',
    accent: '#EC4899',
  },
  {
    step: '03',
    title: 'Ship',
    time: 'Week 3–4',
    description: 'Deployed, tested, documented. A working MVP you can put in front of real users.',
    accent: '#8B5CF6',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs text-[#8B5CF6] uppercase tracking-widest mb-4 font-medium">Process</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            Idea to MVP.{' '}
            <span className="text-white/30">In weeks, not quarters.</span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            Most ideas can go from a first call to a working MVP in{' '}
            <span className="text-white font-semibold">2 to 4 weeks</span>. Bigger scope takes longer —
            but you'll know the real timeline after our first conversation, not after three sprints of "discovery."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ step, title, time, description, accent }) => (
            <div
              key={step}
              className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <div
                className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${accent}, ${accent}40)` }}
              >
                {step}
              </div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>{time}</p>
              <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white mb-1">Not sure what "MVP" even means for your idea yet?</p>
            <p className="text-sm text-white/40">That's exactly what the first call is for. No cost, no pressure.</p>
          </div>
          <a
            href="mailto:jayeshmotwani99@gmail.com"
            className="shrink-0 px-6 py-3 rounded-full bg-[#F97316] text-black font-bold text-sm hover:bg-[#fb923c] transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}
