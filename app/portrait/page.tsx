"use client";
import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import BackToPortfolio from "../components/BackToPortfolio";
import Gallery from "../Gallery";

export default function PortraitPage() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
  <PageTransition>
    <main
  id="portrait-page"
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
  PORTRAIT
</h1>

          <div className="mx-auto mt-6 h-px w-32 bg-white/70" />

          <p className="mt-6 text-lg italic tracking-[0.12em] text-gray-300 md:text-xl">
            Capturing Genuine Moments
          </p>
        </div>

        <Gallery
          title=""
          folder="portrait"
          images={[1, 2, 3, 4, 5]}
        />
      </div>
        </main>
  </PageTransition>
);
}