const stats = [
  { value: '2', label: 'Apps live' },
  { value: '1', label: 'Developer' },
  { value: '0', label: 'Meetings about meetings' },
  { value: '∞', label: 'Cups of chai' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs text-[#F97316] uppercase tracking-widest mb-4 font-medium">About</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              One dev.<br />
              <span className="text-white/30">A lot of side projects.</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                CodeCrumbs is the umbrella for apps I build when I get annoyed at something
                and can't stop thinking <em>"I could just make this."</em>
              </p>
              <p>
                No product teams. No Jira tickets. No quarterly OKRs. Just problems worth solving,
                shipped fast enough to actually be useful.
              </p>
              <p>
                Each app is small on purpose — focused on doing one thing well, not twelve things
                mediocrely.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#F97316] to-[#EC4899] mb-2">
                  {value}
                </div>
                <div className="text-sm text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
