"use client";
import { Heading, Flex } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function Header() {
  return (
    <>
      <Heading>
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
