import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-3 sm:py-6 font-titleFont flex flex-col lgl:flex-row gap-6 lgl:gap-20"
    >
      <div className="w-full min-w-0">
        <div className="flex flex-col gap-1.5 sm:gap-3">
          <p className="text-[10px] sm:text-xs md:text-sm text-redAccent dark:text-darkRed tracking-[3px] font-semibold transition-colors duration-300">
            2024
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Hackathons
          </h2>
        </div>
        <div className="mt-3 sm:mt-6 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-4 sm:gap-6 transition-colors duration-300">
          <ResumeCard
            title="PU CODE Hackathon"
            subTitle="(14 Mar, 2024 - 15 Mar, 2024) — Topic: Automation of Database Optimization"
            result="Top 10"
            des="Participated in PU CODE Hackathon at Parul University, Vadodara. Our team 'Code Troopers' secured a position in the top 10 category. We were also fortunate to win a modest prize for our achievements."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;