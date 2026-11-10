"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function AboutmeDetails() {
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row md:justify-between md:items-stretch">
      {/* Main Bio Card */}
      <Card className="flex w-full flex-col gap-4 p-4 sm:p-6 md:w-[65%] md:flex-row md:items-center">
        {/* Profile Image */}
        <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-full shadow-lg md:mx-0 md:h-36 md:w-36">
          <Image
            src="/images/IMG_72611.JPG"
            alt="Shiva Subramaniyam profile picture"
            fill
            priority
            sizes="(max-width: 640px) 112px, 144px"
            className="object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            About Me
          </p>
          <h1 className="mb-2 text-xl sm:text-2xl font-bold md:text-3xl leading-snug">
            <span className="font-unbounded">Shiva Subramaniyam S</span> — Full Stack Developer
          </h1>
          <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base text-justify">
            Full-stack engineer based in Bengaluru specializing in <b className="text-foreground">distributed identity (SSI)</b>, <b className="text-foreground">zero-trust authorization</b>, and interactive <b className="text-foreground">canvas rendering engines</b>. At TrustGrid, I develop production enterprise dashboards interfacing with Hyperledger Indy and Keycloak. Outside work, I architect security-first experiments like PunchOS, bridging biometric WebAuthn Passkeys with real-world authentication workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Web3 & Hyperledger Indy
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Full Stack Developer
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Canvas & Fabric.js
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Keycloak (RBAC)
            </Badge>
          </div>
        </div>
      </Card>

      {/* Details Sidebar */}
      <div className="flex w-full flex-col gap-2.5 sm:gap-3 md:gap-0 md:w-[35%]">
        {/* Shiva / Personal Details Card */}
        <div className="info-card flex flex-1 items-center gap-3 sm:gap-4 rounded-xl sm:rounded-[24px] border border-white/20 bg-[#5A63D8] p-3 sm:p-4 dark:bg-[#6B7CFA] shadow-xs">
          <div className="relative h-11 w-11 sm:h-[50px] sm:w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/IMG_72611.JPG"
              alt="Shiva"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 text-foreground">
            <p className="font-unbounded text-xs sm:text-sm font-bold leading-tight sm:leading-5 truncate">
              Shiva
            </p>
            <p className="text-[11px] sm:text-xs leading-normal sm:leading-6 text-foreground/70">
              Personal Details
            </p>
            <div className="details">
              <p className="text-[10px] sm:text-xs break-all leading-relaxed">
                <a href="mailto:shivasubramaniyam54@gmail.com" className="hover:underline">
                  shivasubramaniyam54@gmail.com
                </a>
                <br />
                <span className="text-foreground/80 font-medium">Bengaluru, India • Open to Roles</span>
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Card */}
        <div
          className="info-card flex flex-1 cursor-pointer items-center gap-3 sm:gap-4 rounded-xl sm:rounded-[24px] border border-white/20 bg-[#A2B0FF] p-3 sm:p-4 md:-mt-5 dark:bg-[#3F46A1] shadow-xs"
          onClick={() =>
            window.open(
              "https://github.com/shivasubramaniyam",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <div className="relative h-11 w-11 sm:h-[50px] sm:w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/github.svg"
              alt="GitHub profile"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 min-w-0 text-foreground">
            <p className="text-xs sm:text-sm font-semibold leading-tight sm:leading-5 truncate">
              GitHub
            </p>
            <p className="text-[11px] sm:text-xs leading-normal sm:leading-6 text-foreground/70">
              Explore GitHub
            </p>
            <div className="details">
              <p className="text-[10px] sm:text-xs break-all leading-relaxed">
                github.com/shivasubramaniyam
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div
          className="info-card flex flex-1 cursor-pointer items-center gap-3 sm:gap-4 rounded-xl sm:rounded-[24px] border border-white/20 bg-white p-3 sm:p-4 md:-mt-5 dark:bg-[#0F123D] shadow-xs"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shiva-subramaniyam-s",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <div className="relative h-11 w-11 sm:h-[50px] sm:w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn profile"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 min-w-0 text-foreground">
            <p className="text-xs sm:text-sm font-semibold leading-tight sm:leading-5 truncate">
              LinkedIn
            </p>
            <p className="text-[11px] sm:text-xs leading-normal sm:leading-6 text-foreground/70">
              Explore LinkedIn
            </p>
            <div className="details">
              <p className="text-[10px] sm:text-xs break-all leading-relaxed">
                linkedin.com/in/shiva-subramaniyam-s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
