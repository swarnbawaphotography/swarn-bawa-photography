import Gallery from "./Gallery";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold text-white md:text-2xl">
            Swarn Bawa Photography
          </h1>

          <div className="hidden space-x-8 text-white md:block">
            <a href="#home" className="transition hover:text-gray-300">
              Home
            </a>

            <a href="#portfolio" className="transition hover:text-gray-300">
              Portfolio
            </a>

            <a href="#about" className="transition hover:text-gray-300">
              About
            </a>

            <a href="#contact" className="transition hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main
        id="home"
        className="flex min-h-screen items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="rounded-2xl bg-black/55 px-8 py-12 text-center backdrop-blur-sm md:px-14">
          <h2 className="text-5xl font-bold text-white md:text-7xl">
            Swarn Bawa
          </h2>

          <p className="mt-3 text-xl uppercase tracking-[0.35em] text-white md:text-3xl">
            Photography
          </p>

          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Capturing the Beauty of the World
          </p>

          <a
            href="#portfolio"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View Portfolio
          </a>
        </div>
      </main>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="min-h-screen bg-black px-6 py-24 text-white md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.35em] text-gray-400">
            Selected Collections
          </p>

          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
            Portfolio
          </h2>

          <Gallery
            title="Landscape"
            folder="landscape"
            images={[1, 2, 3, 4, 5, 6, 7]}
          />

          <Gallery
            title="Architecture"
            folder="Architecture"
            images={[1, 2, 3, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex min-h-screen items-center bg-gray-900 px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
            Behind the Camera
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">About Me</h2>

          <p className="text-lg leading-9 text-gray-300 md:text-xl">
            I’m Swarn Bawa, a photographer based in Abbotsford, British
            Columbia, Canada. I began my photography journey in 1999 and have
            spent more than two decades capturing the beauty of nature,
            landscapes, architecture, people, and everyday life. Through my
            photography, I aim to preserve meaningful moments and share the
            beauty of the world through my lens.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex min-h-screen items-center bg-black px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
            Get in Touch
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">Contact</h2>

          <p className="mb-10 text-lg leading-8 text-gray-300">
            For photography inquiries, collaborations, prints, or project
            information, please contact me by email or Instagram.
          </p>

          <div className="space-y-5 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:abbyfilms78@gmail.com"
                className="text-gray-300 transition hover:text-white"
              >
                abbyfilms78@gmail.com
              </a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/sbawa78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition hover:text-white"
              >
                @sbawa78
              </a>
            </p>

            <p>
              <strong>Location:</strong>{" "}
              <span className="text-gray-300">
                Abbotsford, British Columbia, Canada
              </span>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Swarn Bawa Photography. All rights reserved.
      </footer>
    </>
  );
}