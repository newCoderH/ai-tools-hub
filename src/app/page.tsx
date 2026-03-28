import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";

const sampleTools = [
  { slug: "claude", name: "Claude", description: "Anthropic's AI assistant", category: "LLM" },
  { slug: "chatgpt", name: "ChatGPT", description: "OpenAI's conversational AI", category: "LLM" },
  { slug: "gemini", name: "Gemini", description: "Google's multimodal AI", category: "LLM" },
];

const sampleCategories = [
  { slug: "llm", name: "Large Language Models", description: "Text generation and conversation", toolCount: 12 },
  { slug: "image", name: "Image Generation", description: "Create and edit images with AI", toolCount: 8 },
  { slug: "code", name: "Code Assistants", description: "AI-powered coding tools", toolCount: 6 },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <AdBanner size="leaderboard" />
          </div>
          <h1 className="mb-8 text-center text-4xl font-bold">AI Tools Directory</h1>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sampleCategories.map((category) => (
                <CategoryCard key={category.slug} {...category} />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <AdBanner size="mediumRectangle" />
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold">Popular Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sampleTools.map((tool) => (
                <ToolCard key={tool.slug} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
