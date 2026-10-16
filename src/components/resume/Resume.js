import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import Education from "./Education";
import Achievement from "./Achievement";
import Experience from "./Experience";
import resumePDF from "../../assets/Manav_Panchal_Personal.pdf";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full py-10 sm:py-14 md:py-20 border-b border-slate-200 dark:border-darkBorder transition-colors duration-300"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
        <a
          href={resumePDF}
          download="Manav_Panchal_Resume.pdf"
          className="mt-1 sm:mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-blueAccent dark:bg-designColor text-white text-xs sm:text-sm md:text-base font-semibold rounded-xl hover:bg-redAccent dark:hover:bg-darkRed transition-all duration-300 shadow-md dark:shadow-xl hover:-translate-y-1"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-6 sm:mt-10 flex justify-center">
        <ul className="w-full max-w-3xl grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {[
            {
              label: "Education",
              active: educationData,
              onClick: () => {
                setEducationData(true);
                setExperienceData(false);
                setAchievementData(false);
              },
            },
            {
              label: "Experience",
              active: experienceData,
              onClick: () => {
                setEducationData(false);
                setExperienceData(true);
                setAchievementData(false);
              },
            },
            {
              label: "Achievements",
              active: achievementData,
              onClick: () => {
                setEducationData(false);
                setExperienceData(false);
                setAchievementData(true);
              },
            },
          ].map((tab) => (
            <li
              key={tab.label}
              onClick={tab.onClick}
              className={`${
                tab.active
                  ? "border-blueAccent dark:border-designColor text-blueAccent dark:text-designColor"
                  : ""
              } resumeLi text-center`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center mt-6 sm:mt-10">
        <div className="w-full max-w-3xl min-w-0">
          {educationData && <Education />}
          {achievementData && <Achievement />}
          {experienceData && <Experience />}
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;