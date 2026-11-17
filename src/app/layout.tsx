import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Chen — Software Engineer",
  description:
    "Henry Chen is a software engineer with experience at Google, Amazon Web Services and Capital One.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.className}>
      <head>
        {/* The page stays behind its loader until Scene sets data-ready. If the scripts never run, reveal it anyway. */}
        <script dangerouslySetInnerHTML={{ __html: 'setTimeout(()=>document.documentElement.dataset.ready="",6000)' }} />
        <noscript>
          <style>{".loader{display:none}:root:not([data-ready]){overflow:visible}.projects-pin{overflow-x:auto}"}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
