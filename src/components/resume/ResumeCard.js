import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex gap-2 sm:gap-3 md:gap-4">
      {/* Timeline line + dot */}
      <div className="w-4 sm:w-6 md:w-8 h-[6px] bg-blue-200 dark:bg-darkBorder mt-5 sm:mt-6 relative transition-colors duration-300 flex-shrink-0">
        <span className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full -top-1 sm:-top-1.5 md:-top-2 -left-1.5 sm:-left-2 md:-left-2.5 flex justify-center items-center bg-white dark:bg-darkCard border-2 border-blueAccent dark:border-designColor transition-colors duration-300">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-blueAccent dark:bg-designColor inline-flex group-hover:bg-redAccent dark:group-hover:bg-darkRed duration-300 transition-colors" />
        </span>
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0 bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder hover:border-blueAccent dark:hover:border-designColor duration-300 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 lgl:p-6 flex flex-col gap-2 sm:gap-3 shadow-md dark:shadow-xl transition-all overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3
              className="flex-1 min-w-0 font-semibold text-blackText dark:text-lightText group-hover:text-blueAccent dark:group-hover:text-designColor duration-300 transition-colors break-words"
              style={{
                fontSize: "clamp(0.75rem, 2.8vw, 1.125rem)",
                lineHeight: "1.3",
              }}
            >
              {title}
            </h3>

            {result && (
              <span
                className="flex-shrink-0 px-2 py-0.5 text-redAccent dark:text-darkRed bg-red-50 dark:bg-red-950/30 rounded-md font-semibold whitespace-nowrap transition-colors"
                style={{ fontSize: "clamp(0.6rem, 2vw, 0.75rem)" }}
              >
                {result}
              </span>
            )}
          </div>

          <p
            className="text-grayText dark:text-mutedText transition-colors break-words"
            style={{
              fontSize: "clamp(0.65rem, 2.4vw, 0.875rem)",
              lineHeight: "1.4",
            }}
          >
            {subTitle}
          </p>
        </div>

        {/* Description */}
        <p
          className="font-medium text-grayText dark:text-mutedText group-hover:text-blackText dark:group-hover:text-lightText duration-300 transition-colors break-words"
          style={{
            fontSize: "clamp(0.65rem, 2.4vw, 0.875rem)",
            lineHeight: "1.5",
          }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;