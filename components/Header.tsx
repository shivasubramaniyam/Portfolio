"use client";
import React, { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Projects", href: "#Project" },
  { label: "Playground", href: "#Playground" },
  { label: "Experience", href: "#Resume" },
  { label: "Skills", href: "#Skills" },
  { label: "Contact", href: "#Cover_Letter" },
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
    <section id="Home" className="flex justify-center w-full">
      <div
        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "bg-card/80 shadow-lg backdrop-blur-md" : "bg-card"
        }`}
      >
        <nav aria-label="Primary" className="flex-1 min-w-0 mr-2">
          <div className="scrollx flex items-center justify-center gap-3 sm:gap-4 md:gap-6 py-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-xs sm:text-sm font-medium transition-colors hover:text-primary md:text-base"
              >
                {link.label}
              </a>
            ))}
            <span className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground">
              Visitors: {visitorCount}
            </span>
          </div>
        </nav>
        <ThemeToggle />
      </div>
    </section>
  );
}
