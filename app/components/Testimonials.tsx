import Reveal from './Reveal'

const testimonials = [
  {
    text: "The best barbershop experience I have ever had. Marcus is an absolute artist — I walked in unsure of what I wanted and left looking like a completely different man. Worth every penny.",
    author: 'James T.',
    title: 'Regular Client Since 2019',
    rating: 5,
  },
  {
    text: "The Royal Shave is unlike anything else in the city. The hot towel, the straight razor, the precision — they treat the craft with the respect it deserves. I won't go anywhere else.",
    author: 'Robert K.',
    title: 'Monthly Subscriber',
    rating: 5,
  },
  {
    text: "Finally found my go-to spot after years of searching. Incredible attention to detail, an atmosphere that makes you want to stay all afternoon, and results that speak for themselves.",
    author: 'David M.',
    title: 'Regular Client',
    rating: 5,
  },
  {
    text: "The Sovereign Package is worth every single penny. You are not just getting a haircut — you are getting a ritual. Already recommended it to everyone I know.",
    author: 'Alexander C.',
    title: 'New Client',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
              Client Stories
            </span>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5">
              What They Say
            </h2>
            <div className="h-px w-14 bg-[#c9a84c] mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <div className="group bg-[#0d0d0d] border border-white/[0.05] hover:border-[#c9a84c]/20 p-10 transition-all duration-500 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[#c9a84c] text-sm leading-none">
                      ★
                    </span>
                  ))}
                </div>

                {/* Opening quote mark */}
                <div
                  className="font-serif text-[5rem] text-[#c9a84c]/[0.08] group-hover:text-[#c9a84c]/[0.14] leading-none -mt-4 mb-2 transition-colors duration-500 select-none"
                  aria-hidden
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p className="font-serif italic text-white/60 text-[1.1rem] leading-[1.85] flex-1 mb-9">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c]/20 to-transparent group-hover:from-[#c9a84c]/40 transition-colors duration-500" />
                  <div className="text-right">
                    <div className="text-white font-sans text-[13px] font-medium tracking-wide">
                      {t.author}
                    </div>
                    <div className="text-white/25 text-[11px] font-sans mt-0.5 tracking-wider">
                      {t.title}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
