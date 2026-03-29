"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import AdBanner from "@/components/AdBanner";
import { getAllTools, searchTools } from "@/lib/mockData";

const allTools = getAllTools();

const allFeatures = [
  "免费使用",
  "API 支持",
  "多语言",
  "代码生成",
  "图像生成",
  "语音合成",
  "视频生成",
  "插件扩展",
  "团队协作",
  "本地部署",
];

// Assign features to tools based on category
function getToolFeatures(categorySlug: string) {
  const baseFeatures: Record<string, string[]> = {
    "ai-chat": ["免费使用", "API 支持", "多语言", "代码生成", "插件扩展"],
    "ai-image": ["免费使用", "API 支持", "多语言", "图像生成"],
    "ai-coding": ["免费使用", "API 支持", "多语言", "代码生成", "本地部署"],
    "ai-writing": ["免费使用", "API 支持", "多语言", "团队协作"],
    "ai-video": ["API 支持", "多语言", "视频生成"],
    "ai-audio": ["API 支持", "多语言", "语音合成"],
  };
  return baseFeatures[categorySlug] || ["免费使用", "API 支持", "多语言"];
}

interface ToolOption {
  slug: string;
  name: string;
  categoryName: string;
  categoryIcon: string;
  pricing: string;
  pricingNote?: string;
  categorySlug: string;
}

export default function ComparePage() {
  const [selectedA, setSelectedA] = useState<ToolOption | null>(null);
  const [selectedB, setSelectedB] = useState<ToolOption | null>(null);
  const [queryA, setQueryA] = useState("");
  const [queryB, setQueryB] = useState("");
  const [resultsA, setResultsA] = useState<ToolOption[]>([]);
  const [resultsB, setResultsB] = useState<ToolOption[]>([]);
  const [showDropdownA, setShowDropdownA] = useState(false);
  const [showDropdownB, setShowDropdownB] = useState(false);

  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (refA.current && !refA.current.contains(e.target as Node)) {
        setShowDropdownA(false);
      }
      if (refB.current && !refB.current.contains(e.target as Node)) {
        setShowDropdownB(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchA = (q: string) => {
    setQueryA(q);
    if (q.trim()) {
      setResultsA(searchTools(q));
      setShowDropdownA(true);
    } else {
      setShowDropdownA(false);
    }
  };

  const handleSearchB = (q: string) => {
    setQueryB(q);
    if (q.trim()) {
      setResultsB(searchTools(q));
      setShowDropdownB(true);
    } else {
      setShowDropdownB(false);
    }
  };

  const selectA = (tool: ToolOption) => {
    setSelectedA(tool);
    setQueryA(tool.name);
    setShowDropdownA(false);
  };

  const selectB = (tool: ToolOption) => {
    setSelectedB(tool);
    setQueryB(tool.name);
    setShowDropdownB(false);
  };

  const comparisonTools = [selectedA, selectedB]
    .filter(Boolean)
    .map((t) => ({
      ...t!,
      features: getToolFeatures(t!.categorySlug),
    })) as {
      name: string;
      slug: string;
      pricing: string;
      pricingNote?: string;
      rating?: number;
      features: string[];
    }[];

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            🔍 AI 工具对比
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            选择两个工具进行详细对比
          </p>
        </div>

        {/* Top Ad */}
        <AdBanner size="leaderboard" />

        {/* Tool Selectors */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {/* Selector A */}
          <div className="relative" ref={refA}>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              工具 A
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索第一个工具..."
                value={queryA}
                onChange={(e) => handleSearchA(e.target.value)}
                onFocus={() => queryA.trim() && setShowDropdownA(true)}
                className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm transition-shadow focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-600 dark:focus:ring-indigo-900"
              />
              <svg
                className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {showDropdownA && resultsA.length > 0 && (
              <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {resultsA.slice(0, 8).map((tool) => (
                  <button
                    key={tool.slug}
                    onClick={() => selectA(tool)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <span className="text-lg">{tool.categoryIcon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {tool.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                        {tool.categoryName}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selector B */}
          <div className="relative" ref={refB}>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              工具 B
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索第二个工具..."
                value={queryB}
                onChange={(e) => handleSearchB(e.target.value)}
                onFocus={() => queryB.trim() && setShowDropdownB(true)}
                className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm transition-shadow focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-600 dark:focus:ring-indigo-900"
              />
              <svg
                className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {showDropdownB && resultsB.length > 0 && (
              <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                {resultsB.slice(0, 8).map((tool) => (
                  <button
                    key={tool.slug}
                    onClick={() => selectB(tool)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <span className="text-lg">{tool.categoryIcon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {tool.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                        {tool.categoryName}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Selected Tools Info */}
        {(selectedA || selectedB) && (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            {selectedA ? (
              <Link
                href={`/tools/${selectedA.slug}`}
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                <span>{selectedA.categoryIcon}</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {selectedA.name}
                </span>
              </Link>
            ) : (
              <div className="rounded-lg border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-400 dark:border-zinc-700">
                请选择工具 A
              </div>
            )}
            <span className="text-zinc-400">VS</span>
            {selectedB ? (
              <Link
                href={`/tools/${selectedB.slug}`}
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              >
                <span>{selectedB.categoryIcon}</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {selectedB.name}
                </span>
              </Link>
            ) : (
              <div className="rounded-lg border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-400 dark:border-zinc-700">
                请选择工具 B
              </div>
            )}
          </div>
        )}

        {/* Comparison Table */}
        <ComparisonTable tools={comparisonTools} features={allFeatures} />

        {/* Quick Select */}
        {!selectedA && !selectedB && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              💡 快速选择热门工具
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {allTools.slice(0, 6).map((tool) => (
                <button
                  key={tool.slug}
                  onClick={() => {
                    if (!selectedA) {
                      selectA(tool);
                    } else if (!selectedB) {
                      selectB(tool);
                    }
                  }}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-left transition-all hover:border-indigo-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700"
                >
                  <span className="text-2xl">{tool.categoryIcon}</span>
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">
                      {tool.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {tool.categoryName}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Ad */}
        <AdBanner size="mediumRectangle" />
      </div>
    </main>
  );
}
