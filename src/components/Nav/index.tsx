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
            key={index}
            className="navLink"
          >
            {link.label}
          </ScrollLink>
        );
      })}
    </nav>
  );
}
