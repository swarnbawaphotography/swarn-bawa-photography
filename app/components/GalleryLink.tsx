"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

type GalleryLinkProps = {
  href: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function GalleryLink({
  href,
  children,
  id,
  className = "",
}: GalleryLinkProps) {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  function handleClick() {
    if (isLeaving) return;

    setIsLeaving(true);

    setTimeout(() => {
      router.push(href);
    }, 800);
  }

  return (
    <>
      <button
        id={id}
        type="button"
        onClick={handleClick}
        disabled={isLeaving}
        className={`block w-full text-left ${className}`}
      >
        {children}
      </button>

      <div
        className={`pointer-events-none fixed inset-0 z-[9998] bg-black transition-opacity duration-[800ms] ${
          isLeaving ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}