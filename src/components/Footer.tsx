import Link from "next/link";

const footerLinks = {
  产品: [
    { href: "/", label: "首页" },
    { href: "/category/ai-chat", label: "AI对话" },
    { href: "/category/ai-image", label: "AI图像" },
    { href: "/category/ai-coding", label: "AI编程" },
  ],
  资源: [
    { href: "/category/ai-writing", label: "AI写作" },
    { href: "/category/ai-video", label: "AI视频" },
    { href: "/category/ai-audio", label: "AI音频" },
  ],
  关于: [
    { href: "/compare", label: "工具对比" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                AI工具集
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              中文最靠谱的 AI 工具评测平台，帮助你发现和选择最适合的 AI 工具。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AI工具集. 保留所有权利.</p>
          <div className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              隐私政策
            </Link>
            <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              使用条款
            </Link>
            <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
