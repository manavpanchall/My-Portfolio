import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-16 border-b border-slate-200 dark:border-darkBorder grid grid-cols-1 md:grid-cols-2 gap-10 transition-colors duration-300"
    >
      {/* Brand + socials */}
      <div className="flex flex-col gap-6">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-blackText dark:text-lightText text-2xl font-bold cursor-pointer hover:text-blueAccent dark:hover:text-designColor transition-colors duration-300"
        >
          manavpanchall
          <span className="text-redAccent dark:text-darkRed">.</span>
        </Link>
        <p className="text-grayText dark:text-mutedText max-w-md leading-relaxed">
          Building seamless digital experiences with code & creativity 🚀
        </p>
        <div className="flex gap-3">
          {[
            { href: "https://www.linkedin.com/in/manavpanchall/", icon: <FaLinkedinIn /> },
            { href: "https://www.youtube.com/@manavpanchall", icon: <FaYoutube /> },
            { href: "https://www.instagram.com/manavpanchall/", icon: <FaInstagram /> },
            { href: "https://x.com/manavpanchall", icon: <FaTwitter /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl uppercase font-bold text-blueAccent dark:text-designColor tracking-wider mb-6">
          Quick Links
        </h3>
        <ul className="grid grid-cols-2 gap-3 font-titleFont">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative inline-block text-grayText dark:text-mutedText hover:text-blackText dark:hover:text-lightText transition-colors duration-300 group cursor-pointer"
              >
                {title}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-redAccent dark:bg-darkRed scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;