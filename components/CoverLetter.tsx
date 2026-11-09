"use client";

import { motion, easeInOut } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function CoverLetter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="Cover_Letter">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <h2 className="mb-4 text-center text-xl font-bold md:mb-6 md:text-2xl">
          Let&apos;s Connect
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="mx-auto max-w-2xl"
        >
          <Card className="p-4 sm:p-6 text-center md:p-10">
            <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              Open to opportunities
            </p>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold md:text-xl">
              Looking for a developer who builds real things?
            </h3>
            <p className="mb-6 text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base text-justify">
              I&apos;m Shiva — I build Web3 identity tools, real-time canvas
              editors, and full-stack APIs. Currently exploring the intersection
              of decentralized systems and modern frontend architecture. Always
              open to interesting problems and collaborative projects.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
                onClick={() =>
                  window.open("https://github.com/shivasubramaniyam", "_blank")
                }
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shiva-subramaniyam-s",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
                onClick={() =>
                  (window.location.href =
                    "mailto:shivasubramaniyam54@gmail.com")
                }
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Email
              </Button>
            </div>

            <Separator className="mb-6" />

            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto gap-2 text-xs sm:text-sm"
              onClick={() => window.open("/shiva_coversheet_new.pdf", "_blank")}
            >
              <FileText className="h-4 w-4" />
              Download Cover Letter
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
