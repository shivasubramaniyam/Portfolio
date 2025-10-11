"use client";

import React from "react";
import { Box, Text, Flex, Link, Image, Center } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useEffect, useState } from "react";
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const textColor = useColorModeValue("#000", "grey");
  const detailBackground = useColorModeValue("#a9a9b346", "#62626cff");

  if (!mounted) return null;
  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      gap="10px"
      // bg="#a9a9b346"
    >
      <Box width="100%" bg="yellow" height="80px" display="block"></Box>
      <Box
        w="500px"
        h="400x"
        borderRadius="12px"
        boxShadow="0px 4px 20px rgba(149, 153, 192, 0.05)"
        p="24px"
        display="flex"
        flexDirection="column"
        gap="16px"
        background={detailBackground}
      >
        <Flex align="center">
          <Text flex={1} fontWeight="bold" textAlign={"center"}>
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
            mt="8px"
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
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#6b7febec"
              borderRadius={"full"}
            >
              <Image src="/images/IMG_72611.JPG" alt="" borderRadius="full" />
            </Box>
            <Box flex={1} color={textColor}>
              <Text fontSize="14px" lineHeight="20px">
                {" "}
                Shiva
              </Text>
              <Text fontSize="12px" lineHeight="24px">
                {" "}
                Personal Details
              </Text>
              {/* Hidden details */}
              <Box className="details">
                <Text fontSize="12px">
                  mailto:shivasubramaniyam54@gmail.com
                  <br />
                  ph no:797****494
                </Text>
              </Box>
            </Box>
          </Flex>{" "}
          <Flex
            className="info-card"
            width="100%"
            align="center"
            bgColor={"#e2ea50ff"}
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
                "https://github.com/shivasubramaniyam",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Box
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#fff"
              borderRadius={"full"}
            >
              <Image src="/images/github-mark.svg" alt="" />
            </Box>
            <Box flex={1} color={textColor}>
              <Text fontSize="14px" lineHeight="20px">
                GitHub
              </Text>
              <Text fontSize="12px" lineHeight="24px">
                Explore Github{" "}
              </Text>
              {/* Hidden details */}
              <Box className="details">
                <Text fontSize="14px">
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
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#6b7febec"
              borderRadius={"full"}
            >
              <Image src="/images/linkedin.svg" alt="" />
            </Box>
            <Box flex={1}>
              <Text fontSize="14px" lineHeight="20px">
                {" "}
                LinkedIn
              </Text>
              <Text fontSize="12px" lineHeight="24px">
                {" "}
                Explore LinkedIn
              </Text>
              {/* Hidden details */}
              <Box className="details">
                <Text fontSize="14px">
                  https://www.linkedin.com/in/shiva-subramaniyam-s
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
