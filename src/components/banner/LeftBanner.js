import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "UI Designer.",
      "Freelancer.",
      "Tech Enthusiast.",
      "Content Creator.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full lgl:w-1/2 flex flex-col gap-10 sm:gap-12 lgl:gap-16"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <motion.h4
          variants={item}
          className="text-xs sm:text-sm md:text-base font-semibold text-blueAccent dark:text-designColor tracking-[3px] uppercase"
        >
          Welcome to my world
        </motion.h4>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blackText dark:text-lightText leading-[1.15]"
        >
          Hi, I'm{" "}
          <span className="text-blueAccent dark:text-designColor capitalize">
            Manav Panchal
          </span>
          <span className="text-redAccent dark:text-darkRed">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blackText dark:text-lightText"
        >
          a <span className="text-redAccent dark:text-darkRed">{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#2563eb" />
        </motion.h2>

        <motion.p
          variants={item}
          className="text-sm sm:text-base font-bodyFont leading-6 sm:leading-7 tracking-wide text-grayText dark:text-mutedText max-w-lg"
        >
          "Building Seamless Digital Experiences with Code & Creativity" 🚀
        </motion.p>
      </div>

      <motion.div variants={item}>
        <Media />
      </motion.div>
    </motion.div>
  );
};

export default LeftBanner;