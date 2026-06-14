import Reveal from './Reveal'

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '5K+', label: 'Clients Served' },
  { number: '4', label: 'Master Barbers' },
  { number: '100%', label: 'Satisfaction Rate' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left: decorative emblem */}
          <Reveal>
            <div className="relative aspect-square max-w-[480px] mx-auto lg:mx-0">
              {/* Outer border */}
              <div className="absolute inset-0 border border-[#c9a84c]/15" />
              {/* Inner border */}
              <div className="absolute inset-8 border border-white/[0.04]" />
              {/* Diagonal accents */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rotate-45 border border-[#c9a84c]/20" />
                  <div className="absolute inset-4 rotate-45 border border-[#c9a84c]/10" />
                </div>
              </div>
              {/* Giant watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[14rem] font-bold text-[#c9a84c]/[0.06] leading-none select-none">
                  S
                </span>
              </div>
              {/* Corner L-shapes */}
              {[
                'top-0 left-0',
                'top-0 right-0',
                'bottom-0 left-0',
                'bottom-0 right-0',
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-7 h-7`}>
                  <div
                    className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} left-0 right-0 h-px bg-[#c9a84c]`}
                  />
                  <div
                    className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} top-0 bottom-0 w-px bg-[#c9a84c]`}
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
                Our Story
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5 mb-8 leading-tight">
                The Art of<br />the Perfect Cut
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-white/40 font-sans leading-[1.9] mb-5 text-[15px]">
                Since 2009, The Sovereign has been New York&apos;s premier destination for the discerning gentleman. We believe that a great haircut is more than an aesthetic choice — it&apos;s a statement of character.
              </p>
              <p className="text-white/40 font-sans leading-[1.9] mb-14 text-[15px]">
                Our master barbers combine time-honoured techniques with modern precision, ensuring that every client leaves not just looking their best, but feeling it. Each visit is a ritual, not just a service.
              </p>
            </Reveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.05]">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={260 + i * 70}>
                  <div className="bg-[#080808] p-7 hover:bg-[#0f0f0f] transition-colors duration-300 group">
                    <div className="font-serif text-[2.6rem] font-bold text-[#c9a84c] leading-none mb-2 group-hover:text-gold-light transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-sans">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
