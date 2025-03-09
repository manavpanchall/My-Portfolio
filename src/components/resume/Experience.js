import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="(Internships) Web Development and Designing"
            subTitle="OASIS INFOBYTE (01 Apr, 2023 – 10 May, 2023)"
            result="Remote"
            des="Interned at Oasis Infobyte for Web Development and Designing, gaining hands-on experience and deepening understanding of concepts for future projects."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Summer Internship Training"
            subTitle="byteXL (07 May 2024 - 07 Jun 2024)"
            result="Onsite"
            des="I’m happy to share that I’ve successfully completed my internship with byteXL during the months of May and June! This internship was an incredible opportunity for me to sharpen my problem-solving skills, gain practical knowledge, and make myself placement-ready. A huge shout-out to my amazing mentors, for their endless support, guidance, and encouragement throughout this journey. Your efforts and dedication played a significant role in my growth, and I’m truly grateful!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
