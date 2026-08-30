"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, RefreshCw, Cloud, Server } from "lucide-react";

const demos = [
  {
    id: "weather",
    label: "Weather App",
    icon: Cloud,
    tech: "React + Vite + Shadcn",
    description:
      "Real-time weather forecast with city search, geolocation, hourly temperature chart, and 5-day forecast.",
    src: "https://weatherappshiva.vercel.app/",
    live: "https://weatherappshiva.vercel.app/",
  },
  {
    id: "ecommerce",
    label: "E-Commerce API",
    icon: Server,
    tech: "Node.js + Express + Prisma + PostgreSQL",
    description:
      "Production-ready REST API with JWT auth, product CRUD, cart, orders, and Razorpay webhook integration.",
    src: "https://e-commerce-fh7r.onrender.com/",
    live: "https://e-commerce-fh7r.onrender.com/",
  },
];

export default function Playground() {
  const [active, setActive] = useState("weather");
  const [keys, setKeys] = useState<Record<string, number>>({});

  const current = demos.find((d) => d.id === active)!;

  const refresh = () =>
    setKeys((prev) => ({ ...prev, [active]: (prev[active] ?? 0) + 1 }));

  return (
    <section id="Playground">
      <div className="rounded-2xl bg-card p-4 md:p-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:mb-6">
          <h2 className="text-xl font-bold md:text-2xl">Playground</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 text-xs"
              onClick={refresh}
            >
              <RefreshCw className="h-3 w-3" />
              Refresh
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 text-xs"
              onClick={() => window.open(current.live, "_blank")}
            >
              <ExternalLink className="h-3 w-3" />
              Open
            </Button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mb-4 flex gap-2">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.id}
                onClick={() => setActive(demo.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === demo.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {demo.label}
              </button>
            );
          })}
        </div>

        <div className="mb-4 flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full text-[10px]">
            {current.tech}
          </Badge>
          <p className="text-sm text-muted-foreground">
            {current.description}
          </p>
        </div>

        <Card className="overflow-hidden p-0">
          <iframe
            key={`${active}-${keys[active] ?? 0}`}
            src={current.src}
            title={`${current.label} Playground`}
            loading="lazy"
            className="h-[500px] w-full border-0 md:h-[600px]"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </Card>
      </div>
    </section>
  );
}
