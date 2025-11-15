import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <div className="w-[250px] h-[250px] md:w-[298px] md:h-[298px] xl:w-[350px] xl:h-[450px] rounded-[25px] overflow-hidden">
        <Image
          src="/profile.jpeg"
          priority
          quality={85}
          fill
          alt=""
          className="object-contain rounded-[25px] xl:w-[350px] xl:h-[450px]"
          sizes="(max-width: 768px) 250px, (max-width: 1280px) 298px, 350px"
        />
      </div>
    </div>
  );
}
