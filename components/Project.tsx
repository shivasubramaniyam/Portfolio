"use client";
import Image from "next/image";
import { motion, easeOut } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Lock, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PunchOS — Zero-Trust Attendance Protocol",
    problem:
      "Traditional attendance systems are vulnerable to proxy attendance, location spoofing, and centralized credential theft.",
    role: "Architected a zero-trust attendance protocol combining WebAuthn Passkeys biometric authentication with dynamic anti-spoofing QR codes.",
    image: "/images/punchos.jpeg",
    tools: [
      "Next.js",
      "WebAuthn",
      "Passkeys",
      "Biometrics",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://punch-os-qr-app.vercel.app",
    type: "public" as const,
    company: "Personal Project",
  },
  {
    title: "Self-Sovereign Identity (SSI) Platform",
    problem:
      "Enterprises need a reusable digital credential system that works across platforms without centralizing identity data.",
    role: "Built the template preview library for SSI platforms — designed credential templates for consistent integration.",
    image: "/images/issuer_logo.svg",
    tools: ["React", "Bootstrap UI", "Web3", "Hyperledger Indy"],
    link: "",
    type: "private" as const,
    company: "TrustGrid",
  },
  {
    title: "Custom Canvas Editor (Fabric.js)",
    problem:
      "Designers need a browser-based tool that handles real-time image/text manipulation without heavy desktop software.",
    role: "Built a dynamic canvas editor with drag-and-drop, layer management, and export — all client-side.",
    image: "/images/fabric.png",
    tools: ["Fabric.js", "React", "Canvas API", "JavaScript"],
    link: "https://github.com/shivasubramaniyam",
    type: "public" as const,
    company: "Personal Project",
  },
  {
    title: "E-Commerce Backend API",
    problem:
      "A production-ready backend needs auth, role-based access, product management, and order flow — all with real-world security.",
    role: "Designed and built the full API architecture with JWT auth, Prisma ORM, and PostgreSQL.",
    image: "/images/backend_logo.svg",
    tools: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "GCP"],
    link: "https://github.com/shivasubramaniyam/E-commerce",
    type: "public" as const,
    company: "Personal Project",
  },
  {
    title: "Blind Assistance — AI Device",
    problem:
      "Visually impaired individuals need real-time obstacle detection and audio feedback for safe mobility.",
    role: "Built the real-time object recognition pipeline with CNN on Raspberry Pi.",
    image: "/images/raspi.svg",
    tools: ["Raspberry Pi", "CNN", "Audio Module", "Python"],
    link: "",
    type: "private" as const,
    company: "Jyothy Institute of Technology",
  },
  {
    title: "Weather Forecast Web App",
    problem:
      "Users need fast, accurate weather data with clean UI — not bloated weather portals.",
    role: "Built a lightweight React app with geolocation, multi-day forecast, and error handling.",
    image: "/images/weather.svg",
    tools: ["React + Vite", "OpenWeather API", "Shadcn UI"],
    link: "https://github.com/shivasubramaniyam/weather_app_shiva",
    type: "public" as const,
    company: "Personal Project",
  },
];

const fadeInOut = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

export default function Projects() {
  return (
    <section id="Project">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <h2 className="mb-4 text-center text-xl font-bold md:mb-6 md:text-2xl">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={fadeInOut}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="group flex h-full flex-col gap-3 p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] md:p-5">
                {/* Project Image */}
                <div className="relative h-36 w-full overflow-hidden rounded-lg bg-muted md:h-44">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading="lazy"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold md:text-lg">
                  {project.title}
                </h3>

                {/* Problem */}
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm text-justify">
                  <span className="font-semibold text-foreground">
                    Problem:{" "}
                  </span>
                  {project.problem}
                </p>

                {/* Role */}
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm text-justify">
                  <span className="font-semibold text-foreground">
                    My role:{" "}
                  </span>
                  {project.role}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="rounded-full px-2 py-0.5 text-[10px]"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    {project.type === "private" ? (
                      <Badge
                        variant="outline"
                        className="border-destructive/30 text-destructive text-[10px]"
                      >
                        <Lock className="mr-1 h-3 w-3" />
                        Private
                      </Badge>
                    ) : (
                      <>
                        <Badge
                          variant="outline"
                          className="border-green-500/30 text-green-500 text-[10px]"
                        >
                          Public
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 gap-1 text-xs"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          {project.link.includes("github.com") ? (
                            <>
                              <Github className="h-3 w-3" />
                              View Code
                            </>
                          ) : (
                            <>
                              <ExternalLink className="h-3 w-3" />
                              Live Demo
                            </>
                          )}
                        </Button>
                      </>
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-auto">
                    {project.company}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
