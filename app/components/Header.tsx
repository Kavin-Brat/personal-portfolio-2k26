"use client";

import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV_ITEMS } from "../constants/headerConstants";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash(pathname);
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return activeHash === "/" || activeHash === "/#home" || activeHash === "";
    }
    return activeHash === href;
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50 backdrop-blur-md border-b-[0.5px] border-slate-200/10 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <span className="text-slate-900 dark:text-white uppercase">{BRAND}</span>
            <span className="text-amber-500 font-extrabold text-2xl leading-none">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 bg-slate-900/5 dark:bg-white/5 p-1 border border-slate-900/10 dark:border-white/10 rounded-full">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-slate-900 text-white dark:bg-white/15 dark:text-white border border-white/5"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right items */}
          <div className="flex items-center gap-4">
            <span className="relative z-50 hidden md:inline-flex">
              <ThemeToggle />
            </span>

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
        } transition-transform duration-300 ease-in-out z-40 border-l border-slate-200/20 dark:border-white/5 flex flex-col p-6 pt-24 gap-4 md:hidden`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={closeMenu}
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
