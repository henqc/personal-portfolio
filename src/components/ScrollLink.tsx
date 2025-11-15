"use client";
import { ReactNode, MouseEvent } from "react";

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  smooth?: boolean;
  duration?: number;
  offset?: number;
  onNavigate?: () => void;
}

export default function ScrollLink({ 
  to, 
  children, 
  className, 
  smooth = true, 
  duration = 500,
  offset = -100,
  onNavigate
}: ScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onNavigate) {
      onNavigate();
    }

    const element = document.getElementById(to);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

