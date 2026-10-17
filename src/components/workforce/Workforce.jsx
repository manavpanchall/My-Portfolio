import React from "react";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiFigma,
  SiCanva,
  SiBlender,
  SiNotion,
  SiVercel,
  SiGithub,
  SiOpenai,
  SiFramer,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const apps = [
  { icon: <SiOpenai />, name: "ChatGPT", color: "#10a37f" },
  { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#31A8FF" },
  { icon: <SiAdobeillustrator />, name: "Illustrator", color: "#FF9A00" },
  { icon: <SiAdobexd />, name: "Adobe XD", color: "#FF61F6" },
  { icon: <SiAdobepremierepro />, name: "Premiere Pro", color: "#EA77FF" },
  { icon: <SiAdobeaftereffects />, name: "After Effects", color: "#9999FF" },
  { icon: <SiAdobelightroom />, name: "Lightroom", color: "#31A8FF" },
  { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
  { icon: <SiFramer />, name: "Framer", color: "#0055FF" },
  { icon: <SiCanva />, name: "Canva", color: "#00C4CC" },
  { icon: <SiBlender />, name: "Blender", color: "#E87D0D" },
  { icon: <SiNotion />, name: "Notion", color: "#FFFFFF" },
  { icon: <SiVercel />, name: "Vercel", color: "#FFFFFF" },
  { icon: <SiGithub />, name: "GitHub", color: "#FFFFFF" },
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
];

const AppIcon = ({ icon, name, color }) => (
  <div
    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-1.5 sm:mx-2 md:mx-3 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer group relative"
    style={{
      background: "linear-gradient(145deg, #0a0a0a, #1a1a1a)",
      boxShadow:
        "0 6px 18px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
    }}
  >
    <span
      className="text-2xl sm:text-3xl md:text-4xl transition-all duration-300 group-hover:scale-125"
      style={{ color }}
    >
      {icon}
    </span>
  </div>
);

const Workforce = () => {
  const loopApps = [...apps, ...apps];

  return (
    <section
      id="workforce"
      className="w-full py-10 sm:py-14 md:py-20 border-b border-slate-200 dark:border-darkBorder transition-colors duration-300 overflow-hidden"
    >
      <Reveal variant="fadeUp" className="mb-6 sm:mb-8 md:mb-10">
        <h2
          className="font-bold text-blackText dark:text-lightText tracking-tight"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)", lineHeight: "1.15" }}
        >
          Daily workforce{" "}
          <span className="text-grayText dark:text-mutedText font-light">
            /
          </span>{" "}
          apps
        </h2>
        <p
          className="mt-2 sm:mt-3 text-grayText dark:text-mutedText max-w-2xl"
          style={{ fontSize: "clamp(0.75rem, 2.6vw, 1.125rem)", lineHeight: "1.6" }}
        >
          
        </p>
      </Reveal>

      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-28 z-10 bg-gradient-to-r from-lightBody dark:from-bodyColor to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-28 z-10 bg-gradient-to-l from-lightBody dark:from-bodyColor to-transparent" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {loopApps.map((app, i) => (
            <AppIcon key={i} {...app} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workforce;