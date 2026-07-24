"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

/**
 * SkeletonLoader Component
 * 
 * Renders a customizable shimmering loading placeholder.
 * Prevents Cumulative Layout Shift (CLS) during asynchronous client side hydration.
 */
export const SkeletonLoader: React.FC<SkeletonProps> = ({
  className = "",
  variant = "rectangular",
}) => {
  const baseStyle = "animate-pulse bg-slate-200 dark:bg-slate-850/60";
  
  const shapeStyles = {
    text: "h-3 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-xl",
  }[variant];

  return <div className={`${baseStyle} ${shapeStyles} ${className}`} />;
};

/**
 * BlogTeaserSkeleton Component
 * 
 * Custom grid shimmer placeholder mimicking the real BlogTeaser component items.
 */
export const BlogTeaserSkeleton: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 text-left w-full">
      {[1, 2, 3].map((val) => (
        <div
          key={val}
          className="p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 space-y-4 flex flex-col justify-between h-[190px]"
        >
          <div className="space-y-3">
            {/* Tag Shimmer */}
            <SkeletonLoader variant="text" className="w-20" />
            {/* Title Shimmer */}
            <SkeletonLoader variant="rectangular" className="h-5 w-5/6" />
            {/* Body Description Shimmer Lines */}
            <div className="space-y-2 pt-2">
              <SkeletonLoader variant="text" className="w-full" />
              <SkeletonLoader variant="text" className="w-11/12" />
            </div>
          </div>
          {/* Footer Card Shimmer */}
          <SkeletonLoader variant="text" className="w-16 h-3 mt-4" />
        </div>
      ))}
    </div>
  );
};
