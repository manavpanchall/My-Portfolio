import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex">
      {/* Timeline line + dot */}
      <div className="w-10 h-[6px] bg-blue-200 dark:bg-darkBorder mt-16 relative transition-colors duration-300 flex-shrink-0">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white dark:bg-darkCard border-2 border-blueAccent dark:border-designColor transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-blueAccent dark:bg-designColor inline-flex group-hover:bg-redAccent dark:group-hover:bg-darkRed duration-300 transition-colors"></span>
        </span>
      </div>

      {/* Card */}
      <div className="flex-1 bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blueAccent dark:hover:border-designColor duration-300 rounded-xl p-4 lgl:p-6 flex flex-col justify-center gap-4 shadow-md dark:shadow-xl transition-all">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-4 lgl:items-start">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-blackText dark:text-lightText group-hover:text-blueAccent dark:group-hover:text-designColor duration-300 transition-colors">
              {title}
            </h3>
            <p className="text-sm mt-2 text-grayText dark:text-mutedText duration-300 transition-colors">
              {subTitle}
            </p>
          </div>
          <div className="flex-shrink-0">
            <p className="px-3 py-1.5 text-redAccent dark:text-darkRed bg-red-50 dark:bg-red-950/30 rounded-lg flex justify-center items-center text-xs font-semibold whitespace-nowrap transition-colors duration-300">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-grayText dark:text-mutedText group-hover:text-blackText dark:group-hover:text-lightText duration-300 transition-colors leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;