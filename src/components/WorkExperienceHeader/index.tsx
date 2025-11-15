import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";
import { workExperiences } from "@/utils/constants";

export default function WorkExperienceHeader() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 py-8 md:py-12 mt-12 md:mt-0">
      <motion.div
        variants={fadein({ direction: "up", delay: 0.1 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="font-gambarino h01 underline decoration-blue underline-offset-8 md:no-underline"
      >
        Where I&apos;ve Worked{" "}
        <span className="text-blue font-bold hidden md:inline">/</span>{" "}
        <sup className="hidden md:inline">({workExperiences.length})</sup>
      </motion.div>
    </div>
  );
}
