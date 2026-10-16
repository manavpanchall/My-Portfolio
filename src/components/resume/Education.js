import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-redAccent dark:text-darkRed tracking-[4px] font-semibold transition-colors duration-300">
            2019 - 2025
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Education
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[3px] border-l-blue-200 dark:border-l-darkBorder flex flex-col gap-10 transition-colors duration-300">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering with Specialization in Artificial Intelligence"
            subTitle="Parul University, Vadodara, Gujarat (2021 - 2025)"
            result="2025"
            des="Completed a comprehensive curriculum focused on Artificial Intelligence, including courses on machine learning, neural networks, and data science. Engaged in hands-on projects and research, achieving a CGPA of 7.23 out of 10."
          />
          <ResumeCard
            title="Science - PCM"
            subTitle="New Look Sr Sec School Lodha Banswara Raj"
            result="2021"
            des="Studied Physics, Chemistry, and Mathematics, laying a strong foundation for engineering studies. Participated in various science fairs and competitions, demonstrating a keen interest in scientific exploration and innovation."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="New Look Sr Sec School Lodha Banswara Raj"
            result="2019"
            des="Completed secondary education with a focus on core subjects, achieving excellent grades. Actively participated in extracurricular activities, including sports and cultural events, fostering well-rounded development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;