import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Get system/browser theme preference
const getSystemTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

// Get initial theme
// If you want to ALWAYS match browser theme (ignoring saved preference),
// change `useSavedPreference` to `false` below.
const useSavedPreference = true; // 👈 SET TO false TO ALWAYS MATCH BROWSER

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  if (useSavedPreference) {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  }

  // Fall back to browser/OS preference
  return getSystemTheme();
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasUserToggled, setHasUserToggled] = useState(
    () => localStorage.getItem("theme") !== null
  );

  // Apply theme to <html> element whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist manual choice (only if user has toggled)
    if (hasUserToggled && useSavedPreference) {
      localStorage.setItem("theme", theme);
    }

    // Remove no-transition class after first paint
    if (!isInitialized) {
      // Small delay to let the initial render complete
      const timer = setTimeout(() => setIsInitialized(true), 50);
      return () => clearTimeout(timer);
    }
  }, [theme, isInitialized, hasUserToggled]);

  // Listen for browser/OS theme changes in real time
  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only auto-follow the browser if user has NOT manually chosen a theme
      if (!hasUserToggled) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // Modern API
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    // Legacy fallback
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [hasUserToggled]);

  const toggleTheme = () => {
    setHasUserToggled(true);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem("theme");
    setHasUserToggled(false);
    setTheme(getSystemTheme());
  };

  const value = {
    theme,
    toggleTheme,
    resetToSystemTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    hasUserToggled,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={!isInitialized ? "no-transition" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;