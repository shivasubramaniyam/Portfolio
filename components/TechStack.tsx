import { Box, Heading, Text, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Skills() {
  const textColor = useColorModeValue("#000", "#fff");
  const tagBg = useColorModeValue("#bccfe8ff", "#2f2f5f");
  const gridcolor = useColorModeValue("#fff", "#1a1a2eB3");

  const skills = {
    Frontend: ["ReactJS", "NextJS", "Chakra UI", "BootstrapUI"],
    "Automation Testing": ["Automation Testing", "App Testing", "API Testing"],
    DApp: ["WebRTC", "IPFS"],
    Tools: ["Git", "VS Code", "Figma", "Postman", "Puppeteer"],
  };

  const MotionVStack = motion.create(VStack);

  // Variants for slide-in from left or right depending on index
  const slideInVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100, // even index: from left, odd index: from right
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        type: "spring" as const,
        stiffness: 50,
      },
    }),
  };

  return (
    <section id="Skills">
      <Box
        p={{ base: "16px", md: "24px" }}
        borderRadius="12px"
        bg={useColorModeValue("#a9a9b31f", "#1a1a2eB3")}
      >
        <Heading
          textAlign="center"
          mb={{ base: "16px", md: "24px" }}
          fontFamily="'GT Walsheim', sans-serif"
          color={textColor}
          fontSize={{ base: "xl", md: "2xl" }}
        >
          Skills & Tech Stack
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
          {Object.entries(skills).map(([category, items], index) => (
            <MotionVStack
              key={category}
              align="start"
              gap={{ base: 3, md: 4 }}
              bg={gridcolor}
              p={{ base: 4, md: 6 }}
              borderRadius="12px"
              shadow="md"
              custom={index}
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", md: "lg" }}
                color={textColor}
                fontFamily="'GT Walsheim', sans-serif"
              >
                {category}
              </Text>
              <Box display="flex" flexWrap="wrap" gap={{ base: 1, md: 2 }}>
                {items.map((skill) => (
                  <Tag.Root
                    key={skill}
                    className="tag_text"
                    bg={tagBg}
                    color={textColor}
                    size="lg"
                    borderRadius="24px"
                    px={{ base: 3, md: 4 }}
                    py={{ base: 1, md: 1 }}
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    {skill}
                  </Tag.Root>
                ))}
              </Box>
            </MotionVStack>
          ))}
        </SimpleGrid>
      </Box>
    </section>
  );
}
