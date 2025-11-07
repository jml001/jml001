import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'BainUltra - Luxury Therapeutic Bathtubs',
  description: 'Discover BainUltra\'s premium therapeutic bathtubs with advanced wellness technologies. Transform your bathroom into a personal spa sanctuary.',
  keywords: 'bathtubs, therapeutic baths, luxury bathrooms, spa, wellness, BainUltra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-serif font-bold text-bainultra-primary">
                BainUltra
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-bainultra-primary transition-colors">
                  Home
                </a>
                <a href="/therapies" className="text-gray-700 hover:text-bainultra-primary transition-colors">
                  Therapies
                </a>
                <a href="/products" className="text-gray-700 hover:text-bainultra-primary transition-colors">
                  Products
                </a>
                <a href="/about" className="text-gray-700 hover:text-bainultra-primary transition-colors">
                  About
                </a>
              </div>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-bainultra-dark text-white py-12 mt-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">BainUltra</h3>
                <p className="text-gray-400">
                  Transforming bathrooms into personal spa sanctuaries since 1963.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/products?type=freestanding" className="hover:text-white">Freestanding</a></li>
                  <li><a href="/products?type=alcove" className="hover:text-white">Alcove</a></li>
                  <li><a href="/products?type=drop-in" className="hover:text-white">Drop-In</a></li>
                  <li><a href="/products?type=undermount" className="hover:text-white">Undermount</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Therapies</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/therapies#air" className="hover:text-white">Air Therapy</a></li>
                  <li><a href="/therapies#hydro" className="hover:text-white">Hydro Therapy</a></li>
                  <li><a href="/therapies#thermo" className="hover:text-white">Thermo Therapy</a></li>
                  <li><a href="/therapies#chromatherapy" className="hover:text-white">Chromatherapy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>1-800-463-2187</li>
                  <li>info@bainultra.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} BainUltra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
