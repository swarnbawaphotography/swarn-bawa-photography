"use client";

import { motion } from "framer-motion";

type SectionBannerProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function SectionBanner({
  image,
  title,
  subtitle,
}: SectionBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
      className="relative flex h-[60vh] items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 px-6 text-center text-white">
        <h2 className="text-5xl font-light tracking-[0.3em] md:text-7xl">
          {title}
        </h2>

        <p className="mt-5 text-lg tracking-[0.25em] text-gray-200 md:text-xl">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}