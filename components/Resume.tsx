"use client";

import { motion, easeInOut } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Server, Globe } from "lucide-react";

const experience = [
  {
    period: "2024 — Present",
    role: "Frontend Developer",
    company: "TrustGrid",
    description:
      "Building Web3 identity tools — SSI template platforms, social networks, and logistics dashboards using React, Next.js, and Fabric.js.",
    icon: Code,
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer (Projects)",
    company: "Personal & Academic",
    description:
      "Designed production-ready backends (Node.js + PostgreSQL + Prisma), built real-time canvas editors, and deployed apps on Vercel/GCP.",
    icon: Server,
  },
  {
    period: "2023",
    role: "AI/ML Research",
    company: "Jyothy Institute of Technology",
    description:
      "Built an AI-powered blind assistance device using Raspberry Pi with CNN-based object detection and audio feedback.",
    icon: Globe,
  },
];

export default function Resume() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="Resume">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <h2 className="mb-4 text-center text-xl font-bold md:mb-6 md:text-2xl">
          Experience
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-center text-sm text-muted-foreground md:mb-8 md:text-base">
          Here&apos;s a timeline of my experience and key contributions. Download the
          full resume for complete details.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-6" />

          <div ref={ref} className="space-y-6">
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2, duration: 0.5, ease: easeInOut }}
                  className="relative pl-14 md:pl-16"
                >
                  {/* Icon dot */}
                  <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-4 w-4" />
                  </div>

                  <Card className="p-4 transition-all hover:shadow-lg md:p-5">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-primary md:text-xs">
                      {exp.period}
                    </p>
                    <h3 className="text-sm font-bold md:text-base">{exp.role}</h3>
                    <p className="mb-2 text-xs text-muted-foreground md:text-sm">
                      {exp.company}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open("/shiva_resume.pdf", "_blank")}
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
