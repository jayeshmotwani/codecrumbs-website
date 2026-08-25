const skills = [
  {
    title: 'Requirement analysis',
    description: "I dig into what you're actually asking for, so we build the right thing the first time — not the third.",
  },
  {
    title: 'AI-native workflow',
    description: 'I use AI tools efficiently to move faster without cutting corners on quality or understanding.',
  },
  {
    title: 'Clear communication',
    description: "You'll always know what's happening, why, and what's next. No jargon walls, no radio silence.",
  },
  {
    title: 'Cloud — AWS heavy',
    description: 'EC2, RDS, S3, Lambda. Infrastructure that scales without surprises on the bill.',
  },
  {
    title: 'DB optimization',
    description: "Slow queries fixed, indexes that make sense, schemas that don't fight you six months later.",
  },
  {
    title: 'Debugging',
    description: "I find the bug you've been staring at for three days. Then I explain why it happened.",
  },
  {
    title: 'Project management',
    description: 'Deadlines, scope, priorities — handled without you having to chase status updates.',
  },
  {
    title: 'Organized by default',
    description: "Nothing lives only in my head. You get docs, not tribal knowledge you can't access.",
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs text-[#F97316] uppercase tracking-widest mb-4 font-medium">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            One person.{' '}
            <span className="text-white/30">A full toolkit.</span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            No handoffs between a "requirements guy" and a "dev guy" and a "cloud guy."
            Just one person who covers the whole path from problem to production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map(({ title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="text-base font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
