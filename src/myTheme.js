import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  root: {
    background: "linear-gradient(to right, #3a7bd5, #00d2ff)",
  },
  palette: {
    primary1: {
      // light: will be calculated from palette.primary.main,
      main: "#0F0E17",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#fff",
    },
    primary2: {
      // light: will be calculated from palette.primary.main,
      main: grey.A100,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    fontSize: 15,
  },
});
