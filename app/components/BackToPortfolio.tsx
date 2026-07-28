"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BackToPortfolio() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  function handleBack() {
    if (isLeaving) return;

    setIsLeaving(true);

   const page = document.querySelector("main");

    if (page) {
      page.style.transition = "opacity 0.8s ease-out";
      page.style.opacity = "0";
    }

    setTimeout(() => {
      router.back();
    }, 800);
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      disabled={isLeaving}
      className="transition-opacity duration-300 hover:opacity-60"
    >
      ← Portfolio
    </button>
  );
}