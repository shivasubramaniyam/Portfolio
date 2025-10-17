"use client";

import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Projects() {
  const { colorMode } = useColorMode();
  const MotionBox = motion(Box);
  const cardBg = useColorModeValue("#f8f9fa", "#1a1a2e");
  const textColor = useColorModeValue("#000", "#fff");
  const projectCard = useColorModeValue("#bccfe8ff", "#2f2f5f");
  const projectCardColor = useColorModeValue("#000", "#fff");

  const projects = [
    {
      title: "Logistic Company Web Page",
      description:
        " A logistic company Streamline your data with a single, intuitive API. Embrace smart tech for a more reliable, profitable, and efficient shipment.",
      image: "/images/logistic.svg",
      tools: ["Next.js", "Chakra UI"],
      link: "https://github.com/yourusername/weather-app",
      type: "private",
      company: "trustgrid",
      logo: "/images/tgrid_logo.svg",
    },
    {
      title: "Self-sovereign identity (SSI) ",
      description:
        "The SSI module's template preview provides a library of standard, reusable digital credential templates that enable consistent, easy preview and integration for SSI platforms and tools.",
      image: "/images/issuer_logo.svg",
      tools: ["ReactJS", "BootstrapUI"],
      link: "https://yourportfolio.vercel.app",
      type: "private",
      company: "trustgrid",
      logo: "/images/tgrid_logo.svg",
    },
    {
      title: "Synq Social ",
      description:
        "SynQ is a decentralized social network that gives you full control of your online existence. Allowing you to share your life’s moments freely while ensuring privacy and control over your digital narrative.",
      image: "/images/synq.svg",
      tools: ["Puppeteer"],
      link: "",
      type: "private",
      company: "trustgrid",
      logo: "/images/tgrid_logo.svg",
    },
    {
      title: "Blind Assistance",
      description:
        "An AI-powered assistive device using Raspberry Pi that provides real-time object recognition, obstacle detection, and audio feedback to enhance mobility and independence for visually impaired individuals. ",
      image: "/images/raspi.svg",
      tools: ["RaspberryPI", "RasPiOS", "CNN", "Audio Module"],
      link: "https://github.com/yourusername/chat-dapp",
      type: "private",
      company: "JyothyIT",
      logo: "/images/jit.png",
    },
    {
      title: "Portfolio",
      description:
        " portfolio is a well-structured and modern web application built using React with Next.js framework and Chakra UI for styling. It showcases your skills, projects, education, and other professional details. ",
      image: "/images/globe.svg",
      tools: [
        "NextJS",
        "ChakraUI",
        "Motion Framer",
        "API integration",
        "MongoDB",
      ],
      link: "https://github.com/shivasubramaniyam/Portfolio",
      type: "public",
      company: "JyothyIT",
      logo: "/images/jit.png",
    },
  ];

  // Variants with exit for fade out
  const fadeInOut = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
    exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: easeIn } },
  };

  return (
    <section id="Project">
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
          Projects
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 4, md: 6 }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                custom={index}
                variants={fadeInOut}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                bg={cardBg}
                borderRadius="2xl"
                shadow="lg"
                overflow="hidden"
                _hover={{ transform: "scale(1.03)", shadow: "xl" }}
              >
                <VStack
                  align="start"
                  gap={{ base: 3, md: 5 }}
                  p={{ base: 3, md: 5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    h={{ base: "140px", md: "180px" }}
                    w="100%"
                    objectFit="contain"
                    borderRadius="8px"
                    filter={
                      colorMode === "light" &&
                      project.image === "/images/issuer_logo.svg"
                        ? "brightness(0) saturate(100%)"
                        : undefined
                    }
                  />
                  <Heading
                    size="md"
                    fontFamily="'GT Walsheim', sans-serif"
                    color={textColor}
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    {project.title}
                  </Heading>
                  <Text
                    color={textColor}
                    width="100%"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {project.description}
                  </Text>
                  <HStack wrap="wrap" gap={{ base: 2, md: 3 }}>
                    {project.tools.map((tool, i) => (
                      <Box
                        className="tag_text"
                        key={i}
                        fontSize={{ base: "xs", md: "sm" }}
                        bg={projectCard}
                        color={projectCardColor}
                        px={{ base: 2, md: 3 }}
                        py={{ base: 1, md: 1 }}
                        borderRadius="lg"
                      >
                        {tool}
                      </Box>
                    ))}
                  </HStack>
                  {project.type === "private" ? (
                    <Flex
                      direction="row"
                      gap={{ base: "8px", md: "12px" }}
                      justifyContent="center"
                      wrap="wrap"
                      alignContent="center"
                    >
                      <Text
                        borderRadius="12px"
                        color="red"
                        bg="none"
                        border="1px solid red"
                        py={2}
                        px={4}
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Private
                      </Text>
                      {!!project.logo && (
                        <Box
                          borderColor={textColor}
                          border="1px solid"
                          display="flex"
                          borderRadius="12px"
                          padding="4px"
                          mt="2px"
                          boxSize={{ base: "35px", md: "40px" }}
                        >
                          <Image
                            src={project.logo}
                            alt="logo"
                            boxSize={{ base: "25px", md: "30px" }}
                            // borderRadius="full"
                          />
                        </Box>
                      )}
                    </Flex>
                  ) : (
                    <Flex
                      direction="row"
                      gap={{ base: 6, md: "12px" }}
                      alignItems="center"
                      wrap="wrap"
                    >
                      <Text
                        borderRadius="12px"
                        color="green"
                        bg="none"
                        border="1px solid green"
                        py={2}
                        px={4}
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Public
                      </Text>
                      <Button
                        display="flex"
                        flexDirection="row"
                        gap="8px"
                        borderRadius="12px"
                        color={textColor}
                        bg="none"
                        border="1px solid"
                        borderColor={textColor}
                        px={4}
                        fontSize={{ base: "sm", md: "md" }}
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <Box
                          boxSize={{ base: "16px", md: "20px" }}
                          borderRadius="full"
                        >
                          <Image
                            src="/images/github_white.svg"
                            alt="github-logo"
                            boxSize={{ base: "16px", md: "20px" }}
                            borderRadius="full"
                          />
                        </Box>
                        <Text>Github Link</Text>
                      </Button>
                    </Flex>
                  )}
                </VStack>
              </MotionBox>
            ))}
          </AnimatePresence>
        </SimpleGrid>
      </Box>
    </section>
  );
}
