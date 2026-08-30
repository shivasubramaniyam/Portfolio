"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center md:min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:text-sm"
        >
          Full Stack Developer & Web3 Builder
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight"
        >
          Shiva Subramaniyam S
        </motion.h1>

        {/* Positioning statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-2 text-base leading-relaxed text-muted-foreground md:text-lg"
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
          className="mb-8 text-sm text-muted-foreground md:text-base"
        >
          React · Next.js · Node.js · Fabric.js · PostgreSQL · Web3
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="gap-2"
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
            className="gap-2"
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
