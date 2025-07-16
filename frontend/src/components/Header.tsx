'use client'

import Link from 'next/link';

import ThemeToggle from '../components/ThemeToogle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-200 text-black flex items-center justify-between px-7 py-1 shadow text-sm sm:text-base">
      
      {/* LEFT: Logo */}
      <Link href="/" className="text-2xl font-bold">
        Sphare Inc
      </Link>

      {/* <div className='bg-amber-50 px-1  border-gray-300 '> */}
      <div className="border border-gray-300 rounded-md shadow-sm hover:shadow-md bg-transparent flex items-center px-3 py-1  max-w-sm focus-within:ring-2 focus-within:ring-gray-500 transition">
  <input
    type="text"
    name="search_bar"
    id="search_bar"
    placeholder="Search..."
    className="outline-none bg-transparent text-gray-800 placeholder-gray-400"
  />
</div>


      {/* CENTER: Nav links */}
      <nav className="hidden md:flex gap-5 ml-4">
        <Link href="/" className="block hover:text-pink-400">Dashboard</Link>
        <Link href="/view-all?type=products" className="hover:underline">Products</Link>
        <Link href="/view-all?type=projects" className="hover:underline">Projects</Link>
        <Link href="/view-all?type=tools" className="hover:underline">Tools</Link>
        <Link href="/docs" className="hover:underline">Docs</Link>
      </nav>

      {/* RIGHT: Theme + Auth */}
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        {/* <Link href="/login" className="hover:underline text-sm sm:text-base">
          Login
        </Link> */}
      </div>
    </header>
  )
}
