"use client";
import Bio from "@/components/Bio";
import Home from "@/components/Home";
import SKillHeader from "@/components/SkillHeader";
import WorkExperienceHeader from "@/components/WorkExperienceHeader";
import dynamic from "next/dynamic";

const WorkExperience = dynamic(() => import("@/components/WorkExperience"), {
  loading: () => null,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => null,
});
const ProjetHeader = dynamic(() => import("@/components/ProjectsHeader"), {
  loading: () => null,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => null,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});

export default function Portfolio() {
  return (
    <div className="overflow-clip">
      <Home />
      <Bio />
      <WorkExperienceHeader />
      <WorkExperience />
      <SKillHeader />
      <Experience />
      <ProjetHeader />
      <Projects />
      <Contact />
    </div>
  );
}
