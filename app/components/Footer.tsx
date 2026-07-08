import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-xs text-slate-450 dark:text-slate-550 border-t border-slate-200/10 dark:border-white/5 bg-slate-950/20">
      <p>© {new Date().getFullYear()} Kavin. Inspired by iyappan.in. Built with Next.js & TailwindCSS v4.</p>
    </footer>
  );
};

export default Footer;
