import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/30 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900 dark:text-white">Portfolio</a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/80 transition-colors">Get in touch</a>
          </div>
          <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/80 dark:bg-black/50 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-gray-800 dark:text-gray-200">
                {item.label}
              </a>
            ))}
            <div className="py-2"><ThemeToggle /></div>
          </div>
        </div>
      )}
    </header>
  )
}
