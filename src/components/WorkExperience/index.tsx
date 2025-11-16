"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { workExperiences } from "@/utils/constants";

export default function WorkExperience() {
  const container = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cardProgress = useTransform(scrollYProgress, (latest) => {
    const totalCards = workExperiences.length;
    const progressInCard = (latest * totalCards) % 1;
    return latest >= 1 ? 1 : progressInCard;
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalCards = workExperiences.length;
    const cardSegment = latest * totalCards;
    const progressInCard = cardSegment % 1;
    const baseCardIndex = Math.floor(cardSegment);

    let cardIndex;
    if (progressInCard >= 0.99) {
      cardIndex = Math.min(baseCardIndex + 1, totalCards - 1);
    } else if (progressInCard <= 0.01 && baseCardIndex > 0) {
      cardIndex = baseCardIndex;
    } else {
      cardIndex = baseCardIndex;
    }

    const clampedIndex = Math.min(Math.max(cardIndex, 0), totalCards - 1);

    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
    }
  });

  return (
    <div
      id="experience"
      ref={container}
      className="relative"
      style={{ height: `${workExperiences.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {workExperiences.map((exp, index) => {
              if (currentIndex !== index) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex justify-center items-center w-full h-auto min-h-[500px] md:min-h-[550px] xl:h-[600px] rounded-3xl bg-[#27272c] p-6 md:p-8 lg:p-10 xl:p-10 relative overflow-hidden"
                >
                  <div className="h-full flex flex-col pb-0 justify-center items-center">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
                      <div className="flex flex-col items-center gap-4 md:gap-5 shrink-0">
                        <div className="w-40 h-40 md:w-52 md:h-52 xl:w-64 xl:h-64 rounded-xl md:rounded-2xl bg-white border border-white/10 flex items-center justify-center overflow-hidden relative">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              priority
                              className={`object-contain ${
                                exp.company === "Capital One" ? "p-1" : "p-2"
                              }`}
                            />
                          ) : (
                            <div className="text-white/30 font-robotoSlab text-xs md:text-sm text-center px-2">
                              {exp.company.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                          <p className="font-robotoSlab text-sm md:text-base text-white/80">
                            {exp.dateRange}
                          </p>
                          <p className="font-robotoSlab text-sm md:text-base text-white/80">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col space-y-4 md:space-y-5 max-w-2xl items-center md:justify-center lg:items-start">
                        <div className="text-center md:text-center lg:text-left">
                          <h3 className="font-robotoSlab text-xl md:text-2xl xl:text-3xl text-white mb-2 underline underline-offset-8 decoration-blue">
                            {exp.company}
                          </h3>
                          <p className="font-robotoSlab text-base md:text-lg text-white">
                            <span className="text-blue">{exp.role}</span>
                          </p>
                        </div>

                        <ul className="space-y-3 md:space-y-3.5">
                          {exp.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: itemIndex * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              }}
                              className="flex items-start gap-3 font-robotoSlab text-white text-sm md:text-base leading-relaxed"
                            >
                              <span className="text-blue mt-1.5 shrink-0 w-2 h-2 rounded-full bg-blue"></span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                    <motion.div
                      style={{
                        scaleX: cardProgress,
                        transformOrigin: "left",
                      }}
                      className="h-full w-full bg-blue"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
