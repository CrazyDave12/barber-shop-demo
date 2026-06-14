import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Sovereign — Premier Barbershop, New York',
  description:
    'Where Precision Meets Prestige. New York\'s finest barbershop since 2009. Classic cuts, hot towel shaves, and expert beard sculpting.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#080808] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
