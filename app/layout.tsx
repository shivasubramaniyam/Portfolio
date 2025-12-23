import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Subramaniyam | Full Stack Developer",
  description:
    "Full Stack Developer with experience in Next.js, React, MongoDB, and APIs.",
  openGraph: {
    title: "Shiva Subramaniyam | Full Stack Developer",
    description:
      "Explore my portfolio, projects, and real-world full-stack applications.",
    url: "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app/",
    siteName: "Shiva Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
