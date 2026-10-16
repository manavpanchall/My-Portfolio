import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-designColor dark:focus:ring-offset-bodyColor overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1e293b, #0a0f1a)"
          : "linear-gradient(135deg, #2563eb, #dc2626)",
        boxShadow: isDark
          ? "inset 0 2px 4px rgba(0,0,0,0.5)"
          : "inset 0 2px 4px rgba(255,255,255,0.4)",
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
          isDark ? "left-7" : "left-0.5"
        }`}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #3b82f6, #2563eb)"
            : "linear-gradient(135deg, #ffffff, #f8fafc)",
          boxShadow: isDark
            ? "0 0 10px rgba(59, 130, 246, 0.7)"
            : "0 1px 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        {isDark ? (
          <FiMoon className="text-white text-[10px]" />
        ) : (
          <FiSun className="text-red-600 text-[10px]" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;