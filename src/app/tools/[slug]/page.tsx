import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <AdBanner size="leaderboard" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Tool: {slug}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Tool details page for {slug}
        </p>
      </main>
      <Footer />
    </div>
  );
}
