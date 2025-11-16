import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";
import { workExperiences } from "@/utils/constants";
import { defaultViewport } from "@/utils/viewport";

export default function WorkExperienceHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 py-8 md:py-12 mt-0">
      <motion.div
        variants={fadein({ direction: "up", delay: 0.1 })}
        initial="hidden"
        whileInView={"show"}
        viewport={defaultViewport}
        className="sectionHeader"
      >
        Where I&apos;ve Worked{" "}
        <span className="text-blue font-bold hidden md:inline">/</span>{" "}
        <sup className="hidden md:inline">({workExperiences.length})</sup>
      </motion.div>
    </div>
  );
}
