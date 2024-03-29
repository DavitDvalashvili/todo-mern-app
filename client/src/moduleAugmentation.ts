import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    backgroundColor?: string;
    mainTextColor?: string;
    lightTextColor?: string;
    activeTextColor?: string;
  }

  interface SimplePaletteColorOptions {
    backgroundColor?: string;
    mainTextColor?: string;
    lightTextColor?: string;
    activeTextColor?: string;
  }
}

//Export the augmented module
export { createTheme };
