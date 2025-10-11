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
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/";
export default function Projects() {
  const cardBg = useColorModeValue("#f8f9fa", "#1a1a2e");
  const textColor = useColorModeValue("#000", "#fff");

  const projects = [
    {
      title: "Weather Forecast App",
      description:
        "A real-time weather web app that displays forecasts for all Indian cities using Next.js and OpenWeather API.",
      image: "/images/weather_app.png",
      tools: ["Next.js", "Chakra UI", "OpenWeather API"],
      link: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills, resume, and projects, with color mode support and responsive design.",
      image: "/images/portfolio.png",
      tools: ["Next.js", "Framer Motion", "Chakra UI"],
      link: "https://yourportfolio.vercel.app",
    },
    {
      title: "Chat DApp",
      description:
        "A decentralized messaging app with end-to-end encryption and WebRTC-based calling functionality.",
      image: "/images/chat_dapp.png",
      tools: ["WebRTC", "GUN.js", "libp2p", "Next.js"],
      link: "https://github.com/yourusername/chat-dapp",
    },
  ];

  return (
    <Box py={16} px={8} bg={useColorModeValue("#fff", "#0f0f1f")}>
      <Heading
        textAlign="center"
        mb={10}
        fontFamily="'GT Walsheim', sans-serif"
        color={textColor}
      >
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <Box
            key={index}
            bg={cardBg}
            borderRadius="2xl"
            shadow="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.03)", shadow: "xl" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              h="180px"
              w="100%"
              objectFit="cover"
            />
            <VStack align="start" spacing={3} p={5}>
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
                    key={i}
                    fontSize="xs"
                    bg={useColorModeValue("#e3ea50df", "#2f2f5f")}
                    color={useColorModeValue("#000", "#fff")}
                    px={3}
                    py={1}
                    borderRadius="lg"
                  >
                    {tool}
                  </Box>
                ))}
              </HStack>
              <Button
                mt={3}
                size="sm"
                colorScheme="blue"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
