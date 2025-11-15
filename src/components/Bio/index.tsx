import { motion } from "framer-motion";
import { fadein } from "@/utils/fadein";

export default function Bio() {
  const boxVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="aboutme"
      className="py-12 md:py-16 lg:py-12 xl:py-24 min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] xl:min-h-screen flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            variants={boxVariants}
            style={{ transformOrigin: "center" }}
            className="w-full h-auto min-h-[500px] md:min-h-[400px] lg:min-h-[350px] xl:h-[500px] rounded-3xl bg-[#27272c] overflow-hidden will-change-transform"
          >
            <div className="flex flex-col items-center relative py-10 px-6 md:py-12 md:px-10 lg:py-10 lg:px-12 xl:py-10 xl:px-[100px] gap-8 md:gap-10 lg:gap-12 xl:gap-[100px]">
              <motion.div
                variants={fadein({ direction: "up", delay: 0.3 })}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                  once: true,
                  amount: 0.2,
                  margin: "0px 0px -50px 0px",
                }}
                className="h2 font-gambarino text-white text-center underline underline-offset-[20px] decoration-blue will-change-transform"
              >
                About Me
              </motion.div>
              <div className="flex flex-col gap-4 md:gap-10 font-robotoSlab text-center mx-auto w-full max-w-full md:max-w-2xl xl:max-w-none">
                <motion.p
                  variants={fadein({ direction: "up", delay: 0.4 })}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -50px 0px",
                  }}
                  className="will-change-transform"
                >
                  I&apos;m a passionate software developer currently studying
                  Computer Science at the University of Virginia. I focus on
                  developing innovative solutions that address real-world
                  challenges and create visible impact.
                </motion.p>
                <motion.p
                  variants={fadein({ direction: "up", delay: 0.5 })}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -50px 0px",
                  }}
                  className="will-change-transform"
                >
                  When I&apos;m not immersed in writing code or learning about
                  the latest technologies, you can find me enjoying video games
                  or playing sports with friends. I believe in maintaining a
                  healthy work-life balance to bring my best self to every
                  project.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
