import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-4xl font-bold">Hackathon’s</h2>
        </div>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PU CODE Hackathon"
            subTitle="(14 Mar, 2024 - 15 Mar, 2024) Topic - Automation of Database Optimization"
            result="Success"
            des="Participated in PU CODE Hackathon, at Parul University, Vadodara. Our team “Code Troopers” secured a position in the top 10 category. We were also fortunate to win a modest prize for our achievements."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
