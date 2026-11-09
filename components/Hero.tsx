"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export interface HeroBackgroundProps {
  word?: string;
  className?: string;
}

export function HeroBackground({
  word = "SHIVA",
  className = "",
}: HeroBackgroundProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show once on initial load, then smoothly exit after the sweep completes
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  // Silver metallic font styling visible in both light (white) and dark (black) themes:
  const layer =
    "absolute inset-0 flex items-center justify-center text-center font-unbounded font-black " +
    "text-[clamp(3.5rem,14vw,13rem)] leading-none tracking-normal select-none " +
    "bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600 " +
    "dark:from-white dark:via-slate-200 dark:to-slate-400 " +
    "bg-clip-text text-transparent " +
    "[-webkit-text-stroke:1.5px_rgba(71,85,105,0.45)] " +
    "dark:[-webkit-text-stroke:1.5px_rgba(241,245,249,0.55)]";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeOut" } }}
          className={`pointer-events-none absolute inset-0 overflow-hidden text-foreground ${className}`}
        >
          {/* Drifts from right into center, pauses, then smoothly exits */}
          <motion.div
            initial={{ x: "60%", opacity: 0 }}
            animate={{
              x: ["60%", "0%", "0%", "-30%"],
              opacity: [0, 0.35, 0.35, 0],
            }}
            transition={{
              duration: 4.5,
              times: [0, 0.35, 0.75, 1],
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Main word layer */}
            <div
              className={`${layer} opacity-35 dark:opacity-30 drop-shadow-[0_4px_20px_rgba(100,116,139,0.3)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]`}
            >
              {word}
            </div>

            {/* Soft inverted reflection moving together */}
            <div
              className={`${layer} translate-y-[70%] -scale-y-100 opacity-15 dark:opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]`}
            >
              {word}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[65vh] sm:min-h-[75vh] flex-col items-center justify-center overflow-hidden rounded-2xl px-3 sm:px-4 py-12 sm:py-16 text-center md:min-h-[85vh]">
      {/* Animated Kinetic Background with Silver Typography */}
      <HeroBackground word="SHIVA" />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-3 sm:mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary md:text-sm"
        >
          Full Stack Developer & Web3 Builder
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-unbounded mb-4 whitespace-nowrap text-[clamp(1.25rem,6vw,3.75rem)] font-extrabold leading-tight tracking-tight drop-shadow-sm px-1"
        >
          Shiva Subramaniyam S
        </motion.h1>

        {/* Positioning statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-2 text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl mx-auto px-2"
        >
          I build{" "}
          <span className="font-semibold text-foreground">
            Web3 identity tools
          </span>
          ,{" "}
          <span className="font-semibold text-foreground">
            real-time canvas editors
          </span>
          , and{" "}
          <span className="font-semibold text-foreground">production APIs</span>{" "}
          — the kind of software that solves problems people actually have.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground md:text-base px-2"
        >
          React · Next.js · Node.js · Fabric.js · PostgreSQL · Web3 · Keycloak
          (Auth)
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 shadow-md cursor-pointer transition-transform active:scale-95"
            onClick={() =>
              document
                .getElementById("Project")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2 backdrop-blur-sm bg-background/80 hover:bg-muted cursor-pointer transition-transform active:scale-95"
            onClick={() => window.open("/shiva_resume.pdf", "_blank")}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
