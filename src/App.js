import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Grid container>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          mr: 4,
        }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
          >
            <SideBar />
          </motion.div>
        </AnimatePresence>
        <Home />
      </Box>
    </Grid>
  );
}

export default App;
