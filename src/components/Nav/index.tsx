"use client";
import { navList } from "@/utils/constants";
import ScrollLink from "@/components/ScrollLink";
import "@/app/globals.css";

export default function Nav() {
  return (
    <nav className="flex gap-8">
      {navList.map((link, index) => {
        return (
          <ScrollLink
            to={link.path}
            smooth={true}
            duration={500}
            key={index}
            className={
              "capitalize font-robotoSlab font-medium cursor-pointer hover:text-blue transition-all"
            }
          >
            {link.label}
          </ScrollLink>
        );
      })}
    </nav>
  );
}
