'use client'

import {
  useEffect,
  useState,
} from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement

    if (isDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }

    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
