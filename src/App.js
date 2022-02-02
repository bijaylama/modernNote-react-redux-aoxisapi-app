import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <Grid container sx={{ backgroundColor: "#F0F3FA" }}>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          mr: 4,
        }}
      >
        <SideBar />
        <Home />
      </Box>
    </Grid>
  );
}

export default App;
