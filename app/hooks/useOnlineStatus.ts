"use client";

import { useState, useEffect } from "react";

/**
 * useOnlineStatus Hook
 * 
 * Subscribes to browser 'online' and 'offline' events to dynamically track
 * user network connectivity. Safe for Server-Side Rendering (SSR).
 */
export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return navigator.onLine;
    }
    return true; // Fallback to online during SSR to prevent layout hydration mismatches
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Sync state immediately on mount (deferred to prevent render cascade)
    requestAnimationFrame(() => {
      setIsOnline(navigator.onLine);
    });

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
