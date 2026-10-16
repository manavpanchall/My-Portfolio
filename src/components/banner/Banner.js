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
      className="w-full pt-6 sm:pt-10 pb-12 sm:pb-16 flex flex-col gap-10 lg:gap-14 lgl:flex-row lgl:items-center lgl:gap-8 border-b border-slate-200 dark:border-darkBorder font-titleFont transition-colors duration-300"
    >
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;