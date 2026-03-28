interface AdBannerProps {
  size: "leaderboard" | "mediumRectangle" | "largeRectangle" | "wideSkyscraper";
  className?: string;
}

const sizeClasses = {
  leaderboard: "w-[728px] h-[90px]",
  mediumRectangle: "w-[300px] h-[250px]",
  largeRectangle: "w-[336px] h-[280px]",
  wideSkyscraper: "w-[160px] h-[600px]",
};

export default function AdBanner({ size, className = "" }: AdBannerProps) {
  return (
    <div
      className={`mx-auto flex items-center justify-center rounded-lg bg-zinc-100 text-xs text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600 ${sizeClasses[size]} ${className}`}
    >
      Ad ({size})
    </div>
  );
}
