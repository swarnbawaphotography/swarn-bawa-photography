"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryProps = {
  title: string;
  folder: string;
  images: number[];
};

export default function Gallery({
  title,
  folder,
  images,
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="mb-24">
        {/* Category title moved to the banner */}

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((number, index) => (
            <motion.button
  key={number}
  type="button"
  onClick={() => setSelectedIndex(index)}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.45 }}
  transition={{
    duration: 1.4,
    delay: index * 0.22,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="gallery-item group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl"
  aria-label={`Open ${title} photograph ${number}`}
>
  <img
    src={`/images/${folder}/${number}.jpg`}
   alt={`${title} photography by Swarn Bawa - Image ${number}`}
    className="h-auto w-full cursor-zoom-in rounded-xl transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-75"
  />
</motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={closeLightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        onClick={closeLightbox}
        className="absolute right-5 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-3xl text-white transition hover:bg-white/20"
        aria-label="Close photograph"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
        className="absolute left-3 z-20 rounded-full bg-white/10 px-4 py-3 text-4xl text-white transition hover:bg-white/20 md:left-8"
        aria-label="Previous photograph"
      >
        ‹
      </button>

      <motion.img
        key={images[selectedIndex]}
        src={`/images/${folder}/${images[selectedIndex]}.jpg`}
        alt={`${title} photography by Swarn Bawa - Image ${images[selectedIndex]}`}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[94vh] max-w-[95vw] rounded-lg object-contain"
        initial={{
  opacity: 0,
  scale: 1,
}}

animate={{
  opacity: 1,
  scale: [1, 1.04, 1],
}}

exit={{
  opacity: 0,
  scale: 0.98,
  transition: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  },
}}

transition={{
  opacity: {
    duration: 0.6,
  },
  scale: {
    duration: 10,
    repeat: 0,
    ease: "easeInOut",
  },
}}
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
        className="absolute right-3 z-20 rounded-full bg-white/10 px-4 py-3 text-4xl text-white transition hover:bg-white/20 md:right-8"
        aria-label="Next photograph"
      >
        ›
      </button>

      <p className="absolute bottom-5 text-sm text-gray-300">
        {selectedIndex + 1} / {images.length}
      </p>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}