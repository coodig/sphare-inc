// src/components/Sidebar.tsx

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed top-12 left-0 w-52 h-full bg-gray-900 text-white p-4 shadow-lg hidden sm:block">
      <nav className="space-y-3">
        <h2 className="text-lg font-semibold mb-4">Sphare Menu</h2>
        <Link href="/" className="block hover:text-pink-400">🏠 Dashboard</Link>
        <Link href="/view-all?type=products" className="block hover:text-pink-400">🛍 Products</Link>
        <Link href="/view-all?type=projects" className="block hover:text-pink-400">📁 Projects</Link>
        <Link href="/view-all?type=tools" className="block hover:text-pink-400">🛠 Tools</Link>
        <Link href="/docs" className="block hover:text-pink-400">📄 Docs</Link>
        <Link href="/about" className="block hover:text-pink-400">👤 About</Link>
        <Link href="/contact" className="block hover:text-pink-400">📬 Contact</Link>
      </nav>
    </aside>
  )
}
