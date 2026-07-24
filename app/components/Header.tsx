"use client";

import React, { memo, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV_ITEMS } from "../constants/headerConstants";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // coords: Stores the bounding box coordinates (offsetLeft & offsetWidth) of the currently active navigation item.
  // This is used to dynamically position and scale the sliding highlight background pill.
  const [coords, setCoords] = useState<{ left: number; width: number } | null>(null);
  
  // navRef: Reference hook pointing to the desktop <nav> wrapper container.
  // It is utilized to locate the active list item and compute offsets relative to the menu structure.
  const navRef = React.useRef<HTMLDivElement>(null);

  // Dynamic Horizontal Sliding Pill Highlight Orchestrator
  // Listens to shifts in activeHash, locating the newly activated navigation element and setting its coordinates.
  useEffect(() => {
    const updateCoords = () => {
      if (!navRef.current) return;
      
      // Query the DOM child inside the nav wrapper container that matches data-active="true"
      const activeLink = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeLink) {
        setCoords({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      } else {
        setCoords(null);
      }
    };

    // Calculate initial coordinates on mount/update
    updateCoords();

    // ResizeObserver: Track dynamic browser layout resizes or screen rotations.
    // This dynamically updates the pill's left offset and width, preventing position mismatch bugs.
    const observer = new ResizeObserver(() => {
      updateCoords();
    });
    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeHash]);

  useEffect(() => {
    if (pathname !== "/") {
      requestAnimationFrame(() => setActiveHash(pathname));
      return;
    }

    const sections = ["home", "about", "experience", "blog", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveHash(`/#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveHash("/");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const isActive = useCallback((href: string): boolean => {
    if (href === "/") {
      return activeHash === "/" || activeHash === "/#home" || activeHash === "";
    }
    return activeHash === href;
  }, [activeHash]);

  const handleNavLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    if (pathname === "/") {
      if (href.startsWith("/#")) {
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveHash(href);
        }
        closeMenu();
      } else if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveHash("/");
        closeMenu();
      }
    } else {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  return (
    <>
      <header className="md:fixed absolute top-0 left-0 w-full z-50 backdrop-blur-md border-b-[0.5px] border-slate-200/10 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <span className="text-slate-900 dark:text-white uppercase">{BRAND}</span>
            <span className="text-amber-500 font-extrabold text-2xl leading-none">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden md:flex gap-1 bg-slate-900/5 dark:bg-white/5 p-1 border border-slate-900/10 dark:border-white/10 rounded-full relative"
          >
            {/* Sliding Pill Background */}
            <div
              className={`absolute bg-slate-900 dark:bg-white/15 rounded-full transition-all duration-300 ease-out pointer-events-none ${
                coords ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                left: `${coords?.left ?? 0}px`,
                width: `${coords?.width ?? 0}px`,
                top: "4px",
                bottom: "4px",
              }}
            />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                data-active={isActive(item.href)}
                // relative z-10 ensures link text sits above the absolute sliding background pill
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative z-10 ${
                  isActive(item.href)
                    ? "text-white dark:text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right items */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Command Palette Trigger */}
            <div className="relative group hidden xl:block z-50">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
                className="p-2 rounded-full border border-slate-300/40 dark:border-slate-800/60 bg-slate-100/30 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-all flex items-center justify-center cursor-pointer relative z-50"
                aria-label="Open Command Menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                Command Menu <kbd className="ml-1 px-1 py-0.2 bg-slate-800 text-slate-300 dark:bg-slate-200 dark:text-slate-600 rounded">Ctrl+K</kbd>
              </div>
            </div>

            {/* Theme Toggle Trigger */}
            <div className="relative group hidden md:inline-flex z-50">
              <ThemeToggle />
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                Toggle Theme
              </div>
            </div>

            {/* Mobile Burger Open Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none relative z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-slate-950/60 dark:bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-slate-100/90 dark:bg-slate-950/95 backdrop-blur-xl transform ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none invisible"
        } transition-transform duration-300 ease-in-out z-50 border-l border-slate-200/20 dark:border-white/5 flex flex-col p-6 pt-24 gap-4 md:hidden`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavLinkClick(e, item.href)}
            className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-left ${
              isActive(item.href)
                ? "bg-slate-900 text-white dark:bg-white/10 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
        {/* Mobile Theme Toggle in Sidebar */}
        <div className="mt-auto pt-6 border-t border-slate-200/10 dark:border-white/5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Theme
          </span>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default memo(Header);
