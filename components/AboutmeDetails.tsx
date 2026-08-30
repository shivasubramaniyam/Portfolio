"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function AboutmeDetails() {
  return (
    <div className="flex w-full flex-col gap-3 md:flex-row md:justify-between md:items-stretch">
      {/* Main Bio Card */}
      <Card className="flex w-full flex-col gap-4 p-6 md:w-[65%] md:flex-row md:items-center">
        {/* Profile Image */}
        <div className="relative mx-auto h-32 w-32 flex-shrink-0 overflow-hidden rounded-full shadow-lg md:mx-0 md:h-36 md:w-36">
          <Image
            src="/images/IMG_72611.JPG"
            alt="Shiva Subramaniyam profile picture"
            fill
            priority
            sizes="144px"
            className="object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            About Me
          </p>
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">
            Shiva Subramaniyam S — Full Stack Developer
          </h1>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            I build <b className="text-foreground">Web3 identity tools</b> and{" "}
            <b className="text-foreground">real-time systems</b> that users
            actually touch. From{" "}
            <b className="text-foreground">self-sovereign identity platforms</b>{" "}
            to <b className="text-foreground">custom canvas editors</b>, I focus
            on solving real problems with React, Next.js, and decentralized web
            technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Web3 & SSI
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Full Stack Developer
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Canvas & Real-time Systems
            </Badge>
          </div>
        </div>
      </Card>

      {/* Details Sidebar */}
      <div className="flex w-full flex-col md:w-[35%]">
        {/* <p className="mb-3 px-1 text-sm font-bold"></p> */}

        {/* Shiva / Personal Details Card */}
        <div className="info-card flex flex-1 items-center gap-4 rounded-[24px] border border-white/20 bg-[#5A63D8] p-4 dark:bg-[#6B7CFA]">
          <div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/IMG_72611.JPG"
              alt="Shiva"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-foreground">
            <p className="text-sm font-semibold leading-5 md:text-base">
              Shiva
            </p>
            <p className="text-xs leading-6 text-foreground/70">
              Personal Details
            </p>
            <div className="details">
              <p className="text-[10px] md:text-xs">
                mailto:shivasubramaniyam54@gmail.com
                <br />
                ph no: 797 5271 494
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Card */}
        <div
          className="info-card flex flex-1 cursor-pointer items-center gap-4 rounded-[24px] border border-white/20 bg-[#A2B0FF] p-4 -mt-5 dark:bg-[#3F46A1]"
          onClick={() =>
            window.open(
              "https://github.com/shivasubramaniyam",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/github.svg"
              alt="GitHub profile"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 text-foreground">
            <p className="text-sm font-semibold leading-5 md:text-base">
              GitHub
            </p>
            <p className="text-xs leading-6 text-foreground/70">
              Explore GitHub
            </p>
            <div className="details">
              <p className="text-[10px] md:text-xs">
                https://github.com/shivasubramaniyam
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div
          className="info-card flex flex-1 cursor-pointer items-center gap-4 rounded-[24px] border border-white/20 bg-white p-4 -mt-5 dark:bg-[#0F123D]"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shiva-subramaniyam-s",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn profile"
              fill
              loading="lazy"
              sizes="50px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 text-foreground">
            <p className="text-sm font-semibold leading-5 md:text-base">
              LinkedIn
            </p>
            <p className="text-xs leading-6 text-foreground/70">
              Explore LinkedIn
            </p>
            <div className="details">
              <p className="text-[10px] md:text-xs">
                https://www.linkedin.com/in/shiva-subramaniyam-s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
