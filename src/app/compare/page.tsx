import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import ComparisonTable from "@/components/ComparisonTable";

const sampleTools = [
  {
    name: "Claude",
    slug: "claude",
    pricing: "Free / $20/mo",
    rating: 4.8,
    features: ["Text Generation", "Code Review", "Long Context"],
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    pricing: "Free / $20/mo",
    rating: 4.7,
    features: ["Text Generation", "Code Review", "Plugins"],
  },
  {
    name: "Gemini",
    slug: "gemini",
    pricing: "Free / $20/mo",
    rating: 4.6,
    features: ["Text Generation", "Code Review", "Multimodal"],
  },
];

const sampleFeatures = ["Text Generation", "Code Review", "Long Context", "Plugins", "Multimodal"];

export default function ComparePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>
        <h1 className="text-3xl font-bold mb-8">Compare AI Tools</h1>
        <div className="mb-8 flex justify-center">
          <AdBanner size="mediumRectangle" />
        </div>
        <ComparisonTable tools={sampleTools} features={sampleFeatures} />
      </main>
      <Footer />
    </div>
  );
}
