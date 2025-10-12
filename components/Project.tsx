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
      title: "HEALE Web Page",
      description:
        "HEALE, A logistic company Streamline your data with a single, intuitive API. Embrace smart tech for a more reliable, profitable, and efficient shipment.",
      image: "/images/heale_logo.svg",
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
    // {
    //   title: "Chat DApp1",
    //   description:
    //     "A decentralized messaging app with end-to-end encryption and WebRTC-based calling functionality.",
    //   image: "/images/IMG_72611.JPG",
    //   tools: ["WebRTC", "GUN.js", "libp2p", "Next.js"],
    //   link: "https://github.com/yourusername/chat-dapp",
    //   type: "public",
    //   company: "trustgrid",
    // },
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
      {" "}
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
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <AnimatePresence>
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                custom={index}
                variants={fadeInOut}
                initial="hidden"
                // Animate in when in view
                whileInView="visible"
                // Animate out when out of view
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                bg={cardBg}
                borderRadius="2xl"
                shadow="lg"
                overflow="hidden"
                _hover={{ transform: "scale(1.03)", shadow: "xl" }}
              >
                <VStack align="start" gap={3} p={5}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    h="180px"
                    w="100%"
                    objectFit="contain"
                    borderRadius="8px"
                    // Apply filter only if dark mode AND image matches issuer_logo.svg
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
                  >
                    {project.title}
                  </Heading>
                  <Text color={textColor} width="100%" fontSize="sm">
                    {project.description}
                  </Text>
                  <HStack wrap="wrap">
                    {project.tools.map((tool, i) => (
                      <Box
                        className="tag_text"
                        key={i}
                        fontSize="xs"
                        bg={projectCard}
                        color={projectCardColor}
                        px={2}
                        py={1}
                        borderRadius="lg"
                      >
                        {tool}
                      </Box>
                    ))}
                  </HStack>
                  {project.type === "private" ? (
                    <>
                      <Flex direction="row" gap="12px" justifyContent="center">
                        <Text
                          borderRadius="12px"
                          color="red"
                          bg="none"
                          border="1px solid red"
                          py={2}
                          px={2}
                        >
                          Private{" "}
                        </Text>
                        {!!project.logo && (
                          <Box
                            borderColor={textColor}
                            border="1px solid"
                            display="flex"
                            borderRadius="8px"
                            padding="4px"
                          >
                            <Image
                              src={project.logo}
                              alt="logo"
                              boxSize="35px"
                            />
                          </Box>
                        )}
                      </Flex>
                    </>
                  ) : (
                    <>
                      <Flex direction="row" gap="12px" alignItems="center">
                        {" "}
                        <Text
                          borderRadius="12px"
                          color="green"
                          bg="none"
                          border="1px solid green"
                          py={2}
                          px={2}
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
                          border="1px solid white"
                          borderColor={textColor}
                          // py={1}
                          px={2}
                        >
                          <Box boxSize="20px" borderRadius="full">
                            <Image
                              src="/images/github_white.svg"
                              alt="github-logo"
                              boxSize="20px"
                              borderRadius="full"
                            />
                          </Box>

                          <Text>Github Link</Text>
                        </Button>
                      </Flex>
                    </>
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
