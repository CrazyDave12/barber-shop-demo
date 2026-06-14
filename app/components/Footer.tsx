const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Now', href: '#contact' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <span className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-sans block mb-0.5">
                The
              </span>
              <span className="text-[1.8rem] font-serif font-bold tracking-[0.12em] text-white">
                SOVEREIGN
              </span>
            </div>
            <p className="text-white/25 font-sans text-[13px] leading-[1.85] max-w-[240px]">
              New York&apos;s premier barbershop since 2009. Where precision meets prestige, every single visit.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans mb-7">
              Navigation
            </div>
            <nav className="space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/40 hover:text-[#c9a84c] font-sans text-[13px] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans mb-7">
              Find Us
            </div>
            <div className="space-y-3 text-[13px] font-sans text-white/35 leading-[1.8]">
              <p>127 Mayfair Boulevard</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">(212) 555-0147</p>
              <p>hello@thesovereign.com</p>
            </div>

            <div className="mt-8">
              <div className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans mb-4">
                Social
              </div>
              <div className="flex gap-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-white/30 hover:text-[#c9a84c] text-[12px] font-sans tracking-wider transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-[11px] font-sans">
            &copy; {new Date().getFullYear()} The Sovereign Barber Co. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-7 bg-[#c9a84c]/20" />
            <span className="text-[#c9a84c]/20 text-[10px] font-sans tracking-[0.4em] uppercase">
              Since 2009
            </span>
            <div className="h-px w-7 bg-[#c9a84c]/20" />
          </div>
        </div>
      </div>
    </footer>
  )
}
