"use client";

import React, { useEffect } from "react";

interface SecurityShieldProps {
  children: React.ReactNode;
}

export default function SecurityShield({ children }: SecurityShieldProps) {
  useEffect(() => {
    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent dragging images or links
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.tagName === "A") {
        e.preventDefault();
      }
    };

    // 3. Prevent text selection via JS as a fallback
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // 4. Intercept DevTools and source viewing keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      
      // F12 key
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I or Cmd+Opt+I (Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J or Cmd+Opt+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C or Cmd+Opt+C (Inspect Element cursor)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        return false;
      }

      // Ctrl+U or Cmd+Opt+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return false;
      }

      // Ctrl+S or Cmd+S (Save page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="select-none no-copy-protect w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}
