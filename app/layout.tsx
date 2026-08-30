import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shiva Subramaniyam | Full Stack Developer",
    template: "%s | Shiva Subramaniyam",
  },
  description:
    "Full Stack Developer building Web3 identity tools, real-time canvas editors, and production APIs with React, Next.js, Node.js, and Fabric.js.",
  keywords: [
    "Shiva Subramaniyam S",
    "React Developer",
    "Next.js Portfolio",
    "Web3 Developer",
    "Fabric.js Canvas Editor",
    "Full Stack Developer",
    "SSI Self-Sovereign Identity",
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
      "Web3 identity tools, real-time canvas editors, and production APIs — built with React, Next.js, Node.js, and Fabric.js.",
    url: `${siteUrl}/`,
    siteName: "Shiva Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Subramaniyam Portfolio",
    description:
      "Web3 developer building identity tools, canvas editors, and full-stack apps with React, Next.js, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
