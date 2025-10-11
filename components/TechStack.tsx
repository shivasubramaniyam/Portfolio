"use client";

import { Box, Heading, Text, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Skills() {
  const textColor = useColorModeValue("#000", "#fff");
  const tagBg = useColorModeValue("#e3ea50df", "#2f2f5f");
  const gridcolor = useColorModeValue("#fff", "#1a1a2e");

  const skills = {
    Frontend: ["ReactJS", "NextJS", "Chakra UI", "BootstrapUI"],
    "Automation Testing": ["Automation Testing", "App Testing", "API Testing"],
    DApp: ["WebRTC", "IPFS"],
    Tools: ["Git", "VS Code", "Figma", "Postman", "Puppeteer"],
  };

  const MotionVStack = motion(VStack);

  // Variants for slide-in from left or right depending on index
  const slideInVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100, // even index: from left, odd index: from right
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        type: "spring" as const,
        stiffness: 50,
      },
    }),
  };

  return (
    <Box
      p="24px"
      borderRadius="12px"
      bg={useColorModeValue("#a9a9b346", "#0f0f1f")}
    >
      <Heading
        textAlign="center"
        mb="24px"
        fontFamily="'GT Walsheim', sans-serif"
        color={textColor}
      >
        Skills & Tech Stack
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {Object.entries(skills).map(([category, items], index) => (
          <MotionVStack
            key={category}
            align="start"
            gap={4}
            bg={gridcolor}
            p={6}
            borderRadius="12px"
            shadow="md"
            custom={index}
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={textColor}
              fontFamily="'GT Walsheim', sans-serif"
            >
              {category}
            </Text>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {items.map((skill) => (
                <Tag.Root
                  key={skill}
                  className="tag_text"
                  bg={tagBg}
                  color={textColor}
                  size="lg"
                  borderRadius="24px"
                  px={4}
                  py={1}
                >
                  {skill}
                </Tag.Root>
              ))}
            </Box>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
