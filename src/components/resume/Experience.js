import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-3 sm:py-6 font-titleFont flex flex-col lgl:flex-row gap-6 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2 min-w-0">
        <div className="flex flex-col gap-1.5 sm:gap-3">
          <p className="text-[10px] sm:text-xs md:text-sm text-redAccent dark:text-darkRed tracking-[3px] font-semibold transition-colors duration-300">
            2023 - Present
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Job Experience
          </h2>
        </div>
        <div className="mt-3 sm:mt-6 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-4 sm:gap-6 transition-colors duration-300">
          <ResumeCard
            title="Project Manager"
            subTitle="Solar Mitra ( Jan, 2026 – Present)"
            result="Ahmedabad"
            des=""
          />
          <ResumeCard
            title="Full-Stack Developer Intern"
            subTitle="Unified Mentors Pvt. Ltd. (15 Dec, 2024 – 15 Apr, 2025)"
            result="Remote"
            des=""
          />
          <ResumeCard
            title="(Internship) Web Development and Designing"
            subTitle="OASIS INFOBYTE (01 Apr, 2023 – 10 May, 2023)"
            result="Remote"
            des=""
          />
        </div>
      </div>

      <div className="w-full lgl:w-1/2 min-w-0">
        <div className="flex flex-col gap-1.5 sm:gap-3">
          <p className="text-[10px] sm:text-xs md:text-sm text-redAccent dark:text-darkRed tracking-[3px] font-semibold transition-colors duration-300">
            2024
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Training Experience
          </h2>
        </div>
        <div className="mt-3 sm:mt-6 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-4 sm:gap-6 transition-colors duration-300">
          <ResumeCard
            title="Summer Internship Training"
            subTitle="byteXL (07 May 2024 - 07 Jun 2024)"
            result="Onsite"
            des="Successfully completed my internship with byteXL during May and June. This internship was an incredible opportunity to sharpen problem-solving skills, gain practical knowledge, and become placement-ready."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;