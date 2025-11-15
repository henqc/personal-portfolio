import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function Card(card: {
  i: number;
  title: string;
  description: string;
  src: string;
  skills: string[];
  link: string;
  color: string;
  num: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) {
  const scale = useTransform(card.progress, card.range, [1, card.targetScale]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 mx-auto overflow-hidden">
      <motion.div
        style={{
          scale: scale,
          backgroundColor: card.color,
          top: `calc(${card.i * 25}px)`,
        }}
        className="w-full h-auto min-h-[500px] md:min-h-[550px] xl:h-[600px] rounded-3xl flex flex-col xl:flex-row items-center justify-between p-6 md:p-8 lg:p-10 xl:p-10 relative will-change-transform"
      >
        <div className="flex flex-col xl:flex-row gap-4 md:gap-5 xl:gap-4 xl:w-[40%] items-center xl:items-start w-full xl:w-auto">
          <div className="font-robotoSlab text-blue">{card.num}</div>
          <div className="flex flex-col gap-3 md:gap-4 text-center xl:text-left font-robotoSlab w-full xl:w-auto">
            <div className="h3 font-gambarino mb-4 md:mb-5 xl:mb-[20px] underline underline-offset-8 decoration-blue">
              {card.title}
            </div>
            <span className="font-robotoSlabLight leading-tight px-2 md:px-4 xl:px-0">
              {card.description}
            </span>

            <Link
              href={card.link}
              target="_blank"
              className="flex justify-center mt-2 md:mt-3 xl:mt-0 mb-4 md:mb-6 xl:mb-0 xl:justify-normal"
            >
              <button className="font-robotoSlab solid bg-blue w-[150px] h-[50px] rounded-[5px] text-left flex justify-between px-6 items-center hover:bg-[#387cd9]">
                Visit
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[300px] md:max-w-[400px] xl:max-w-none h-[200px] md:h-[250px] xl:w-[55%] xl:h-[80%] relative overflow-hidden rounded-3xl mt-4 md:mt-6 xl:mt-0">
          <Image
            src={card.src}
            priority={card.i === 0}
            quality={85}
            fill
            alt={`${card.title} project screenshot`}
            className="object-cover"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1280px) 50vw, 55vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
