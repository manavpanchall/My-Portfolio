import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaBehance,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 justify-between">
      <div>
        <h2 className="text-sm uppercase font-titleFont font-semibold mb-4 text-blackText dark:text-lightText tracking-wider transition-colors duration-300">
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
      <div>
        <h2 className="text-sm uppercase font-titleFont font-semibold mb-4 text-blackText dark:text-lightText tracking-wider transition-colors duration-300">
          Best skill on
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/manavpanchall"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.behance.net/manavpanchal2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
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