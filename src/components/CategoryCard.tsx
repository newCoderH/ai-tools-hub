import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  description: string;
  toolCount: number;
}

export default function CategoryCard({ slug, name, description, toolCount }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="group block rounded-lg border p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <h3 className="font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
        {name}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">{toolCount} tools</p>
    </Link>
  );
}
