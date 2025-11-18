import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
      onClick={() => setTheme(next)}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
    </button>
  )
}
