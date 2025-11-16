import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";
import { defaultViewport } from "@/utils/viewport";

export default function SkillHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 md:gap-10 mt-0">
      <motion.div
        variants={fadein({ direction: "up" })}
        initial="hidden"
        whileInView={"show"}
        viewport={defaultViewport}
        className="sectionHeader"
      >
        What I Use{" "}
        <span className="text-blue font-bold hidden md:inline">/</span>{" "}
        <sup className="hidden md:inline">(12)</sup>
      </motion.div>
    </div>
  );
}
