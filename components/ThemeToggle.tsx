"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
        <Monitor className="h-4 w-4" />
      </Button>
    );
  }

  const cycleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    // Fallback if View Transitions API is not supported or user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    // Button center coordinates for circle expansion origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // flushSync guarantees the DOM class toggle completes synchronously before the snapshot
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    try {
      await transition.ready;

      // Animate the incoming (new) snapshot expanding smoothly over the old snapshot
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } catch {
      setTheme(nextTheme);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={cycleTheme}
      aria-label="Toggle color mode"
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : theme === "light" ? (
        <Sun className="h-4 w-4 text-amber-500" />
      ) : (
        <Monitor className="h-4 w-4" />
      )}
    </Button>
  );
}
