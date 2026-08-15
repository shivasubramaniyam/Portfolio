import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  // Manrope is a variable font, but you can specify weights if needed
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shiva Subramaniyam | Full Stack Developer",
    template: "%s | Shiva Subramaniyam",
  },
  description:
    "Full Stack Developer with experience in Next.js, React, MongoDB, and APIs.",
  keywords: [
    "Shiva Subramaniyam S",
    "React Developer",
    "Next.js Portfolio",
    "Canvas Builder using FabricJS",
    "Backend Developer",
  ],
  authors: [{ name: "Shiva Subramaniyam S" }],
  creator: "Shiva Subramaniyam S",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shiva Subramaniyam | Full Stack Developer",
    description:
      "Explore my portfolio, projects, and real-world full-stack applications.",
    url: `${siteUrl}/`,
    siteName: "Shiva Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Subramaniyam Portfolio",
    description:
      "Frontend Developer Portfolio with React, Next.js, and Backend Projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased `}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
