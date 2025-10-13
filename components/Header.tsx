"use client";
import {
  Heading,
  Flex,
  Box,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "./ui/color-mode";
import React from "react";

export default function Header() {
  const detailBackground = useColorModeValue("#a9a9b346", "#1a1a2e");

  // Use responsive font size with useBreakpointValue for better control
  const responsiveFontSize = useBreakpointValue({
    base: "12px", // smaller font on smallest mobiles
    sm: "14px", // a bit larger on small devices
    md: "16px",
    lg: "18px",
  });

  // Conditionally render links in a VStack on mobile to prevent clipping
  const navDisplay = useBreakpointValue({
    base: "flex", // Use flex on mobile to allow scrolling if needed
    md: "flex",
  });

  const navGap = useBreakpointValue({
    base: 2, // Smaller gap on mobile
    md: 5,
  });

  const paddingX = useBreakpointValue({
    base: "16px", // Reduced padding on mobile
    md: "24px",
  });

  return (
    <>
      <section id="Home">
        <Box
          width="100%"
          bg={detailBackground}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          paddingX={paddingX}
          paddingY="10px"
          borderRadius="12px"
          overflowX={{ base: "auto", md: "visible" }} // Allow horizontal scroll on mobile if content overflows
          whiteSpace={{ base: "nowrap", md: "normal" }} // Prevent line breaks on mobile
        >
          <Heading as="h1" size="md">
            <Flex
              as="nav"
              gap={navGap}
              flexDir="row"
              display={navDisplay}
              width={{ base: "max-content", md: "auto" }} // Ensure width adapts
            >
              <ChakraLink
                as={NextLink}
                href="#"
                _hover={{ border: "none" }}
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Skills"
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
              >
                Skills
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Project"
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
              >
                Project
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#edu"
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
              >
                Education
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Resume"
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
              >
                Resume
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="#Cover_Letter"
                fontSize={responsiveFontSize}
                className="heading"
                whiteSpace="normal"
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
