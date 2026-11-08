"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  RefreshCw,
  Cloud,
  Server,
  ShieldCheck,
  Building2,
  Smartphone,
} from "lucide-react";

const demos = [
  {
    id: "punchos",
    label: "PunchOS",
    icon: ShieldCheck,
    tech: "Next.js + WebAuthn + Passkeys",
    description:
      "• Architected a zero-trust attendance protocol combining WebAuthn Passkeys biometric authentication.",
    isDualApp: true,
    subApps: [
      {
        id: "student",
        label: "Student QR App",
        domain: "punch-os-qr-app.vercel.app",
        url: "https://punch-os-qr-app.vercel.app",
        icon: Smartphone,
      },
      {
        id: "faculty",
        label: "Org: Faculty Scanner",
        domain: "punch-os-faculty-scanner.vercel.app",
        url: "https://punch-os-faculty-scanner.vercel.app",
        icon: Building2,
      },
    ],
  },
  {
    id: "weather",
    label: "Weather App",
    icon: Cloud,
    tech: "React + Vite + Shadcn",
    description:
      "Real-time weather forecast with city search, geolocation, hourly temperature chart, and 5-day forecast.",
    src: "https://weatherappshiva.vercel.app/",
    live: "https://weatherappshiva.vercel.app/",
    isDualApp: false,
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
    isDualApp: false,
  },
];

export default function Playground() {
  const [active, setActive] = useState("punchos");
  const [punchSubApp, setPunchSubApp] = useState<"student" | "faculty">("student");
  const [keys, setKeys] = useState<Record<string, number>>({});

  const current = demos.find((d) => d.id === active)!;

  const currentSrc = current.isDualApp
    ? current.subApps?.find((s) => s.id === punchSubApp)?.url || ""
    : current.src || "";

  const currentLive = current.isDualApp
    ? current.subApps?.find((s) => s.id === punchSubApp)?.url || ""
    : current.live || "";

  const refreshKey = `${active}-${punchSubApp}-${keys[`${active}-${punchSubApp}`] ?? 0}`;

  const refresh = () =>
    setKeys((prev) => ({
      ...prev,
      [`${active}-${punchSubApp}`]: (prev[`${active}-${punchSubApp}`] ?? 0) + 1,
    }));

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
              onClick={() => window.open(currentLive, "_blank")}
            >
              <ExternalLink className="h-3 w-3" />
              Open
            </Button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mb-4 flex flex-wrap gap-2">
          {demos.map((demo) => {
            const Icon = demo.icon;
            const isSelected = active === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => setActive(demo.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isSelected
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

        {/* Description & Metadata */}
        <div className="mb-4 flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full text-[10px]">
              {current.tech}
            </Badge>
            <p className="text-sm text-muted-foreground">
              {current.description}
            </p>
          </div>

          {/* Sub-app toggle & links when PunchOS is active */}
          {current.isDualApp && (
            <div className="mt-1 flex flex-col gap-2 rounded-lg border border-border/60 bg-muted/30 p-2.5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground">App:</span>
                <div className="inline-flex rounded-md bg-muted p-0.5">
                  {current.subApps?.map((sub) => {
                    const SubIcon = sub.icon;
                    const isSubSelected = punchSubApp === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setPunchSubApp(sub.id as "student" | "faculty")}
                        className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                          isSubSelected
                            ? "bg-background text-foreground shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <SubIcon className="h-3 w-3" />
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live URLs */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <a
                  href="https://punch-os-qr-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-primary hover:underline inline-flex items-center gap-0.5"
                >
                  punch-os-qr-app.vercel.app
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
                <span className="text-muted-foreground/60">|</span>
                <a
                  href="https://punch-os-faculty-scanner.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-primary hover:underline inline-flex items-center gap-0.5"
                >
                  Org: punch-os-faculty-scanner.vercel.app
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Embedded Iframe */}
        <Card className="overflow-hidden p-0">
          <iframe
            key={refreshKey}
            src={currentSrc}
            title={`${current.label} Playground`}
            loading="lazy"
            className="h-[500px] w-full border-0 md:h-[600px]"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            allow="camera; microphone; publickey-credentials-get; publickey-credentials-create; clipboard-write"
          />
        </Card>
      </div>
    </section>
  );
}
