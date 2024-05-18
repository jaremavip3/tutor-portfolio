"use client";
import Lenis from "lenis";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.01,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),

      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }),
    [];
  return (
    <main className=" h-dvh flex flex-col ">
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
