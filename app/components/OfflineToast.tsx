"use client";

import React, { useEffect, useState } from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

/**
 * OfflineToast Component
 * 
 * Non-intrusive floating toast notifying the user of their connectivity status:
 * - Slides in a red alert banner when connection drops.
 * - Changes to a green success banner once connection is restored.
 * - Auto-fades after a few seconds once reconnected.
 */
export const OfflineToast: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [hasReportedOffline, setHasReportedOffline] = useState<boolean>(false);

  useEffect(() => {
    if (!isOnline) {
      requestAnimationFrame(() => {
        setShouldShow(true);
        setHasReportedOffline(true);
      });
    } else {
      // Only show the reconnected state if they were offline beforehand
      if (hasReportedOffline) {
        requestAnimationFrame(() => {
          setShouldShow(true);
        });
        const timer = setTimeout(() => {
          setShouldShow(false);
          setHasReportedOffline(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOnline, hasReportedOffline]);

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-[100] animate-slide-in pointer-events-auto font-sans">
      {!isOnline ? (
        <div className="p-4 rounded-xl border border-rose-600 bg-rose-500 text-white shadow-2xl flex items-center gap-3 text-sm w-full sm:min-w-[280px] sm:max-w-sm">
          <svg className="w-5 h-5 flex-shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 4.978 4.978 0 011.414-3.536m0 0L11.314 11.3m-5.657 5.657l-2.828-2.829m2.828 2.829L3 21M6.343 6.343a9 9 0 010 12.728M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-left">
            <h4 className="font-bold">Offline Mode</h4>
            <p className="text-xs opacity-90">Please check your network connection.</p>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl border border-emerald-600 bg-emerald-500 text-white shadow-2xl flex items-center gap-3 text-sm w-full sm:min-w-[280px] sm:max-w-sm">
          <svg className="w-5 h-5 flex-shrink-0 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div className="text-left">
            <h4 className="font-bold">Connection Restored</h4>
            <p className="text-xs opacity-90">You are back online!</p>
          </div>
        </div>
      )}
    </div>
  );
};
