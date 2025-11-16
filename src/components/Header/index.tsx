"use client";

import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ScrollLink from "@/components/ScrollLink";

import { useState, useCallback } from "react";
import "@/app/globals.css";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const handleScrollChange = useCallback(
    (latest: number) => {
      const previous = scrollY.getPrevious();
      if (previous && latest > previous && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    },
    [scrollY]
  );

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="py-8 text-white fixed w-full z-50 xl:bg-[#27272c] xl:bg-opacity-80 xl:bg-clip-padding xl:blur-backdrop-filter will-change-transform"
    >
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink
          className="cursor-pointer"
          to="home"
        >
          <h1 className="text-4xl font-gambarino">HC</h1>
        </ScrollLink>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ScrollLink
            className="cursor-pointer"
            to="contact"
          >
            <Button className="font-robotoSlab text-white font-medium">
              Get in Contact
            </Button>
          </ScrollLink>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
