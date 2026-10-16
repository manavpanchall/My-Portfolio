import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-white to-blue-50 dark:from-darkCard dark:to-darkCardAlt border border-lightBorder dark:border-darkBorder p-4 lgl:p-6 rounded-2xl shadow-md dark:shadow-xl flex flex-col gap-6 justify-center transition-colors duration-300">
      <img
        className="w-full h-56 md:h-64 object-cover rounded-xl mb-2 border border-lightBorder dark:border-darkBorder"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-3xl font-bold text-blackText dark:text-lightText transition-colors duration-300">
          Manav Panchal
          <span className="text-redAccent dark:text-darkRed">.</span>
        </h3>
        <p className="text-sm md:text-base text-grayText dark:text-mutedText tracking-wide leading-relaxed transition-colors duration-300">
          Results-driven Computer Science Engineer specializing in Web
          Development, UI/UX Design, and Software Engineering. Proficient in
          front-end and back-end development with expertise in React.js,
          JavaScript, C++, Python, SQL, and Agile methodologies.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-sm uppercase font-titleFont font-semibold text-blackText dark:text-lightText tracking-wider transition-colors duration-300">
          Find me in
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="bannerIcon"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;