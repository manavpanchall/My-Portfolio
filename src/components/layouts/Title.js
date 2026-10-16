import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-1.5 sm:gap-3 font-titleFont mb-6 sm:mb-10 md:mb-14"
    >
      <h3
        className="uppercase font-semibold text-redAccent dark:text-darkRed tracking-[3px] transition-colors duration-300"
        style={{ fontSize: "clamp(0.65rem, 2.4vw, 0.875rem)" }}
      >
        {title}
      </h3>
      <h1
        className="text-blackText dark:text-lightText font-bold capitalize transition-colors duration-300"
        style={{ fontSize: "clamp(1.25rem, 4.5vw, 3rem)", lineHeight: "1.15" }}
      >
        {des}
        <span className="text-blueAccent dark:text-designColor">.</span>
      </h1>
    </motion.div>
  );
};

export default Title;