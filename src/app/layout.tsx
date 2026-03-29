import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI工具集 - 发现最好的 AI 工具",
  description: "中文最靠谱的 AI 工具评测平台，涵盖 AI 对话、AI 图像、AI 编程、AI 写作、AI 视频、AI 音频等各类工具的详细评测与对比。",
  keywords: ["AI工具", "人工智能", "AI评测", "AI对比", "ChatGPT", "Claude", "Midjourney"],
  openGraph: {
    title: "AI工具集 - 发现最好的 AI 工具",
    description: "中文最靠谱的 AI 工具评测平台，涵盖 AI 对话、AI 图像、AI 编程、AI 写作、AI 视频、AI 音频等各类工具的详细评测与对比。",
    type: "website",
    url: "https://adsense.hswlab.cc",
    siteName: "AI工具集",
    images: [
      {
        url: "https://adsense.hswlab.cc/og-image.png",
        width: 1200,
        height: 1200,
        alt: "AI工具集 - 发现最好的 AI 工具",
      },
    ],
  },
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
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2278422245377911"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
