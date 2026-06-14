import Reveal from './Reveal'

const services = [
  {
    number: '01',
    name: 'The Signature Cut',
    price: '$65',
    duration: '60 min',
    description:
      'Our signature experience: thorough consultation, hot towel prep, precision cut, and a premium finish tailored to you.',
  },
  {
    number: '02',
    name: 'Royal Shave',
    price: '$55',
    duration: '45 min',
    description:
      'The classic straight razor shave. Hot towel, premium oils, expert blade work, and a cold refreshing finish.',
  },
  {
    number: '03',
    name: 'Beard Sculpt',
    price: '$45',
    duration: '40 min',
    description:
      'Expert beard shaping, precision trimming, and a deep conditioning treatment for the perfect, defined look.',
  },
  {
    number: '04',
    name: 'The Sovereign Package',
    price: '$120',
    duration: '90 min',
    description:
      'The complete experience — signature cut, royal shave, and beard sculpt. Includes a complimentary whisky.',
  },
  {
    number: '05',
    name: 'Gray Blending',
    price: '$75',
    duration: '60 min',
    description:
      'Discreet, expert colour techniques to blend and unify your natural grays into a polished, distinguished finish.',
  },
  {
    number: '06',
    name: "Junior's Cut",
    price: '$35',
    duration: '30 min',
    description:
      'Precision haircut for the young gentleman. Patient, professional, and done right — for ages 12 and under.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
              What We Offer
            </span>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5">
              Our Services
            </h2>
            <div className="h-px w-14 bg-[#c9a84c] mx-auto mt-8" />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 55}>
              <div className="group bg-[#060606] p-10 hover:bg-[#0e0e0e] transition-colors duration-400 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-[3.5rem] font-bold text-[#c9a84c]/12 group-hover:text-[#c9a84c]/25 transition-colors duration-500 leading-none">
                    {service.number}
                  </span>
                  <div className="text-right mt-1">
                    <div className="font-serif text-2xl font-bold text-[#c9a84c]">
                      {service.price}
                    </div>
                    <div className="text-white/25 text-[11px] tracking-wider font-sans mt-0.5">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-[#c9a84c] transition-colors duration-300 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-white/35 font-sans text-[14px] leading-[1.85] flex-1">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 h-px bg-gradient-to-r from-[#c9a84c]/15 via-[#c9a84c]/5 to-transparent group-hover:from-[#c9a84c]/40 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
