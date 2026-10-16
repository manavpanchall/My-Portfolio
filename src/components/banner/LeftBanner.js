import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
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
      className="w-full lgl:w-1/2 flex flex-col gap-6 sm:gap-10 lgl:gap-16 min-w-0"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <motion.h4
          variants={item}
          className="font-semibold text-blueAccent dark:text-designColor tracking-[3px] uppercase"
          style={{ fontSize: "clamp(0.65rem, 2.5vw, 1rem)" }}
        >
          Welcome to my world
        </motion.h4>

        <motion.h1
          variants={item}
          className="font-bold text-blackText dark:text-lightText"
          style={{
            fontSize: "clamp(1.5rem, 6vw, 3.75rem)",
            lineHeight: "1.15",
          }}
        >
          Hi, I'm{" "}
          <span className="text-blueAccent dark:text-designColor capitalize">
            Manav Panchal
          </span>
          <span className="text-redAccent dark:text-darkRed">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-bold text-blackText dark:text-lightText"
          style={{
            fontSize: "clamp(1rem, 4vw, 2.25rem)",
            lineHeight: "1.3",
          }}
        >
          a <span className="text-redAccent dark:text-darkRed">{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#2563eb" />
        </motion.h2>

        <motion.p
          variants={item}
          className="font-bodyFont tracking-wide text-grayText dark:text-mutedText max-w-lg"
          style={{
            fontSize: "clamp(0.75rem, 2.8vw, 1rem)",
            lineHeight: "1.6",
          }}
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