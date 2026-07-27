import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";
import Reveal from "./components/Reveal";
import HeroSlideshow from "./HeroSlideshow";
import CategoryBanner from "./components/CategoryBanner";

export default function Home() {
  return (
    <>
      {/* Desktop Navigation */}
<nav className="fixed left-0 top-0 z-50 hidden w-full bg-black/30 backdrop-blur-md md:block">
  <div className="mx-auto flex max-w-7xl items-center justify-center px-8 py-5">
    <div className="flex items-center gap-10 text-sm uppercase tracking-[0.16em] text-white">
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
  className="relative min-h-screen overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/hero/4.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-6 pt-20 text-center md:ml-0 md:items-start md:justify-center md:px-0 md:pt-0 md:text-left">

    {/* Mobile Menu */}
    <div className="flex flex-col items-center gap-5 text-[13px] uppercase tracking-[0.22em] text-white md:hidden">
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

    {/* Logo */}
    <Image
      src="/Logo/Swarn Bawa Log 4.png"
      alt="Swarn Bawa Photography"
      width={700}
      height={260}
      priority
      className="mt-7 h-auto w-[280px] md:relative md:left-20 md:top-[-240px] md:mt-0 md:w-[700px]"
    />

    {/* Caption */}
<p  className="mt-00 -translate-y-15 text-base text-gray-200 md:ml-75 md:-mt-90 md:text-lg">
  Capturing the Beauty of the World
</p>

    {/* Portfolio Button */}
    <a
      href="#portfolio"
      className="mt-7 inline-block rounded-full border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black md:ml-85 md:mt-20 md:px-8"
    >
      View Portfolio
    </a>
  </div>
</main>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="min-h-screen bg-black px-6 py-4 text-white md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 mt-16 text-center">
  <p className="text-sm uppercase tracking-[0.65em] text-gray-400">
    Selected Collections
  </p>
</div>

          <Link href="/landscape" className="block">
  <CategoryBanner
    title="LANDSCAPE"
    subtitle="Exploring Nature Through the Lens"
    image="/images/landscape/5.jpg"
  />
</Link>

          <Gallery
            title="Portrait"
            folder="portrait"
            images={[1, 2, 3, 4]}
          />

          <Gallery
            title="Architecture"
            folder="Architecture"
            images={[1, 2, 3, 5, 6, 7, 8, 9, 10]}
          />
        </div>
      </section>

      {/* About */}
      

          {/* About */}
          <Reveal>
<section
  id="about"
  className="bg-black px-8 py-24 text-center text-white"
>
  <div className="mx-auto max-w-4xl">
    <h2 className="mb-8 text-4xl font-light">About</h2>

    <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
      Photography has been my passion for over two decades.
      <br />
      <br />
      My work spans landscapes, portraits, and weddings, each reflecting a
      deep appreciation for natural light, authentic emotion, and thoughtful
      composition. Every photograph is created with the intention of telling a
      meaningful story and preserving moments that stand the test of time.
      <br />
      <br />
      Whether capturing the beauty of nature, the character of a portrait, or
      the joy of a wedding celebration, my goal is to create timeless images
      that will be treasured for years to come.
    </p>
  </div>
</section>
</Reveal>
     

      {/* Contact */}
      <Reveal>
      <section
  id="contact"
  className="bg-black px-8 py-24 text-center text-white"
>
  <h2 className="mb-8 text-4xl font-light">Contact</h2>

  <p className="mb-4 text-lg">
    I'd love to hear from you.
  </p>

  <p>
  <strong>Email:</strong>{" "}
  <a
    href="mailto:abbyfilms78@gmail.com"
    className="transition hover:text-gray-300"
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
      className="text-gray-300 hover:text-white"
    >
      @sbawa78
    </a>
  </p>
</section>
</Reveal>

      <footer className="bg-black py-8 text-center text-sm text-gray-500">
        © 2026 Swarn Bawa Photography. All rights reserved.
      </footer>
    </>
  );
}