import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 sm:gap-4 font-titleFont mb-10 sm:mb-12 md:mb-14"
    >
      <h3 className="text-xs sm:text-sm uppercase font-semibold text-redAccent dark:text-darkRed tracking-[3px] sm:tracking-[4px] transition-colors duration-300">
        {title}
      </h3>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blackText dark:text-lightText font-bold capitalize transition-colors duration-300">
        {des}
        <span className="text-blueAccent dark:text-designColor">.</span>
      </h1>
    </motion.div>
  );
};

export default Title;