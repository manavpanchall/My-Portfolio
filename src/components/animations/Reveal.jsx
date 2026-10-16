import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — reusable scroll animation wrapper
 * Variants: fadeUp, fadeDown, fadeLeft, fadeRight, zoomIn, blurIn, rotateIn
 */
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    show: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -6, y: 40 },
    show: { opacity: 1, rotate: 0, y: 0 },
  },
};

const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.15,
  once = true,
}) => {
  const chosen = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={chosen}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;