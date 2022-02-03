import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  palette: {
    primary1: {
      // light: will be calculated from palette.primary.main,
      main: "#0F0E17",
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
