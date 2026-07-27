"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({
  children,
}: PageTransitionProps) {
  return (
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
transition={{
  duration: 2.5,
  ease: [0.22, 1, 0.36, 1],
}}
>
  {children}
</motion.div>
  );
}