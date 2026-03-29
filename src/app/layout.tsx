import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI工具集 - 发现最好的 AI 工具",
  description: "中文最靠谱的 AI 工具评测平台，涵盖 AI 对话、AI 图像、AI 编程、AI 写作、AI 视频、AI 音频等各类工具的详细评测与对比。",
  keywords: ["AI工具", "人工智能", "AI评测", "AI对比", "ChatGPT", "Claude", "Midjourney"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
