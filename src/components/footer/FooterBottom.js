import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-8">
      <p className="text-center text-grayText dark:text-mutedText text-sm md:text-base transition-colors duration-300">
        © 2025. All rights reserved by{" "}
        <span className="text-blackText dark:text-lightText font-semibold">
          Manav Panchal
        </span>
        <span className="text-redAccent dark:text-darkRed">.</span>
      </p>
    </div>
  );
};

export default FooterBottom;