import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            AI Tools Proposal
          </p>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
              Home
            </Link>
            <Link href="/compare" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
              Compare
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
