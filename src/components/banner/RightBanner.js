import React from "react";
import { motion } from "framer-motion";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-[240px] h-[320px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[520px] lgl:w-[460px] lgl:h-[600px] z-10 object-contain"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[240px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lgl:w-[460px] lgl:h-[460px] bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-darkCard dark:via-bodyColor dark:to-darkCardAlt shadow-md dark:shadow-xl flex justify-center items-center rounded-3xl transition-colors duration-300" />
    </div>
  );
};

export default RightBanner;