"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
  "/images/hero/7.jpg",
  "/images/hero/8.jpg",
  "/images/hero/9.jpg",
];

export default function HeroSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previousImage) =>
        previousImage === heroImages.length - 1 ? 0 : previousImage + 1
      );
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-[3500ms] ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}