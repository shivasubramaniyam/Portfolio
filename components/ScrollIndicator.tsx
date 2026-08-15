"use client";
import { motion, useScroll } from "motion/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useColorModeValue("#6366F1", "#9333EA");

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor,
        zIndex: 1,
      }}
    />
  );
}
