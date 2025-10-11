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
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Projects() {
  const MotionBox = motion(Box);
  const cardBg = useColorModeValue("#f8f9fa", "#1a1a2e");
  const textColor = useColorModeValue("#000", "#fff");
  const projectCard = useColorModeValue("#e3ea50df", "#2f2f5f");
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
    },
    {
      title: "Portfolio Website",
      description:
        "HEALE, A logistic company Streamline your data with a single, intuitive API. Embrace smart tech for a more reliable, profitable, and efficient shipment.",
      image: "/images/github.svg",
      tools: ["Next.js", "Framer Motion", "Chakra UI"],
      link: "https://yourportfolio.vercel.app",
      type: "public",
      company: "personal",
    },
    {
      title: "Chat DApp",
      description:
        "A decentralized messaging app with end-to-end encryption and WebRTC-based calling functionality.",
      image: "/images/IMG_72611.JPG",
      tools: ["WebRTC", "GUN.js", "libp2p", "Next.js"],
      link: "https://github.com/yourusername/chat-dapp",
      type: "public",
      company: "trustgrid",
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

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
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
              //   transition="all 0.3s"
              _hover={{ transform: "scale(1.03)", shadow: "xl" }}
            >
              <VStack align="start" gap={3} p={5}>
                <Image
                  src={project.image}
                  alt={project.title}
                  h="180px"
                  w="100%"
                  objectFit="fit"
                  borderRadius="8px"
                />
                <Heading
                  size="md"
                  fontFamily="'GT Walsheim', sans-serif"
                  color={textColor}
                >
                  {project.title}
                </Heading>
                <Text color={textColor} fontSize="sm">
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
                      px={3}
                      py={1}
                      borderRadius="lg"
                    >
                      {tool}
                    </Box>
                  ))}
                </HStack>
                {project.type === "private" ? (
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
  );
}
