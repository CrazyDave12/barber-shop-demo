const items = [
  'PRECISION CUTS',
  'HOT TOWEL SHAVES',
  'BEARD SCULPTING',
  'PREMIUM GROOMING',
  'EXPERT BARBERS',
  'CLASSIC TECHNIQUES',
  'THE SOVEREIGN EXPERIENCE',
]

export default function Ticker() {
  return (
    <div className="bg-[#c9a84c] py-[14px] overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-black text-[11px] font-sans tracking-[0.35em] uppercase font-semibold px-6">
                  {item}
                </span>
                <span className="text-black/30 text-[8px]">◆</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
