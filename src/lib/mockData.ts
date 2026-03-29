// Mock data helpers for client-side usage (without Supabase)
import { seedTools, seedCategories, type SeedTool, type SeedCategory } from "./seed";

// Helper to get all tools
export function getAllTools(): (SeedTool & { categoryName: string; categoryIcon: string })[] {
  return seedTools.map((tool) => {
    const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
    return {
      ...tool,
      categoryName: cat?.name || tool.categorySlug,
      categoryIcon: cat?.icon || "📦",
    };
  });
}

// Helper to get tool by slug
export function getToolBySlug(slug: string) {
  const tool = seedTools.find((t) => t.slug === slug);
  if (!tool) return null;
  const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
  return {
    ...tool,
    categoryName: cat?.name || tool.categorySlug,
    categoryIcon: cat?.icon || "📦",
  };
}

// Helper to get all categories with tool counts
export function getAllCategories() {
  return seedCategories.map((cat) => ({
    ...cat,
    toolCount: seedTools.filter((t) => t.categorySlug === cat.slug).length,
  }));
}

// Helper to get category by slug
export function getCategoryBySlug(slug: string) {
  const cat = seedCategories.find((c) => c.slug === slug);
  if (!cat) return null;
  return {
    ...cat,
    toolCount: seedTools.filter((t) => t.categorySlug === cat.slug).length,
  };
}

// Helper to get tools by category slug
export function getToolsByCategory(categorySlug: string) {
  return seedTools
    .filter((t) => t.categorySlug === categorySlug)
    .map((tool) => {
      const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
      return {
        ...tool,
        categoryName: cat?.name || tool.categorySlug,
        categoryIcon: cat?.icon || "📦",
      };
    });
}

// Helper to get related tools (same category, different slug)
export function getRelatedTools(slug: string, categorySlug: string, limit = 4) {
  return seedTools
    .filter((t) => t.categorySlug === categorySlug && t.slug !== slug)
    .slice(0, limit)
    .map((tool) => {
      const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
      return {
        ...tool,
        categoryName: cat?.name || tool.categorySlug,
        categoryIcon: cat?.icon || "📦",
      };
    });
}

// Helper to get featured/recommended tools (ChatGPT, Claude, Minimax, GLM)
export function getFeaturedTools() {
  const featuredSlugs = ["chatgpt", "claude", "minimax", "glm"];
  return seedTools
    .filter((tool) => featuredSlugs.includes(tool.slug))
    .map((tool) => {
      const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
      return {
        ...tool,
        categoryName: cat?.name || tool.categorySlug,
        categoryIcon: cat?.icon || "📦",
      };
    });
}

// Helper to get latest tools (last 6)
export function getLatestTools() {
  return seedTools.slice(-6).map((tool) => {
    const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
    return {
      ...tool,
      categoryName: cat?.name || tool.categorySlug,
      categoryIcon: cat?.icon || "📦",
    };
  });
}

// Search tools by name or description
export function searchTools(query: string) {
  const q = query.toLowerCase();
  return seedTools
    .filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.categorySlug.toLowerCase().includes(q)
    )
    .map((tool) => {
      const cat = seedCategories.find((c) => c.slug === tool.categorySlug);
      return {
        ...tool,
        categoryName: cat?.name || tool.categorySlug,
        categoryIcon: cat?.icon || "📦",
      };
    });
}

// Pricing badge colors
export function getPricingColor(pricing: string): string {
  switch (pricing) {
    case "free":
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case "freemium":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    case "paid":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
  }
}

export function getPricingLabel(pricing: string): string {
  switch (pricing) {
    case "free":
      return "免费";
    case "freemium":
      return "Freemium";
    case "paid":
      return "付费";
    default:
      return pricing;
  }
}
