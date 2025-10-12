"use client";

import { Box, Heading, Flex } from "@chakra-ui/react";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as React from "react";
import { useColorModeValue } from "./ui/color-mode";
import { section } from "motion/react-client";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
export default function CoverLetter() {
  const bgGradient = useColorModeValue(
    "linear(to-br, #f8f9fa, #e9ecef)",
    "linear(to-br, gray.800, gray.900)"
  );

  const { ref, inView } = useInView({
    triggerOnce: false, // Allow repeated triggers on scroll
    threshold: 0.2,
  });
  return (
    <section id="Cover_Letter">
      {" "}
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={{ base: 6, md: 12 }}
        w="100%"
        minH="100vh"
        bgGradient={bgGradient}
        textAlign="center"
        bg={useColorModeValue("#a9a9b346", "#0f0f1f")}
        borderRadius="12px"
      >
        <MotionHeading
          as={motion.h4}
          mb="24px"
          textAlign="center"
          fontFamily="'GT Walsheim', sans-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: easeInOut }}
          fontWeight="bold"
        >
          Cover Letter
        </MotionHeading>

        {/* <Text
        maxW="700px"
        mb={8}
        px={4}
        fontSize={{ base: "md", md: "lg" }}
        color={useColorModeValue("gray.700", "gray.300")}
      >
        Here’s a detailed overview of my skills, experience, and projects. Feel
        free to preview below or download a PDF version for your convenience.
      </Text> */}

        <MotionBox
          ref={ref}
          w="100%"
          maxW="900px"
          h={{ base: "60vh", md: "80vh" }}
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
