import PageTransition from "../components/PageTransition";
import BackToPortfolio from "../components/BackToPortfolio";
import Gallery from "../Gallery";

export default function LandscapePage() {
  return (
  <PageTransition>
    <main
  id="landscape-page"
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
          <h1 className="text-4xl font-light tracking-[0.35em] md:text-6xl">
            LANDSCAPE
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-white/70" />

          <p className="mt-6 text-lg italic tracking-[0.12em] text-gray-300 md:text-xl">
            Exploring Nature Through the Lens
          </p>
        </div>

        <Gallery
          title=""
          folder="landscape"
          images={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        />
      </div>
        </main>
  </PageTransition>
);
}