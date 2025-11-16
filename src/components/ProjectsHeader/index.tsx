import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";
import { defaultViewport } from "@/utils/viewport";

export default function ProjectsHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 mb-[96px]">
      <motion.div
        variants={fadein({ direction: "up" })}
        initial="hidden"
        whileInView={"show"}
        viewport={defaultViewport}
        className="sectionHeader"
      >
        Selected Works <span className="text-blue font-bold hidden md:inline">/</span>{" "}
        <sup className="hidden md:inline">(4)</sup>
      </motion.div>
    </div>
  );
}
