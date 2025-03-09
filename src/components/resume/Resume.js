import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience";
import resumePDF from "../../assets/Manav_Panchal_Personal.pdf";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
        <a
          href={resumePDF}
          download="Manav_Panchal_Resume.pdf"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-center`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-center`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi text-center`}
          >
            Achievements
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-4xl">
          {educationData && <Education />}
          {achievementData && <Achievement />}
          {experienceData && <Experience />}
        </div>
      </div>
    </section>
  );
}

export default Resume;