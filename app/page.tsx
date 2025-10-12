"use client";

import React from "react";
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
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useColorModeValue("#90EE90", "#6b7febec");

  if (!mounted) return null;

  return (
    <>
      {" "}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
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
      >
        <Header />
        <AboutmeDetails />
        <Education />
        <TechStack />
        <Projects />
        <Resume />
        <CoverLetter />
        <BackToTopButton />
      </Flex>
    </>
  );
}
