"use client";
import { Flex } from "@chakra-ui/react";
import { motion, useScroll } from "motion/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Projects from "@/components/Project";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import AboutmeDetails from "@/components/AboutmeDetails";
import Resume from "@/components/Resume";
import CoverLetter from "@/components/CoverLetter";
import { BackToTopButton } from "@/components/BackToTop";
import Script from "next/script";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useColorModeValue("#6366F1", "#9333EA");

  if (!mounted) return null;

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shiva Subramaniyam S",
            url: "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app/",
            image:
              "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app/profile.jpg",
            sameAs: [
              "https://github.com/shivasubramaniyam",
              "https://linkedin.com/in/shiva-subramaniyam-s",
            ],
            jobTitle: "Full Stack Developer",
            knowsAbout: ["React", "Next.js", "Node.js", "Fabric.js"],
          }),
        }}
      />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: backgroundColor,
          zIndex: 1,
        }}
      />
      <Flex
        width="100%"
        height="auto"
        direction="column"
        gap="16px"
        p="16px"
        fontFamily="'GT Walsheim', sans-serif"
        overflowY="none"
      >
        <Header />
        <AboutmeDetails />
        <TechStack />
        <Projects />
        <Education />
        <Resume />
        <CoverLetter />
        <BackToTopButton />
      </Flex>
    </>
  );
}
