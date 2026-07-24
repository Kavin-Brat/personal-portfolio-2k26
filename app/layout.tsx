import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CommandPaletteModal from "./components/CommandPaletteModal";
import SecurityShield from "./components/SecurityShield";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { OfflineToast } from "./components/OfflineToast";
import { ToastContainer } from "./components/ToastContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin Barath | Senior Software Engineer - Bangalore",
  description: "Personal portfolio of Kavin Barath, a Senior Software Engineer & Full Stack Developer based in Bengaluru (Bangalore). Specialized in React.js, Next.js, and Node.js.",
  keywords: [
    "Kavin",
    "Kavin Barath",
    "Kavin Bangalore",
    "Kavin Barath Bangalore",
    "Kavin Developer",
    "Kavin Barath Developer",
    "Kavin Barath Frontend Developer",
    "Kavin Barath Backend Developer",
    "Kavin Bangalore Developer",
    "Full Stack Developer Bangalore",
    "Senior Software Engineer Bangalore"
  ],
  authors: [{ name: "Kavin Barath" }],
  creator: "Kavin Barath",
  publisher: "Kavin Barath",
  metadataBase: new URL("https://kavinbarath.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kavin Barath | Senior Software Engineer - Bangalore",
    description: "Personal portfolio of Kavin Barath, a Senior Software Engineer & Full Stack Developer based in Bengaluru (Bangalore). Specialized in React.js, Next.js, and Node.js.",
    url: "https://kavinbarath.com",
    siteName: "Kavin Barath | Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin Barath | Senior Software Engineer",
    description: "Personal portfolio of Kavin Barath, a Senior Software Engineer & Full Stack Developer based in Bengaluru (Bangalore).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <main className="flex-grow z-10 relative pt-20">
            <ErrorBoundary name="Main Content Area">
              {children}
            </ErrorBoundary>
          </main>
          
          {/* Global Developer Terminal & Command Menu Modal */}
          <CommandPaletteModal />
          
          {/* Global Offline Network Toast Monitor */}
          <OfflineToast />
          
          {/* Global Event-Bus Toast Alerts */}
          <ToastContainer />
        </SecurityShield>
      </body>
    </html>
  );
}
