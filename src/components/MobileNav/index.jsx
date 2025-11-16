"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navList } from "@/utils/constants";
import { CiMenuFries } from "react-icons/ci";
import ScrollLink from "@/components/ScrollLink";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <ScrollLink
            className="font-gambarino cursor-pointer"
            to="home"
            onNavigate={handleNavigate}
          >
            HC
          </ScrollLink>
        </div>
        <nav className="flex flex-col justify-center items-center gap-4">
          {navList.map((link, index) => {
            return (
              <ScrollLink
                to={link.path}
                key={index}
                onNavigate={handleNavigate}
                className="navLink"
              >
                {link.label}
              </ScrollLink>
            );
          })}
        </nav>
        <ScrollLink
          className="navLink text-center"
          to="contact"
          onNavigate={handleNavigate}
        >
          Get in Contact
        </ScrollLink>
      </SheetContent>
    </Sheet>
  );
}
