import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Project";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import AboutmeDetails from "@/components/AboutmeDetails";
import Resume from "@/components/Resume";
import CoverLetter from "@/components/CoverLetter";
import Playground from "@/components/Playground";
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
    "Web3",
    "SSI",
  ],
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Shiva Subramaniyam Portfolio",
  author: {
    "@type": "Person",
    name: "Shiva Subramaniyam S",
  },
  url: siteUrl,
  description:
    "Portfolio showcasing Web3 identity tools, real-time canvas editors, and full-stack applications.",
  dateModified: new Date().toISOString().split("T")[0],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <ScrollIndicator />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 p-4 md:gap-6 md:p-6">
        <Header />
        <Hero />
        <AboutmeDetails />
        <TechStack />
        <Projects />
        <Playground />
        <Education />
        <Resume />
        <CoverLetter />

        {/* Footer */}
        <footer className="flex flex-col items-center justify-center gap-2 py-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shiva Subramaniyam. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Next.js
            </a>{" "}
            &amp;{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Shadcn UI
            </a>
          </p>
        </footer>

        <BackToTopButton />
      </div>
    </>
  );
}
