"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">AI Tools</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
            Home
          </Link>
          <Link href="/compare" className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300">
            Compare
          </Link>
        </nav>
      </div>
    </header>
  );
}
