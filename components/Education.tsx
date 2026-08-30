"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, easeOut } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "B.E. in Computer Science Engineering",
    college: "Jyothy Institute of Technology",
    year: "2025",
    status: "Completed",
    icon: GraduationCap,
    coursework: "Focus on software engineering, web technologies, and AI applications.",
  },
  {
    title: "Cloud Essentials",
    college: "IBM (Credly)",
    year: "2025",
    status: "Completed",
    icon: Award,
    coursework: "Cloud architecture fundamentals and deployment strategies.",
  },
  {
    title: "Power BI",
    college: "Udemy",
    year: "2024",
    status: "In Progress",
    icon: BookOpen,
    coursework: "Data visualization and business intelligence.",
  },
  {
    title: "React JS",
    college: "Infosys Springboard",
    year: "2023",
    status: "Completed",
    icon: BookOpen,
    coursework: "Component architecture, hooks, and state management.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: easeOut },
  }),
};

export default function Education() {
  return (
    <section id="edu">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <h2 className="mb-4 text-center text-xl font-bold md:mb-6 md:text-2xl">
          Education & Certifications
        </h2>

        <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="group p-4 transition-all hover:scale-[1.01] hover:shadow-lg md:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-bold md:text-base">
                          {edu.title}
                        </h3>
                        <Badge
                          variant={edu.status === "Completed" ? "default" : "secondary"}
                          className="w-fit rounded-full text-[10px]"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                        {edu.college}
                      </p>
                      <div className="my-2 h-px bg-border" />
                      <p className="text-[10px] text-muted-foreground md:text-xs">
                        {edu.coursework}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground/60 md:text-xs">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
