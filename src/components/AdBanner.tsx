"use client";

import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      const ins = container.querySelector("ins");
      const hasIframe = ins && ins.querySelector("iframe");
      if (hasIframe) {
        setAdLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // 广告未加载时完全隐藏，不占任何空间
  if (!adLoaded) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`mx-auto flex justify-center py-6 overflow-hidden ${className}`}
    >
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
