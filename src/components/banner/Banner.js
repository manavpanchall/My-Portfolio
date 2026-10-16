import React from "react";
import { motion } from "framer-motion";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-4 sm:pt-8 pb-8 sm:pb-14 flex flex-col gap-6 sm:gap-10 lg:gap-14 lgl:flex-row lgl:items-center lgl:gap-8 border-b border-slate-200 dark:border-darkBorder font-titleFont transition-colors duration-300"
    >
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;