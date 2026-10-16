import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-redAccent dark:text-darkRed tracking-[4px] font-semibold transition-colors duration-300">
            2026
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-10 transition-colors duration-300">
          <ResumeCard
            title="Project Manager"
            subTitle="Solar Mitra ( Jan, 2026 – Present)"
            result="Ahmedabad, Gujarat, India"
            des=""
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Unified Mentor Private Limited ( Dec, 2024 – Apr, 2025)"
            result="Gurugram, Haryana, India · Remote"
            des=""
          />
          <ResumeCard
            title="Web Development and Designing Intern"
            subTitle="OASIS INFOBYTE (01 Apr, 2023 – 10 May, 2023)"
            result="Remote"
            des=""
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-redAccent dark:text-darkRed tracking-[4px] font-semibold transition-colors duration-300">
            2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Training Experience
          </h2>
        </div>
        <div className="mt-6 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-10 transition-colors duration-300">
          <ResumeCard
            title="Summer Internship Training"
            subTitle="byteXL (07 May 2024 - 07 Jun 2024)"
            result="Onsite"
            des="Successfully completed my internship with byteXL during May and June. This internship was an incredible opportunity to sharpen problem-solving skills, gain practical knowledge, and become placement-ready. A huge shout-out to my amazing mentors for their endless support, guidance, and encouragement throughout this journey."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;