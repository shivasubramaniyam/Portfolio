"use client";

import { Box, Heading, Flex } from "@chakra-ui/react";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as React from "react";
import { useColorModeValue } from "./ui/color-mode";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

export default function CoverLetter() {
  const bgGradient = useColorModeValue(
    "linear(to-br, #f8f9fa, #e9ecef)",
    "linear(to-br, gray.800, gray.900)"
  );

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="Cover_Letter">
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={{ base: 6, md: 12 }}
        w="100%"
        minH="100vh"
        bgGradient={bgGradient}
        textAlign="center"
        bg={useColorModeValue("#a9a9b31f", "#1a1a2eB3")}
        borderRadius="12px"
      >
        <MotionHeading
          as="h4"
          mb={{ base: 12, md: 24 }}
          textAlign="center"
          fontFamily="'GT Walsheim', sans-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: easeInOut }}
          fontWeight="bold"
          fontSize={{ base: "xl", md: "3xl" }}
        >
          Cover Letter
        </MotionHeading>

        <MotionBox
          ref={ref}
          w={{ base: "90%", md: "100%" }}
          maxW="900px"
          h={{ base: "50vh", md: "80vh" }}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0px 12px 35px rgba(0,0,0,0.18)"
          bg={useColorModeValue("white", "gray.700")}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: easeInOut }}
        >
          <iframe
            src="/shiva_coversheet_new.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "transparent",
            }}
            title="CoverSheet Preview"
            loading="lazy"
            aria-label="CoverLetter Preview PDF"
          />
        </MotionBox>
      </Flex>
    </section>
  );
}
