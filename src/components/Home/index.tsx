"use client";

import Image from "next/image";
import Icons from "@/components/Icons";
import Photo from "@/components/Photo";

import { motion } from "framer-motion";
import { fadein } from "@/utils/fadein";
import { defaultViewport } from "@/utils/viewport";

export default function Home() {
  return (
    <div id="home" className="section bg-[#27272c]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex flex-col gap-3 text-center xl:text-left font-robotoSlab">
            <motion.span
              variants={fadein({ direction: "up", delay: 0.1 })}
              initial="hidden"
              whileInView={"show"}
              viewport={defaultViewport}
              className="text-xl"
            >
              Software Developer
            </motion.span>
            <motion.h1
              variants={fadein({ direction: "up", delay: 0.2 })}
              initial="hidden"
              whileInView={"show"}
              viewport={defaultViewport}
              className="h2 font-gambarino"
            >
              Hello I&apos;m <br />{" "}
              <motion.span
                variants={fadein({ direction: "up", delay: 0.3 })}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                  once: true,
                  amount: 0.2,
                  margin: "0px 0px -100px 0px",
                }}
                className="h1 gradient-text text-transparent animate-gradient will-change-transform"
              >
                Henry Chen
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadein({ direction: "up", delay: 0.5 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
                amount: 0.2,
                margin: "0px 0px -100px 0px",
              }}
              className="max-w-[500px] mb-6 md:mb-8 xl:mb-9 text-white will-change-transform px-4 md:px-0"
            >
              A passionate computer science student with an interest in full
              stack development, natural language processing, and agentic
              systems. Constantly learning, building, and pushing boundaries.
            </motion.p>
          </div>
          <motion.div
            variants={fadein({ direction: "up", delay: 0.3 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className="will-change-transform mt-4 md:mt-6 xl:mt-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
