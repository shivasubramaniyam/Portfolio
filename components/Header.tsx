"use client";
import { Heading, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "./ui/color-mode";
import React from "react";

export default function Header() {
  const detailBackground = useColorModeValue("#a9a9b346", "#1a1a2e");

  return (
    <>
      <section id="Home">
        {" "}
        <Box
          width="100%"
          bg={detailBackground}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          paddingX="24px"
          paddingY="10px"
          borderRadius="12px"
          // position="sticky"
          // top={0} // add this
          // zIndex="sticky"
        >
          {" "}
          <Heading>
            <Flex as="nav" gap={5}>
              <a href="#">Home</a>
              <a href="#Skills">Skills</a>
              <a href="#Project">Project</a>
              <a href="#Resume">Resume</a>
              <a href="#Cover_Letter">Cover Letter</a>
            </Flex>
          </Heading>
        </Box>
      </section>
    </>
  );
}
