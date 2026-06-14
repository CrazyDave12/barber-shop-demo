'use client'

import { useState } from 'react'
import Reveal from './Reveal'

const contactInfo = [
  {
    label: 'Location',
    value: '127 Mayfair Boulevard\nNew York, NY 10001',
  },
  {
    label: 'Phone',
    value: '(212) 555-0147',
  },
  {
    label: 'Email',
    value: 'hello@thesovereign.com',
  },
  {
    label: 'Hours',
    value: 'Mon – Fri: 9:00am – 8:00pm\nSaturday: 8:00am – 6:00pm\nSunday: 10:00am – 4:00pm',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-[#111111] border border-white/[0.08] text-white placeholder-white/[0.18] px-4 py-3.5 font-sans text-[14px] focus:outline-none focus:border-[#c9a84c]/40 transition-colors duration-300'

  const labelClass = 'text-white/30 text-[10px] tracking-[0.35em] uppercase font-sans block mb-2'

  return (
    <section id="contact" className="py-32 px-6 bg-[#060606]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-[10px] tracking-[0.55em] uppercase font-sans">
              Book With Us
            </span>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-bold text-white mt-5">
              Get in Touch
            </h2>
            <div className="h-px w-14 bg-[#c9a84c] mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <Reveal>
            <div>
              <p className="text-white/35 font-sans leading-[1.9] mb-14 text-[15px] max-w-md">
                Ready for the finest barbershop experience in New York? Book your appointment online or call us directly. Walk-ins are welcome, though we recommend scheduling in advance.
              </p>

              <div className="space-y-9">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-5">
                    <div className="pt-[3px] shrink-0">
                      <div className="w-[5px] h-[5px] rotate-45 bg-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="text-white/25 text-[10px] tracking-[0.4em] uppercase font-sans mb-2">
                        {item.label}
                      </div>
                      <div className="text-white/70 font-sans text-[14px] leading-[1.75] whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-20">
                <div className="w-10 h-px bg-[#c9a84c] mb-8" />
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Request Received
                </h3>
                <p className="text-white/40 font-sans text-[15px] leading-relaxed">
                  Thank you for reaching out. A member of our team will confirm your appointment within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input type="text" className={inputClass} placeholder="James" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input type="text" className={inputClass} placeholder="Thompson" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="james@example.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="(212) 000-0000"
                  />
                </div>

                <div>
                  <label className={labelClass}>Service</label>
                  <select
                    className={`${inputClass} text-white/40 appearance-none cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>The Signature Cut — $65</option>
                    <option>Royal Shave — $55</option>
                    <option>Beard Sculpt — $45</option>
                    <option>The Sovereign Package — $120</option>
                    <option>Gray Blending — $75</option>
                    <option>Junior&apos;s Cut — $35</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input type="date" className={`${inputClass} text-white/40`} />
                </div>

                <div>
                  <label className={labelClass}>Message (Optional)</label>
                  <textarea
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] text-black py-4 text-[11px] tracking-[0.35em] uppercase font-sans font-semibold hover:bg-[#e8d5a3] active:bg-[#b8943e] transition-colors duration-300 mt-2"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
