"use client";
import { Heading, Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "./ui/color-mode";
import React from "react";

export default function Header() {
  const detailBackground = useColorModeValue("#a9a9b346", "#1a1a2e");

  // Define responsive font size style object once
  const responsiveFontSize = { base: "14px", md: "18px" };

  return (
    <>
      <section id="Home">
        <Box
          width="100%"
          bg={detailBackground}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          paddingX="24px"
          paddingY="10px"
          borderRadius="12px"
        >
          <Heading>
            <Flex as="nav" gap={{ base: 3, md: 5 }}>
              {/* Each link wrapped with ChakraLink for styling and NextLink for routing */}
              <ChakraLink as={NextLink} href="#" fontSize={responsiveFontSize}>
                Home
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Skills"
                fontSize={responsiveFontSize}
              >
                Skills
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Project"
                fontSize={responsiveFontSize}
              >
                Project
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Resume"
                fontSize={responsiveFontSize}
              >
                Resume
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Cover_Letter"
                fontSize={responsiveFontSize}
              >
                Cover Letter
              </ChakraLink>
            </Flex>
          </Heading>
        </Box>
      </section>
    </>
  );
}
