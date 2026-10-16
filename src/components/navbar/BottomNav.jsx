import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaHome,
  FaThLarge,
  FaFolderOpen,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { id: "home", title: "Home", icon: <FaHome /> },
  { id: "workforce", title: "Apps", icon: <FaThLarge /> },
  { id: "projects", title: "Projects", icon: <FaFolderOpen /> },
  { id: "resume", title: "Resume", icon: <FaFileAlt /> },
  { id: "contact", title: "Contact", icon: <FaEnvelope /> },
];

const BottomNav = () => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-3 left-0 right-0 z-50 lgl:hidden flex justify-center px-3 pointer-events-none"
    >
      <nav
        className="flex items-center justify-center gap-0.5 sm:gap-1 px-1.5 py-1.5 sm:px-2 sm:py-2 rounded-full backdrop-blur-2xl backdrop-saturate-150 border pointer-events-auto"
        style={{
          background: isDark
            ? "linear-gradient(145deg, rgba(20,25,40,0.75), rgba(15,20,35,0.65))"
            : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(240,249,255,0.75))",
          borderColor: isDark
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(255, 255, 255, 0.9)",
          boxShadow: isDark
            ? "0 8px 32px rgba(0, 0, 0, 0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)"
            : "0 8px 32px rgba(37, 99, 235, 0.18), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.04)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="bottom-nav-active"
            className="bottom-nav-item relative flex flex-col items-center justify-center w-[54px] h-[50px] sm:w-16 sm:h-14 md:w-[68px] md:h-16 rounded-full cursor-pointer transition-all duration-300 text-grayText dark:text-mutedText"
          >
            <span className="text-[15px] sm:text-lg md:text-xl">
              {item.icon}
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs mt-0.5 font-medium leading-none">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>

      <style>
        {`
          .bottom-nav-item {
            position: relative;
          }
          .bottom-nav-item.bottom-nav-active {
            background: ${
              isDark
                ? "linear-gradient(145deg, #3b82f6, #2563eb)"
                : "linear-gradient(145deg, #2563eb, #1d4ed8)"
            };
            color: #ffffff !important;
            box-shadow: 0 4px 14px ${
              isDark ? "rgba(59,130,246,0.55)" : "rgba(37,99,235,0.45)"
            }, inset 0 1px 0 rgba(255,255,255,0.25);
          }
        `}
      </style>
    </motion.div>
  );
};

export default BottomNav;