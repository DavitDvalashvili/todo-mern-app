import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    backgroundColor?: string;
    mainTextColor?: string;
    secondTextColor?: string;
    activeTextColor?: string;
    borderColor?: string;
  }

  interface SimplePaletteColorOptions {
    backgroundColor?: string;
    mainTextColor?: string;
    secondTextColor?: string;
    activeTextColor?: string;
    borderColor?: string;
  }
}

//Export the augmented module
export { createTheme };
