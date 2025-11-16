import Icon from "@/components/Icons";
import { fadein } from "@/utils/fadein";
import { motion } from "framer-motion";
import { defaultViewport } from "@/utils/viewport";

export default function Contact() {
  return (
    <div
      id="contact"
      className="section flex justify-center items-center flex-col gap-10"
    >
      <motion.div
        variants={fadein({ direction: "up", delay: 0.3 })}
        initial="hidden"
        whileInView={"show"}
        viewport={defaultViewport}
        className="font-gambarino h0 underline underline-offset-[20px] decoration-blue decoration-2"
      >
        Get in Touch
      </motion.div>
      <motion.div
        variants={fadein({ direction: "up", delay: 0.3 })}
        initial="hidden"
        whileInView={"show"}
        viewport={defaultViewport}
      >
        <Icon
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 xl:w-[70px] xl:h-[70px] border border-blue rounded-full flex justify-center items-center text-blue text-base hover:bg-blue hover:text-white transition-all duration-500"
        />
      </motion.div>
    </div>
  );
}
