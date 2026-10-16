import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaArrowRight } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, projectLink, index = 0 }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-2xl border border-lightBorder dark:border-darkBorder shadow-md dark:shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-darkCard dark:to-darkCardAlt hover:border-blueAccent dark:hover:border-designColor transition-all duration-300 overflow-hidden group"
    >
      <div className="flex flex-col md:flex-row items-stretch">
        {/* IMAGE */}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-[45%] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 dark:from-darkCardAlt dark:to-bodyColor"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-44 sm:h-52 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </a>

        {/* TEXT */}
        <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase text-blueAccent dark:text-designColor tracking-wide mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-grayText dark:text-mutedText leading-relaxed line-clamp-4">
              {des}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-bodyColor border border-lightBorder dark:border-darkBorder inline-flex justify-center items-center text-blackText dark:text-lightText hover:bg-redAccent hover:text-white hover:border-redAccent dark:hover:bg-darkRed dark:hover:border-darkRed duration-300 transition-all"
              >
                <BsGithub className="text-sm sm:text-base" />
              </a>
            )}
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-bodyColor border border-lightBorder dark:border-darkBorder inline-flex justify-center items-center text-blackText dark:text-lightText hover:bg-blueAccent hover:text-white hover:border-blueAccent dark:hover:bg-designColor dark:hover:border-designColor duration-300 transition-all"
            >
              <FaGlobe className="text-sm sm:text-base" />
            </a>

            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-blueAccent dark:text-designColor hover:gap-3 transition-all duration-300"
            >
              Visit <FaArrowRight className="text-[10px] sm:text-xs" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;