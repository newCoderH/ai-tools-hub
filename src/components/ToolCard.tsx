import Link from "next/link";

interface ToolCardProps {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export default function ToolCard({ slug, name, description, category }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="group block rounded-lg border p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
          {name}
        </h3>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{category}</span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </Link>
  );
}
