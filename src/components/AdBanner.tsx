import Script from "next/script";

interface AdBannerProps {
  size: "leaderboard" | "mediumRectangle" | "largeRectangle" | "wideSkyscraper";
  className?: string;
}

const adSlots = {
  leaderboard: "8598595844",
  mediumRectangle: "1546838429",
  largeRectangle: "1738613370",
  wideSkyscraper: "8299114888",
};

const sizeStyles = {
  leaderboard: { display: "block", width: "728px", height: "90px" },
  mediumRectangle: { display: "block", width: "300px", height: "250px" },
  largeRectangle: { display: "block", width: "336px", height: "280px" },
  wideSkyscraper: { display: "block", width: "160px", height: "600px" },
};

export default function AdBanner({ size, className = "" }: AdBannerProps) {
  return (
    <div className={`mx-auto ${className}`}>
      <ins
        className="adsbygoogle"
        style={sizeStyles[size]}
        data-ad-client="ca-pub-2278422245377911"
        data-ad-slot={adSlots[size]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`ad-${size}`} strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
