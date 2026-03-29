import Link from "next/link";
import { getPricingColor, getPricingLabel } from "@/lib/mockData";

interface ToolCardProps {
  slug: string;
  name: string;
  description: string;
  categoryName?: string;
  categoryIcon?: string;
  pricing?: "free" | "freemium" | "paid";
  pricingNote?: string;
}

export default function ToolCard({
  slug,
  name,
  description,
  categoryName,
  categoryIcon,
  pricing,
  pricingNote,
}: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-900/50"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 text-lg dark:from-zinc-800 dark:to-zinc-700">
            {categoryIcon || "🤖"}
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-200">
              {name}
            </h3>
            {categoryName && (
              <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400">
                {categoryName}
              </p>
            )}
          </div>
        </div>
        {pricing && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${getPricingColor(pricing)}`}
          >
            {getPricingLabel(pricing)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      {/* Pricing note */}
      {pricingNote && (
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
          {pricingNote}
        </p>
      )}
    </Link>
  );
}
