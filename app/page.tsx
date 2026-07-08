"use client";

import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import BlogTeaser from "./components/BlogTeaser";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <BlogTeaser />
      <ContactSection />
      <Footer />
    </div>
  );
}
