"use client";
import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import BackToPortfolio from "../components/BackToPortfolio";
import Gallery from "../Gallery";

export default function ArchitecturePage() {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <PageTransition>
      <main
        id="architecture-page"
        className="min-h-screen bg-black px-6 py-10 text-white md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
            <div className="text-sm uppercase tracking-[0.25em] text-gray-300">
              <BackToPortfolio />
            </div>

            <h2 className="text-lg font-light tracking-[0.25em] text-white md:text-xl">
              Swarn Bawa Photography
            </h2>
          </div>

          <div className="mb-12 text-center">
            <h1 className="px-4 text-center text-3xl font-light tracking-[0.22em] text-white sm:text-4xl md:px-0 md:text-6xl md:tracking-[0.35em]">
              ARCHITECTURE
            </h1>

            <div className="mx-auto mt-6 h-px w-32 bg-white/70" />

            <p className="mt-6 text-lg italic tracking-[0.12em] text-gray-300 md:text-xl">
              Lines, Light and Design
            </p>
          </div>

          <Gallery
            title=""
            folder="Architecture"
            images={[1, 2, 3, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </main>
    </PageTransition>
  );
}