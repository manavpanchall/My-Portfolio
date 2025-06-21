import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaYoutube, FaGithub, FaBehance, } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/manavpanchall/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
        <a
            href="https://github.com/manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.behance.net/manavpanchal2"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaBehance />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
