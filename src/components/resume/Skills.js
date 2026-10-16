import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ label, percent, delay }) => (
  <div className="overflow-hidden">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm uppercase font-semibold text-blackText dark:text-lightText tracking-wider transition-colors duration-300">
        {label}
      </p>
      <span className="text-sm font-bold text-blueAccent dark:text-designColor">
        {percent}%
      </span>
    </div>
    <span className="w-full h-2 bg-blue-100 dark:bg-darkBorder rounded-full inline-flex transition-colors duration-300 overflow-hidden">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="h-full bg-gradient-to-r from-blueAccent via-redAccent to-redAccent dark:from-designColor dark:via-darkRed dark:to-darkRed rounded-full"
      />
    </span>
  </div>
);

const Skills = () => {
  const designSkills = [
    { label: "Figma", percent: 80 },
    { label: "Photoshop", percent: 60 },
    { label: "Adobe XD", percent: 70 },
    { label: "Adobe Illustrator", percent: 60 },
    { label: "Adobe After Effects", percent: 50 },
  ];

  const devSkills = [
    { label: "React", percent: 100 },
    { label: "HTML 5", percent: 95 },
    { label: "CSS3", percent: 80 },
    { label: "JavaScript", percent: 75 },
    { label: "Software", percent: 90 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-redAccent dark:text-darkRed tracking-[4px] uppercase font-semibold transition-colors duration-300">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Design Skill
          </h2>
        </div>
        <div className="mt-6 w-full flex flex-col gap-6">
          {designSkills.map((s, i) => (
            <SkillBar
              key={s.label}
              label={s.label}
              percent={s.percent}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-redAccent dark:text-darkRed tracking-[4px] uppercase font-semibold transition-colors duration-300">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
            Development Skill
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {devSkills.map((s, i) => (
            <SkillBar
              key={s.label}
              label={s.label}
              percent={s.percent}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;