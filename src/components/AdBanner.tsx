interface AdBannerProps {
  size: "leaderboard" | "mediumRectangle" | "largeRectangle" | "wideSkyscraper";
  className?: string;
}

const adSizes = {
  leaderboard: { width: 728, height: 90 },
  mediumRectangle: { width: 300, height: 250 },
  largeRectangle: { width: 336, height: 280 },
  wideSkyscraper: { width: 160, height: 600 },
};

const sizeClasses = {
  leaderboard: "w-full max-w-[728px] h-[90px]",
  mediumRectangle: "w-[300px] h-[250px]",
  largeRectangle: "w-[336px] h-[280px]",
  wideSkyscraper: "w-[160px] h-[600px]",
};

const labelNames = {
  leaderboard: "728×90 Leaderboard",
  mediumRectangle: "300×250 中矩形",
  largeRectangle: "336×280 大矩形",
  wideSkyscraper: "160×600 宽摩天楼",
};

export default function AdBanner({ size, className = "" }: AdBannerProps) {
  const { width, height } = adSizes[size];

  return (
    <div
      className={`mx-auto flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 ${sizeClasses[size]} ${className}`}
      style={{
        minWidth: width,
        minHeight: height,
      }}
    >
      <div className="text-center">
        <div className="text-lg opacity-30">📢</div>
        <div className="mt-1 font-medium">{labelNames[size]}</div>
        <div className="mt-0.5 opacity-50">广告位 · AdSense</div>
      </div>
    </div>
  );
}
