import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 2560,
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "Arial"].join(","),
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#FFFFFF",
      backgroundColor: "#FAFAFA",
      mainTextColor: "#494C6B",
      lightTextColor: "#9495A5",
      activeTextColor: "#3A7CFD",
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 2560,
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "Arial"].join(","),
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#25273D",
      backgroundColor: "#171823",
      mainTextColor: "#C8CBE7",
      lightTextColor: "#5B5E7E",
      activeTextColor: "#3A7CFD",
    },
  },
});
