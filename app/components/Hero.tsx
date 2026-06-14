export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">

      {/* Radial gold glow from top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(201,168,76,0.07),transparent)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent,rgba(0,0,0,0.5))]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Vertical accent lines */}
      <div className="absolute left-10 xl:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent hidden lg:block" />
      <div className="absolute right-10 xl:right-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">

        {/* Label */}
        <div className="hero-line-1 flex items-center justify-center gap-5 mb-10">
          <div className="h-px w-10 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.6em] uppercase font-sans">
            Est. 2009 &nbsp;·&nbsp; New York
          </span>
          <div className="h-px w-10 bg-[#c9a84c]" />
        </div>

        {/* Hero heading */}
        <div className="overflow-hidden">
          <h1 className="font-serif leading-none text-white select-none">
            <span className="hero-line-1 block text-[clamp(3.5rem,10vw,8rem)] font-light tracking-[0.2em] text-white/40">
              THE
            </span>
            <span className="hero-line-2 block text-[clamp(4.5rem,14vw,11rem)] font-bold tracking-tight -mt-2 md:-mt-4 text-white">
              SOVEREIGN
            </span>
            <span className="hero-line-3 block text-[clamp(1.2rem,4vw,3rem)] font-light tracking-[0.5em] text-white/30 mt-2">
              BARBER &nbsp; CO.
            </span>
          </h1>
        </div>

        {/* Gold divider */}
        <div className="hero-divider flex items-center justify-center gap-5 my-10">
          <div className="h-px flex-1 max-w-[5rem] bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
          <div className="h-px flex-1 max-w-[5rem] bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
        </div>

        {/* Tagline */}
        <p className="hero-tagline font-serif italic text-xl md:text-2xl text-white/35 tracking-widest mb-14">
          Where Precision Meets Prestige
        </p>

        {/* CTA buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-12 py-4 bg-[#c9a84c] text-black text-[11px] tracking-[0.35em] uppercase font-sans font-semibold hover:bg-[#e8d5a3] active:bg-[#c9a84c] transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-12 py-4 border border-white/15 text-white/50 text-[11px] tracking-[0.35em] uppercase font-sans hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/20 text-[9px] tracking-[0.5em] uppercase font-sans">Scroll</span>
        <div className="w-px h-14 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-[#c9a84c]/60 to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  )
}
