export const fadein = ({
  direction,
  delay,
  duration = 0.6,
}: {
  direction: string;
  delay?: number;
  duration?: number;
}) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay || 0,
        ease: [0.25, 0.46, 0.45, 0.94], // Improved easing curve inspired by Brittany's portfolio
      },
    },
  };
};
