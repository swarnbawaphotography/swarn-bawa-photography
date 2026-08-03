import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";
import Reveal from "./components/Reveal";
import HeroSlideshow from "./HeroSlideshow";
import CategoryBanner from "./components/CategoryBanner";
import PageTransition from "./components/PageTransition";
import IntroLoader from "./components/IntroLoader";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
  <PageTransition>
    <IntroLoader />
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
<div className="absolute inset-0 overflow-hidden">
  <div
    className="hero-cinematic absolute inset-0 bg-cover bg-[position:62%_center] md:bg-center"
    style={{ backgroundImage: "url('/images/hero/4.jpg')" }}
  />
</div>

  {/* Cinematic Overlay */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0.35), rgba(0,0,0,0.63))",
  }}
/>

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
      className="hero-logo mt-7 h-auto w-[280px] md:relative md:left-20 md:top-[-240px] md:mt-0 md:w-[700px]"
    />

    {/* Caption */}
<p className="hero-tagline mt-00 -translate-y-15 text-base text-gray-200 md:ml-75 md:-mt-90 md:text-lg">
  Capturing the Beauty of the World
</p>

    {/* Portfolio Button */}
    <a
      href="#portfolio"
      className="hero-button mt-7 inline-block rounded-full border border-white/80 px-6 py-3 text-white transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)] md:ml-85 md:mt-20 md:px-8"
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

          <Link href="/portrait" className="block">
  <CategoryBanner
    title="PORTRAITS"
    subtitle="Capturing Genuine Moments"
    image="/images/portrait/1.jpg"
  />
</Link>



          <Link href="/architecture">
  <CategoryBanner
    title="ARCHITECTURE"
    subtitle="Lines, Light and Design"
    image="/images/banner/architecture-banner.jpg"
  />
</Link>
        </div>
      </section>

      {/* About */}
      

          {/* About */}
         <Reveal>
  <section
    id="about"
    className="flex min-h-screen items-center justify-center bg-black px-6 py-32 text-white md:px-10"
  >
    <div className="mx-auto grid w-full max-w-6xl grid-cols-[170px_1fr] items-start gap-5 md:grid-cols-2 md:items-center md:gap-16">
      <div className="mt-69 relative left-5 flex justify-center overflow-hidden rounded-2xl md:left-0">
  <img
    src="/images/about/swarn-bawa.jpg"
    alt="Swarn Bawa"
    className="h-[220px] w-[140px] rounded-2xl object-cover object-[55%,20%] md:h-[650px] md:w-[520px]"
  />
</div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="mb-6 w-full text-center text-3xl font-light md:text-5xl">
          About
        </h2>

        <p className="mb-6 w-full text-center text-sm text-yellow-400 md:text-lg">
          Landscape • Portrait • Wedding Photographer
        </p>

        <p className="mb-8 w-full text-center text-sm text-gray-400 md:text-base">
          Based in Abbotsford, British Columbia, Canada
        </p>

        <div className="mb-10 flex w-full justify-center">
          <div className="h-px w-28 bg-yellow-400" />
        </div>
        <div className="mt-8 flex items-start gap-2">
        <p className="max-w-[220px] text-left text-sm leading-6 text-gray-200 md:max-w-xl md:text-lg md:leading-8">
          Photography has been my passion since 1999.
          <br />
          <br />
          My work spans landscapes, portraits, and weddings, each reflecting a
          deep appreciation for natural light, authentic emotion, and thoughtful
          composition. Every photograph is created with the intention of telling
          a meaningful story and preserving moments that stand the test of time.
          <br />
          <br />
          Whether capturing the beauty of nature, the character of a portrait,
          or the joy of a wedding celebration, my goal is to create timeless
          images that will be treasured for years to come.
        </p>
      </div>
    </div>
    </div>
  </section>
</Reveal>
     

      {/* Contact */}
      <section
  id="contact"
  className="flex min-h-screen items-center justify-center bg-black px-6 py-28 text-white md:px-10"
>
  <div className="w-full max-w-3xl text-center">
    <h2 className="mb-4 text-4xl font-light md:text-5xl">
      Contact
    </h2>

    <p className="mb-10 text-gray-300">
      I’d love to hear from you.
    </p>

    <ContactForm />

    <div className="mt-12 space-y-2 text-sm">
      <p>
        <strong className="font-semibold text-yellow-400">
          Email:
        </strong>{" "}
        <a
          href="mailto:abbyfilms78@gmail.com"
          className="transition hover:text-yellow-400"
        >
          abbyfilms78@gmail.com
        </a>
      </p>

      <p>
        <strong className="font-semibold text-yellow-400">
          Instagram:
        </strong>{" "}
        <a
          href="https://www.instagram.com/sbawa78"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-yellow-400"
        >
          @sbawa78
        </a>
      </p>
    </div>
  </div>
</section>


      <footer className="bg-black py-8 text-center text-sm text-gray-500">
        © 2026 Swarn Bawa Photography. All rights reserved.
      </footer>
        </>
  </PageTransition>
  );
}