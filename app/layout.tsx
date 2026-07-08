import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin | Solution Architect & Full Stack Developer",
  description: "Personal portfolio of Kavin, showcasing expertise in Full Stack Development, FinTech, and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen text-slate-100 flex flex-col relative">
        <div id="stars1" className="star-layer"></div>
        <div id="stars2" className="star-layer"></div>
        <div id="stars3" className="star-layer"></div>
        
        <Header />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
