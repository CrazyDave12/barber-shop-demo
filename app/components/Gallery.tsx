import Reveal from './Reveal'

const galleryItems = [
  {
    seed: 'sovereign-g1',
    label: 'The Classic Cut',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g2',
    label: 'Blade Work',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g3',
    label: 'Hot Towel',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g4',
    label: 'The Fade',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g5',
    label: 'Beard Sculpt',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g6',
    label: 'The Chair',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g7',
    label: 'Precision',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g8',
    label: 'The Detail',
    size: 'aspect-square',
  },
  {
    seed: 'sovereign-g9',
    label: 'Craftsmanship',
    size: 'aspect-square',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
              Our Work
            </span>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5">
              The Gallery
            </h2>
            <div className="h-px w-14 bg-[#c9a84c] mx-auto mt-8" />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryItems.map((item, i) => (
            <Reveal key={item.seed} delay={i * 40}>
              <div className={`group relative ${item.size} overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${item.seed}/700/700`}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a84c]/25 transition-colors duration-500" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <span className="text-white/80 text-[11px] tracking-[0.3em] uppercase font-sans">
                    {item.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
