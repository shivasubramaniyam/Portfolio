import React, { useState, useEffect } from "react";
import { Button, Image, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@/components/ui/color-mode";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const bgColor = useColorModeValue("#A2B0FF", "#2f2f5f");
  const hoverBg = useColorModeValue("teal.600", "teal.400");
  const color = useColorModeValue("white", "gray.800");
  const { colorMode } = useColorMode();

  // Responsive size and position based on breakpoints
  const buttonSize = useBreakpointValue({ base: "sm", md: "xs" }) as
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "2xs"
    | "xs"
    | undefined;
  const rightPosition = useBreakpointValue({ base: "10px", md: "50%" });
  const transformX = useBreakpointValue({
    base: "none",
    md: "translateX(50%)",
  });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <Button
      aria-label="Back to top"
      position="fixed"
      bottom="10px"
      right={rightPosition}
      transform={transformX}
      size={buttonSize}
      bg={bgColor}
      color={color}
      _hover={{ bg: hoverBg }}
      onClick={scrollToTop}
      borderRadius="full"
      zIndex="1000"
    >
      <Image
        src="/images/uparrow.svg"
        alt="Up arrow"
        boxSize={{ base: "20px", md: "25px" }}
        filter={
          colorMode === "light"
            ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)"
            : undefined
        }
      />
    </Button>
  );
}
