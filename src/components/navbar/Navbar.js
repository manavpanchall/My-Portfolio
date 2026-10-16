import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <header className="w-full h-16 sm:h-20 sticky top-0 z-40 backdrop-blur-xl bg-lightBody/70 dark:bg-bodyColor/70 border-b border-slate-200/60 dark:border-darkBorder/60 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-blackText dark:text-lightText text-xl sm:text-2xl font-bold cursor-pointer transition-colors duration-300 hover:text-blueAccent dark:hover:text-designColor font-titleFont"
        >
          manavpanchall
          <span className="text-redAccent dark:text-darkRed">.</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <ul className="hidden lgl:inline-flex items-center gap-6 lg:gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                key={_id}
                className="text-sm lg:text-base font-medium text-grayText dark:text-mutedText tracking-wide cursor-pointer hover:text-blackText dark:hover:text-lightText duration-300 transition-colors"
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;