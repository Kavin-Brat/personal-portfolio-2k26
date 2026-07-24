import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CommandPaletteModal from "./components/CommandPaletteModal";
import SecurityShield from "./components/SecurityShield";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin Barath | Senior Software Engineer",
  description: "Personal portfolio of Kavin Barath S, Senior Full-Stack Engineer with 5+ years of experience specializing in React.js and Node.js. Leading teams and delivering clean code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col relative">
        <SecurityShield>
          <div id="stars1" className="star-layer"></div>
          <div id="stars2" className="star-layer"></div>
          <div id="stars3" className="star-layer"></div>
          
          <Header />
          <main className="flex-grow z-10 relative">
            {children}
          </main>
          
          {/* Global Developer Terminal & Command Menu Modal */}
          <CommandPaletteModal />
        </SecurityShield>
      </body>
    </html>
  );
}
