import { Flex } from "@chakra-ui/react";
import Header from "@/components/Header";
import Projects from "@/components/Project";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import AboutmeDetails from "@/components/AboutmeDetails";
import Resume from "@/components/Resume";
import CoverLetter from "@/components/CoverLetter";
import { BackToTopButton } from "@/components/BackToTop";
import ScrollIndicator from "@/components/ScrollIndicator";

const siteUrl = "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shiva Subramaniyam S",
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/IMG_72611.JPG`,
  sameAs: [
    "https://github.com/shivasubramaniyam",
    "https://linkedin.com/in/shiva-subramaniyam-s",
  ],
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Fabric.js",
    "MongoDB",
    "TypeScript",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ScrollIndicator />
      <Flex
        width="100%"
        height="auto"
        direction="column"
        gap="16px"
        p="16px"
        fontFamily="'GT Walsheim', sans-serif"
        overflowY="none"
      >
        <Header />
        <AboutmeDetails />
        <TechStack />
        <Projects />
        <Education />
        <Resume />
        <CoverLetter />
        <BackToTopButton />
      </Flex>
    </>
  );
}
