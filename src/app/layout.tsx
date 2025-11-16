import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

const gambarino = localFont({
  src: [
    {
      path: "../utils/fonts/Gambarino-Regular.otf",
    },
  ],
  variable: "--font-gambarino",
  display: "swap",
  preload: true,
});

const robotoslab = localFont({
  src: [
    {
      path: "../utils/fonts/RobotoSlab-Regular.ttf",
    },
  ],
  variable: "--font-roboto-slab",
  display: "swap",
  preload: true,
});

const robotoslablight = localFont({
  src: [
    {
      path: "../utils/fonts/RobotoSlab-ExtraLight.ttf",
    },
  ],
  variable: "--font-roboto-slab-light",
  display: "swap",
  preload: false, // Don't preload the light variant
});

export const metadata: Metadata = {
  title: "Henry's Portfolio",
  description: "A minimalist JS portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gambarino.variable} ${robotoslab.variable} ${robotoslablight.variable}`}
    >
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
