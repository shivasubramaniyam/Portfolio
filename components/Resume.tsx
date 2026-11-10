"use client";

import { motion, easeInOut } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Server, Globe, Mic } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description?: string;
  bullets?: string[];
  icon: typeof Code;
  images?: { src: string; alt: string }[];
}

const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Associate Software Engineer",
    company: "TrustGrid",
    bullets: [
      "Engineered and maintained 4 enterprise-grade production dashboards across Self-Sovereign Identity (SSI) and PaaS products using React, Next.js, and Fabric.js.",
      "Integrated Keycloak for zero-trust role-based access control (RBAC), secure token exchanges, and centralized user authorization.",
      "Built interactive template preview engines for Hyperledger Indy decentralized digital credentials, improving credential issuance fidelity for partner teams.",
      "Partnered with systems architects, backend developers, and designers to streamline state management and optimize client-side rendering performance.",
    ],
    icon: Code,
  },
  {
    period: "NOVEMBER 2025",
    role: "Product Promotion",
    company: "Bengaluru Tech Summit (BTS)",
    description:
      "Represented TrustGrid at Bengaluru Tech Summit, showcasing and promoting its products (SSI, SynQ Social, dTAK) to technology professionals, industry leaders, founders, and delegates. Engaged with attendees at the TrustGrid booth, explaining product capabilities, demonstrating solutions, and encouraging discussions around technology adoption and collaboration.",
    icon: Mic,
    images: [
      { src: "/images/bts.jpeg", alt: "Bengaluru Tech Summit Hosting" },
      { src: "/images/booth.jpeg", alt: "BTS Event Presentation" },
      { src: "/images/explain.jpeg", alt: "BTS Event Presentation" },
      { src: "/images/team.jpeg", alt: "BTS Event Presentation" },
    ],
  },
  {
    period: "2023 — 2025",
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
          Here&apos;s a timeline of my experience and key contributions.
          Download the full resume for complete details.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 h-full w-px bg-border md:left-6" />

          <div ref={ref} className="space-y-6">
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: easeInOut,
                  }}
                  className="relative pl-11 sm:pl-14 md:pl-16"
                >
                  {/* Icon dot */}
                  <div className="absolute left-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>

                  <Card className="p-3.5 sm:p-4 transition-all hover:shadow-lg md:p-5">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-primary md:text-xs">
                      {exp.period}
                    </p>
                    <h3 className="text-sm font-bold md:text-base">
                      {exp.role}
                    </h3>
                    <p className="mb-1.5 sm:mb-2 text-xs text-muted-foreground md:text-sm">
                      {exp.company}
                    </p>
                    {exp.bullets ? (
                      <ul className="space-y-1.5 pt-0.5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground md:text-sm text-justify"
                          >
                            <span className="text-primary mt-1 font-bold text-xs shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm text-justify">
                        {exp.description}
                      </p>
                    )}

                    {/* Event Photo Gallery if present */}
                    {exp.images && exp.images.length > 0 && (
                      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3 pt-2">
                        {exp.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="relative h-28 sm:h-36 w-full overflow-hidden rounded-lg bg-muted border border-border/60 group/img"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              loading="lazy"
                              sizes="(max-width: 640px) 50vw, 25vw"
                              className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
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
