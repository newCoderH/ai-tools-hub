"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";
import {
  getAllCategories,
  getFeaturedTools,
  getLatestTools,
  searchTools,
} from "@/lib/mockData";

const categories = getAllCategories();
const featuredTools = getFeaturedTools();
const latestTools = getLatestTools();

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchTools>>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setSearchResults(searchTools(query));
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-20 dark:from-zinc-900 dark:to-zinc-950">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-10 left-10 size-64 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 size-64 rounded-full bg-purple-400 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-600 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              <span>✨</span>
              <span>收录 {latestTools.length + featuredTools.length}+ 款 AI 工具</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              发现最好的 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI 工具</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              中文最靠谱的 AI 工具评测平台，帮你找到最适合的 AI 助手
            </p>

            {/* Search Box */}
            <div className="relative mt-8" ref={searchRef}>
              <div className="relative mx-auto max-w-xl">
                <svg
                  className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="搜索 AI 工具..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery.trim() && setShowResults(true)}
                  className="w-full rounded-xl border border-zinc-200 bg-white py-4 pl-12 pr-4 text-base shadow-sm transition-shadow focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-600 dark:focus:ring-indigo-900"
                />
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute left-1/2 z-50 mt-2 w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  {searchResults.slice(0, 6).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                      onClick={() => setShowResults(false)}
                    >
                      <span className="text-lg">{tool.categoryIcon}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-zinc-900 dark:text-zinc-100">
                          {tool.name}
                        </p>
                        <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                          {tool.categoryName}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {searchResults.length > 6 && (
                    <div className="border-t border-zinc-100 px-4 py-2 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                      还有 {searchResults.length - 6} 个结果
                    </div>
                  )}
                </div>
              )}
              {showResults && searchResults.length === 0 && searchQuery.trim() && (
                <div className="absolute left-1/2 z-50 mt-2 w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-xl border border-zinc-200 bg-white px-4 py-6 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="text-zinc-500 dark:text-zinc-400">未找到相关工具</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="flex justify-center py-6">
        <AdBanner size="leaderboard" />
      </div>

      {/* Category Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              浏览分类
            </h2>
            <p className="mt-1 text-zinc-500 dark:text-zinc-400">
              按照功能场景查找合适的 AI 工具
            </p>
          </div>
          <Link
            href="/category/ai-chat"
            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            查看全部
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      {/* Recommended Tools - Horizontal Scroll */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              ⭐ 推荐工具
            </h2>
            <p className="mt-1 text-zinc-500 dark:text-zinc-400">
              热门 AI 工具精选推荐
            </p>
          </div>
          <Link
            href="/category/ai-chat"
            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            查看更多
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
            {featuredTools.map((tool) => (
              <div key={tool.slug} className="w-[300px] shrink-0">
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <AdBanner size="mediumRectangle" />
        </div>
      </section>

      {/* Latest Tools - Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            🆕 最新工具
          </h2>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            最新收录的 AI 工具
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestTools.map((tool) => (
            <ToolCard key={tool.slug} {...tool} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <AdBanner size="mediumRectangle" />
        </div>
      </section>
    </main>
  );
}
