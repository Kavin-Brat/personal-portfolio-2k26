"use client";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import BlogTeaser from "./components/BlogTeaser";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <ErrorBoundary name="Hero Banner">
        <Hero />
      </ErrorBoundary>
      
      <ErrorBoundary name="About Info">
        <About />
      </ErrorBoundary>
      
      <ErrorBoundary name="Experience Timeline">
        <Experience />
      </ErrorBoundary>
      
      <ErrorBoundary name="Blog Previews">
        <BlogTeaser />
      </ErrorBoundary>
      
      <ErrorBoundary name="Contact Board">
        <ContactSection />
      </ErrorBoundary>
      
      <Footer />
    </div>
  );
}
