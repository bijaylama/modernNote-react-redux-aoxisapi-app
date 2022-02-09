import { motion } from "framer-motion";
import React from "react";

export const Logo = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 1.6,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
      />
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M14 3v5h5M16 13H8M16 17H8M10 9H8"
      />
    </motion.svg>
  );
};
