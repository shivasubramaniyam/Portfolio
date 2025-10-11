"use client";
import { Box, Heading, Menu, Flex } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function Header() {
  return (
    <>
      <Heading>
        This is the heading
        <Flex as="nav" gap={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Heading>
    </>
  );
}
