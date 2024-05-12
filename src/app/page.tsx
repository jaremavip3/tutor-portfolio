import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" h-dvh flex flex-col ">
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
    </main>
  );
}
