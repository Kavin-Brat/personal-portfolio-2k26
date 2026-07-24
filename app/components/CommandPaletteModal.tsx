"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "info";
}

/**
 * CommandPaletteModal Component
 * 
 * A unified developer terminal and command palette modal widget.
 * Only activated/rendered on Desktop viewports (1280px and above).
 * Keybind triggers: Ctrl+K, Cmd+K, or `/`
 */
export default function CommandPaletteModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"actions" | "terminal">("actions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { text: "Welcome to Kavin's Portfolio CLI v1.0.0", type: "success" },
    { text: "Type 'help' to see list of available commands.", type: "info" },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Memoized close handler to maintain reference integrity
  const onClose = useCallback((): void => {
    setIsOpen(false);
  }, []);

  // Memoized command palette actions registry registry database
  const actions = useMemo(() => [
    { id: "nav-home", title: "Go to Home", subtitle: "Scroll to top hero section", category: "Navigation", action: () => { router.push("/#home"); onClose(); } },
    { id: "nav-about", title: "Go to About", subtitle: "Read my background and experience summary", category: "Navigation", action: () => { router.push("/#about"); onClose(); } },
    { id: "nav-exp", title: "Go to Experience", subtitle: "View my professional career timeline", category: "Navigation", action: () => { router.push("/#experience"); onClose(); } },
    { id: "nav-blog", title: "Go to Blog", subtitle: "Check out my latest dev articles", category: "Navigation", action: () => { router.push("/#blog"); onClose(); } },
    { id: "nav-contact", title: "Go to Contact", subtitle: "Get in touch or send an email", category: "Navigation", action: () => { router.push("/#contact"); onClose(); } },
    { id: "action-resume", title: "Download Resume", subtitle: "Open/Download my latest resume PDF", category: "Actions", action: () => { window.open("/KavinBarathS_Resume.pdf", "_blank"); onClose(); } },
    { id: "action-theme", title: "Toggle Theme", subtitle: "Switch between dark and light modes", category: "Actions", action: () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        window.dispatchEvent(new CustomEvent("theme-toggle-sync", { detail: nextTheme }));
      }
    },
  ], [router, onClose]);

  // Memoized action filtering to prevent calculations during unrelated renders
  const filteredActions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return actions.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.subtitle.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query)
    );
  }, [actions, searchQuery]);

  // Reset keyboard index when search input value changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Auto-scroll CLI terminal buffer to bottom
  useEffect(() => {
    if (activeTab === "terminal") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, activeTab]);

  // Focus input element automatically when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
      setTerminalInput("");
      setSelectedIndex(0);
    }
  }, [isOpen, activeTab]);

  // Scroll active item smoothly into view if it overflows menu container viewport
  useEffect(() => {
    if (isOpen && activeTab === "actions") {
      const activeEl = document.getElementById(`palette-action-${selectedIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex, isOpen, activeTab]);

  // Global keybind listeners (Ctrl/Cmd + K, or '/') and viewport resize listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore mobile, tablet, and small laptop devices (< 1280px width)
      if (window.innerWidth < 1280) return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }
      if (e.key === "/" && !isOpen && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsOpen(true);
        return;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
        return;
      }

      // Tab switcher keybind
      if (isOpen && e.key === "Tab") {
        e.preventDefault();
        setActiveTab((prev) => (prev === "actions" ? "terminal" : "actions"));
        return;
      }

      // Keyboard navigation for Command Menu Actions
      if (isOpen && activeTab === "actions" && filteredActions.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === "Enter") {
          e.preventDefault();
          const target = filteredActions[selectedIndex];
          if (target) target.action();
        }
      }
    };

    const handleToggle = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen((prev) => !prev);
      }
    };

    // Close palette if screen is resized below 1280px
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleToggle);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleToggle);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, activeTab, filteredActions, selectedIndex, onClose]);

  // Process CLI console commands
  const handleTerminalSubmit = useCallback((e: React.FormEvent): void => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `kavin-portfolio$ ${terminalInput}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        newHistory.push(
          { text: "Available commands:", type: "info" },
          { text: "  about       - Displays brief elevator bio summary", type: "info" },
          { text: "  skills      - Lists core technical expertise stack", type: "info" },
          { text: "  projects    - Lists featured development highlights", type: "info" },
          { text: "  theme       - Toggles between light and dark themes", type: "info" },
          { text: "  resume      - Downloads Kavin's resume PDF", type: "info" },
          { text: "  clear       - Clears CLI terminal output log history", type: "info" },
          { text: "  exit        - Closes command palette modal", type: "info" }
        );
        break;
      case "about":
        newHistory.push({
          text: "Kavin Barath - Senior Full-Stack Engineer specializing in React.js, Next.js, and high-performance micro-frontends.",
          type: "output",
        });
        break;
      case "skills":
        newHistory.push(
          { text: "Frontend: React.js, Next.js, TypeScript, Tailwind CSS", type: "output" },
          { text: "Backend: Node.js, Express, REST APIs, Python", type: "output" },
          { text: "Expertise: Enterprise Fintech, Micro Frontends, High-Volume Data Systems", type: "output" }
        );
        break;
      case "projects":
        newHistory.push(
          { text: "Featured Projects:", type: "output" },
          { text: "  - Fintech dashboard (real-time high-throughput metrics)", type: "output" },
          { text: "  - Personal Portfolio 2026 (Modern glassmorphism)", type: "output" }
        );
        break;
      case "theme":
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        window.dispatchEvent(new CustomEvent("theme-toggle-sync", { detail: nextTheme }));
        newHistory.push({ text: `Theme successfully switched to ${nextTheme} mode!`, type: "success" });
        break;
      case "resume":
        window.open("/KavinBarathS_Resume.pdf", "_blank");
        newHistory.push({ text: "Opening Resume PDF in a new browser tab...", type: "success" });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "exit":
        onClose();
        return;
      default:
        newHistory.push({ text: `Error: Command not found: '${cmd}'. Type 'help' for support.`, type: "error" });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  }, [terminalInput, terminalHistory, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] transition-all duration-300 transform scale-100">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 p-2 gap-2 bg-slate-50/50 dark:bg-slate-950/40">
          <button
            onClick={() => setActiveTab("actions")}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
              activeTab === "actions"
                ? "bg-slate-900 text-white dark:bg-white/10 dark:text-white border-amber-500 dark:border-amber-400"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border-transparent"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Command Menu
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
              activeTab === "terminal"
                ? "bg-slate-900 text-white dark:bg-white/10 dark:text-white border-amber-500 dark:border-amber-400"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border-transparent"
            }`}
          >
            <svg className="w-4 h-4 font-mono" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Developer CLI
          </button>
        </div>

        {/* Tab Content Panel */}
        {activeTab === "actions" ? (
          /* ACTION MENU VIEW */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command or section..."
                className="w-full bg-transparent border-none text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-0 placeholder-slate-400"
              />
            </div>

            {/* Actions List Grid */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, idx) => (
                  <button
                    id={`palette-action-${idx}`}
                    key={action.id}
                    onClick={action.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group border-2 ${
                      selectedIndex === idx
                        ? "bg-slate-100 dark:bg-slate-800/80 border-amber-500/80 dark:border-amber-400/80 text-amber-600 dark:text-amber-400 shadow-md"
                        : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/30 text-slate-800 dark:text-slate-100"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300/40 dark:border-slate-700/60">
                          {action.category}
                        </span>
                        <h4 className={`text-sm font-semibold transition-colors ${
                          selectedIndex === idx
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-slate-800 dark:text-slate-100"
                        }`}>
                          {action.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {action.subtitle}
                      </p>
                    </div>
                    <svg className={`w-4 h-4 transition-all ${
                      selectedIndex === idx ? "opacity-100 translate-x-1 text-amber-500" : "opacity-0 text-slate-400"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))
              ) : (
                <div className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
                  No matching shortcuts found.
                </div>
              )}
            </div>
          </div>
        ) : (
          /* DEV TERMINAL CLI VIEW */
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-950 text-slate-100 font-mono text-xs p-4">
            {/* Terminal Buffer */}
            <div className="flex-grow overflow-y-auto space-y-1.5 select-text pr-2 leading-relaxed">
              {terminalHistory.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === "input"
                      ? "text-cyan-400 font-semibold"
                      : line.type === "error"
                      ? "text-rose-400"
                      : line.type === "success"
                      ? "text-emerald-400"
                      : line.type === "info"
                      ? "text-slate-400"
                      : "text-slate-300"
                  }
                >
                  {line.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Prompt Console Form */}
            <form onSubmit={handleTerminalSubmit} className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
              <span className="text-cyan-400 font-bold select-none">kavin-portfolio$</span>
              <input
                ref={inputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help'..."
                className="flex-grow bg-transparent border-none text-slate-100 focus:outline-none focus:ring-0 caret-cyan-400"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </form>
          </div>
        )}

        {/* Modal Footer Keybind Tips */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/40 select-none">
          <div className="flex gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm font-sans font-semibold">ESC</kbd> Close
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm font-sans font-semibold">Tab</kbd> Switch Tab
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm font-sans font-semibold">↓↑</kbd> Navigate
            </span>
          </div>
          <div>
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm font-sans font-semibold">Ctrl+K</kbd> anywhere</span>
          </div>
        </div>
      </div>
    </div>
  );
}
