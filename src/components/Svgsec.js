import * as React from "react";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

function HomeIcon(props) {
  return (
    <motion.SvgIcon {...props}>
      <motion.path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </motion.SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <HomeIcon />
    </Box>
  );
}
