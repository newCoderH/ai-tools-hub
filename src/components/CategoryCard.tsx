import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
  toolCount: number;
}

export default function CategoryCard({
  slug,
  name,
  description,
  icon,
  toolCount,
}: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-900/50"
    >
      {/* Icon */}
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-2xl transition-transform duration-200 group-hover:scale-110 dark:from-indigo-900/50 dark:to-purple-900/50">
        {icon || "📦"}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
            {name}
          </h3>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {toolCount}
          </span>
        </div>
        {description && (
          <p className="mt-1 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>

      {/* Arrow */}
      <svg
        className="size-5 shrink-0 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-indigo-600 dark:text-zinc-600 dark:group-hover:text-indigo-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
