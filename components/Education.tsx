"use client";

import { Box, Heading, Text, VStack, HStack, Tag } from "@chakra-ui/react";
import { motion, easeOut } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Education() {
  const textColor = useColorModeValue("#000", "#fff");
  const boxBg = useColorModeValue("#f8f9fa", "#1a1a2e");
  const tagBg = useColorModeValue("#e3ea50df", "#2f2f5f");
  const tag1 = useColorModeValue("#000", "#fff");
  const tag2 = useColorModeValue("#ccc", "#333");
  const tag3 = useColorModeValue("#555", "#aaa");

  const educationData = [
    {
      title: "B.E. in Computer Science Engineering",
      college: "Jyothy Institute of Technology",
      year: "2025",
      status: "Completed",
    },
    {
      title: "PMP Basics",
      college: "Online Course",
      year: "2024",
      status: "Completed",
    },
    {
      title: "Power BI (Udemy)",
      college: "Online Course",
      year: "2024",
      status: "In Progress",
    },
  ];

  const MotionBox = motion(Box);

  // Motion variants for fade and slide from bottom
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
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
        Education & Certifications
      </Heading>

      <VStack gap={6} align="stretch" maxW="800px" mx="auto">
        {educationData.map((edu, index) => (
          <MotionBox
            key={index}
            bg={boxBg}
            p={6}
            borderRadius="2xl"
            shadow="md"
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            _hover={{
              transform: "scale(1.02)",
              transition: "0.3s ease-in-out",
            }}
          >
            <HStack justify="space-between" align="center" mb={2}>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={textColor}
                fontFamily="'GT Walsheim', sans-serif"
              >
                {edu.title}
              </Text>
              <Tag.Root
                className="tag_text"
                bg={tagBg}
                color={tag1}
                borderRadius="full"
                px={4}
              >
                {edu.status}
              </Tag.Root>
            </HStack>

            <Text color={textColor} opacity={0.8}>
              {edu.college}
            </Text>
            <Box divideX={"2px"} my={3} borderColor={tag2} />
            <Text fontSize="sm" color={tag3}>
              Year: {edu.year}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}
