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
import React, { useEffect, useState, useRef } from "react";
import WeatherAPI from "@/components/WeatherAPI";

export default function Header() {
  const [visitorCount, setVisitorCount] = useState(0);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        const res = await fetch("/api/visitor");
        const data = await res.json();
        setVisitorCount(data.count);
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      }
    };
    fetchVisitorCount();
  }, []);

  const detailBackground = useColorModeValue("#a9a9b346", "#1a1a2e");
  const responsiveFontSize = useBreakpointValue({
    base: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  });
  const navDisplay = useBreakpointValue({ base: "flex", md: "flex" });
  const navGap = useBreakpointValue({ base: 2, md: 5 });
  const paddingX = useBreakpointValue({ base: "16px", md: "24px" });

  return (
    <>
      <section id="Home">
        <Box display="flex" flexDir="row" gap="16px">
          {" "}
          <Box
            width="65%"
            bg={detailBackground}
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            paddingX={paddingX}
            paddingY="10px"
            borderRadius="12px"
            overflowX={{ base: "auto", md: "visible" }}
            whiteSpace={{ base: "nowrap", md: "normal" }}
          >
            {/* Left side navigation */}
            <Heading as="h1" size="md">
              <Flex
                as="nav"
                gap={navGap}
                flexDir="row"
                display={navDisplay}
                width={{ base: "max-content", md: "auto" }}
              >
                <ChakraLink
                  as={NextLink}
                  href="#"
                  // _hover={{ border: "none" }}
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
                <ChakraLink
                  // as={NextLink}
                  fontSize={responsiveFontSize}
                  className="heading"
                  whiteSpace="normal"
                >
                  Visitors: {visitorCount}
                </ChakraLink>{" "}
              </Flex>
            </Heading>
          </Box>{" "}
          <Box
            width="35%"
            bg={detailBackground}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingX={paddingX}
            paddingY="10px"
            borderRadius="12px"
            overflowX={{ base: "auto", md: "visible" }}
            whiteSpace={{ base: "nowrap", md: "normal" }}
          >
            <WeatherAPI />
          </Box>
        </Box>
      </section>
    </>
  );
}
