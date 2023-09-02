import { motion } from "framer-motion";
import { textContainer, textVariant } from "@/utils/motion";

export const RunningText = ({ color, align }) => {
  return (
    <motion.p
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${
        color && align
          ? "text-left text-[#7d7d7d]"
          : "text-center text-gray-500"
      } font-semibold mt-10`}
    >
      {Array.from("| FreshCoffee").map((letter, index) => (
        <motion.span key={index} variants={textVariant}>
          {letter === "" ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitlePage = ({ title, color, align }) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className={`${
        color && align
          ? "text-left text-[#e8e8e8]"
          : "text-center text-gray-700"
      } text-4xl font-semibold mt-4`}
    >
      {title}
    </motion.h2>
  );
};
