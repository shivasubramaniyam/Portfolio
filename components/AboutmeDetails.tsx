"use client";
import { Box, Text, Flex, Image, Tag } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer"; // optional, if needed

const MotionFlex = motion(Flex);

const slideInVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction % 2 === 0 ? -100 : 100, // even index slide from left, odd from right
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function AboutmeDetails() {
  const detailBackground = useColorModeValue("#a9a9b346", "#1a1a2e");
  const tagBg = useColorModeValue("#bccfe8ff", "#2d2d44");

  return (
    <>
      <Flex
        w="100%"
        display="flex"
        gap="16px"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        {" "}
        <Box
          borderRadius="12px"
          boxShadow="0px 4px 20px rgba(149, 153, 192, 0.05)"
          p="24px"
          display="flex"
          gap="16px"
          background={detailBackground}
          width={{ base: "100%", md: "65%" }}
        >
          <Flex
            align="center"
            direction={{ base: "column", md: "row" }}
            gap="16px"
          >
            {/* Profile Image */}
            <Box
              width={{ base: "120px", md: "140px" }}
              height={{ base: "120px", md: "140px" }}
              borderRadius="full"
              overflow="hidden"
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              flexShrink={0}
            >
              <Image
                src="/images/IMG_72611.JPG"
                alt="Shiva"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>

            {/* About Text */}
            <Box flex={1}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                // color={"#000"}
                mb="8px"
                textAlign={{ base: "center", md: "left" }}
              >
                About Me
              </Text>

              <Text
                fontSize="md"
                // color={"#000"}
                lineHeight="1.7"
                textAlign={{ base: "center", md: "left" }}
                mb="16px"
              >
                Hi, I’m <b>Shiva</b>, a developer who loves turning ideas into
                interactive digital experiences. I enjoy experimenting with{" "}
                <b>React</b> ,<b>Next.js</b>, and{" "}
                <b>decentralized web technologies</b>. When I’m not coding, I
                explore new design trends, tweak my personal projects, or learn
                something fresh in the world of <b>AI</b> and <b>Automation</b>{" "}
                .
              </Text>

              {/* Quick Facts / Tags */}
              <Flex
                wrap="wrap"
                gap="8px"
                justify={{ base: "center", md: "flex-start" }}
              >
                <Tag.Root
                  bg={tagBg}
                  className="tag_text"
                  // color={"#000"}
                  borderRadius="full"
                  px="12px"
                  py="6px"
                >
                  <Tag.Label> Learning Web3</Tag.Label>
                </Tag.Root>
                <Tag.Root
                  bg={tagBg}
                  // color={"#000"}
                  className="tag_text"
                  borderRadius="full"
                  px="12px"
                  py="6px"
                >
                  <Tag.Label> Full Stack Developer</Tag.Label>
                </Tag.Root>
                <Tag.Root
                  bg={tagBg}
                  // color={"#000"}
                  className="tag_text"
                  borderRadius="full"
                  px="12px"
                  py="6px"
                >
                  <Tag.Label> Music & Fitness Enthusiast</Tag.Label>
                </Tag.Root>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          width={{ base: "100%", md: "35%" }}
          h="auto"
          borderRadius="12px"
          boxShadow="0px 4px 20px rgba(149, 153, 192, 0.05)"
          p="24px"
          display="flex"
          flexDirection="column"
          gap="16px"
          background={detailBackground}
        >
          <Flex align="center">
            <Text flex={1} fontWeight="bold" textAlign={"left"} ml="15px">
              Details
            </Text>
            {/* 
            <Link
              href="#"
              onClick={handleOpenAllLinks}
              fontSize="14px"
              fontWeight="500"
              style={{
                background:
                  "linear-gradient(313.48deg, #3446EE 16.08%, #6C6EF5 60.58%, #9695F9 93.77%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              px="16px"
              py="4px"
              cursor="pointer"
            >
              View all
            </Link> */}
          </Flex>
          <Box>
            <Flex
              className="info-card"
              align="center"
              width="100%"
              bgColor={"#90EE90"}
              h={"100px"}
              borderRadius={"24px"}
              border={"1px solid rgba(255, 255, 255, 0.20)"}
              padding="16px"
              alignItems="center"
              gap="16px"
              flexShrink="0"
            >
              <Box
                w={{ base: "40px", md: "50px" }}
                h={{ base: "40px", md: "50px" }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "left", md: "center" }}
                // bg="#6b7febec"
                borderRadius="full"
              >
                <Image src="/images/IMG_72611.JPG" alt="" borderRadius="full" />
              </Box>
              <Box flex={1} color={"#000"}>
                <Text fontSize={{ base: "12px", md: "14px" }} lineHeight="20px">
                  {" "}
                  Shiva
                </Text>
                <Text fontSize={{ base: "10px", md: "12px" }} lineHeight="24px">
                  {" "}
                  Personal Details
                </Text>
                {/* Hidden details */}
                <Box className="details">
                  <Text fontSize={{ base: "10px", sm: "8px", md: "12px" }}>
                    mailto:shivasubramaniyam54@gmail.com
                    <br />
                    ph no:797 5271 494
                  </Text>
                </Box>
              </Box>
            </Flex>{" "}
            <Flex
              className="info-card"
              width="100%"
              align="center"
              bgColor="#e2ea50ff"
              h="100px"
              borderRadius="24px"
              border="1px solid rgba(255, 255, 255, 0.20)"
              padding="16px"
              alignItems="center"
              gap="16px"
              flexShrink="0"
              marginTop="-20px"
              onClick={() =>
                window.open(
                  "https://github.com/shivasubramaniyam",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Box
                w={{ base: "40px", md: "50px" }}
                h={{ base: "40px", md: "50px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
              >
                <Image src="/images/github.svg" alt="" />
              </Box>
              <Box flex={1} color={"#000"}>
                <Text fontSize={{ base: "12px", md: "14px" }} lineHeight="20px">
                  GitHub
                </Text>
                <Text fontSize={{ base: "10px", md: "12px" }} lineHeight="24px">
                  Explore Github{" "}
                </Text>
                {/* Hidden details */}
                <Box className="details">
                  <Text fontSize={{ base: "10px", sm: "8px", md: "12px" }}>
                    {" "}
                    https://github.com/shivasubramaniyam{" "}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex
              className="info-card"
              align="center"
              width="100%"
              mt="8px"
              bgColor={"#A2B0FF"}
              h={"100px"}
              borderRadius={"24px"}
              border={"1px solid rgba(255, 255, 255, 0.20)"}
              padding="16px"
              alignItems="center"
              gap="16px"
              flexShrink="0"
              marginTop={"-20px"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shiva-subramaniyam-s",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Box
                w={{ base: "40px", md: "50px" }}
                h={{ base: "40px", md: "50px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                // bg="#6b7febec"
                borderRadius={"full"}
              >
                <Image src="/images/linkedin.svg" alt="" />
              </Box>
              <Box flex={1} color={"#000"}>
                <Text fontSize={{ base: "12px", md: "14px" }} lineHeight="20px">
                  {" "}
                  LinkedIn
                </Text>
                <Text fontSize={{ base: "10px", md: "12px" }} lineHeight="24px">
                  {" "}
                  Explore LinkedIn
                </Text>
                {/* Hidden details */}
                <Box className="details">
                  <Text fontSize={{ base: "10px", sm: "8px", md: "12px" }}>
                    https://www.linkedin.com/in/shiva-subramaniyam-s
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
