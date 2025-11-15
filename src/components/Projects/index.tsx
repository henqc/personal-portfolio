"use client";
import { projectList } from "@/utils/constants";
import { useScroll } from "framer-motion";
import Card from "@/components/Card";
import { useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="projects" ref={container} className="">
      <div className="container">
        {projectList.map((project, index) => {
          const targetScale = 1 - (projectList.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
