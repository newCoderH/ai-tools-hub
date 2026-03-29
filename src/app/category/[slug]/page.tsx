import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import ToolCard from "@/components/ToolCard";
import { getCategoryBySlug, getToolsByCategory } from "@/lib/mockData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "分类未找到 - AI工具集" };
  }
  return {
    title: `${category.name} - AI工具集`,
    description: `${category.name}分类下的AI工具推荐与评测，${category.description}`,
    keywords: [category.name, "AI工具", "AI评测"],
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center py-20">
        <div className="text-6xl">🔍</div>
        <h1 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          分类未找到
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          未找到 slug 为 "{slug}" 的分类
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

  const tools = getToolsByCategory(slug);

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-3xl dark:from-indigo-900/50 dark:to-purple-900/50">
              {category.icon}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {category.name}
                </h1>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400">
                  {category.toolCount} 个工具
                </span>
              </div>
              {category.description && (
                <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Tool List */}
          <div className="min-w-0 flex-1">
            {/* Filter/Sort Bar */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                共 {tools.length} 个工具
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-zinc-500 dark:text-zinc-400">排序：</label>
                <select className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
                  <option>默认排序</option>
                  <option>按名称</option>
                  <option>按热度</option>
                </select>
              </div>
            </div>

            {/* Tools Grid */}
            {tools.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <ToolCard key={tool.slug} {...tool} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-700">
                <div className="text-4xl opacity-30">📦</div>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                  该分类下暂无工具
                </p>
              </div>
            )}

            {/* Bottom Ad */}
            <AdBanner size="mediumRectangle" />
          </div>

          {/* Sidebar Ad - WideSkyscraper (sticky) */}
          <AdBanner size="wideSkyscraper" className="sticky top-24" />
        </div>
      </div>
    </main>
  );
}
