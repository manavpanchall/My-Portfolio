import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaArrowRight } from "react-icons/fa";

const ProjectsCard = ({
  title,
  des,
  src,
  githubLink,
  projectLink,
  index = 0,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-xl sm:rounded-2xl border border-lightBorder dark:border-darkBorder shadow-md dark:shadow-xl bg-gradient-to-br from-white to-blue-50 dark:from-darkCard dark:to-darkCardAlt hover:border-blueAccent dark:hover:border-designColor transition-all duration-300 overflow-hidden group"
    >
      <div className="flex flex-col md:flex-row items-stretch">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-[45%] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 dark:from-darkCardAlt dark:to-bodyColor"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-36 sm:h-44 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </a>

        <div className="flex-1 min-w-0 p-3 sm:p-4 md:p-6 flex flex-col justify-between gap-3 sm:gap-4">
          <div className="min-w-0">
            <h3
              className="font-semibold uppercase text-blueAccent dark:text-designColor tracking-wide mb-1.5 sm:mb-2 break-words"
              style={{ fontSize: "clamp(0.75rem, 2.8vw, 1.125rem)", lineHeight: "1.3" }}
            >
              {title}
            </h3>
            <p
              className="text-grayText dark:text-mutedText line-clamp-4 break-words"
              style={{ fontSize: "clamp(0.7rem, 2.4vw, 0.9375rem)", lineHeight: "1.5" }}
            >
              {des}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white dark:bg-bodyColor border border-lightBorder dark:border-darkBorder inline-flex justify-center items-center text-blackText dark:text-lightText hover:bg-redAccent hover:text-white hover:border-redAccent dark:hover:bg-darkRed dark:hover:border-darkRed duration-300 transition-all text-xs sm:text-sm"
              >
                <BsGithub />
              </a>
            )}
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white dark:bg-bodyColor border border-lightBorder dark:border-darkBorder inline-flex justify-center items-center text-blackText dark:text-lightText hover:bg-blueAccent hover:text-white hover:border-blueAccent dark:hover:bg-designColor dark:hover:border-designColor duration-300 transition-all text-xs sm:text-sm"
            >
              <FaGlobe />
            </a>

            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 sm:gap-1.5 text-blueAccent dark:text-designColor hover:gap-2 transition-all duration-300 font-semibold"
              style={{ fontSize: "clamp(0.65rem, 2.2vw, 0.875rem)" }}
            >
              Visit <FaArrowRight className="text-[9px] sm:text-[10px]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;