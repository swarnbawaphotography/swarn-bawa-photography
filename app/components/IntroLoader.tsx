"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntroV6");

    if (hasSeenIntro) return;

    setIsVisible(true);

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("hasSeenIntroV6", "true");
    }, 4200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.3,
            ease: "easeInOut",
          }}
        >
          <motion.div
  initial={{
    opacity: 0,
    scale: 0.96,
  }}
  animate={{
    opacity: [0, 1, 1, 0],
    scale: [0.96, 1, 1.025, 1.04],
  }}
  transition={{
    duration: 3.8,
    times: [0, 0.32, 0.72, 1],
    ease: "easeInOut",
  }}
>
  <Image
    src="/Logo/Swarn Bawa Log 4.png"
    alt="Swarn Bawa Photography"
    width={700}
    height={350}
    priority
    className="h-auto w-[320px] md:w-[650px]"
  />
</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}