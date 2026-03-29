import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import ToolCard from "@/components/ToolCard";
import { getToolBySlug, getRelatedTools, getPricingColor, getPricingLabel } from "@/lib/mockData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
    return { title: "工具未找到 - AI工具集" };
  }
  return {
    title: `${tool.name} - AI工具集`,
    description: tool.description,
    keywords: [tool.name, tool.categoryName, "AI工具", "AI评测"],
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center py-20">
        <div className="text-6xl">🔍</div>
        <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          工具未找到
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          未找到 slug 为 "{slug}" 的工具
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          返回首页
        </Link>
      </main>
    );
  }

  const relatedTools = getRelatedTools(slug, tool.categorySlug, 4);

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        {/* Tool Header */}
        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Logo */}
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-3xl dark:from-indigo-900/50 dark:to-purple-900/50">
              {tool.categoryIcon}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {tool.name}
                </h1>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getPricingColor(tool.pricing)}`}
                >
                  {getPricingLabel(tool.pricing)}
                </span>
              </div>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                {tool.categoryName}
              </p>
              <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                {tool.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                {tool.website && (
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
                  >
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    访问官网
                  </a>
                )}
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  🔄 对比工具
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Banner - Below Header */}
        <div className="mb-8 flex justify-center">
          <AdBanner size="leaderboard" />
        </div>

        {/* Price Info */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              💰 定价信息
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">定价类型</span>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                  {getPricingLabel(tool.pricing)}
                </span>
              </div>
              {tool.pricingNote && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">具体价格</span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {tool.pricingNote}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              📝 详细介绍
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              🔗 相关工具推荐
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTools.map((t) => (
                <ToolCard key={t.slug} {...t} />
              ))}
            </div>
          </section>
        )}

        {/* Bottom Ad */}
        <div className="flex justify-center">
          <AdBanner size="largeRectangle" />
        </div>
      </div>
    </main>
  );
}
