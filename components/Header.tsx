"use client";
import React, { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import WeatherAPI from "@/components/WeatherAPI";

const navLinks = [
  { label: "Projects", href: "#Project" },
  { label: "Skills", href: "#Skills" },
  { label: "Resume", href: "#Resume" },
  { label: "Playground", href: "#Playground" },
];

export default function Header() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;
      try {
        const res = await fetch("/api/visitor");
        const data = await res.json();
        setVisitorCount(data.count);
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      }
    };
    fetchVisitorCount();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Home">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Main Navigation */}
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:w-[65%] ${
            scrolled ? "bg-card/80 shadow-lg backdrop-blur-md" : "bg-card"
          }`}
        >
          <nav aria-label="Primary" className="flex-1">
            <div className="scrollx flex items-center gap-4 md:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium transition-colors hover:text-primary md:text-base"
                >
                  {link.label}
                </a>
              ))}
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                Visitors: {visitorCount}
              </span>
            </div>
          </nav>
          <ThemeToggle />
        </div>

        {/* Weather Widget */}
        <a
          href="https://weatherappshiva-8mwcjawfx-shivasubramaniyams-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center rounded-2xl bg-card p-3 transition-all hover:bg-card/80 hover:shadow-md md:w-[35%]"
        >
          <WeatherAPI />
        </a>
      </div>
    </section>
  );
}
