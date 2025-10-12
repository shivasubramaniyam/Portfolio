"use client";

import { Box, Heading, Text, VStack, HStack, Tag } from "@chakra-ui/react";
import { motion, easeOut } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Education() {
  const textColor = useColorModeValue("#000", "#fff");
  const boxBg = useColorModeValue("#f8f9fa", "#1a1a2e");
  const tagBg = useColorModeValue("#bccfe8ff", "#2f2f5f");
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
      title: "Cloud Essentials",
      college: "IBM (Credly)",
      year: "2025",
      status: "Completed",
    },
    {
      title: "Power BI (Udemy)",
      college: "Online Course",
      year: "2024",
      status: "In Progress",
    },
    {
      title: "React JS",
      college: "Infosys Springboard",
      year: "2023",
      status: "Completed",
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
    <section id="edu">
      {" "}
      <Box
        p={{ base: "16px", md: "24px" }}
        borderRadius="12px"
        bg={useColorModeValue("#a9a9b346", "#0f0f1f")}
      >
        <Heading
          textAlign="center"
          mb={{ base: "16px", md: "24px" }}
          fontFamily="'GT Walsheim', sans-serif"
          color={textColor}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Education & Certifications
        </Heading>

        <VStack
          gap={{ base: 4, md: 6 }}
          align="stretch"
          maxW={{ base: "100%", md: "800px" }}
          mx="auto"
        >
          {educationData.map((edu, index) => (
            <MotionBox
              key={index}
              bg={boxBg}
              p={{ base: 4, md: 6 }}
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
              <HStack
                justify="space-between"
                align="center"
                mb={{ base: 1, md: 2 }}
              >
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color={textColor}
                  fontFamily="'GT Walsheim', sans-serif"
                >
                  {edu.title}
                </Text>
                <Tag.Root
                  bg={tagBg}
                  color={tag1}
                  borderRadius="full"
                  px={4}
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  {edu.status}
                </Tag.Root>
              </HStack>

              <Text
                color={textColor}
                opacity={0.8}
                fontSize={{ base: "sm", md: "md" }}
              >
                {edu.college}
              </Text>
              <Box
                borderBottomWidth="2px"
                my={{ base: 2, md: 3 }}
                borderColor={tag2}
              />
              <Text fontSize={{ base: "xs", md: "sm" }} color={tag3}>
                Year: {edu.year}
              </Text>
            </MotionBox>
          ))}
        </VStack>
      </Box>
    </section>
  );
}
