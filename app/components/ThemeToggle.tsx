"use client";

import React, { useEffect, useState, useCallback } from "react";

/**
 * Helper utility to safely apply data-theme attributes and classes to documentElement.
 * Encapsulates client-side DOM alterations to prevent redundant code.
 */
const applyTheme = (theme: "light" | "dark"): void => {
  try {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (error) {
    // Suppress SSR/environment errors silently
  }
};

/**
 * ThemeToggle Component
 * 
 * Interactive floating action button toggling light & dark modes.
 * Synchronizes state dynamically across multiple toggle instances on the same page.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState<boolean>(false);

  // Load saved theme or system preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = saved || (systemPrefersDark ? "dark" : "light");
      
      setTheme(initialTheme);
      applyTheme(initialTheme);
      setMounted(true);
    } catch (e) {
      setMounted(true); // Ensure component remains functional if localStorage fails
    }
  }, []);

  // Listen to synchronisation events from other theme toggles on the page
  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<"light" | "dark">;
      if (customEvent.detail && customEvent.detail !== theme) {
        setTheme(customEvent.detail);
      }
    };

    window.addEventListener("theme-toggle-sync", handleSync);
    return () => {
      window.removeEventListener("theme-toggle-sync", handleSync);
    };
  }, [theme]);

  // Handle local state theme updates to persistent storage and DOM attributes
  useEffect(() => {
    if (!mounted) return;
    try {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    } catch (e) {
      // Suppress exceptions
    }
  }, [theme, mounted]);

  // Click handler to toggle theme and broadcast sync state
  const toggle = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation(); // Prevents side sidebar navigation close triggers
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.dispatchEvent(
      new CustomEvent("theme-toggle-sync", { detail: nextTheme })
    );
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light Mode" : "Dark Mode"}
    >
      {theme === "dark" ? (
        // sun icon (shows when currently dark, to switch to light)
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L3.51 3.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.49 20.49l-1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        // moon icon (shows when currently light, to switch to dark)
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
