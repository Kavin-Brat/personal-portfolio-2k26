"use client";

import React from "react";
import dynamic from "next/dynamic";

/**
 * CommandPaletteModal
 * 
 * Dynamically imported client-only search and keyboard navigation modal. 
 * Disabling SSR (ssr: false) reduces the initial JS bundle size and prevents 
 * hydration mismatches for interactive elements accessed on-demand.
 */
const CommandPaletteModal = dynamic(() => import("./CommandPaletteModal"), {
  ssr: false,
});

/**
 * OfflineToast
 * 
 * Network connection monitoring toast. Since tracking offline/online status 
 * relies on browser window listener APIs, we skip server-side pre-rendering.
 */
const OfflineToast = dynamic(
  () => import("./OfflineToast").then((mod) => mod.OfflineToast),
  { ssr: false }
);

/**
 * ToastContainer
 * 
 * Stack manager for dynamic event-bus toasts. Handles notification events 
 * on the client side without blocking initial page layout paints.
 */
const ToastContainer = dynamic(
  () => import("./ToastContainer").then((mod) => mod.ToastContainer),
  { ssr: false }
);

/**
 * ClientProviders Component
 * 
 * Groups secondary, interactive helper components requiring browser-only APIs.
 * This pattern isolates client-only runtime logic, keeping root layouts as clean 
 * Server Components and optimizing overall Time to Interactive (TTI).
 */
const ClientProviders: React.FC = () => {
  return (
    <>
      <CommandPaletteModal />
      <OfflineToast />
      <ToastContainer />
    </>
  );
};

export default ClientProviders;
