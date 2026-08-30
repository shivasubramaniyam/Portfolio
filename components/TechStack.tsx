"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Core — Daily Use",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Fabric.js"],
    accent: "bg-primary/10 text-primary border-primary/20",
  },
  {
    category: "Built With",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Chakra UI", "Shadcn UI", "Tailwind CSS"],
    accent: "bg-accent/10 text-accent border-accent/20",
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "VS Code", "Figma", "Postman", "Puppeteer", "Vercel"],
    accent: "bg-secondary text-secondary-foreground border-border",
  },
  {
    category: "Exploring",
    items: ["Web3 / SSI", "IPFS", "WebRTC", "AI/ML Integration"],
    accent: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
];

const slideInVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  }),
};

export default function Skills() {
  return (
    <section id="Skills">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <h2 className="mb-4 text-center text-xl font-bold md:mb-6 md:text-2xl">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              custom={index}
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full p-4 md:p-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`rounded-full px-3 py-1 text-xs ${cat.accent}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
