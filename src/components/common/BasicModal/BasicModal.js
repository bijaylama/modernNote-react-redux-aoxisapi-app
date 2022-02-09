import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";

export default function BasicModal({ open, close, children }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.1, y: 300, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          exit={{
            scale: 0,
            y: 0,
            transition: { type: "spring", duration: 0.8 },
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}
