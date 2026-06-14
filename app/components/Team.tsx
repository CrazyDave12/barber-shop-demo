import Reveal from './Reveal'

const team = [
  {
    initials: 'MW',
    name: 'Marcus Williams',
    role: 'Master Barber',
    specialty: 'Fades & Textured Cuts',
    experience: '12 Years',
    gradient: 'from-[#1c1410] to-[#0a0808]',
  },
  {
    initials: 'JH',
    name: 'James Hartley',
    role: 'Senior Barber',
    specialty: 'Hot Towel Shaves',
    experience: '8 Years',
    gradient: 'from-[#101418] to-[#08090a]',
  },
  {
    initials: 'AR',
    name: 'Antonio Rivera',
    role: 'Expert Barber',
    specialty: 'Beard Sculpting',
    experience: '6 Years',
    gradient: 'from-[#141018] to-[#09080a]',
  },
  {
    initials: 'SC',
    name: 'Sofia Chen',
    role: 'Senior Barber',
    specialty: 'Colour & Precision',
    experience: '7 Years',
    gradient: 'from-[#0f1814] to-[#080a09]',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
              The Craftsmen
            </span>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5">
              Meet the Team
            </h2>
            <div className="h-px w-14 bg-[#c9a84c] mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="group cursor-default">
                {/* Photo card */}
                <div
                  className={`relative aspect-[3/4] bg-gradient-to-br ${member.gradient} border border-white/[0.05] overflow-hidden mb-6`}
                >
                  {/* Subtle noise overlay */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.06),transparent_60%)]" />

                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[6rem] font-bold text-[#c9a84c]/[0.13] group-hover:text-[#c9a84c]/[0.22] transition-colors duration-700 select-none leading-none">
                      {member.initials}
                    </span>
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#c9a84c]/30 group-hover:border-[#c9a84c]/60 transition-colors duration-500" />
                  <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#c9a84c]/30 group-hover:border-[#c9a84c]/60 transition-colors duration-500" />
                  <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-[#c9a84c]/30 group-hover:border-[#c9a84c]/60 transition-colors duration-500" />
                  <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#c9a84c]/30 group-hover:border-[#c9a84c]/60 transition-colors duration-500" />

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/[0.03] transition-colors duration-500" />
                </div>

                {/* Info */}
                <div className="border-l-[2px] border-[#c9a84c] pl-4">
                  <h3 className="font-serif text-[1.2rem] font-bold text-white group-hover:text-[#c9a84c] transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/40 text-[13px] font-sans mt-1">{member.role}</p>
                  <p className="text-[#c9a84c]/60 text-[11px] font-sans tracking-[0.2em] uppercase mt-2.5">
                    {member.specialty}
                  </p>
                  <p className="text-white/20 text-[11px] font-sans mt-1">
                    {member.experience} Experience
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
